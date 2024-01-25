import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'
import LoginButton from './LoginButton'

const Navbar = () => {
    return (
        <header className='bg-primary'>
            <div className="flex md:flex-row flex-col justify-between md:items-center p-2">
                <Link href="/">
                    <h1 className='text-3xl font-bold text-white'>Web Test</h1>
                </Link>
                <InputSearch/>
                <LoginButton/>
            </div>
        </header>
    )
}

export default Navbar