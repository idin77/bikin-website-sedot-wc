import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  prompt: string;
  name: string;
}

const testimonials: Testimonial[] = [
  { id: 1, prompt: "Professional man in office, testimonials, business owner, Karawang", name: "Pak Budi" },
  { id: 2, prompt: "Confident woman, clean office background, happy, Karawang business owner", name: "Ibu Ani" },
  { id: 3, prompt: "Professional man, modern office, smiling, Karawang business partner", name: "Pak Cepi" },
];

export const VideoTestimonials = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Testimoni Pemilik Bisnis Lokal
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <VideoItem key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoItem = ({ testimonial }: { testimonial: Testimonial }) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This calls our full-stack endpoint
    const generate = async () => {
      try {
        const genRes = await fetch("/api/generate-video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: testimonial.prompt }),
        });
        const { operationName } = await genRes.json();

        // Polling
        let done = false;
        while (!done) {
          await new Promise(resolve => setTimeout(resolve, 5000));
          const statusRes = await fetch("/api/video-status", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ operationName }),
          });
          const statusData = await statusRes.json();
          done = statusData.done;
        }

        setVideoSrc(`/api/video-download?operationName=${encodeURIComponent(operationName)}`);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    generate();
  }, [testimonial.prompt]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl">
      {loading ? (
        <div className="h-60 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center animate-pulse text-gray-500">
            Generating testimoni...
        </div>
      ) : videoSrc ? (
        <video src={videoSrc} controls className="w-full h-60 rounded-xl object-cover" />
      ) : (
        <div className="h-60 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center text-red-500">
            Error loading
        </div>
      )}
      <p className="mt-4 font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
    </div>
  );
};
