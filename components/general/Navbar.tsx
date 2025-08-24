import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";
// import Logo from "@/public/logo.svg";

export async function Navbar() {

    const session = await auth();


    return (
        <nav className="flex items-center justify-between py-5">
            {/* <Link href="/" className="flex items-center space-x-2"> */}
            <Link href="/">
                {/* <Image src={Logo} alt="Ergasia" width={40} height={40} /> */}
                <h1 className="text-2xl font-bold text-[var(--sec-2)]">
                    ἐργα<span className="text-primary">σία</span>
                </h1>
            </Link>

            {/* <div className="flex items-center space-x-4"> */}
            <div className="flex items-center gap-4">
                <ThemeToggle />

                {session?.user ? (
                    <form
                        action={async () => {
                            "use server";
                            await signOut({
                                redirectTo: "/"
                            });
                        }}
                    >
                        <Button>Logout</Button>
                    </form>
                ) : (
                    <Link href="/login" className={buttonVariants({ variant: 'outline', size: 'lg'})}>Login</Link>
                )}

            </div>
        </nav>
    );
}