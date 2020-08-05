import * as React from 'react'
import Head from 'next/head'

import MainNavbar from '../components/MainNavbar'

type Props = {
  title: string
  children: React.ReactNode
}

export default function MainLayout(props: Props) {
  const { title, children } = props

  return (
    <div className="main-layout">
      <Head><title>{title}</title></Head>
      
      <MainNavbar />

      <div>
        {children}
      </div>

      <div style={{ color: '#808080', textAlign: 'center', padding: '50px 0px' }}>
        <span>&copy; {new Date().getFullYear()} - SchoolMan</span>
      </div>
    </div>
  )
}
