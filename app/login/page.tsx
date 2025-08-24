import { LoginForm } from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";
// import Logo from "@/public/logo.svg";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            {/* What is the difference between space-x-6 and gap-6? */}
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href="/" className="text-4xl font-bold text-[var(--sec-2)] self-center">
                {/* <Image src={Logo} alt="Ergasia Logo" className="size-10" /> */}
                    ἐργα<span className="text-primary">σία</span>
                </Link>

                <LoginForm />
            </div>
        </div>
    )
}