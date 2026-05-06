'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductProblemSection from '@/components/sections/product/ProductProblemSection'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'
import ProductVisuals from '@/components/sections/product/ProductVisuals'

const dataTypes = [
  { 
    num: '01', 
    title: 'Pedestrian Flow', 
    desc: 'Real-time foot traffic density, movement patterns, crowd dynamics, and dwell-time analytics across city zones. Understand how people move through urban environments at street level.',
    tags: ['Density heatmaps', 'Flow direction vectors', 'Dwell-time analysis', 'Zone-level aggregation']
  },
  { 
    num: '02', 
    title: 'Environmental', 
    desc: 'Hyper-local air quality, noise levels, temperature, humidity, and atmospheric pressure readings. Street-level environmental intelligence that satellite data cannot provide.',
    tags: ['AQI readings', 'Noise mapping', 'Microclimate data', 'Pollution source tracking']
  },
  { 
    num: '03', 
    title: 'Infrastructure Status', 
    desc: 'Road surface conditions, public transport load factors, utility grid status, water pressure, and availability metrics across city infrastructure networks.',
    tags: ['Road condition index', 'Transit load factors', 'Grid availability', 'Maintenance alerts']
  },
  { 
    num: '04', 
    title: 'Commercial Activity', 
    desc: 'Retail density patterns, venue occupancy indicators, economic activity signals, and district-level commercial vitality metrics for urban economic modelling.',
    tags: ['Occupancy patterns', 'Footfall conversion', 'District vitality index', 'Temporal patterns']
  },
  { 
    num: '05', 
    title: 'Traffic & Mobility', 
    desc: 'Vehicle flow rates, parking utilization, cycling patterns, and multimodal transport data. Complete mobility intelligence from road to rail to micro-mobility.',
    tags: ['Vehicle flow rates', 'Parking utilization', 'Cycle lane usage', 'Multimodal splits']
  },
  { 
    num: '06', 
    title: 'Safety & Incidents', 
    desc: 'Anonymized incident reporting patterns, emergency response metrics, and public safety indicators. Privacy-preserving safety intelligence for urban resilience planning.',
    tags: ['Incident density', 'Response patterns', 'Risk scoring', 'Anonymized reporting']
  },
  { 
    num: '07', 
    title: 'Energy & Utilities', 
    desc: 'Grid load distribution, renewable energy output, water consumption patterns, and smart meter aggregations for infrastructure capacity planning and sustainability modelling.',
    tags: ['Grid load curves', 'Renewable output', 'Consumption patterns', 'Peak forecasting']
  },
  { 
    num: '08', 
    title: 'Urban Development', 
    desc: 'Construction activity tracking, zoning change monitoring, permit density analysis, and development velocity indicators for growth modelling and investment intelligence.',
    tags: ['Construction tracking', 'Permit density', 'Zoning changes', 'Development velocity']
  }
]

const whyItems = [
  { num: '01', title: 'Lean Packet Architecture', desc: 'Our sensor data is compressed and structured at the edge — not raw dumps that need cleaning. Every packet is engineered for direct ingestion by city-scale models, reducing processing overhead by orders of magnitude.' },
  { num: '02', title: 'Ground-Truth Freshness', desc: 'Active sensors on the ground, not satellite imagery or historical datasets. Sub-second data freshness means your twin city model reflects what is happening now, not what happened last week.' },
  { num: '03', title: 'Plug & Play Integration', desc: 'Standardized data feeds with documented schemas that slot directly into major digital twin platforms. No custom ETL pipelines, no data engineering overhead. Connect and start modelling.' },
  { num: '04', title: 'Privacy by Design', desc: 'All data is aggregated and anonymized at the sensor level using zero-knowledge principles. No personally identifiable information ever leaves the sensor network. GDPR and privacy regulation compliant by architecture.' }
]

const integrationSteps = [
  { num: '01', title: 'Select Data Types', desc: 'Choose from eight core data categories. Select the city regions and update frequencies that match your model requirements.' },
  { num: '02', title: 'Connect Your Platform', desc: 'Use our standardized API endpoints or pre-built connectors for major digital twin platforms. No custom ETL needed.' },
  { num: '03', title: 'Ingest & Model', desc: 'Lean packets flow directly into your twin city model. Real-time ground truth, continuously updated, ready for simulation.' }
]

export default function UltraDataPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="ULTRADATA"
        title="Real-Time City Data for Digital Twin Models"
        description="Active sensor networks across launch cities. Ultra-lean packet sets. Plug & play feeds for twin city platforms. Ground-truth data that city-scale models can actually process."
        ctaText="Request Data Access"
        secondaryCtaText="View Solutions"
        secondaryCtaHref="/solutions/city-data"
      />

      <ProductProblemSection 
        label="The Problem"
        title="Digital twin city platforms are starving for processable, real-time data. Most city data is too noisy, too heavy, or arrives too late to be useful at scale."
        col1Text="Twin city modelling requires continuous data streams that are current, lightweight, and standardized. Satellite imagery is delayed. IoT dumps are too raw. Government datasets are quarterly at best."
        col2Text="We deploy purpose-built sensor networks and compress the output into lean packet sets that city-scale models can ingest without transformation. Real-time. Standardized. Plug and play."
      />

      <ProductFeatureList
        label="Data Catalogue"
        title="Eight Core Data Types"
        description="Our high-fidelity sensor network produces standardized feeds across the urban environment's most critical vectors."
        features={dataTypes}
        theme="dark"
      />

      <ProductVisuals 
        primary={{ 
          label: '', 
          sublabel: 'Sensor Network Dashboard', 
          src: '/images/products/Sensor_Network_Dashboard.jpg' 
        }}
        grid={[
          { 
            label: '', 
            sublabel: 'City Data Heatmap', 
            src: '/images/products/City_Data_Heatmap.jpg' 
          },
          { 
            label: '', 
            sublabel: 'Digital Twin Model', 
            src: '/images/products/Digital_Twin_Model.jpg' 
          }
        ]}
      />

      <ProductInfoGrid 
        label="Why ULTRADATA"
        title="Built for Twin City Scale"
        items={whyItems}
      />

      <ProductFeatureList
        label="Integration"
        title="Three Steps to Live Data"
        description="The fastest path from ground truth to city-scale simulation."
        features={integrationSteps}
        theme="dark"
      />

      <ProductCTA 
        title="Ready for Real-Time City Data?"
        description="Talk to our data team about sensor coverage, data types, and integration with your digital twin platform."
        ctaText="Request Data Access"
      />
    </main>
  )
}
