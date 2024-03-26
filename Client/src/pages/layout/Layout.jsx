import React from 'react'
import FooterWibu from '../../components/FooterWibu'
import NavbarWibu from '../../components/NavbarWibu'

function Layout({children}) {
  return (
    <div className='layout-container' style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <NavbarWibu />
        <div className="body-container" style={{
            flex: '1'
        }}>
            {children}
        </div>
        <FooterWibu />
    </div>
  )
}

export default Layout