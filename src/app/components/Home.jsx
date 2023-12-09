'use client'
import Image from 'next/image'
import profile from '../assets/profile.jpg'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
const Home = () => {
    const router=useRouter()
    const [anim, setAni] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAni(true)
        }, 100)
    }, [])
    return (
        <section className='w-full  flex max-sm:flex-col max-sm:justify-center h-auto max-sm:items-center sm:px-20  sm:items-center py-24 sm:justify-center max-sm:gap-10 sm:gap-10 flex-row-reverse px-3'>
            <section className='sm:py-3  sm:flex-2'>

                <Image src={profile} width={300} height={300} className='max-sm:rounded-full shadow-xl   rounded-full border-4 border-sky-200 w-[400px] h-[400px]  max-sm:w-[230px] max-sm:h-[230px] object-cover' />

            </section>
            <section className='sm:flex-1 flex flex-col sm:pt-10 items-start justify-center  gap-6 px-5'>
                <div className={` z-[-1] transition-all duration-300 ${anim ? 'translate-x-[0px]' : 'translate-x-[-900px]'}`}>
                    <h1 className='text-lg font-medium'>Hi There,</h1>
                    <h1 className="text-4xl max-sm:text-2xl mt-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        <span>I am </span>Asritha Kowtharapu.
                    </h1>

                </div>
                <p className='text-slate-900 max-sm:text-sm'>I’m a dedicated Computer Science student with a passion for technology and problem-solving. I am currently seeking opportunities to apply my skills in real-world scenarios and am eager to contribute to innovative projects.</p>

                <div className='flex gap-2'>
                   <button  onClick={()=>router*=('/#about')} className='px-4 text-sm  py-1 bg-sky-400 font-semibold text-white rounded-3xl' >About</button>
              <Link href='#contact' className='px-4 text-sm  py-1 bg-pink-400 text-white font-semibold rounded-3xl' >Contact</Link>
                    <a className='px-4 py-1 text-sm  bg-blue-500 text-white  hover:text-white font-semibold rounded-3xl'
                        href="/resume.pdf"
                        download="resume.pdf"

                    >
                        Resume
                    </a>
                </div>

            </section>
        </section>
    )
}

export default Home
