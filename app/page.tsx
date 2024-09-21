import { CallToAction } from '@/components/CallToAction'
import { Featured } from '@/components/Featured'
import { Hero } from '@/components/Hero'
import { PageStat } from '@/components/PageStat'
import { Welcome } from '@/components/Welcome'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <PageStat pageName='home' className='top-[200px] left-[-60px]'/>
    <Hero />
    <Welcome />
    <CallToAction />
    <Featured />
    </>
  )
}

export default HomePage