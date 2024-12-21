import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/image/Logo.png'
import Button from "../Button";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

export default function NavBar() {

    const menuList = [
        'Product',
        'Solutions',
        'Resources',
        'Pricing',

    ]
    return (
        // Header
        <nav className="bg-primary py-4 px-8 items-center flex flex-row justify-between text-white ">
            <Link href="/">
                <Image alt="logo" src={Logo} className="w-48 h-fit" />
            </Link>
            {/* frame 375 */}
            <div className="flex flex-row gap-16">

                {/* nav-menu */}
                <ul className="flex flex-row gap-8 self-center justify-between font-medium">
                    {menuList.map((item) => (
                        <li className="" key={item}>
                            <Link href="/" className="flex items-center ">
                                <p className="mr-2">
                                    {item}
                                </p>
                                <IoIosArrowDown />
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Btn */}
                <div className=" flex gap-6 ">
                    <Button bg="primary">Login</Button>
                    <Button bg="secondary" icon="arrow-right">
                        Try Whitepace free
                    </Button>
                </div>
            </div>
        </nav>
    );
}