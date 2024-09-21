import { PageStat } from '@/components/PageStat'
import React from 'react'
import { Portfolio } from './_components/Portfolio'

const PortfolioPage = () => {
  return (
    <>
    <PageStat pageName='Portfolio' className='top-[265px] left-[-126px]'/>
    <Portfolio />
    </>
  )
}

export default PortfolioPage