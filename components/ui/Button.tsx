import Link from 'next/link'

type Variant = 'primary' | 'teal' | 'outline-dark' | 'outline'

interface ButtonProps {
  href: string
  variant?: Variant
  children: React.ReactNode
  className?: string
}

export function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const cls: Record<Variant, string> = {
    primary: 'btn-primary',
    teal: 'btn-teal',
    'outline-dark': 'btn-outline-dark',
    outline: 'btn-outline',
  }
  return (
    <Link href={href} className={`${cls[variant]} ${className}`}>
      {children}
    </Link>
  )
}
