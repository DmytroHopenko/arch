import { personList } from "@/constants"
import Image from 'next/image'

export const Leaders = () => {
    return (
        <section className="wrapper flex flex-col min-[1220px]:flex-row gap-5 justify-between">
            <h1 className="title line-clamp-2 w-[220px] md:w-[250px] lg:w-[270px] mb-8 md:mb-10 lg:mb-0">The Leaders</h1>
            <div className="w-[311px] md:w-[572px] lg:w-[730px] lg:h-[861px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-5 gap-y-8 mb-[160px] mx-auto lg:mx-0">
                {personList.map((person) => (
                    <div className="flex flex-col" key={person.id}>
                        <Image src={person.avatar} alt={person.name} width={350} height={320} className="mb-3"/>
                        <span className="text-[32px] leading-[40px] font-bold text-[#1B1D23]">{person.name}</span>
                        <span className="font-medium leading-[24px] text-[18px] text-[#1B1D23] opacity-75">{person.position}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}