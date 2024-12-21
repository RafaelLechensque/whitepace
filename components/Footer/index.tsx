import Image from "next/image";
import Logo from '@/assets/image/Logo.png'
import Button from "../Button";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";

interface footerPorps {
    title: string
    itens: string[]
}

const list: footerPorps[] = [
    {
        title: "Product",
        itens: [
            "Overview",
            "Pricing",
            "Customer stories",
        ]
    },
    {
        title: "Resources",
        itens: [
            "Blog",
            "Guides & tutorials",
            "Help center",
        ]
    },
    {
        title: "Product",
        itens: [
            "About us",
            "Careers",
            "Media kit",
        ]
    },
]
const data = new Date()

export default function Footer() {
    return (
        <footer className="bg-primary text-white text-lg font-light px-8 pt-36 pb-8">
            <ul className="flex flex-row gap-24 pb-20">
                <li className="flex flex-col gap-4">
                    <Image alt="" height={34} src={Logo} />
                    <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </li>
                <li className="flex justify-between w-full">
                    {list.map(tips => (
                        <div className=" flex flex-col gap-4">
                            <h1 className="font-bold ">{tips.title}</h1>
                            <ul className="flex flex-col gap-4">
                                {tips.itens.map(i => (
                                    <li className="text-base">{i}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </li>
                <li className="flex flex-col gap-4">
                    <h1 className="font-bold text-2xl">Try It Today</h1>
                    <p className="text-base">Get started for free.
                        Add your whole team as your needs grow.</p>
                    <Button bg="secondary" icon="arrow-right" >Start today</Button>
                </li>

            </ul>
            <div className="border-2 border-primary-2 opacity-25"/>
            <div className="flex justify-between pt-5 ">
                <ul className="flex gap-14">
                    <li className="flex items-center gap-1">
                        <TfiWorld />
                        English
                        <SlArrowDown />
                    </li>
                    <li>Terms & privacy</li>
                    <li>Security</li>
                    <li>Status</li>
                    <li>©{data.getFullYear()} Whitepace LLC.</li>
                </ul>
                <ul className="flex gap-8">
                    <li>
                        <FaFacebookF />
                    </li>
                    <li>
                        <FaXTwitter />
                    </li>
                    <li>
                        <FaLinkedinIn />
                    </li>
                </ul>
            </div>
        </footer>
    )
}