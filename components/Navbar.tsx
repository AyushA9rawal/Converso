import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/" className="mr-auto">
             <div className="flex items-center gap-1.5 cursor-pointer -ml-2">
                <Image
                    src="./images/final_logo.svg"
                    alt="Logo"
                    width={100}
                    height={110}
                />
             </div>
        </Link>

        <div className="flex items-center gap-8">
            <NavItems/>
            <SignedOut>
                <SignInButton>
                    <button className="btn-signin">Sign In</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar