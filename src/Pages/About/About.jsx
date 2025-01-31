import React from "react";

const About = () => {
  return (
    <div className="py-8" id="about">
      <div className="container mx-auto px-4 overflow-hidden">
    
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Biz haqimizda</h1>
          <p className="text-xl text-gray-600">Sizning ishonchli sayohat hamkoringiz</p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Bizning vazifamiz</h2>
            <p className="text-gray-600">
              Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay
              sayohat xizmatlarini taqdim etish.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Bizning maqsadimiz</h2>
            <p className="text-gray-600">
              O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro
              miqyosda tan olingan brend bo'lish.
            </p>
          </div>
        </div>

       
        <div className="px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <p className="text-gray-600 leading-relaxed mb-4 text-[17px]">
                Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar
                taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas
                xotiralar yaratishga yordam beramiz.Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
              Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.
              </p>
            </div>
            <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2">
                <img
                  src="https://www.nemoaviatrip.uz/assets/tour1-CzT4uSuF.jpg"
                  alt="Tour Experience"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <img
                src="https://www.nemoaviatrip.uz/assets/tour2-C-pCsb7w.jpg"
                alt="Beautiful Destinations"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://www.nemoaviatrip.uz/assets/tour3-Dfr3e2oJ.jpg"
                alt="Comfortable Travels"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

       
        <div className="mb-16 mt-10">
          <h2 className="text-3xl font-bold text-center mb-12">Bizning jamoa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Direktor",
              "Yurist",
              "Operator",
              "Administrator",
            ].map((role, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0.5 bg-gradient-to-r from-[#F26522] to-[#E85A1F] rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[120px]">
                  <p className="text-xl font-medium text-gray-800">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
