"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps{
    title:string
}
const Header = (props:HeaderProps) => {
    const {title} = props;
    const router  = useRouter()
    const handleBack = (e:any) =>{
        e.preventDefault()
        router.back()
    }
    return (
        <div className="flex justify-between items-center mb-4 mx-3">
        <button onClick={handleBack} className="text-white flex justify-center items-center gap-1">
            <BiArrowBack size={23} />
            back
        </button>
        <h1 className="text-white text-2xl mb-4 font-bold">{title}</h1>
        </div>
    );
};

export default Header;
