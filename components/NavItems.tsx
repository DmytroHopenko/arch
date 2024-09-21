import { Navlinks } from "@/constants"
import Link from "next/link"

export const NavItems = () => {
    return (
        <ul className="flex flex-col md:flex-row gap-[17px] md:gap-[61px]">
            {
            Navlinks.map((link) => (
                <li key={link.id} className="font-bold text-[32px] leading-[40px] text-[#1B1D23] md:text-[18px] md:leading-[25px] md:text-[#7D828F] md:hover:text-[#1B1D23]">
                    <Link href={link.url}>{link.label}</Link>
                </li>
            ))
            }
        </ul>
    )
}