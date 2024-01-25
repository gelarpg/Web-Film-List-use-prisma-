import Link from "next/link";
import React from "react";

type HeaderProps = {
  title: string;
  linkHref: string;
  linkTitle: string;
};
const Header = (props: HeaderProps) => {
    const { title, linkHref, linkTitle } = props;
    return (
        <>
        <div className="p-4 flex justify-between items-center">
            <h1 className="font-bold text-2xl text-white">{title}</h1>
            <Link
            href={linkHref}
            className="text-md md:text-lg underline hover:text-primary text-white transition-all"
            >
            {linkTitle}
            </Link>
        </div>
        </>
    );
};

export default Header;
