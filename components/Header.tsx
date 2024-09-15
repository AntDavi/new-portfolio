import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className="py-1 xl:py-3 text-white">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
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

                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href='/contact'>
                        <Button>
                            Contact me
                        </Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </header>
    )
}

export default Header