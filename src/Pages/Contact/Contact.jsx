import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="py-8" id="contact">
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-nemo-dark">Biz bilan bog'lanish</h2>
              <p className="text-xl text-gray-600">Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Ismingiz</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email manzilingiz</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Telefon raqamingiz</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="subject">Mavzu</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Xabaringiz</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-nemo-dark"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
                  >
                    Yuborish
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-nemo-dark mb-4">Aloqa ma'lumotlari</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
                    <p>Tel: +998 95 150 00 00</p>
                    <p>Email: info@nemoavia.uz</p>
                    <p>Ish vaqti: Du-Sha 24 soat</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full h-[350px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2835640978988!2d69.23692447590305!3d41.28093263920834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2z0YPQu9C40YbQsCDQnNGD0LrQuNC80LggNDQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1734545057788!5m2!1sru!2s"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg border: 0px"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
