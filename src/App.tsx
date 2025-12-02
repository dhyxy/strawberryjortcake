import closedNotebook from '/notebookclosed.png'
import openNotebook from '/notebookopen.png'
import pinkBackground from '/pinkbackground2.jpg'
import tPng from '/t.png'
// import love from '/love.png'
import newWorkOpportunity from '/newworkopportunity.png'
import studioPalomaVideo from '/studiopaloma.mp4'
import crocsVideo from '/crocs.mp4'
import nappyVideo from '/nappy.mp4'
import nappyImage from '/nappy.jpg'
import nappyAltImage from '/nappyv2.png'
import nappyPhoto1 from '/nappy/_DSC6003.jpg'
import nappyPhoto2 from '/nappy/_DSC6054.jpg'
import nappyPhoto3 from '/nappy/_DSC6121.jpg'
import nappyPhoto4 from '/nappy/_DSC6128.jpg'
import nappyPhoto5 from '/nappy/_DSC6151.jpg'
import nappyPhoto6 from '/nappy/_DSC6173.jpg'
import nappyPhoto7 from '/nappy/_DSC6254.jpg'
import nappyPhoto8 from '/nappy/appy 4.jpeg'
import nappyPhoto9 from '/nappy/nappy 2.jpeg'
import nappyPhoto10 from '/nappy/nappy 3.jpeg'
import nappyPhoto11 from '/nappy/nappy 5.jpeg'
import nappyPhoto12 from '/nappy/nappy 6 .jpeg'
import nappyPhoto13 from '/nappy/nappy 7 .jpeg'
import nappyPhoto14 from '/nappy/nappy 8 .jpeg'
import nappyPhoto15 from '/nappy/NAPPY SHOW POSTER V2 - ADDED SPONSOR LOGO.jpg'
import nappyPhoto16 from '/nappy/nappyv2.png'
import studioPalomaPhoto1 from '/studiopaloma/Blue and White Illustrated Local Merchants Pop up Market Instagram Post.png'
import studioPalomaPhoto2 from '/studiopaloma/Blue Retro Cocktail Party Invitation Flyer (1).png'
import studioPalomaPhoto3 from '/studiopaloma/Brand Kit.png'
import studioPalomaPhoto4 from '/studiopaloma/Dark Green and Purple Illustrative Farmer Pop-up Market Poster (2).png'
import './App.css'
import { useState, useEffect } from 'react'

// @ts-expect-error - ignore error
import '@fontsource/poppins';

