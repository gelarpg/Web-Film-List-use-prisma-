"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuFileSearch } from 'react-icons/lu'

const Page = () => {
    const router = useRouter()

    return (
        <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
            <div className="flex justify-center items-center flex-col gap-4">
                <LuFileSearch size={32} className='text-primary'/>
                <h3 className='text-primary text-4xl font-bold'>NOT FOUND</h3>
                <button onClick={() => router.back()} className='text-white hover:text-primary transition-all underline'>
                    Kembali
                </button>
            </div>
        </div>
    )
}

export default Page