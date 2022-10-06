import React from 'react'
import './Footer.css'




function Footer() {
    return (
    <footer className='footer--size footer'>
        <div className='container container-fluid'>
            <div className='footer__links text--center'>
                <div className='footer__linkes'>
                    <span className='footer__link-item'></span>
                    <span className='footer__link-item'></span>
                    <span className='footer__link-item'></span>
                    <span className='footer__link-item'></span>
                </div>
            </div>
            <div className='footer_bottom text--center'>
                <div className="footer__copyright">©&nbsp;Enersen, 2022</div>
            </div>
        </div>
        
    </footer>

    )
}

export default Footer