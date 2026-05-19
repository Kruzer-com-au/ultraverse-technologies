'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  role: z.string().optional(),
  interest: z.string().min(1, 'Interest area is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactState = {
  success?: boolean
  error?: string
  loading?: boolean
  resetCaptcha?: boolean
  inputs?: {
    name: string
    email: string
    company: string
    role: string
    interest: string
    message: string
  }
}

export async function sendEmail(prevState: any, formData: FormData): Promise<ContactState> {
  const token = formData.get('captchaToken') as string

  const rawData = {
    name: (formData.get('name') as string) || '',
    email: (formData.get('email') as string) || '',
    company: (formData.get('company') as string) || '',
    role: (formData.get('role') as string) || '',
    interest: (formData.get('interest') as string) || '',
    message: (formData.get('message') as string) || '',
  }

  // 1. Validation
  const validatedFields = contactSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.issues[0]?.message || 'Invalid form data. Please check all fields.',
      inputs: rawData,
    }
  }

  const { name, email, company, role, interest, message } = validatedFields.data

  if (!token) {
    return {
      error: 'Please complete the reCAPTCHA challenge.',
      inputs: rawData,
    }
  }

  try {
    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const recaptchaData = await recaptchaRes.json()
    if (!recaptchaData.success) {
      return {
        error: 'reCAPTCHA verification failed. Please try again.',
        inputs: rawData,
        resetCaptcha: true,
      }
    }
  } catch (error) {
    return {
      error: 'Error verifying reCAPTCHA. Please try again.',
      inputs: rawData,
      resetCaptcha: true,
    }
  }

  // 2. SMTP Transport Setup
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // 3. Send Email
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL_TARGET,
      subject: `New Inquiry: ${interest} - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Role: ${role || 'N/A'}
        Interest Area: ${interest}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Inquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Role:</strong> ${role || 'N/A'}</p>
          <p><strong>Interest Area:</strong> ${interest}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 4px;">
            <strong>Message:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    })

    console.log('Message sent: %s', info.messageId)
    return { success: true }
  } catch (error: any) {
    console.error('SMTP ERROR DETAILS:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    })

    return {
      error: `Connection error: ${error.message || 'Check your SMTP credentials and try again.'}`,
      inputs: rawData,
      resetCaptcha: true,
    }
  }
}