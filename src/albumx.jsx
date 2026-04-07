import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // Mailing list form states
  const [email, setEmail] = useState('')
  const [showConsent, setShowConsent] = useState(false)
  const [showSecondForm, setShowSecondForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [consentChecked, setConsentChecked] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [dobDay, setDobDay] = useState('')
  const [dobMonth, setDobMonth] = useState('')
  const [globalConsent, setGlobalConsent] = useState(false)
  
  const emailRef = useRef(null)
  const formRef = useRef(null)

  // Read more states for each product
  const [expandedSections, setExpandedSections] = useState({})

  // Tooltip states
  const [activeTooltip, setActiveTooltip] = useState(null)

  // Click outside to close consent
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowConsent(false)
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => document.removeEventListener('mouseup', handleClickOutside)
  }, [])

  // Handle email focus
  const handleEmailFocus = () => {
    setShowConsent(true)
  }

  // Handle first form submit
  const handleFirstSubmit = (e) => {
    e.preventDefault()
    if (email && consentChecked) {
      setShowConsent(false)
      setShowSecondForm(true)
    }
  }

  // Handle second form submit
  const handleSecondSubmit = (e) => {
    e.preventDefault()
    setShowSecondForm(false)
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
      setEmail('')
      setConsentChecked(false)
      setFirstName('')
      setPostalCode('')
      setCountry('')
      setDobDay('')
      setDobMonth('')
      setGlobalConsent(false)
    }, 3000)
  }

  // Toggle read more
  const toggleReadMore = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Handle swipey images
  const handleSwipeyMove = (e, id) => {
    const element = document.getElementById(id)
    if (!element) return
    
    const rect = element.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const foreground = element.querySelector('.swipey-foreground')
    if (foreground) {
      foreground.style.width = `${Math.max(0, 386 - relX)}px`
    }
  }

  const handleSwipeyLeave = (id) => {
    const element = document.getElementById(id)
    if (!element) return
    const foreground = element.querySelector('.swipey-foreground')
    if (foreground) {
      foreground.style.width = '150px'
    }
  }

  // Countries list
  const countries = [
    { code: '', name: 'Select a country/region' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'JP', name: 'Japan' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia, Plurinational State Of' },
    { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BV', name: 'Bouvet Island' },
    { code: 'BR', name: 'Brazil' },
    { code: 'IO', name: 'British Indian Ocean Territory' },
    { code: 'BN', name: 'Brunei Darussalam' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CX', name: 'Christmas Island' },
    { code: 'CC', name: 'Cocos (Keeling) Islands' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'Congo, The Democratic Republic Of The' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'CI', name: "Côte D'Ivoire" },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FK', name: 'Falkland Islands (Malvinas)' },
    { code: 'FO', name: 'Faroe Islands' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'GF', name: 'French Guiana' },
    { code: 'PF', name: 'French Polynesia' },
    { code: 'TF', name: 'French Southern Territories' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GR', name: 'Greece' },
    { code: 'GL', name: 'Greenland' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GP', name: 'Guadeloupe' },
    { code: 'GU', name: 'Guam' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GG', name: 'Guernsey' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HM', name: 'Heard Island and McDonald Islands' },
    { code: 'VA', name: 'Holy See (Vatican City State)' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IM', name: 'Isle of Man' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JE', name: 'Jersey' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KR', name: 'Korea, Republic of' },
    { code: 'XK', name: 'Kosovo' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: "Lao People's Democratic Republic" },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MO', name: 'Macao' },
    { code: 'MK', name: 'Macedonia, the Former Yugoslav Republic Of' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia, Federated States Of' },
    { code: 'MD', name: 'Moldova, Republic of' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NU', name: 'Niue' },
    { code: 'NF', name: 'Norfolk Island' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PS', name: 'Palestinian Territory, Occupied' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PN', name: 'Pitcairn' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RO', name: 'Romania' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'RE', name: 'Réunion' },
    { code: 'BL', name: 'Saint Barthélemy' },
    { code: 'SH', name: 'Saint Helena, Ascension and Tristan Da Cunha' },
    { code: 'KN', name: 'Saint Kitts And Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'MF', name: 'Saint Martin (French Part)' },
    { code: 'PM', name: 'Saint Pierre And Miquelon' },
    { code: 'VC', name: 'Saint Vincent And The Grenadines' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'ST', name: 'Sao Tome and Principe' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SX', name: 'Sint Maarten (Dutch part)' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
    { code: 'SS', name: 'South Sudan' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SJ', name: 'Svalbard And Jan Mayen' },
    { code: 'SZ', name: 'Swaziland' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania, United Republic of' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'TG', name: 'Togo' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'UM', name: 'United States Minor Outlying Islands' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VE', name: 'Venezuela, Bolivarian Republic of' },
    { code: 'VN', name: 'Viet Nam' },
    { code: 'VG', name: 'Virgin Islands, British' },
    { code: 'VI', name: 'Virgin Islands, U.S.' },
    { code: 'WF', name: 'Wallis and Futuna' },
    { code: 'EH', name: 'Western Sahara' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' },
    { code: 'AX', name: 'Åland Islands' }
  ]

  // Product data
  const products = {
    tsrts: [
      {
        id: 'tsrts-deluxe',
        title: 'Super Deluxe Edition Box',
        subtitle: '2CD + 4LP + 3DVD',
        image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/Deluxe%20Box%20packshot-min.jpg',
        link: 'https://lnk.to/TSRTSDeluxe',
        details: `• Live from Madison Square Garden – July 1973
• 15 tracks; remastered audio
• 2 CDs
• 4 LPs on 180-gram vinyl
• 3 DVDs:
○ DVD of entire album in Dolby Digital 5.1 surround sound & PCM stereo, plus photo gallery
○ 2 DVDs of the original film "The Song Remains The Same", plus a disc of extras
• HD download card of entire album in 96 kHz/24-bit audio
• Numbered art print of album cover
• 28-page book
• 20-page Replica of 1977 Japanese Cinema Programme`
      },
      {
        id: 'tsrts-vinyl',
        title: 'Deluxe Edition Remastered Vinyl',
        subtitle: '4LP (180g)',
        image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/Vinyl%20Pack%20Shot.jpg',
        link: 'https://lnk.to/TSRTS4LP',
        details: `• Live from Madison Square Garden – July 1973
• 15 tracks; remastered audio
• 4 LPs on 180-gram vinyl
• 28-page book`
      },
      {
        id: 'tsrts-cd',
        title: 'Remastered Original CD',
        subtitle: '2CD',
        image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/CD%20packshot.jpg',
        link: 'https://lnk.to/TSRTS2CD',
        details: `• Live from Madison Square Garden – July 1973
• 15 tracks; remastered audio
• 2 CDs`
      },
      {
        id: 'tsrts-blu',
        title: '5.1 & Stereo HD audio',
        subtitle: '1 blu-ray disc',
        image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/Blu%20Ray%20Pack%20Shot-min.jpg',
        link: 'https://lnk.to/TSRTSBluRay',
        details: `• Live from Madison Square Garden – July 1973
• 15 tracks; remastered audio
• 96kHz/24-bit 5.1 in DTS-HD Master Audio Surround, plus PCM stereo and DTS-HD Master Audio Stereo
• Photo Gallery
•4 video performances from the concert: "Celebration Day", "Over The Hills And Far Away", "Misty Mountain Hop" & "The Ocean".`
      },
      {
        id: 'tsrts-digital',
        title: 'Digital Download',
        subtitle: 'Remastered album',
        image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/LZ%20-%20TSRTS-CD-Packshot.jpg',
        link: 'https://lnk.to/TSRTSDownL',
        details: `• Live from Madison Square Garden – July 1973
• 15 tracks
• Remastered audio`
      }
    ]
  }

  const renderProductCard = (product, index) => (
    <div className="one-third" key={product.id}>
      <div className="portfolio-image">
        <div className="portfolio-title">
          {product.title}
          <h3>{product.subtitle}</h3>
        </div>
        <img src={product.image} alt={product.title} />
        <ul className="list-empty">
          <li>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="but-download">
              ORDER NOW
            </a>
          </li>
        </ul>
        <span className={`more-text ${expandedSections[product.id] ? 'visible' : ''}`}>
          {product.details.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </span>
        <span 
          className={`read-more ${expandedSections[product.id] ? 'text-expanded' : ''}`}
          onClick={() => toggleReadMore(product.id)}
        >
          [ {expandedSections[product.id] ? 'HIDE INFO' : 'MORE INFO'} ]
        </span>
      </div>
    </div>
  )

  return (
    <div className="app">
      {/* Header */}
      <header id="header">
        <div className="header-inner">
          <div className="logo-section">
            <div id="block-headersitelogo">
              <h1 id="site-name">
                <a href="https://www.ledzeppelin.com" rel="home">
                  <span>Led Zeppelin | Official Website</span>
                </a>
              </h1>
            </div>
            <nav className="nav-menu" id="block-headermenulinks">
              <ul>
                <li><a href="#news">NEWS</a></li>
                <li><a href="#tour">TOUR</a></li>
                <li><a href="#music">MUSIC</a></li>
                <li><a href="#video">VIDEO</a></li>
                <li><a href="#photos">PHOTOS</a></li>
                <li><a href="#discography">DISCOGRAPHY</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="mailing-section" id="block-headersocialandmlisthomepage" ref={formRef}>
            <div className="plain-ml-wrapper">
              <div className="mlist-form">
                <form className="mlist-form-one" onSubmit={handleFirstSubmit}>
                  <div className="email-field">
                    <input
                      type="email"
                      placeholder="Get Led Zeppelin news in your inbox"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={handleEmailFocus}
                      required
                    />
                  </div>
                  
                  <div className={`consent-popup ${showConsent ? 'visible' : ''}`}>
                    <input
                      type="checkbox"
                      id="artist_mktg_consent_1"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      required
                    />
                    <label htmlFor="artist_mktg_consent_1">
                      I want Warner Music Group to send me marketing messages about <span>Led Zeppelin</span>. 
                      Unsubscribe at any time. Please read our <a href="https://www.ledzeppelin.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> for more information about how we handle your personal information, including for marketing.
                    </label>
                  </div>
                  
                  <div className={`submit-btn ${showConsent ? 'visible' : ''}`}>
                    <input type="submit" className="submit mlist-submit" value="Sign Me Up!" />
                  </div>
                </form>
                
                <div className={`email-popover-tip ${showConsent ? 'visible' : ''}`}></div>
              </div>
              
              <div className={`thank-you ${showThankYou ? 'visible' : ''}`}>Thank you!</div>
              
              <div className={`second-form ${showSecondForm ? 'visible' : ''}`}>
                <span className="second-form-close" onClick={() => setShowSecondForm(false)}>×</span>
                <div className="welcome">
                  <p>Welcome <span className="name">{email.split('@')[0]}</span> to Led Zeppelin's mailing list!</p>
                </div>
                <div className="thanks-welcome-msg">
                  Customize your notifications for tour dates near your hometown, birthday wishes, or special discounts in our online store!
                </div>
                <form className="mlist-form-two" onSubmit={handleSecondSubmit}>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input 
                      type="text" 
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Country/Region</label>
                    <select 
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      {countries.map(c => (
                        <option key={c.code} value={c.code}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Birth Date</label>
                    <div className="dob-fields">
                      <select 
                        value={dobDay}
                        onChange={(e) => setDobDay(e.target.value)}
                      >
                        <option value="">Day</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1}</option>
                        ))}
                      </select>
                      <select
                        value={dobMonth}
                        onChange={(e) => setDobMonth(e.target.value)}
                      >
                        <option value="">Month</option>
                        {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m, i) => (
                          <option key={i+1} value={i+1}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="checkbox"
                      id="global_mktg_consent_2"
                      checked={globalConsent}
                      onChange={(e) => setGlobalConsent(e.target.checked)}
                    />
                    <label htmlFor="global_mktg_consent_2">
                      I want Warner Music Group to send me marketing messages about music, artists and merch based on my interests and web behavior. Unsubscribe at any time. Please read our <a href="https://www.ledzeppelin.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> for more information about how we handle your personal information, including for marketing.
                    </label>
                  </div>
                  
                  <div className="form-group">
                    <input type="submit" className="submit mlist-submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Navigation */}
      <div className="banner-nav" id="block-headerbannernav">
        <ul className="release-jump-list">
          <li><a href="#reledzep">LED ZEPPELIN</a></li>
          <li><a href="#ledzeppelinii">LED ZEPPELIN II</a></li>
          <li><a href="#ledzeppeliniii">LED ZEPPELIN III</a></li>
          <li><a href="#reledzepiv">LED ZEPPELIN IV</a></li>
          <li><a href="#reledzephoth">HOUSES OF THE HOLY</a></li>
          <li><a href="#reledzepphysgraf">PHYSICAL GRAFFITI</a></li>
          <li><a href="#reledzeppresence">PRESENCE</a></li>
          <li><a href="#ledzeppelinii">IN THROUGH THE OUT DOOR</a></li>
          <li><a href="#ledzeppeliniii">CODA</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-wrapper" id="main-wrapper">
        <div id="main-inner-wrapper">
          <div id="main">
            <main id="content" className="column main-content">
              {/* TSRTS Portfolio Section */}
              <div className="wrapper-boxed">
                <div className="container-full">
                  <div className="content-fullwidth2">
                    <div className="portfolio-section">
                      <div className="portfolio-grid">
                        {products.tsrts.map(renderProductCard)}
                      </div>
                      <div className="mar-top4 clear-fix"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Original Content */}
              <div className="content-inner buy-page">
                {/* How The West Was Won Section */}
                <div className="one-col admin-only" style={{clear: 'both'}}>
                  <div className="format">
                    <div className="top-full-width">
                      <a href="https://lnk.to/HTWWWSDlx" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/LZ-HTWWW-VinylBox-PS-wht-min.jpg" alt="How The West Was Won" />
                      </a>
                    </div>
                    <h4>How The West Was Won - Super Deluxe Edition Box</h4>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="clear-fix"></div>
                </div>

                <div className="two-col admin-only">
                  <div className="format">
                    <h3>Deluxe Edition Remastered Vinyl</h3>
                    <a href="https://lnk.to/HTWWW4LP" target="_blank" rel="noopener noreferrer">
                      <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/vinyl.jpg" className="prod-image" alt="Vinyl" />
                    </a>
                    <h5>4LP (180g)</h5>
                    <a href="https://lnk.to/HTWWW4LP" target="_blank" rel="noopener noreferrer" className="btn green">Order Here</a>
                    <p>
                      <span className={`more-text ${expandedSections['htwww-vinyl'] ? 'visible' : ''}`}>
                        • Live from Long Beach and Los Angeles in 1972<br/>
                        • First time on vinyl<br/>
                        • 18 tracks; remastered audio<br/>
                        • 4 LPs on 180-gram vinyl
                      </span>
                      <span className="read-more" onClick={() => toggleReadMore('htwww-vinyl')}>
                        [ {expandedSections['htwww-vinyl'] ? 'hide' : 'more info...'} ]
                      </span>
                    </p>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="format">
                    <h3>5.1 & Stereo HD audio</h3>
                    <a href="https://lnk.to/HTWWWBluRay" target="_blank" rel="noopener noreferrer">
                      <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/br.jpg" className="prod-image" alt="Blu-ray" />
                    </a>
                    <h5>1 blu-ray disc</h5>
                    <a href="https://lnk.to/HTWWWBluRay" target="_blank" rel="noopener noreferrer" className="btn green">Order Here</a>
                    <p>
                      <span className={`more-text ${expandedSections['htwww-blu'] ? 'visible' : ''}`}>
                        • Live from Long Beach and Los Angeles in 1972<br/>
                        • 18 tracks; remastered audio<br/>
                        • 96kHz/24-bit 5.1 in DTS-HD Master Audio Surround, plus PCM stereo and DTS-HD Master Audio Stereo<br/>
                        • Photo Gallery
                      </span>
                      <span className="read-more" onClick={() => toggleReadMore('htwww-blu')}>
                        [ {expandedSections['htwww-blu'] ? 'hide' : 'more info...'} ]
                      </span>
                    </p>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="clear-fix"></div>
                </div>

                <div className="two-col last-col admin-only">
                  <div className="format">
                    <h3>Remastered Original CD</h3>
                    <a href="https://lnk.to/HTWWW3CD" target="_blank" rel="noopener noreferrer">
                      <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/3cd.jpg" className="prod-image" alt="3CD" />
                    </a>
                    <h5>3CD</h5>
                    <a href="https://lnk.to/HTWWW3CD" target="_blank" rel="noopener noreferrer" className="btn green">Order Here</a>
                    <p>
                      <span className={`more-text ${expandedSections['htwww-cd'] ? 'visible' : ''}`}>
                        • Live from Long Beach and Los Angeles in 1972<br/>
                        • 18 tracks; remastered audio<br/>
                        • 3 CDs
                      </span>
                      <span className="read-more" onClick={() => toggleReadMore('htwww-cd')}>
                        [ {expandedSections['htwww-cd'] ? 'hide' : 'more info...'} ]
                      </span>
                    </p>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="format">
                    <h3>Digital Download</h3>
                    <a href="https://lnk.to/HTWWWDL" target="_blank" rel="noopener noreferrer">
                      <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/digital.jpg" className="prod-image" alt="Digital" />
                    </a>
                    <h5>Remastered album</h5>
                    <a href="https://lnk.to/HTWWWDL" target="_blank" rel="noopener noreferrer" className="btn green">Order Here</a>
                    <p>
                      <span className={`more-text ${expandedSections['htwww-dig'] ? 'visible' : ''}`}>
                        • Live from Long Beach and Los Angeles in 1972<br/>
                        • 18 tracks<br/>
                        • Remastered audio
                      </span>
                      <span className="read-more" onClick={() => toggleReadMore('htwww-dig')}>
                        [ {expandedSections['htwww-dig'] ? 'hide' : 'more info...'} ]
                      </span>
                    </p>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="clear-fix"></div>
                </div>

                {/* BBC Sessions */}
                <div className="one-col" style={{clear: 'both'}}>
                  <div className="format">
                    <div className="top-full-width">
                      <a href="https://smarturl.it/LZBBCBOX" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/led-zeppelin-bbc-800x400.jpg" alt="BBC Sessions" />
                      </a>
                    </div>
                    <h4>LED ZEPPELIN - THE COMPLETE BBC SESSIONS</h4>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="clear-fix"></div>
                </div>

                <div className="two-col">
                  <div className="format">
                    <h3>Super Deluxe Boxed Set</h3>
                    <a href="https://smarturl.it/LZBBCBOX" target="_blank" rel="noopener noreferrer">
                      <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/led-zeppelin-bbc-deluxe-boxset-390x390-v2.jpg" className="prod-image" alt="Deluxe Box" />
                    </a>
                    <h5>3 CD + 5 LP</h5>
                    <a href="https://smarturl.it/LZBBCBOX" target="_blank" rel="noopener noreferrer" className="btn green">Order Here</a>
                    <p>
                      <span className={`more-text ${expandedSections['bbc-deluxe'] ? 'visible' : ''}`}>
                        • Expanded with eight unreleased BBC recordings, including the only recorded performance of "Sunshine Woman."<br/>
                        • Remastered album, 2 CDs, each in a replica sleeve.<br/>
                        • Unreleased audio on CD in a separate card sleeve.<br/>
                        • Remastered album on 180-gram vinyl.<br/>
                        • Unreleased audio on 180-gram vinyl.<br/>
                        • High-def audio download card of all content at 96kHz/24 bit.<br/>
                        • 44-page book filled with photos of the band, the recording locations, BBC memorabilia, and session information.<br/>
                        • High-quality print of the original album cover, the first 30,000 of which will be individually numbered.
                      </span>
                      <span className="read-more" onClick={() => toggleReadMore('bbc-deluxe')}>
                        [ {expandedSections['bbc-deluxe'] ? 'hide' : 'more info...'} ]
                      </span>
                    </p>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="format">
                    <h3>Deluxe Edition CD</h3>
                    <a href="https://smarturl.it/LZBBC3CD" target="_blank" rel="noopener noreferrer">
                      <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/led-zeppelin-bbc-cd-390x390-v2.jpg" className="prod-image" alt="CD" />
                    </a>
                    <h5>3 CD</h5>
                    <a href="https://smarturl.it/LZBBC3CD" target="_blank" rel="noopener noreferrer" className="btn green">Order Here</a>
                    <p>
                      <span className={`more-text ${expandedSections['bbc-cd'] ? 'visible' : ''}`}>
                        • Expanded with eight unreleased BBC recordings, including the only recorded performance of "Sunshine Woman."<br/>
                        • Remastered original album plus a third disc of unreleased audio.
                      </span>
                      <span className="read-more" onClick={() => toggleReadMore('bbc-cd')}>
                        [ {expandedSections['bbc-cd'] ? 'hide' : 'more info...'} ]
                      </span>
                    </p>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="clear-fix"></div>
                </div>

                <div className="two-col last-col">
                  <div className="format">
                    <h3>Deluxe Edition Vinyl</h3>
                    <a href="https://smarturl.it/LZBBC5LP" target="_blank" rel="noopener noreferrer">
                      <img src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/2022-03/led-zeppelin-bbc-vinyl-boxset-390x390.jpg" className="prod-image" alt="Vinyl Box" />
                    </a>
                    <h5>5 LP</h5>
                    <a href="https://smarturl.it/LZBBC5LP" target="_blank" rel="noopener noreferrer" className="btn green">Order Here</a>
                    <p>
                      <span className={`more-text ${expandedSections['bbc-vinyl'] ? 'visible' : ''}`}>
                        • Expanded with eight unreleased BBC recordings, including the only recorded performance of "Sunshine Woman."<br/>
                        • Remastered original album, plus a fifth LP of unreleased audio, on 180-gram vinyl
                      </span>
                      <span className="read-more" onClick={() => toggleReadMore('bbc-vinyl')}>
                        [ {expandedSections['bbc-vinyl'] ? 'hide' : 'more info...'} ]
                      </span>
                    </p>
                    <div className="clear-fix"></div>
                  </div>
                  <div className="format">
                    <h3>Digital Download</h3>
                   
                   
                   )}