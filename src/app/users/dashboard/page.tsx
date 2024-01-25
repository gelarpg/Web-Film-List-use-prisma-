import { authUserSection } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link";
import React from "react"

const Page = async () => {
    const user = await authUserSection()
    return (
        <>
        <div className="text-white font-bold flex flex-col justify-center items-center mt-8">
        <h5>Welcome {user?.name}</h5>
        <Image
            className="rounded-full "
            priority
            unoptimized={true}
            quality={100}
            src={user?.image ? user.image : ""}
            alt="photo"
            width={250}
            height={250}
        />
        <div className="py-8 flex flex-wrap gap-4">
            <Link href="/users/dashboard/collection" className="bg-tertiary p-3 rounded-lg hover:transition-all">
            My Collection
            </Link>
            <Link href="/users/dashboard/comment" className="bg-tertiary p-3 rounded-lg hover:transition-all">
            My Comment
            </Link>
        </div>
        </div>
        </>
    );
};

export default Page;
