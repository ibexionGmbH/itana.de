import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'

export default function Layout ({ children }) {
  return (
    <div className='flex flex-col min-h-screen antialiased text-gray-900 font-sans'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta
          name='google-site-verification'
          content='y0fNm10Zw-mMjHsc7sW-SHicOMEldY3I6d2K4KGUBYY'
        />
      </Helmet>
      <Header />
      <div>
        <main className='flex flex-col flex-1 w-full px-4 py-8 mx-auto max-w-7xl md:justify-center md:p-8'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
