import closedNotebook from '/notebookclosed.png'
import openNotebook from '/notebookopen.png'
import pinkBackground from '/pinkbackground2.jpg'
import tPng from '/t.png'
import love from '/love.png'
import newWorkOpportunity from '/newworkopportunity.png'
import studioPalomaVideo from '/studiopaloma.mp4'
import crocsVideo from '/crocs.mp4'
import nappyImage from '/nappy.jpg'
import nappyAltImage from '/nappyv2.png'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [currPage, setCurrPage] = useState<'closed' | 'open' | 'newWorkOpportunity' | 'love' | 't'>('closed')
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [isSliding, setIsSliding] = useState(false)
  const [slideInTrigger, setSlideInTrigger] = useState<string | null>(null)
  const [renderAnimatedImages, setRenderAnimatedImages] = useState(true)

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
            className={`absolute inset-0 w-full h-full object-contain z-10 ${isSliding ? 'slide-up' : ''}`}
            onLoad={() => setBackgroundLoaded(true)}
          />
          {backgroundLoaded && renderAnimatedImages && (
            <>
              <img
                src={tPng}
                className="overlay-image overlay-image--t jitter2"
                onClick={() => handleOpenImageClick('t')}
              />
              <img
                src={love}
                className="overlay-image overlay-image--love love-stretch"
                onClick={() => handleOpenImageClick('love')}
              />
              <img
                src={newWorkOpportunity}
                className="overlay-image overlay-image--newwork glow-streak"
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
              className="object-contain h-11/12 jitter z-10 absolute"
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
            <img src={tPng} className={`object-contain w-[8%] top-[70%] left-[50%] z-10 absolute ${slideInTrigger === 't' ? 'slide-in-t' : ''}`} onClick={() => setCurrPage('open')} />
            <h1>Who am I?</h1>
            <p>
              <ul>Over 7+ years working with some of the world's largest fashion brands</ul>
              <ul>Founded Western Canada's only all-black contemporary dance performance company</ul>
              <ul>Partnered and grew various brands 10x through brand development and social media strategy</ul>
            </p>
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
              className="object-contain w-32 md:w-40 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] cursor-pointer transition-transform hover:scale-105"
              alt="Love notebook stamp"
              onClick={() => setCurrPage('open')}
            />
          </div>
          <div className="h-full overflow-y-auto hide-scrollbar px-6 pt-36 pb-10 space-y-10">
            <div className="love-row love-row--studio">
              <div className="love-block love-block--left love-block--offset-xs">
                <p className="block-subtitle">Creative Director & Strategist</p>
                <h2 className="block-title">Studio Paloma</h2>
                <div className="block-body">
                  <p>2025 – Present</p>
                  <p>Studio Paloma · Creative Director & Strategist</p>
                  <p>→ Relaunched the brand with updated identity, logo suite, and color palette.</p>
                  <p>→ Directed campaigns including the Birthstone/Gem Collection.</p>
                  <p>→ Managed social, digital, and e-commerce content strategy.</p>
                </div>
              </div>
              <video
                className="love-video love-video--studio"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={studioPalomaVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-wrap items-start gap-6">
              <img
                src={nappyImage}
                alt="NAPPY Collective poster"
                className="flex-1 min-w-0 relative top-50 rounded-[1rem] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.08)]  object-cover"
              />
              <img
                src={nappyAltImage}
                alt="NAPPY Collective lookbook"
                className="flex-1 min-w-0 translate-y-3 rounded-[1rem] border border-[rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.08)] object-cover"
              />
              <div className="relative flex-1 min-w-[260px] rounded-[1rem] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.1)] px-7 py-6 backdrop-blur-[6px]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-18%] top-1/2 h-[2px] w-[clamp(40px,10vw,80px)] -translate-y-1/2 bg-white/40"
                />
                <p className="block-subtitle">Co-Founder, Producer & Artistic Director</p>
                <h2 className="block-title">NAPPY Collective</h2>
                <div className="block-body">
                  <p>2024 – Present</p>
                  <p>NAPPY Collective · Co-Founder, Producer & Artistic Director</p>
                  <p>→ Produced the second NAPPY season showcase in October 2024.</p>
                  <p>→ Directed choreography, programming, and multidisciplinary production.</p>
                  <p>→ Managed production budgets, partnerships, and community engagement.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-stretch gap-16">
              <div className="relative flex w-full max-w-[360px] flex-1 flex-col rounded-[1rem] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.1)] px-7 py-6 backdrop-blur-[6px]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 hidden h-[2px] w-[clamp(40px,10vw,80px)] -translate-y-1/2 bg-white/40 md:left-[-26%] md:block"
                />
                <p className="block-subtitle">Wardrobe Assistant</p>
                <h2 className="block-title">Crocs Global Campaign — Spring 2025</h2>
                <div className="block-body">
                  <p>2024 – Present</p>
                  <p>Crocs Global Campaign — Spring 2025 · Wardrobe Assistant (Contract)</p>
                  <p>→ Supported styling and wardrobe coordination for a global campaign shoot.</p>
                  <p>→ Managed fittings, outfit tracking, and on-set logistics.</p>
                </div>
              </div>
              <video
                className="flex-1 self-stretch w-full max-w-[360px] rounded-[1rem] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] overflow-hidden aspect-[3/4] h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={crocsVideo} type="video/mp4" />
              </video>
            </div>

            <div className="love-block love-block--right love-block--offset-lg">
              <p className="block-subtitle">Senior Merchandiser, Retail Merchandising</p>
              <h2 className="block-title">Aritzia</h2>
              <div className="block-body">
                <p>2024 – Present</p>
                <p>Aritzia · Senior Merchandiser, Retail Merchandising</p>
                <p>→ Directed seasonal product placement and visual merchandising across boutiques.</p>
                <p>→ Optimized store presentation and operational workflows.</p>
                <p>→ Managed inventory and cross-functional merchandising execution.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currPage === 'newWorkOpportunity' && (
        <div className="w-full h-full max-w-4xl px-6 py-10 overflow-y-auto thin-scroll space-y-6">
          <img
            src={newWorkOpportunity}
            className={`object-contain w-32 md:w-40 mx-auto ${slideInTrigger === 'newWorkOpportunity' ? 'slide-in-newwork' : ''}`}
            onClick={() => setCurrPage('open')}
          />
          <p>
            I’m actively exploring creative roles in fashion and the arts where I can flex my full range of skills — from styling,
            trend forecasting, and merchandising to creative direction and production management. I’m particularly drawn to positions
            that are culturally engaged, forward-thinking, and allow for meaningful collaboration across disciplines. I’m open to remote,
            hybrid, or in-person opportunities in New York City or Eastern Canada, ideally in environments where I can apply my experience
            in fashion, brand strategy, and creative storytelling while continuing to grow across multiple areas of expertise. My goal is
            to contribute to projects and teams that value innovation, cultural perspective, and thoughtful execution, whether it’s through
            product-focused roles, campaign development, or multidisciplinary creative initiatives.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
