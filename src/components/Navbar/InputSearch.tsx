"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

const InputSearch = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    
    const handleSearch = (e: any) => {
        const keyword = searchRef.current?.value;
        if(!keyword || keyword.trim() == "") return;
        e.preventDefault();
        router.push(`/search/${keyword}`);
    };
    return (
        <div className="relative">
        <input
            type="text"
            placeholder="cari anime..."
            className="p-1 rounded w-full"
            ref={searchRef}
            onKeyUp={(e) => e.key === "Enter" && handleSearch(e)}
        />
        <button className="absolute top-1 end-1" onClick={handleSearch} >
            <IoSearch size={24} />
        </button>
        </div>
    );
};

export default InputSearch;
