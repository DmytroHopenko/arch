import Image from 'next/image'

interface CustomHeroProps{
    title: string;
    subTitle: string;
    description: string;
    img: string;
    mobileImg: string;
    alt: string;
}

export const CustomHero = ({ title, subTitle,description, img, mobileImg, alt}: CustomHeroProps) => {
    return (
        <section className="wrapper relative min-h-[529px] md:h-auto">
            <Image src={mobileImg} alt={alt} width={375} height={240} className='md:hidden absolute inset-0 w-full h-[240px] object-cover brightness-75'/>
            <div className="absolute w-[343px] h-[45px] top-[196px] left-0 bg-[#fff] md:hidden" />
            <div className="w-full h-auto md:h-[720px] relative top-[240px] md:top-0">
                    <Image src={img} alt={alt} width={635} height={720} className='hidden md:block brightness-75 md:w-[573px] md:h-[720px] lg:w-[635px] lg:h-[720px] object-cover'/>
                    <div className="relative md:absolute w-full h-auto md:w-[572px] md:h-[431px] lg:w-[793px] lg:h-[503px] md:right-[-50px] lg:right-[-164px] md:bottom-0 bg-[#fff] flex flex-col md:justify-end md:items-center">
                        <span className='hidden md:block absolute text-[120px] leading-[200px] tracking-[-3px] lg:text-[15.625rem] lg:tracking-[-5px] font-bold text-[#EEEFF4] right-0 lg:right-[164px] top-[-80px]'>{title}</span>
                        <div className='w-[65px] h-[1px] bg-[#C8CCD8] hidden md:block relative top-[-80px] lg:top-[-60px] left-[-195px]' />
                        <h1 className='title mt-4 md:mt-0 mb-5 w-[311px] md:w-[456px] lg:w-[446px] md:mb-10 lg:mb-16'>{subTitle}</h1>
                        <p className='paragraph w-[311px] md:w-[445px] lg:w-[446px]'>{description}</p>
                    </div>
            </div>
        </section>
    )
}