import { useRef } from "react";

const testimonials = [
  {
    text: `"I've always wanted to learn how to become a mechanic, but finding a program that accommodates accessibility was a challenge. SkillUP-Africa made it possible. With a skill, my path feels brighter, and I have a new direction to embark on a real career. My mentor was supportive, kind, and all resources, even the online ones, were accessible. I'm proud of the progress I've made!"`,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alex",
    title: "Mobility Challenged",
  },
  {
    text: `"Vocational training has always seemed out of reach for me due to my unique challenges. This platform made things so much easier. The lessons are engaging, the instructors are understanding, and the support is amazing. Now, I feel more confident about entering the workforce. I finally feel confident about making a future for myself!"`,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah",
    title: "Autism Spectrum Disorder",
  },
  {
    text: `"As someone who is deaf, vocational classrooms have often left me feeling excluded, especially without access to sign language support. SkillUP-Africa changed that. The online resources are accessible, and the mentors are patient and understanding. I'm excited to use my new skills to start a business and inspire others in my community!"`,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Clare",
    title: "Deaf",
  },
];

const Testimonials = () => {
  // Duplicate testimonials for seamless looping
  const cards = [...testimonials, ...testimonials];
  const containerRef = useRef(null);
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-20">
      <header className="text-7xl font-bold text-gray-800">
        What Students Say
      </header>
      <div className="w-full overflow-x-hidden mt-8" style={{ maxWidth: 1200 }}>
        <div
          ref={containerRef}
          className="flex flex-row gap-8 animate-scroll-testimonials hover:[animation-play-state:paused] items-stretch"
          style={{ minWidth: 900 }}
        >
          {cards.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-72 flex-shrink-0"
              style={{
                minWidth: "280px",
                maxWidth: "420px",
                width: "auto",
              }}
            >
              <p className="mb-4 text-sm leading-relaxed flex-grow">{t.text}</p>
              <div className="flex flex-row items-center gap-2 mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-testimonials {
          animation: scroll-testimonials 24s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