function App() {
  const [currPage, setCurrPage] = useState<'closed' | 'open' | 'newWorkOpportunity' | 'love' | 't' | 'nappy' | 'studiopaloma'>('closed')
  
  const nappyPhotos = [
    nappyPhoto1, nappyPhoto2, nappyPhoto3, nappyPhoto4, nappyPhoto5, nappyPhoto6,
    nappyPhoto7, nappyPhoto8, nappyPhoto9, nappyPhoto10, nappyPhoto11, nappyPhoto12,
    nappyPhoto13, nappyPhoto14, nappyPhoto15, nappyPhoto16
  ]
  
  const studioPalomaPhotos = [
    studioPalomaPhoto1, studioPalomaPhoto2, studioPalomaPhoto3, studioPalomaPhoto4
  ]
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [isSliding, setIsSliding] = useState(false)
  const [slideInTrigger, setSlideInTrigger] = useState<string | null>(null)
  const [renderAnimatedImages, setRenderAnimatedImages] = useState(true)

  const marqueeText = 'creative | dancer | stylist | founder | director | nature lover | merchandiser | strategist'

  const baseBlockClasses =
    'relative mx-auto flex w-full flex-1 flex-col px-7 py-6 backdrop-blur-md'
  const blockSubtitleClasses =
    'mb-[0.4rem] text-[clamp(0.85rem,1vw+0.5rem,1rem)] uppercase tracking-[0.2em] text-[#E1A4B6] font-bold'
  const blockTitleClasses =
    'mb-[0.8rem] text-[clamp(1.4rem,2vw+0.8rem,2.1rem)] uppercase tracking-[0.08em] text-[#f4f4f4] font-bold text-shadow-md text-shadow-[#f4f4f4]'
  const blockBodyClasses =
    'grid gap-[0.35rem] text-[clamp(0.95rem,1vw+0.6rem,1.05rem)] leading-[1.45] text-[#f4f4f4]'
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
            <div className="absolute top-0 left-0 w-full">
              <video autoPlay loop muted playsInline className="w-full h-auto blur-sm">
                <source src={nappyVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative w-full h-full max-w-5xl mt-80">
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
              <div className="h-full overflow-y-auto px-6 pt-36 pb-10 space-y-10">
                <p className="text-justify text-xl text-[#f4f4f4]">
                  <span className="font-bold md:text-[#E1A4B6] text-4xl">Tiara Matusin</span> is a multidisciplinary creative director, cultural architect, and movement artist based in New York City. Rooted in Mohkínstsis/Calgary, she builds at the intersection of fashion, performance, and production — crafting creative ecosystems that are visually compelling, culturally intentional, and future-driven.

                  As the Co-Founder and Artistic Director of NAPPY, Tiara established Western Canada’s first all-Black contemporary dance collective, transforming the regional arts landscape through work that disrupts Eurocentric frameworks and centers Black futurism, representation, and community impact.

                  Her practice spans creative direction, merchandising, brand development, and live production. Tiara has led product initiatives at Aritzia, contributed to culture-forward creative projects with Crocs, and shaped brand identity and digital strategy for Studio Paloma. Her ability to fuse aesthetics with strategic clarity positions her as a creative leader who moves seamlessly between concept and execution.

                  Across all her work, Tiara is dedicated to building platforms, performances, and brand environments that are intentional, inclusive, and strategically designed — leveraging her expertise in merchandising, creative direction, and production to deliver work that is both culturally resonant and operationally excellent.
                </p>
                <div className="flex flex-col md:flex-row backdrop-blur-sm">
                  <div
                    className={`${baseBlockClasses} md:ml-auto md:max-w-[clamp(220px,50vw,360px)]`}
                  >
                    <p className={blockSubtitleClasses}>Internal Influencer Program, Content Creator</p>
                    <div className={blockBodyClasses}>
                      <p>July 2023 - Dec 2023</p>
                      <p>→ Selected for pilot program for creative direction and styling.</p>
                      <p>→ Produced weekly branded digital content aligned with seasonal priorities.</p>
                      <p>→ Supported internal engagement and social media initiatives.</p>
                    </div>
                  </div>
                  <div
                    className={`${baseBlockClasses} md:ml-auto`}
                  >
                    <p className={blockSubtitleClasses}>Senior Merchandiser, Retail Merchandising</p>
                    <h2 className={blockTitleClasses}>Aritzia</h2>
                    <div className={blockBodyClasses}>
                      <p>2018 – Present</p>
                      <p>→ Directed seasonal product placement and visual merchandising across boutiques.</p>
                      <p>→ Optimized store presentation and operational workflows.</p>
                      <p>→ Managed inventory and cross-functional merchandising execution.</p>
                    </div>
                  </div>
                  <div
                    className={`${baseBlockClasses} md:ml-auto`}
                  >
                    <p className={blockSubtitleClasses}>Merchant PLM Coordinator, Product Integration</p>
                    <div className={blockBodyClasses}>
                      <p>Nov 2022 - Dec 2023</p>
                      <p>→ Oversaw line plans, pricing, and go-to-market strategy for six vertical brands.</p>
                      <p>→ Developed reporting tools and frameworks to improve process efficiency.</p>
                      <p>→ Partnered with Design, Buying, Marketing, and Production for timely product launches.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-start backdrop-blur-sm">
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
                    className={`${baseBlockClasses} min-w-[260px] md:ml-auto md:mr-[max(0px,6vw)] md:max-w-[clamp(280px,28vw,360px)] cursor-pointer hover:opacity-90 transition-opacity`}
                    onClick={() => setCurrPage('nappy')}
                  >
                    <p className={blockSubtitleClasses}>Co-Founder, Producer & Artistic Director</p>
                    <h2 className={blockTitleClasses}>NAPPY</h2>
                    <div className={blockBodyClasses}>
                      <p>2024 – Present</p>
                      <p>→ Produced the second NAPPY season showcase in October 2024.</p>
                      <p>→ Directed choreography, programming, and multidisciplinary production.</p>
                      <p>→ Managed production budgets, partnerships, and community engagement.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[clamp(1.5rem,4vw,3rem)] backdrop-blur-sm">
                  <div
                    className={`${baseBlockClasses} md:max-w-[clamp(220px,50vw,360px)] md:ml-[max(0px,3vw)] md:mr-auto cursor-pointer hover:opacity-90 transition-opacity`}
                    onClick={() => setCurrPage('studiopaloma')}
                  >
                    <p className={blockSubtitleClasses}>Creative Director & Strategist</p>
                    <h2 className={blockTitleClasses}>Studio Paloma</h2>
                    <div className={blockBodyClasses}>
                      <p>Jan 2025 – Present</p>
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
                <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-16 backdrop-blur-sm">
                  <div
                    className={`${baseBlockClasses} md:max-w-[clamp(220px,50vw,360px)] md:ml-[max(0px,10vw)] md:mr-auto`}
                  >
                    <p className={blockSubtitleClasses}>Wardrobe Assistant</p>
                    <h2 className={blockTitleClasses}>Crocs Global Campaign — Spring 2025</h2>
                    <div className={blockBodyClasses}>
                      <p>2024</p>
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
          </div>
          <div className="h-full overflow-y-auto px-6 pt-36 pb-20 space-y-10">
            <div className="flex flex-row">
              <div
                className={`${baseBlockClasses} md:ml-auto md:max-w-[clamp(220px,50vw,360px)]`}
              >
                <p className={blockSubtitleClasses}>Internal Influencer Program, Content Creator</p>
                <div className={blockBodyClasses}>
                  <p>July 2023 - Dec 2023</p>
                  <p>→ Selected for pilot program for creative direction and styling.</p>
                  <p>→ Produced weekly branded digital content aligned with seasonal priorities.</p>
                  <p>→ Supported internal engagement and social media initiatives.</p>
                </div>
              </div>
              <div
                className={`${baseBlockClasses} md:ml-auto`}
              >
                <p className={blockSubtitleClasses}>Senior Merchandiser, Retail Merchandising</p>
                <h2 className={blockTitleClasses}>Aritzia</h2>
                <div className={blockBodyClasses}>
                  <p>2018 – Present</p>
                  <p>→ Directed seasonal product placement and visual merchandising across boutiques.</p>
                  <p>→ Optimized store presentation and operational workflows.</p>
                  <p>→ Managed inventory and cross-functional merchandising execution.</p>
                </div>
              </div>
              <div
                className={`${baseBlockClasses} md:ml-auto`}
              >
                <p className={blockSubtitleClasses}>Merchant PLM Coordinator, Product Integration</p>
                <div className={blockBodyClasses}>
                  <p>Nov 2022 - Dec 2023</p>
                  <p>→ Oversaw line plans, pricing, and go-to-market strategy for six vertical brands.</p>
                  <p>→ Developed reporting tools and frameworks to improve process efficiency.</p>
                  <p>→ Partnered with Design, Buying, Marketing, and Production for timely product launches.</p>
                </div>
              </div>
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
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[clamp(1.5rem,4vw,3rem)]">
              <div
                className={`${baseBlockClasses} md:max-w-[clamp(220px,50vw,360px)] md:ml-[max(0px,3vw)] md:mr-auto cursor-pointer hover:opacity-90 transition-opacity`}
                onClick={() => setCurrPage('studiopaloma')}
              >
                <p className={blockSubtitleClasses}>Creative Director & Strategist</p>
                <h2 className={blockTitleClasses}>Studio Paloma</h2>
                <div className={blockBodyClasses}>
                  <p>Jan 2025 – Present</p>
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
            <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-16">
              <div
                className={`${baseBlockClasses} md:max-w-[clamp(220px,50vw,360px)] md:mr-[max(0px,10vw)] md:ml-auto`}
              >
                <video
                  className="aspect-[3/4] mt-6 h-full w-full max-w-[360px]  overflow-hidden rounded-[1rem] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] object-cover md:self-stretch md:max-w-[clamp(220px,28vw,360px)]"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={crocsVideo} type="video/mp4" />
                </video>
                <p className={blockSubtitleClasses}>Wardrobe Assistant</p>
                <h2 className={blockTitleClasses}>Crocs Global Campaign — Spring 2025</h2>
                <div className={blockBodyClasses}>
                  <p>2024</p>
                  <p>→ Supported styling and wardrobe coordination for a global campaign shoot.</p>
                  <p>→ Managed fittings, outfit tracking, and on-set logistics.</p>
                </div>
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
          <p className="text-justify text-[#f4f4f4] text-2xl">
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

      {currPage === 'nappy' && (
        <div className="h-full w-full overflow-y-auto px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setCurrPage('t')}
              className="mb-6 text-[#E1A4B6] hover:text-[#f4f4f4] transition-colors cursor-pointer"
            >
              ← Back
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nappyPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`NAPPY photo ${index + 1}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {currPage === 'studiopaloma' && (
        <div className="h-full w-full overflow-y-auto px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setCurrPage('t')}
              className="mb-6 text-[#E1A4B6] hover:text-[#f4f4f4] transition-colors cursor-pointer"
            >
              ← Back
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studioPalomaPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Studio Paloma photo ${index + 1}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
