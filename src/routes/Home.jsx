import { useState } from 'react'
import Button from '../components/Button'

export default function Home() {
  const contactInfo = {
    phone: '4102748049',
    email: 'john@sensibleentertainment.com',
  }

  function formatPhoneNumber(number) {
    const cleaned = ('' + number).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  return (
    <main>
      <section className="cardTop">
        <img src="/me.jpg" alt="John Anselmi Headshot" />
        <h1>John Anselmi</h1>
        <h2>
          Full Stack Developer
          <br />
          Owner | Sensible Entertainment
        </h2>
      </section>
      <section className="cardMiddle">
        <div>
          <Button details={{ type: 'call', link: `tel:${contactInfo.phone}`, icon: 'phone' }} />
        </div>
        <div>
          <Button details={{ type: 'email', link: `mailto:${contactInfo.email}`, icon: 'email' }} />
        </div>
      </section>
      <section className="cardBottom">
        <a href="/vcard.vcf" className="fullBtn" download>
          Download Contact Card
        </a>
        <div className="contactInfo">
          <div className="phone">
            <h3>Phone Number</h3>
            <a href={`tel:${contactInfo.phone}`}>
              <p>{formatPhoneNumber(contactInfo.phone)}</p>
            </a>
          </div>
          <div className="email">
            <h3>Email Address</h3>
            <a href={`mailto:${contactInfo.email}`}>
              <p>{contactInfo.email}</p>
            </a>
          </div>
        </div>
        <div className="message">
          <h4>Text or Email is currently the best way to get ahold of me. Please no voicemails.</h4>
        </div>
      </section>
    </main>
  )
}
