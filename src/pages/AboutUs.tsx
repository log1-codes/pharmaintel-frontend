import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-7 pt-32 text-[#E6EAF2] font-['Inter'] overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2,6,23,0.86) 0%, rgba(2,6,23,0.72) 35%, rgba(2,6,23,0.62) 60%, rgba(2,6,23,0.82) 100%), url('/Gemini_Generated_Image_k4it8mk4it8mk4it (4).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <main 
        className="w-full max-w-[980px] rounded-[20px] p-6 sm:p-7 backdrop-blur-[10px]"
        style={{
          background: 'rgba(2, 6, 23, 0.68)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)'
        }}
      >
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4 sm:mb-5">
          <div className="flex flex-col gap-1.5">
            <small className="text-white/75 tracking-[0.14em] uppercase font-semibold text-xs">
              PharmaIntel
            </small>
            <h1 className="text-[clamp(22px,3.2vw,34px)] leading-[1.15] tracking-[-0.02em]">
              <span className="text-[#E6EAF2]" style={{ textShadow: '0 0 16px rgba(192, 38, 211, 0.22), 0 0 32px rgba(255, 91, 77, 0.12)' }}>
                Why the name “AmenthIntel”?
              </span>
            </h1>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2.5 no-underline px-4 py-3 rounded-full border border-[#C026D3]/60 bg-[#C026D3]/15 text-white font-bold transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#C026D3]/25 hover:border-[#C026D3]/85 whitespace-nowrap w-full sm:w-auto justify-center"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>

        <section className="mt-2.5">
          <h2 className="text-[20px] mb-3 text-white font-semibold">Origins of AmenthIntel</h2>

          <div className="text-[rgba(230,234,242,0.82)] text-[15px] leading-[1.85] space-y-3.5 text-justify">
            <p>
              Amenth is for <strong className="text-white">Amethyst</strong> and Intel is obviously for <strong className="text-white">Intelligence</strong> leading to the hybrid name <strong className="text-white">AmenthIntel</strong>.
            </p>

            <p>
              The amethyst stone was a rare and valuable in the ancient world. The stone was associated with royalty, luxury and the divine
              due to its purple color which was highly prized due to its rarity (this is why purple is still considered the “Royal” color).
            </p>

            <p>
              The very name amethyst comes from the ancient Greek word <em className="italic">amethystos</em> (ἀμέθυστος), which translates directly to
              <strong className="text-white">“not intoxicated”</strong>. Greeks and Romans believed the stone possessed the power to prevent drunkenness,
              sometimes making their drinking vessels out of the stone to keep a clear mind while drinking at political or business meetings.
              Additionally, Egyptian soldiers occasionally wore amethyst amulets into battle, believing the stone would ward off deception,
              keep them calm under pressure, and prevent panic in the chaos of war.
            </p>

            <p>
              With this history in mind, we chose the name AmenthIntel to be your sober, clear minded guide to strategic information in the
              biopharma space. We endeavor to provide a clear, unbiased strategic landscape of existing and potential opportunities in the
              biopharmaceutical space.
            </p>

            <p>
              <strong className="text-white">Join with us to get better, concise and relevant information for your drug discovery strategy!</strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
