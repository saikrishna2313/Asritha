import about from '../assets/about.png'
import Image from 'next/image'
import React from 'react';
import Goals from './Goals';

const data = {
    projects: [
        {
            title: 'Heart Disease Prediction',
            techStack: 'Data Science',
            description: 'This project predicts people with fatal heart disease.'
        },
        {
            title: 'Result Management System',
            techStack: 'Web',
            description: 'It is a web-based tool designed to automate the administration of semester results by tracking students grades.'
        }
    ],
    internships: [
        'Salesforce Developer Virtual Internship 2022',
        'Robotic Process Automation 2022'
    ]
};

const Card = ({ title, techStack, description }) => (
    <div className=" rounded overflow-hidden shadow-xl bg-slate-100 sm:m-4 mb-2 sm:w-[400px] w-full">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{techStack}</span>
        </div>
    </div>
);

const Skills = () => (
    <>
        <section id='projects' className='relative'>

            <div className='relative bg-violet-100'>

                <h1 className="text-2xl font-bold text-center  max-sm:text-lg  uppercase py-5 w-full shadow-xl">My Works</h1>
            </div>
            <section className='flex  items-center max-sm:flex-col justify-center px-20  max-sm:px-3'>

                <section>
                    <Image src={about} width={300} height={300} className='h-[400px] w-[400px] object-cover' />
                </section>
                <div className="container  mx-auto p-4">

                    <div className="flex flex-wrap items-center justify-center">
                        {data.projects.map((project, index) => (
                            <Card key={index} {...project} />
                        ))}
                    </div>

                </div>


            </section>
        </section>

    </>
);

export default Skills;





