import { CustomHero } from '@/components/CustomHero'
import { PageStat } from '@/components/PageStat'
import React from 'react'
import { Places } from './_components/Places'
import { Map } from './_components/Map'
import { ContactForm } from './_components/ContactForm'

const ContactPage = () => {
  return (
    <>
    <PageStat pageName='Contact' className='top-[240px] left-[-101px]'/>
    <CustomHero 
    title='Contact'
    subTitle='Tell us about your project'
    description='We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!'
    img='/assets/contact/desktop/image-hero.jpg'
    mobileImg='/assets/contact/mobile/image-hero.jpg'
    alt='hero'
    />
    <Places />
    <Map />
    <ContactForm />
    </>
  )
}

export default ContactPage