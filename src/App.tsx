import closedNotebook from '/notebookclosed.png'
import openNotebook from '/notebookopen.png'
import pinkBackground from '/pinkbackground2.jpg'
import tPng from '/t.png'
import love from '/love.png'
import newWorkOpportunity from '/newworkopportunity.png'
import studioPalomaVideo from '/studiopaloma.mp4'
import crocsVideo from '/crocs.mp4'
import nappyVideo from '/nappy.mp4'
import nappyImage from '/nappy.jpg'
import nappyAltImage from '/nappyv2.png'
import './App.css'
import { useState, useEffect } from 'react'

import '@fontsource/poppins';

function App() {
  const [currPage, setCurrPage] = useState<'closed' | 'open' | 'newWorkOpportunity' | 'love' | 't'>('closed')
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [isSliding, setIsSliding] = useState(false)
  const [slideInTrigger, setSlideInTrigger] = useState<string | null>(null)
  const [renderAnimatedImages, setRenderAnimatedImages] = useState(true)

  const marqueeText = 'creative | dancer | stylist | founder | director | student'
  
  const baseBlockClasses =
    'relative mx-auto flex w-full flex-1 flex-col px-7 py-6 backdrop-blur-md'
  const blockSubtitleClasses =
    'mb-[0.4rem] text-[clamp(0.85rem,1vw+0.5rem,1rem)] uppercase tracking-[0.2em] text-[#5d624a]'
  const blockTitleClasses =
    'mb-[0.8rem] text-[clamp(1.4rem,2vw+0.8rem,2.1rem)] uppercase tracking-[0.08em] text-[#3a1307] font-bold'
  const blockBodyClasses =
    'grid gap-[0.35rem] text-[clamp(0.95rem,1vw+0.6rem,1.05rem)] leading-[1.45] text-[#f4f4f4]'
  const blockLineBaseClasses =
    'pointer-events-none absolute top-1/2 hidden h-[2px] w-[clamp(40px,10vw,80px)] -translate-y-1/2 bg-white/40 md:block'
  const baseVideoClasses =
    'w-full max-w-[clamp(200px,24vw,320px)] overflow-hidden rounded-[1rem] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] object-cover'

  useEffect(() => {
    if (currPage === 't' || currPage === 'love' || currPage === 'newWorkOpportunity') {
      setSlideInTrigger(currPage)
    } else if (currPage === 'open') {
      setRenderAnimatedImages(true)
    }
  }, [currPage])

  const handleOpenImageClick = (pageKey: 't' | 'love' | 'newWorkOpportunity') => {
    if (isSliding) return

    setRenderAnimatedImages(false)
    setIsSliding(true)
    setTimeout(() => {
      setCurrPage(pageKey)
      setIsSliding(false)
    }, 800)
  }

  return (
    <div
      className="flex items-center justify-center h-screen w-screen overflow-hidden"
      style={{ backgroundImage: `url(${pinkBackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      {currPage === 'open' && (
        <div className="relative w-full aspect-[3/2]">
          <img
            src={openNotebook}
            className={`absolute inset-0 h-full w-full object-contain z-10 ${isSliding ? 'animate-[slideUp_0.8s_ease-in-out_forwards]' : ''
              }`}
            onLoad={() => setBackgroundLoaded(true)}
          />
          {backgroundLoaded && renderAnimatedImages && (
            <>
              <img
                src={tPng}
                className="absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 pointer-events-auto top-[80.5%] left-[55.5%] w-[5.5%] animate-[jitter2_0.6s_infinite]"
                onClick={() => handleOpenImageClick('t')}
              />
              <img
                src={love}
                className="absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 pointer-events-auto top-[46%] left-[54%] w-[5.5%] animate-[stretch_4s_infinite]"
                onClick={() => handleOpenImageClick('love')}
              />
              <img
                src={newWorkOpportunity}
                className="absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 pointer-events-auto top-[25%] left-[30%] w-[14%] animate-[glow-streak_4s_infinite]"
                onClick={() => handleOpenImageClick('newWorkOpportunity')}
              />
            </>
          )}
        </div>
      )}
      {currPage === 'closed' &&
        (
          <>
            <img
              src={closedNotebook}
              className="absolute z-10 h-11/12 animate-[jitter_0.3s_infinite] object-contain"
              onClick={() => {
                setCurrPage('open')
                setBackgroundLoaded(false)
              }}
            />
          </>
        )}
      {currPage === 't' &&
        (
          <>
            <img
              src={tPng}
              className={`absolute z-10 w-[20%] md:w-[8%] object-contain top-[65%] left-[50%] ${slideInTrigger === 't' ? 'animate-[slideInT_0.8s_ease-in-out_forwards]' : ''
                }`}
              onClick={() => setCurrPage('open')}
            />
              <div className="w-full pt-8 relative">
              <div className="flex items-start flex-col masked-title">
                <svg className="masked-svg" width="100%" height="100%">
                  <defs>
                    <mask id="text-mask">
                      <rect width="100%" height="100%" fill="black" />
                      <text x="20%" y="8rem" className="mask-text" fill="white">Tiara</text>
                      <text x="24%" y="16rem" className="mask-text" fill="white">Matusin</text>
                    </mask>
                  </defs>
                </svg>
                <div className="masked-video-wrapper">
                  <video autoPlay loop muted playsInline>
                    <source src={nappyVideo} type="video/mp4" />
                  </video>
                </div>
                <span className="text-[clamp(4rem,8vw,7rem)] font-light uppercase block">Tiara</span>
              </div>
              <div className="marquee">
                <div className="marquee_blur" aria-hidden="true">
                  <div className="marquee_content">
                    <p className="marquee_text">{marqueeText}</p>
                    <p className="marquee_text">{marqueeText}</p>
                  </div>
                </div>
                <div className="marquee_clear">
                  <div className="marquee_content">
                    <p className="marquee_text">{marqueeText}</p>
                    <p className="marquee_text">{marqueeText}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      {currPage === 'love' && (
        <div className="relative w-full h-full max-w-4xl">
          <div
            className="absolute top-0 flex z-10"
            style={{ left: 'calc(8vw - (100vw - 100%)/2)' }}
          >
            <img
              src={love}
              className="object-contain w-[30%] cursor-pointer transition-transform hover:scale-105"
              alt="Love notebook stamp"
              onClick={() => setCurrPage('open')}
            />
          </div>
          <div className="h-full overflow-y-auto px-6 pt-36 pb-10 space-y-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[clamp(1.5rem,4vw,3rem)]">
              <div
                className={`${baseBlockClasses} md:max-w-[clamp(220px,50vw,360px)] md:ml-[max(0px,3vw)] md:mr-auto`}
              >
                <span className={`${blockLineBaseClasses} md:left-[-22%]`} aria-hidden="true" />
                <p className={blockSubtitleClasses}>Creative Director & Strategist</p>
                <h2 className={blockTitleClasses}>Studio Paloma</h2>
                <div className={blockBodyClasses}>
                  <p>2025 – Present</p>
                  <p>→ Relaunched the brand with updated identity, logo suite, and color palette.</p>
                  <p>→ Directed campaigns including the Birthstone/Gem Collection.</p>
                  <p>→ Managed social, digital, and e-commerce content strategy.</p>
                </div>
              </div>
              <video
                className={`${baseVideoClasses} aspect-[9/16] self-center md:self-stretch`}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={studioPalomaVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <img
                src={nappyImage}
                alt="NAPPY Collective poster"
                className="relative top-[50px] lg:top-[12rem] flex-1 min-w-0 rounded-[1rem] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.08)] object-cover md:top-0"
              />
              <img
                src={nappyAltImage}
                alt="NAPPY Collective lookbook"
                className="flex-1 min-w-0 translate-y-3 rounded-[1rem] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.08)] object-cover"
              />
              <div
                className={`${baseBlockClasses} min-w-[260px] md:ml-auto md:mr-[max(0px,6vw)] md:max-w-[clamp(280px,28vw,360px)]`}
              >
                <span
                  aria-hidden="true"
                  className={`${blockLineBaseClasses} md:right-[-22%]`}
                />
                <p className={blockSubtitleClasses}>Co-Founder, Producer & Artistic Director</p>
                <h2 className={blockTitleClasses}>NAPPY Collective</h2>
                <div className={blockBodyClasses}>
                  <p>2024 – Present</p>
                  <p>→ Produced the second NAPPY season showcase in October 2024.</p>
                  <p>→ Directed choreography, programming, and multidisciplinary production.</p>
                  <p>→ Managed production budgets, partnerships, and community engagement.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-16">
              <div
                className={`${baseBlockClasses} md:max-w-[clamp(220px,50vw,360px)] md:ml-[max(0px,10vw)] md:mr-auto`}
              >
                <span
                  aria-hidden="true"
                  className={`${blockLineBaseClasses} md:left-[-26%]`}
                />
                <p className={blockSubtitleClasses}>Wardrobe Assistant</p>
                <h2 className={blockTitleClasses}>Crocs Global Campaign — Spring 2025</h2>
                <div className={blockBodyClasses}>
                  <p>2024 – Present</p>
                  <p>→ Supported styling and wardrobe coordination for a global campaign shoot.</p>
                  <p>→ Managed fittings, outfit tracking, and on-set logistics.</p>
                </div>
              </div>
              <video
                className="aspect-[3/4] mt-6 h-full w-full max-w-[360px] flex-1 self-center overflow-hidden rounded-[1rem] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] object-cover md:self-stretch md:max-w-[clamp(220px,28vw,360px)]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={crocsVideo} type="video/mp4" />
              </video>
            </div>

            <div
              className={`${baseBlockClasses} md:ml-auto md:mr-[max(0px,12vw)] md:max-w-[clamp(220px,50vw,360px)]`}
            >
              <span className={`${blockLineBaseClasses} md:right-[-28%]`} aria-hidden="true" />
              <p className={blockSubtitleClasses}>Senior Merchandiser, Retail Merchandising</p>
              <h2 className={blockTitleClasses}>Aritzia</h2>
              <div className={blockBodyClasses}>
                <p>2024 – Present</p>
                <p>→ Directed seasonal product placement and visual merchandising across boutiques.</p>
                <p>→ Optimized store presentation and operational workflows.</p>
                <p>→ Managed inventory and cross-functional merchandising execution.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currPage === 'newWorkOpportunity' && (
        <div className="h-full w-full max-w-4xl mx-auto space-y-6 overflow-y-auto flex flex-col items-center justify-center px-6 py-10">
          <img
            src={newWorkOpportunity}
            className={`object-contain left-[20%] top-[20%] absolute w-[30%] ${slideInTrigger === 'newWorkOpportunity'
              ? 'animate-[slideInNewWork_0.8s_ease-in-out_forwards]'
              : ''
              }`}
            onClick={() => setCurrPage('open')}
          />
          <p className="text-center">
            I'm actively exploring creative roles in fashion and the arts where I can flex my full range of skills — from styling,
            trend forecasting, and merchandising to creative direction and production management. I'm particularly drawn to positions
            that are culturally engaged, forward-thinking, and allow for meaningful collaboration across disciplines. I'm open to remote,
            hybrid, or in-person opportunities in New York City or Eastern Canada, ideally in environments where I can apply my experience
            in fashion, brand strategy, and creative storytelling while continuing to grow across multiple areas of expertise. My goal is
            to contribute to projects and teams that value innovation, cultural perspective, and thoughtful execution, whether it's through
            product-focused roles, campaign development, or multidisciplinary creative initiatives.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
