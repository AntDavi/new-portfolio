'use client'

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from 'lucide-react'
import { links } from "@/config/site";
import Image from "next/image";

const MobileNav = () => {
    const pathname = usePathname();


    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-accent" />
            </SheetTrigger>
            <SheetContent>
                <div className="mt-16 mb-24 flex justify-center">
                    <Link
                        href='/'
                    >
                        <Image
                            src={"./assets/logo.svg"}
                            width={50}
                            height={50}
                            alt="Anthony Davi"
                        />
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav