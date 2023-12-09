import Image from 'next/image'
import c from '../assets/c.png'
import python from '../assets/python.png'
import js from '../assets/js.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import { SiLinkedin } from "react-icons/si";
import mongo from '../assets/mongo.png'
import Link from 'next/link'
const About = () => {
    return (
        <>

            <section id='about' className='relative pb-10'>
                <h1 className='text-xl  font-semibold text-center max-sm:text-lg my-4 px-4 py-2 text-slate-900 uppercase shadow-xl mb-7'>About Me</h1>
                <section className='flex max-sm:flex-col-reverse max-sm:gap-10 max-sm:px-3 items-center justify-center'>
                    <div class="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                    <section className='w-[60%] max-sm:w-[100%] flex flex-col items-start gap-4 max-sm:pr-0 max-sm:px-1 pr-20'>
                        <p className="mb-8 text-xl max-sm:text-lg font-semibold leading-relaxed">
                            As a budding software developer, I bring a solid foundation in computer science principles and hands-on experience in programming.
                        </p>
                        <p className='text-lg font-semibold'>My skill set includes:</p>
                        <div className="flex justify-center">
                            <ul className="list-disc list-inside">
                                <li>C Programming</li>
                                <li>Python</li>
                                <li>HTML, CSS, JavaScript</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>

                        <p className='text-lg font-semibold'>Tools:</p>
                        <div className="flex justify-center">
                            <ul className="list-disc list-inside">
                                <li>Visual Studio Code</li>
                                <li>Data Structures & Algorithms</li>

                                <li>Jupyter notebook</li>
                                <li>Google Colab</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start gap-3 justify-center">
                            <p> I am eager to leverage my skills in a dynamic work environment and contribute to impactful projects.</p>
                            <Link href="https://www.linkedln.com/in/a-v-n-lalitha-kowtharapu-4baa57227/" className='px-4 mt-3 flex ml-2 items-center justify-center rounded-full  text-white gap-2 uppercase text-sm  bg-sky-400 py-1  '><span>Connect</span> <SiLinkedin className='h-6 w-6 ml-2' /></Link>
                        </div>
                    </section>

                    <section className=' max-sm:w-[100%] items-center  w-[20%] flex-wrap flex justify-center gap-10'>
                        <Image src={python} width={100} height={100} className='max-sm:h-[50px] max-sm:w-[50px] object-cover' />
                        <Image width={100} height={100} src={c} className='max-sm:h-[50px] max-sm:w-[50px] object-cover' />
                        <Image width={100} height={100} src={js} className='max-sm:h-[50px] max-sm:w-[50px] object-cover' />
                        <Image width={100} height={100} src={html} className='max-sm:h-[50px] max-sm:w-[50px] object-cover' />
                        <Image width={100} height={100} src={css} className='max-sm:h-[50px] max-sm:w-[50px] object-cover' />
                        <Image width={100} height={100} src={mongo} className='max-sm:h-[50px] max-sm:w-[50px] object-cover' />
                    </section>

                </section >

            </section>
        </>
    )
}

export default About