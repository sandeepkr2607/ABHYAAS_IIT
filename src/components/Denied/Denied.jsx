import React from 'react'
import './Denied.css'
import logo from '../../assets/Red_Alert.svg'

const Denied = () => {
    return (
        <div>
            <section class="section">
                <div class="container" style={{ backgroundColor: 'white' }}>
                    <div class="content">
                        <img class="hero-image" alt="hero" src={logo} style={{ width: '100px' }} />
                        <p class="error-message">Payment Declined!</p>
                        <p class="error-title">Error</p>
                        <p class="error-description">We couldn't process this payment</p>
                        <p class="message-box">Please use another payment method or try again later</p>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <button class="retry-button" style={{ width: '55%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#20AE5C', paddingTop: '1rem', paddingBottom: '1rem', borderRadius: '1.5rem' }}>RETRY PAYMENT</button>
                            <button class="cancel-button" style={{ width: '55%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#E9F5F8', paddingTop: '1rem', paddingBottom: '1rem', color: 'black', borderRadius: '1.5rem' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Denied
