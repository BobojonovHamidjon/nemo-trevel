import React from 'react'

function Tours() {
  return (
    <div className="py-8" id="tours">
    <div className="container mx-auto px-4 py-0">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Turlar</h2>
            <p className="text-xl text-gray-600">Eng yaxshi sayohat turlari</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                    <img src="https://www.nemoaviatrip.uz/assets/uzbtravel-Dxm7Hxle.jpg" alt="O'zbekiston bo'ylab sayohat" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">O'zbekiston bo'ylab sayohat</h3>
                    <p className="text-gray-700 mb-4">O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
                    <div className="flex justify-between items-center">
                        <button className="bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batafsil</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                    <img src="https://www.nemoaviatrip.uz/assets/tourturkey-Bv44cyAd.jfif" alt="Turkiya bo'ylab sayohat" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Turkiya bo'ylab sayohat</h3>
                    <p className="text-gray-700 mb-4">Istanbul, Antalya, Kappadokiya - eng mashhur joylar</p>
                    <div className="flex justify-between items-center">
                        <button className="bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batafsil</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                    <img src="https://www.nemoaviatrip.uz/assets/tourdubai-TKQe6-nU.jfif" alt="Dubai" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Dubai</h3>
                    <p className="text-gray-700 mb-4">Zamonaviy arxitektura va hashamatli savdo markazlari</p>
                    <div className="flex justify-between items-center">
                        <button className="bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batafsil</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48">
                    <img src="https://www.nemoaviatrip.uz/assets/yevropa-CLxfDw61.jfif" alt="Yevropa bo'ylab sayohat" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Yevropa bo'ylab sayohat</h3>
                    <p className="text-gray-700 mb-4">Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar</p>
                    <div className="flex justify-between items-center">
                        <button className="bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">Batafsil</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Tours