import React from 'react';

export const ServiceAreaMap = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Wilayah Layanan Kami</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Embedded Google Map Area */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60912441961!2d107.25708892900388!3d-6.311545699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697779f67a2169%3A0x89e0ed650054359!2sKarawang%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1717654321000!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
              title="Peta Wilayah Layanan Karawang"
            ></iframe>
          </div>
          
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Kami melayani seluruh wilayah <strong>Karawang</strong> dan sekitarnya dengan respon cepat.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Karawang Barat</li>
              <li>• Karawang Timur</li>
              <li>• Telukjambe</li>
              <li>• Klari & sekitarnya</li>
            </ul>
            <p className="font-bold text-blue-800 dark:text-blue-400">
              Butuh layanan di luar area ini? Hubungi kami untuk konfirmasi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
