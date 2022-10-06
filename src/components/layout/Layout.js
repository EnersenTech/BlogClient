import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import './Layout.css'


function Layout({ children, title }) {
    return (
        <div className="">
            <Header title = {title}/>
            <main className="banner_qdFl main-wrapper mainWrapper_z210">
                {children}
            </main>
            <Footer/>
        </div>
    );
}
export default Layout;