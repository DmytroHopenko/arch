import { PageStat } from '@/components/PageStat'
import React from 'react'
import { Leaders } from './_components/Leaders'
import { CustomHero } from '@/components/CustomHero'
import { Heritage } from './_components/Heritage'

const AboutPage = () => {
  return (
    <>
    <PageStat pageName='About Us' className='top-[255px] line-clamp-1 w-[230px] left-[-115px]'/>
    <CustomHero 
    title='About'
    subTitle='Your team of professionals'
    description='Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
    img='/assets/about/desktop/image-hero.jpg'
    mobileImg='/assets/about/mobile/image-hero.jpg'
    alt='hero'
    />
    <Heritage />
    <Leaders />
    </>
  )
}

export default AboutPage