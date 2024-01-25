import { authUserSection } from "@/libs/auth-libs";
import Link from "next/link";
import React from "react";

const LoginButton = async () => {
    const user = await authUserSection()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
        <div className="flex justify-between items-center text-white font-bold gap-2 py-2">
        {
            user ? <Link href="/users/dashboard">Dashboard</Link> : null
        }
        <Link href={actionURL} className="text-xl font-bold text-primary bg-quaternary p-1">{actionLabel}
        </Link>
        </div>
    );
};

export default LoginButton;
