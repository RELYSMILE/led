import { useState, useEffect } from 'react'
import logo from './assets/logos/logo.png'
import lz_logo from './assets/logos/LZ_logo_silver-1000x302.png'
import './album.css';
import './App.css';
import Album from './Album'

function Home() {
  const [expandedItems, setExpandedItems] = useState({})
  const [email, setEmail] = useState('')
  const [showTerms, setShowTerms] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())
    const [currentSlide, setCurrentSlide] = useState(0)


    const slides = [
    {
      id: 1,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2025-07/pg_slide1.jpg',
      link: 'https://lz.lnk.to/PG50A'
    },
    {
      id: 2,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/lzbook_slide2.jpg',
      link: 'https://lz.lnk.to/PG50A'
    },
    {
      id: 3,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/lzbook_slide1.jpg',
      link: 'https://lnk.to/TSRTS4LP'
    },
    {
      id: 4,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/lzbook_slide2.jpg',
      link: 'https://lnk.to/TSRTS2CD'
    },
    {
      id: 5,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/lzbook_slide3.jpg',
      link: 'https://lnk.to/TSRTSDeluxe'
    },
    {
      id: 6,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/lzbook_slide4.jpg',
      link: 'https://lnk.to/TSRTSDeluxe'
    },
    {
      id: 7,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_4lp.jpg',
      link: 'https://lnk.to/TSRTS4LP'
    },
    {
      id: 8,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_2cd.jpg',
      link: 'https://lnk.to/TSRTS2CD'
    },
    {
      id: 9,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_superdeluxe.jpg',
      link: 'https://lnk.to/TSRTSDeluxe'
    },
    {
      id: 10,
      image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_bluray.jpg',
      link: 'https://lnk.to/TSRTSBluRay'
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])


  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleEmailClick = () => {
    setShowTerms(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for signing up!')
  }

  useEffect(() => {
    // Close terms when clicking outside
    const handleClickOutside = (e) => {
      if (!e.target.closest('.mlform')) {
        setShowTerms(false)
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => document.removeEventListener('mouseup', handleClickOutside)
  }, [])

  const menuItems = [
    { label: 'News', href: 'https://www.ledzeppelin.com/news' },
    { label: 'Discography', href: 'https://discography.ledzeppelin.com/', external: true },
    { label: 'Timeline', href: 'https://www.ledzeppelin.com/timelinebrowse' },
    { label: 'Photos', href: 'https://www.ledzeppelin.com/photos' },
    { label: 'Video', href: 'https://www.ledzeppelin.com/video-timeline' },
    { label: 'Forum', href: 'https://forums.ledzeppelin.com/', external: true },
    { label: 'Merchandise', href: 'https://store.ledzeppelin.com/', external: true },
    { label: 'Contact', href: 'https://www.ledzeppelin.com/contact-us' },
  ]

  const releaseLinks = [
    { label: 'Led Zeppelin', href: '#threeCol1' },
    { label: 'Led Zeppelin II', href: '#ledZeppelinIIa' },
    { label: 'Led Zeppelin III', href: '#ledZeppelinIIIa' },
    { label: 'Led Zeppelin IV', href: '#twoCol1' },
    { label: 'Houses of the Holy', href: '#ledZeppelinHOTH' },
    { label: 'Physical Graffiti', href: '#oneCol2' },
    { label: 'Presence', href: '#threeCol2' },
    { label: 'In Through The Out Door', href: '#ledZeppelinII' },
    { label: 'Coda', href: '#ledZeppelinIII' },
  ]

const albums = [
  {
    id: 'tsrts',
    title: 'The Song Remains The Same',
    subtitle: 'Super Deluxe Edition Box',
    format: '2CD + 4LP + 3DVD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_superdeluxe.jpg',
    orderLink: 'https://lnk.to/TSRTSDeluxe',
    details: [
      'Live from Madison Square Garden – July 1973',
      '15 tracks; remastered audio',
      '2 CDs',
      '4 LPs on 180-gram vinyl',
      '3 DVDs including Dolby Digital 5.1 surround sound',
      'HD download card of entire album in 96 kHz/24-bit audio',
      'Numbered art print of album cover',
      '28-page book',
      '20-page Replica of 1977 Japanese Cinema Programme'
    ]
  },
  {
    id: 'tsrts-vinyl',
    title: 'The Song Remains The Same',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format: '4LP (180g)',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_4lp.jpg',
    orderLink: 'https://lnk.to/TSRTS4LP',
    details: [
      'Live from Madison Square Garden – July 1973',
      '15 tracks; remastered audio',
      '4 LPs on 180-gram vinyl',
      '28-page book'
    ]
  },
  {
    id: 'tsrts-cd',
    title: 'The Song Remains The Same',
    subtitle: 'Remastered Original CD',
    format: '2CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_2cd.jpg',
    orderLink: 'https://lnk.to/TSRTS2CD',
    details: [
      'Live from Madison Square Garden – July 1973',
      '15 tracks; remastered audio',
      '2 CDs'
    ]
  },
  {
    id: 'tsrts-blu',
    title: 'The Song Remains The Same',
    subtitle: '5.1 & Stereo HD audio',
    format: '1 blu-ray disc',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_bluray.jpg',
    orderLink: 'https://lnk.to/TSRTSBluRay',
    details: [
      'Live from Madison Square Garden – July 1973',
      '15 tracks; remastered audio',
      '96kHz/24-bit 5.1 in DTS-HD Master Audio Surround',
      'PCM stereo and DTS-HD Master Audio Stereo',
      'Photo Gallery',
      '4 video performances from the concert'
    ]
  },
  {
    id: 'tsrts-dig',
    title: 'The Song Remains The Same',
    subtitle: 'Digital Download',
    format: 'Remastered album',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201812/tsrts_2cd.jpg',
    orderLink: 'https://lnk.to/TSRTSDownL',
    details: [
      'Live from Madison Square Garden – July 1973',
      '15 tracks',
      'Remastered audio'
    ]
  }
];

  const renderAlbumCard = (album) => (
    <div className="one_third" key={album.id}>
      <div className="portfolio_image">
        <div className="title">
          {album.subtitle}
          <h3>{album.format}</h3>
        </div>
        <img src={album.image} alt={album.title} />
        <ul className="list_empty">
          <li>
            <a target="_blank" href={album.orderLink} className="but_download" rel="noreferrer">
              ORDER NOW
            </a>
          </li>
        </ul>
        <span className={`moreText ${expandedItems[album.id] ? 'show' : ''}`}>
          {album.details.map((detail, idx) => (
            <span key={idx}>
              {detail}
              <br />
            </span>
          ))}
        </span>
        <a className="readMore" onClick={() => toggleExpand(album.id)}>
          {expandedItems[album.id] ? '[ HIDE INFO ]' : '[ MORE INFO ]'}
        </a>
      </div>
    </div>
  )

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header id="header" className="header">
        <div className="header-inner">
          <div className='header-inner-x'>
          <div className="header-left">
            <h1 id="site-name">
              <a href="https://www.ledzeppelin.com" rel="home">
                <span><img src={logo} alt="" /></span>
              </a>
            </h1>
          </div>
          
          <nav className="header-menu">
            <ul className="menu">
              {menuItems.map((item, idx) => (
                <li key={idx} className="leaf level-1">
                  <a 
                    href={item.href} 
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          </div>

          <div className="header-right">
            <div className="mlistwrapper">
              <div className="plain-ml-wrapper">
                <form className="mlistFormOne mlform twostep" onSubmit={handleSubmit}>
                  <div className="email fieldWrap" onClick={handleEmailClick}>
                    <input
                      type="email"
                      placeholder="Get Led Zeppelin news in your inbox"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  {showTerms && (
                    <>
                      <span className="consent-placeholder">
                        <input type="checkbox" id="artist_mktg_consent_1" required />
                        <label htmlFor="artist_mktg_consent_1">
                          I want Warner Music Group to send me marketing messages about{' '}
                          <span>Led Zeppelin</span>. Unsubscribe at any time. Please read our{' '}
                          <a href="https://www.ledzeppelin.com/privacy-policy" target="_blank" rel="noreferrer">
                            Privacy Policy
                          </a>
                          .
                        </label>
                      </span>
                      <div className="submit">
                        <input type="submit" className="submit mlistSubmit" value="Sign Me Up!" />
                      </div>
                      <div className="emailPopoverTip"></div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Navigation */}
      <div className="header-banner-nav">
        <ul className="releaseJumpList">
          {releaseLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <main id="main-wrapper">
        {/* Hero Slider Section */}
        <div className="carousel-container" style={{width: "100%",
  overflow: "hidden",
  position: "relative"}} >
          <div className="carousel-wrapper" style={{
  display: "flex",
  width: "100%",
  height: "100%",
  transform: `translateX(-${currentSlide * 100}%)`,
  transition: "transform 1.3s ease-in-out"
}}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
    minWidth: "100%",   // VERY IMPORTANT
    height: "100%",
    flexShrink: 0,
    position: "relative",
    transform: `translateX(${(index - currentSlide) * 100}%)`,

  }}
              >
                <a href={slide.link} target="_blank" rel="noreferrer">
                  <img 
                    src={slide.image} 
                    alt={`Slide ${slide.id}`}
                    onError={(e) => {
                      console.error('Failed to load:', slide.image)
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect fill="%23333" width="100%" height="100%"/><text fill="%23fff" x="50%" y="50%" text-anchor="middle">Image Not Available</text></svg>'
                    }}
                    style={{
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block"
  }}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
          <button className="carousel-btn next" onClick={nextSlide}>›</button>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* REST OF CONTENT */}
        <div className="container_full">
          <div className="hero-content">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="symbols2">
              <img 
                src={lz_logo} 
                alt="Led Zeppelin Logo Silver"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <h4>
              Led Zeppelin conclude their reissue campaign with a new edition of the soundtrack to the concert film 'The Song Remains The Same', originally released in 1976 and featuring newly remastered audio supervised by Jimmy Page.
              <br /><br />
              The album was recorded in July 1973 at Madison Square Garden in New York City and the new version released on September 7, 2018 as a Super Deluxe Boxed Set, CD, Vinyl and Digital Versions, plus the full album's debut release in Hi-Res 5.1 surround sound on blu-ray.
              <br />
              <a target="_blank" href="https://lnk.to/TSRTS" rel="noreferrer">
                <strong>Order your copy now</strong>
              </a>.
            </h4>

            {/* Video */}
            <div className="video-content-wrapper">
              <div className="video-container">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/8MgL8RNbwDc"
                  title="Led Zeppelin - The Song Remains The Same (2018) (Official Trailer)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Album Cards */}
        <div className="container_full">
          <div className="content_fullwidth2">
            <Album />
          </div>
        </div>

        {/* Legacy Albums Section */}
        {/* <div className="contentInner buyPage">
          <div className="hero">
            <p>
              With the release of deluxe editions of Led Zeppelin, Led Zeppelin II, and Led Zeppelin III, 
              the band will launch an extensive reissue program of all nine of its studio albums in chronological order, 
              each remastered by guitarist and producer Jimmy Page. Led Zeppelin will also open its vaults to share 
              dozens of unheard studio and live recordings, with each album featuring a second disc of companion 
              audio comprised entirely of unreleased music related to that album.
              <br /><br />
              <i>"The material on the companion discs presents a portal to the time of the recording of Led Zeppelin," says Page. "It is a selection of work in progress with rough mixes, backing tracks, alternate versions, and new material recorded at the time"</i>
            </p>
            <p className="byLine">- Jimmy Page</p>
          </div>
        </div> */}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footerWrapper">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="footerImageWrapper">
            <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/zosa.png" alt="Zoso" />
          </div>
          <div className="footerInnerWrapper">
            <div className="footerNavWrapper">
              <ul>
                {menuItems.slice(0, 8).map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footercopyrightWrapper">
              © {currentYear} <span>Rhino Entertainment & Led Zeppelin.com</span>
              <br />
              <a href="https://www.ledzeppelin.com/contact-help-0">Contact / Help</a> | 
              <a href="https://www.rhino.com/terms-of-use" target="_blank" rel="noreferrer">Terms of Use</a> | 
              <a href="https://privacy.wmg.com/rhino/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> | 
              <a href="https://www.wminewmedia.com/cookies-policy" target="_blank" rel="noreferrer">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home