
import Image from 'next/image'
import contact from '../assets/contact.jpg'
import { ContactMe } from './contacting';
const Contact = () => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-700">Contact Me</h2>
            <section id='contact' className='flex px-20 max-sm:px-3 justify-center items-center py-5 gap-5 max-sm:flex-col max-sm:flex'>

                <section className='w-[40%] flex items-center sm:justify-end justify-center max-sm:w-[100%]'>
                    <Image width={300} height={300} className="w-[400px] h-[400px] object-cover " src={contact} />
                </section>
                <ContactMe />

            </section></>
    );
};

export default Contact;
