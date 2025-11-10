import closedNotebook from '/notebookclosed.png'
import openNotebook from '/notebookopen.png'
import pinkBackground from '/pinkbackground2.jpg'
import tPng from '/t.png'
import love from '/love.png'
import newWorkOpportunity from '/newworkopportunity.png'
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
      {currPage === 'love' &&
        (
          <>
            <img src={love} className={`object-contain z-10 w-[20%] absolute ${slideInTrigger === 'love' ? 'slide-in-love' : ''}`} onClick={() => setCurrPage('open')} />
            <p>
              2025 – Present
              <br />
              Studio Paloma · Creative Director & Strategist
              → Relaunched the brand with updated identity, logo suite, and color palette.
              → Directed campaigns including the Birthstone/Gem Collection.
              → Managed social, digital, and e-commerce content strategy.
              <br />
              2024 – Present
              <br />
              NAPPY Collective · Co-Founder, Producer & Artistic Director
              → Produced the second NAPPY season showcase in October 2024.
              → Directed choreography, programming, and multidisciplinary production.
              → Managed production budgets, partnerships, and community engagement.
              <br />
              September 2024
              <br />
              Crocs Global Campaign — Spring 2025 · Wardrobe Assistant (Contract)
              → Supported styling and wardrobe coordination for a global campaign shoot.
              → Managed fittings, outfit tracking, and on-set logistics.
              <br />
              December 2024 – June 2025
              <br />
              Aritzia · Senior Merchandiser, Retail Merchandising
              → Directed seasonal product placement and visual merchandising across boutiques.
              → Optimized store presentation and operational workflows.
              → Managed inventory and cross-functional merchandising execution.
              <br />
              December 2023 – December 2024
              <br />
              Aritzia · Merchandiser
              → Managed seasonal assortments and line plans across multiple brands.
              → Collaborated on visual merchandising, in-store layout, and sales initiatives.
              → Coordinated inventory and product flow between distribution centers and stores.
              <br />
              November 2022 – December 2023
              <br />
              Aritzia · Merchant PLM Coordinator, Product Integration
              → Oversaw line plans, pricing, and go-to-market strategy for six vertical brands.
              → Developed reporting tools and frameworks to improve process efficiency.
              → Partnered with Design, Buying, Marketing, and Production for timely product launches.
              <br />
              July 2023 – December 2023
              <br />
              Aritzia · Internal Influencer Program, Content Creator (Contract)
              → Selected for pilot program for creative direction and styling.
              → Produced weekly branded digital content aligned with seasonal priorities.
              → Supported internal engagement and social media initiatives.
              <br />
              October 2018 – November 2022
              <br />
              Aritzia · Stylist / Retail
              → Styled clients and supported boutique operations.
              → Contributed to visual merchandising, customer experience, and team training.
              <br />
              April 2022
              <br />
              NAPPY Collective · Co-Founder, Producer & Artistic Director
              → Produced NAPPY’s first season showcase.
              → Directed choreography, programming, and production logistics.
              <br />
              2018 – 2021
              <br />
              University of Calgary · BA Dance + Minor in Biological Sciences
              → Specialized in contemporary performance, choreography, and research.
              → Choreographic debut with Asphalt in Fluid Festival’s 5 Minutes to Change the World Cabaret.
            </p>
          </>
        )}
      {currPage === 'newWorkOpportunity' &&
        (
          <>
            <img src={newWorkOpportunity} className={`object-contain w-[20%] z-10 absolute ${slideInTrigger === 'newWorkOpportunity' ? 'slide-in-newwork' : ''}`} onClick={() => setCurrPage('open')} />
            <p>
              I’m actively exploring creative roles in fashion and the arts where I can flex my full range of skills — from styling, trend forecasting, and merchandising to creative direction and production management. I’m particularly drawn to positions that are culturally engaged, forward-thinking, and allow for meaningful collaboration across disciplines.
              I’m open to remote, hybrid, or in-person opportunities in New York City or Eastern Canada, ideally in environments where I can apply my experience in fashion, brand strategy, and creative storytelling while continuing to grow across multiple areas of expertise. My goal is to contribute to projects and teams that value innovation, cultural perspective, and thoughtful execution, whether it’s through product-focused roles, campaign development, or multidisciplinary creative initiatives.
            </p>
          </>
        )}
    </div>
  )
}

export default App
