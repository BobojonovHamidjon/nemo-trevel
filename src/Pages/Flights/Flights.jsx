import React from 'react'
import Marquee from "react-fast-marquee";


function Flights() {
    return (
      <div className="py-8" id="flights">
        <div className="pt-20 min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
            <h1 className="text-3xl font-bold text-nemo-dark mb-8">Aviachiptalar</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
              <div className="flex space-x-4 mb-6">
                <button className="px-4 py-2 rounded-md text-white  bg-[#F26522]">Borish</button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-600">Qaytish</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Qayerdan</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Qayerga</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jo'nash sanasi</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Yo'lovchilar</label>
                  <input type="number" min="1" className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange" defaultValue="1" />
                </div>
              </div>
              <button className="w-full mt-6  text-white  bg-[#F26522]  py-3 rounded-md hover:transition duration-300 disabled:opacity-50">
                Qidirish
              </button>
            </div>
         <div className='container max-w-[1420px] mx-auto mt-30 w-full px-4'>
          <h1 className='text-center text-4xl font-bold'>Mashhur shaxarlar</h1>
          <div className='grid-container flex justify-center md:justify-between items-center flex-wrap gap-5 p-4 mt-12'>
            <div className='w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-[400px] bg-white border border-gray-200 rounded-lg shadow-sm   dark:bg-white  flex flex-col'>
            <a href="#"><img className="rounded-t-lg w-full h-[200px] object-cover" src="https://www.nemoaviatrip.uz/assets/tourdubai-TKQe6-nU.jfif" alt="Dubai"/></a>
            <div className='p-5 flex flex-col flex-grow'>
            <a href="#"><h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-900">Dubai</h5></a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">Zamonaviy arxitektura va hashamatli savdo markazlari</p>
            <a href="#" class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">Batafsil</a>
            </div>
            </div>
            <div className='w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-[400px] bg-white border border-gray-200 rounded-lg shadow-sm   dark:bg-white  flex flex-col'>
            <a href="#"><img className="rounded-t-lg w-full h-[200px] object-cover" src="	https://www.nemoaviatrip.uz/assets/saudi-8KHwzW8O.avif" alt="Dubai"/></a>
            <div className='p-5 flex flex-col flex-grow'>
            <a href="#"><h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-900">Saudiya Arabistoni</h5></a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">Umra ziyorati uchun maxsus paketlar</p>
            <a href="#" class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">Batafsil</a>
            </div>
            </div>
            <div className='w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-[400px] bg-white border border-gray-200 rounded-lg shadow-sm   dark:bg-white  flex flex-col'>
            <a href="#"><img className="rounded-t-lg w-full h-[200px] object-cover" src="https://www.nemoaviatrip.uz/assets/istanbul-DLpjv57y.avif" alt="Dubai"/></a>
            <div className='p-5 flex flex-col flex-grow'>
            <a href="#"><h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-900">Istanbul</h5></a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">Tarixiy obidalar va zamonaviy madaniyat</p>
            <a href="#" class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">Batafsil</a>
            </div>
            </div>
            <div className='w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-[400px] bg-white border border-gray-200 rounded-lg shadow-sm   dark:bg-white  flex flex-col'>
            <a href="#"><img className="rounded-t-lg w-full h-[200px] object-cover" src="https://www.nemoaviatrip.uz/assets/antaliya-q-8wNECN.avif" alt="Dubai"/></a>
            <div className='p-5 flex flex-col flex-grow'>
            <a href="#"><h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-900">Antalya</h5></a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">Dam olish va sohil bo'yi kurortlari</p>
            <a href="#" class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-[#F26522] rounded-lg hover:bg-[#F26522] focus:ring-4 focus:outline-none">Batafsil</a>
            </div>
            </div>
          </div>
         </div>
          </div>
        </div>
      <div>
        <h2 className='text-center text-3xl font-bold mb-5 text-gray-900'>Hamkorlarimiz</h2>
       <Marquee>       
                <div className='rfm-initial-child-container   flex '>
                  <div className='rfm-child  transform:none   '>
                    <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/uzairways-CikMttcO.jfif" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Uzairways</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/centrumair-Cqx3MyJr.jfif" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Centrum Air</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/turkish-C845EpGu.jpg" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Turkish Airlines</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/emirates-CzxVNIkZ.jpg" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Emirates</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/qatar-CJ_bclRA.jpg" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Qatar Airways</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/uzairways-CikMttcO.jfif" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Uzairways</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/centrumair-Cqx3MyJr.jfif" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Centrum Air</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/turkish-C845EpGu.jpg" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Turkish Airlines</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/emirates-CzxVNIkZ.jpg" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Emirates</p>
                    </div>
                  </div>
                  <div className='rfm-child  transform:none'>
                  <div className='mx-8 flex-col items-center'>
                      <img src="https://www.nemoaviatrip.uz/assets/qatar-CJ_bclRA.jpg" alt="Uzairways"  className='h-24  w-autoh-24 w-auto rounded-md shadow-lg' />
                      <p className='mt-2 text-sm text-gray-700 font-medium'>Qatar Airways</p>
                    </div>
                  </div>
                </div>
               
       </Marquee>
      </div>
      </div>

      
      
    );
  }
  
  export default Flights;
  