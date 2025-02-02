import React from 'react'

function Main() {
  return (
    <div  className='relativ'>
        <div className="relative min-h-screen flex items-center justify-center bg-[#F26522] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 aos-init aos-animate" data-aos="fade-up">Sayohatingizni biz bilan boshlang</h1>
                <p className="text-xl md:text-2xl mb-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Nemo Travel - huzur uchun yo'l</p>
                <div className="hero-stats bg-white text-gray-800  rounded-full py-8 px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 shadow-lg max-w-5xl mx-auto">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-sm">Mamnun mijozlar</p>
                                <p className="font-bold">45000+</p>
                                </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                                        </svg>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <p className="text-sm">Mamlakatlar</p>
                                            <p className="font-bold">30+</p>
                                            </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                        </svg>
                                                        </div>
                                                        <div className="flex flex-col items-start">
                                                            <p className="text-sm">Tajriba</p>
                                                            <p className="font-bold">5+ yil</p>
                                                            </div>
                                                            </div>
                                                            <button className="bg-[#F26522] text-white px-6 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batafsil ma'lumot</button>
                                                            </div>
                                                            </div>
                                                            </div>
    </div>
  )
}

export default Main