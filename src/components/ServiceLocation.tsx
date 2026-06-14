import React from 'react';

export const ServiceLocation = () => {
    return (
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Area Cakupan Kami</h2>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60912441961!2d107.25708892900388!3d-6.311545699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697779f67a2169%3A0x89e0ed650054359!2sKarawang%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1717654321000!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Peta Wilayah Layanan Karawang"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
