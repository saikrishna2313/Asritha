'use client'
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import Link from 'next/link'
const Navbar = () => {
    const [pop, setPop] = useState(false)
    return (
        <nav className="fixed z-[10000] bg-white top-0 left-0 w-full">
            <section className='flex relative px-4 w-full   shadow-xl sm:px-20 py-3 items-center justify-between'>
               
                <Link href='#' className='text-lg font-semibold'>Asritha.</Link >
                <div className="flex items-center justify-center gap-5 px-4 max-sm:hidden">
                    <Link href='#about' className='text-sm uppercase font-semibold'>About</Link>
                    <Link href="#projects" className='text-sm uppercase font-semibold'>Projects</Link>

                    <Link href='#contact' className='text-sm uppercase font-semibold'>Contact</Link>
                </div>
                {
                    !pop && <button onClick={() => setPop(!pop)} className='sm:hidden'><IoMdMenu className='h-6 w-6' /></button>
                }
                {
                    pop && <div className="max-sm:absolute sm:hidden gap-12 max-sm:text-black max-sm:flex max-sm:justify-center max-sm:gap-10 max-sm:flex-col max-sm:h-screen max-sm:w-full max-sm:inset-0 max-sm:bg-white max-sm:bg-opacity-80 max-sm:backdrop-blur-sm">
                        {
                            pop && <button onClick={() => setPop(!pop)} className='sm:hidden absolute top-5 right-8'><ImCancelCircle className='h-6 w-6' /></button>
                        }

                        <button onClick={() => setPop(!pop)}><Link href='#about' className='text-xl text-slate-900 uppercase font-semibold'>About</Link></button>
                        <button onClick={() => setPop(!pop)}><Link href="#projects" className='text-xl text-slate-900 uppercase font-semibold'>Projects</Link></button>

                        <button onClick={() => setPop(!pop)}><Link href='#contact' className='text-xl text-slate-900 uppercase font-semibold'>Contact</Link></button>
                    </div>
                }

            </section>
        </nav>
    )
}

export default Navbar
