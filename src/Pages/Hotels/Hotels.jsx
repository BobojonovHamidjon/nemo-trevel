import React from 'react'

function Hotels() {
  return (
    <div className="py-8" id="hotels">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-nemo-dark" data-aos="fade-up">
          Mehmonxonalar
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
            <div className="relative h-48">
              <img src="https://www.nemoaviatrip.uz/assets/hayat-CA2EFkgE.jpg" alt="Hyatt Regency Tashkent" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Hyatt Regency Tashkent</h3>
              <p className="text-gray-600 mb-2">Navoi ko‘chasi 1-uy, Toshkent</p>
              <p className="text-gray-700">Zamonaviy mehmonxona markaz markazida</p>
              <button className="mt-4 bg-[#F26522] text-white px-6 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                Batafsil ma'lumot
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="relative h-48">
              <img src="https://www.nemoaviatrip.uz/assets/hilton-DXtMsMxq.jpg" alt="Hilton Tashkent City" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Hilton Tashkent City</h3>
              <p className="text-gray-600 mb-2">Islom Karimov ko‘chasi 2-uy, Toshkent</p>
              <p className="text-gray-700">Biznes mehmonxona shahar markazida</p>
              <button className="mt-4 bg-[#F26522] text-white px-6 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                Batafsil ma'lumot
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="400">
            <div className="relative h-48">
              <img src="https://www.nemoaviatrip.uz/assets/cityplace-CQIF01DD.jpg" alt="City Palace Hotel" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">City Palace Hotel</h3>
              <p className="text-gray-600 mb-2">Amir Temur ko‘chasi 15-uy, Toshkent</p>
              <p className="text-gray-700">Qulay mehmonxona diqqatga sazovor joylar yaqinida</p>
              <button className="mt-4 bg-[#F26522] text-white px-6 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                Batafsil ma'lumot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels