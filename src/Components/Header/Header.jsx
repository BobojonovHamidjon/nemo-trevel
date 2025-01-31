import React from 'react'

 function Header() {
  return (
    <div className='relative'>
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0"><a>
            <img src="https://www.nemoaviatrip.uz/assets/logo_orange-BGoDxPvq.png" alt="Logo" className="h-10 w-auto"/></a>
            </div>
            <ul className="hidden md:flex md:items-center md:space-x-8">
              <li className="text-sm font-medium cursor-pointer text-gray-900 hover:text-[#F26522]">Asosiy</li>
              <li className="text-sm font-medium cursor-pointer text-gray-900 hover:text-[#F26522]">Biz haqimizda</li>
              <li className="text-sm font-medium cursor-pointer text-gray-900 hover:text-[#F26522]">Turlar</li>
              <li className="text-sm font-medium cursor-pointer text-gray-900 hover:text-[#F26522]">Mehmonxonalar</li>
              <li className="text-sm font-medium cursor-pointer text-gray-900 hover:text-[#F26522]">Aviachiptalar</li>
              <li className="text-sm font-medium cursor-pointer text-gray-900 hover:text-[#F26522]">Aloqa</li>
              </ul>
              <div className="relative">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-900">
                  <span>UZ</span>
                 
                  <svg className="w-4 h-4 transition-transform " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  </button>
                  </div>
                  <button className="md:hidden text-gray-900">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                      </button>
                      </div>
                      </div>
                      </nav>
                      
    </div>
  )
}
export default Header