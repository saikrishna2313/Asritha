
const Goals = () => {
    return (
        <section className='relative py-5'>

            <div class="absolute top-0 z-[-2] h-auto w-auto  bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className=" py-3  w-full max-sm:flex-col px-4 flex items-center my- justify-center   overflow-hidden gap-5">

                <div className='w-[400px] max-sm:w-[100%] max-sm:h-auto h-[200px] px-4 py-2 shadow-sm bg-violet-50 rounded-lg'>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Achievements</div>
                    <ul className="mt-3">
                        <li className="text-gray-700 text-base mb-2">🏆 First prize in coding Hackathon, College 2022</li>
                        <li className="text-gray-700 text-base mb-2">👩‍💻 Coding Hackathon participant, Women’s Day by Black Bucks Pvt Ltd, Hyderabad 2022</li>
                        <li className="text-gray-700 text-base mb-2">🖥️ Coding Hackathon participant, Adikavi Nannaya University</li>
                    </ul>
                </div>
                <div className='w-[400px]  max-sm:w-[100%] max-sm:h-auto  h-[200px] px-4 shadow-sm py-2 bg-violet-50 rounded-lg'>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">Certifications</div>
                    <ul className="mt-3">
                        <li className="text-gray-700 text-base mb-2">☁️ NPTEL on Cloud Computing</li>
                        <li className="text-gray-700 text-base mb-2">🐍 Python OOP, LinkedIn</li>
                        <li className="text-gray-700 text-base mb-2">🌐 Web Development, Internshala</li>
                        <li className="text-gray-700 text-base mb-2">📈 Digital Marketing Fundamentals</li>
                    </ul>
                </div>
                <div className='w-[400px]  max-sm:w-[100%] max-sm:h-auto   h-[200px] shadow-sm px-4 py-2 bg-violet-50 rounded-lg'>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">Extra Curricular Activities</div>
                    <ul className="mt-3">
                        <li className="text-gray-700 text-base mb-2">👨‍💻 Coding Club Coordinator, College</li>
                        <li className="text-gray-700 text-base mb-2">🎉 Active participant in college events</li>
                    </ul>
                </div>

            </div>
        </section>
    )
};

export default Goals;
