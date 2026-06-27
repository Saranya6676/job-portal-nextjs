import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-900 text-white p-4'>
            <div className='flex justify-between max-w-7xl mx-auto'>
                <h2 className='text-2xl font-bold'>Job Portal</h2>
                <div className='flex gap-6'>
                    <Link href="/">Home</Link>
                    <Link href="/jobs">Jobs</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>


                </div>
            </div>
        </nav>
    )
}

export default Navbar