import React from 'react'
  import { useState } from 'react';
import './album.css';
import DeluxeBoxpackshotmin from './assets/images/Deluxe Box packshot-min.jpg'
import a from './assets/images/1.jpg'

const Album = () => {


const albums = [
  {
    id: 'tsrts',
    title: 'The Song Remains The Same',
    subtitle: 'Super Deluxe Edition Box',
    format: '2CD + 4LP + 3DVD',
    image: DeluxeBoxpackshotmin,
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
    image: a,
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
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201805/CD%20packshot.jpg',
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
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201805/Blu%20Ray%20Pack%20Shot-min.jpg',
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
    id: 'tsrts',
    title: 'The Song Remains The Same',
    subtitle: 'Super Deluxe Edition Box',
    format: '2CD + 4LP + 3DVD',
    image: DeluxeBoxpackshotmin,
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

];

const htwbwAlbums = [
  {
    id: 'htwww-box',
    title: 'How The West Was Won - Super Deluxe Edition Box',
    subtitle: 'Super Deluxe Edition Box',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201805/LZ-HTWWW-VinylBox-PS-wht-min.jpg',
    orderLink: 'https://lnk.to/HTWWWSDlx',
    details: []
  },
  {
    id: 'htwww-vinyl',
    title: 'Deluxe Edition Remastered Vinyl',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format1: '4LP (180g)',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201907/ledzeppelinssl/images/buy/vinyl.jpg',
    orderLink: 'https://lnk.to/HTWWW4LP',
    details: [
      'Live from Long Beach and Los Angeles in 1972',
      'First time on vinyl',
      '18 tracks; remastered audio',
      '4 LPs on 180-gram vinyl'
    ]
  },
  {
    id: 'htwww-blu',
    title: '5.1 & Stereo HD audio',
    subtitle: '5.1 & Stereo HD audio',
    format1: '3CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201907/ledzeppelinssl/images/buy/3cd.jpg',
    orderLink: 'https://lnk.to/HTWWWBluRay',
    details: [
      'Live from Long Beach and Los Angeles in 1972',
      '18 tracks; remastered audio',
      '96kHz/24-bit 5.1 in DTS-HD Master Audio Surround',
      'PCM stereo and DTS-HD Master Audio Stereo',
      'Photo Gallery'
    ]
  },
  {
    id: 'htwww-cd',
    title: 'Remastered Original CD',
    subtitle: 'Remastered Original CD',
    format1: '3CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201907/ledzeppelinssl/images/buy/br.jpg',
    orderLink: 'https://lnk.to/HTWWW3CD',
    details: [
      'Live from Long Beach and Los Angeles in 1972',
      '18 tracks; remastered audio',
      '3 CDs'
    ]
  },
  {
    id: 'htwww-dig',
    title: 'Digital Download',
    subtitle: 'Digital Download',
    format1: 'Remastered album',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201907/ledzeppelinssl/images/buy/digital.jpg',
    orderLink: 'https://lnk.to/HTWWWDL',
    details: [
      'Live from Long Beach and Los Angeles in 1972',
      '18 tracks',
      'Remastered audio'
    ]
  }
];

const bbcAlbums = [
  {
    id: 'bbc-box',
    title: 'LED ZEPPELIN - THE COMPLETE BBC SESSIONS',
    subtitle: 'Super Deluxe Boxed Set',
    format1: '3 CD + 5 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-deluxe-boxset-390x390-v2.jpg',
    orderLink: 'https://smarturl.it/LZBBCBOX',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered album, 2 CDs, each in a replica sleeve',
      'Unreleased audio on CD in a separate card sleeve',
      'Remastered album on 180-gram vinyl',
      'Unreleased audio on 180-gram vinyl',
      'High-def audio download card of all content at 96kHz/24 bit',
      '44-page book filled with photos',
      'High-quality print of the original album cover'
    ]
  },
  {
    id: 'bbc-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format1: '3 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-vinyl-boxset-390x390.jpg',
    orderLink: 'https://smarturl.it/LZBBC3CD',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered original album plus a third disc of unreleased audio'
    ]
  },
  {
    id: 'bbc-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Vinyl',
    format1: '5 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-cd-390x390-v2.jpg',
    orderLink: 'https://smarturl.it/LZBBC5LP',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered original album, plus a fifth LP of unreleased audio'
    ]
  },
  {
    id: 'bbc-dig',
    title: '',
    subtitle: 'Digital Download',
    format1: 'DIGITAL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-cover-negative-390x390.jpg',
    orderLink: 'https://smarturl.it/LZBBCDL',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered album and unreleased audio will both be available'
    ]
  }
  
];

const presenceAlbums = [
  {
    id: 'pres-box',
    title: 'PRESENCE',
    subtitle: 'Super Deluxe Edition Box',
    format1: '2 CD + 2 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/pres_invert_(257x257).jpg',
    orderLink: 'https://smarturl.it/PrDlxBox',
    details: [
      'CD1: Original album newly remastered in vinyl replica sleeve',
      'CD2: Companion audio featuring previously unreleased reference mixes',
      'Vinyl 1: Original album newly remastered on 180 gram vinyl',
      'Vinyl 2: Companion audio on 180 gram vinyl',
      'HD Download Card (96 kHz/24 bit)',
      'LP sized, high quality print of the original album cover',
      'Album-size hardback book (88 pages)'
    ]
  },
  {
    id: 'pres-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format1: '2 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Presence-Box_amazon_V2_BR.jpg',
    orderLink: 'https://smarturl.it/PrDlx2CD',
    details: [
      'Deluxe 2 CD package with original and negative artwork',
      'Original album newly remastered',
      '2nd CD of companion audio features five unreleased reference mixes',
      '16-page booklet'
    ]
  },
  {
    id: 'pres-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format1: '1 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Presence_Reissue_CD_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/PrCD',
    details: [
      'The original album, newly remastered',
      'Gatefold sleeve with 8-page booklet'
    ]
  },
  {
    id: 'pres-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format1: '2 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Presence_Original_CD_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/PrDlx2LP',
    details: [
      'Original remastered LP, plus companion audio on 180 gram vinyl',
      'Tri-fold sleeve with five unreleased reference mixes'
    ]
  },
  {
    id: 'pres-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format1: '1 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Presence_Vinyl_Reissue_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/PrLP',
    details: [
      'Original album on 180 gram vinyl',
      'Newly remastered in single sleeve replicating the original album'
    ]
  },
  {
    id: 'pres-dig',
    title: '',
    subtitle: 'Digital',
    format1: 'Remastered audio featuring 12 tracks',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Presence_Vinyl_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/PrDgtl',
    details: [
      'The remastered album plus five companion audio tracks',
      'Available in standard and high-definition formats'
    ]
  },
  //pasted here
    {
    id: 'bbc-box',
    title: 'LED ZEPPELIN - THE COMPLETE BBC SESSIONS',
    subtitle: 'Super Deluxe Boxed Set',
    format1: '3 CD + 5 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-deluxe-boxset-390x390-v2.jpg',
    orderLink: 'https://smarturl.it/LZBBCBOX',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered album, 2 CDs, each in a replica sleeve',
      'Unreleased audio on CD in a separate card sleeve',
      'Remastered album on 180-gram vinyl',
      'Unreleased audio on 180-gram vinyl',
      'High-def audio download card of all content at 96kHz/24 bit',
      '44-page book filled with photos',
      'High-quality print of the original album cover'
    ]
  },
  {
    id: 'bbc-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format1: '3 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-vinyl-boxset-390x390.jpg',
    orderLink: 'https://smarturl.it/LZBBC3CD',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered original album plus a third disc of unreleased audio'
    ]
  },
  {
    id: 'bbc-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Vinyl',
    format1: '5 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-cd-390x390-v2.jpg',
    orderLink: 'https://smarturl.it/LZBBC5LP',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered original album, plus a fifth LP of unreleased audio'
    ]
  },
  {
    id: 'bbc-dig',
    title: '',
    subtitle: 'Digital Download',
    format1: 'DIGITAL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-cover-negative-390x390.jpg',
    orderLink: 'https://smarturl.it/LZBBCDL',
    details: [
      'Expanded with eight unreleased BBC recordings',
      'Including the only recorded performance of "Sunshine Woman"',
      'Remastered album and unreleased audio will both be available'
    ]
  }
];

const ittodAlbums = [
  {
    id: 'ittod-box',
    title: 'IN THROUGH THE OUT DOOR',
    subtitle: 'Super Deluxe Edition Box',
    format1: '2 CD + 2 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Presence_Vinyl_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/ITTODDlxBox',
    details: [
      'CD1: Japanese replica of the original album',
      'CD2: Companion audio featuring previously unreleased rough mixes',
      'Vinyl 1: Original album newly remastered on 180 gram vinyl',
      'Vinyl 2: Companion audio on 180 gram vinyl',
      'HD Download Card (96 kHz/24 bit)',
      'LP sized, high quality print of the original album cover',
      'Album-size hardback book (80 pages)',
      'Replica brown paper bag',
      'Replica 12" x 12" paintable insert'
    ]
  },
  {
    id: 'ittod-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format1: '2 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/ITTOD_Box_amazon_BR_V2.jpg',
    orderLink: 'https://smarturl.it/ITTODDlx2CD',
    details: [
      'Deluxe 2 CD package with original and negative artwork',
      'Original album newly remastered',
      '2nd CD features unreleased rough mix of every track',
      'Packaged in a replica mini brown paper bag'
    ]
  },
  {
    id: 'ittod-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format1: '1 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/ITTOD_Reissue_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/ITTODCD',
    details: [
      'The original album, newly remastered',
      'Single wallet with spine, 8-page booklet in bag behind wallet',
      'Packaged in a replica mini brown paper bag'
    ]
  },
  {
    id: 'ittod-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format1: '2 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/ITTOD_Original_CD_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/ITTODDlx2LP',
    details: [
      'Original remastered LP, plus companion audio on 180 gram vinyl',
      'Unreleased rough mix of every track from the original album',
      'Replica paintable 12" x 12" insert',
      'Packaged in a replica brown bag'
    ]
  },
  {
    id: 'ittod-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format1: '1 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/ITTOD_Vinyl_Reissue_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/ITTODLP',
    details: [
      'Original album on 180 gram vinyl',
      'Newly remastered in single pocket sleeve',
      'Replica paintable 12" x 12" insert',
      'Packaged in a replica brown paper bag'
    ]
  },
  {
    id: 'ittod-dig',
    title: '',
    subtitle: 'Digital',
    format1: 'Remastered audio featuring 14 tracks',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/ITTOD_Vinyl_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/ITTODDgtl',
    details: [
      'The remastered album plus seven companion audio tracks',
      'Available in standard and high-definition formats'
    ]
  },
  //pasted here
    {
    id: 'htwww-box',
    title: 'How The West Was Won - Super Deluxe Edition Box',
    subtitle: 'Super Deluxe Edition Box',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201805/LZ-HTWWW-VinylBox-PS-wht-min.jpg',
    orderLink: 'https://lnk.to/HTWWWSDlx',
    details: []
  },
  {
    id: 'htwww-vinyl',
    title: 'Deluxe Edition Remastered Vinyl',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format1: '4LP (180g)',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201907/ledzeppelinssl/images/buy/vinyl.jpg',
    orderLink: 'https://lnk.to/HTWWW4LP',
    details: [
      'Live from Long Beach and Los Angeles in 1972',
      'First time on vinyl',
      '18 tracks; remastered audio',
      '4 LPs on 180-gram vinyl'
    ]
  },
  {
    id: 'htwww-blu',
    title: '5.1 & Stereo HD audio',
    subtitle: '5.1 & Stereo HD audio',
    format1: '3CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201907/ledzeppelinssl/images/buy/3cd.jpg',
    orderLink: 'https://lnk.to/HTWWWBluRay',
    details: [
      'Live from Long Beach and Los Angeles in 1972',
      '18 tracks; remastered audio',
      '96kHz/24-bit 5.1 in DTS-HD Master Audio Surround',
      'PCM stereo and DTS-HD Master Audio Stereo',
      'Photo Gallery'
    ]
  },
  {
    id: 'htwww-cd',
    title: 'Remastered Original CD',
    subtitle: 'Remastered Original CD',
    format1: '3CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201907/ledzeppelinssl/images/buy/br.jpg',
    orderLink: 'https://lnk.to/HTWWW3CD',
    details: [
      'Live from Long Beach and Los Angeles in 1972',
      '18 tracks; remastered audio',
      '3 CDs'
    ]
  },
];

const codaAlbums = [
  {
    id: 'coda-box',
    title: 'CODA',
    subtitle: 'Super Deluxe Edition Box',
    format: '3 CD + 3 LP',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/coda_orig_(257x257).jpg',
    orderLink: 'https://smarturl.it/CodaDlxBox',
    details: [
      'CD1: Original album newly remastered in Japanese replica gatefold sleeve',
      'CD2/3: Companion audio featuring 15 previously unreleased recordings',
      'Vinyl 1: Original album newly remastered on 180-gram vinyl',
      'Vinyl 2/3: Companion audio on 180-gram vinyl',
      'HD Download Card (96 kHz/24 bit)',
      'LP sized, high quality print of the original album cover',
      'Album-size hardback book (72 pages)'
    ]
  },
  {
    id: 'coda-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format: '3 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/CODA-Box_Amazon_BR_V3.jpg',
    orderLink: 'https://smarturl.it/CodaDlx3CD',
    details: [
      'Deluxe 3 CD package with embossed printing',
      'Original album newly remastered',
      '2nd and 3rd CDs include 15 tracks recorded between 1968-1974',
      '16-page booklet'
    ]
  },
  {
    id: 'coda-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format: '1 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Coda_Reissue_CD_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/CodaCD',
    details: [
      'The original album, newly remastered',
      'Gatefold sleeve with 8-color embossed cover printing',
      '8-page booklet'
    ]
  },
  {
    id: 'coda-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format: '3 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Coda_Original_CD_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/CodaDlx3LP',
    details: [
      'Original remastered LP, plus 2 LPs of companion audio',
      '180 gram vinyl in tri-fold sleeve with three pockets',
      'Two 12" x 12" LP inserts',
      '15 tracks recorded between 1968 and 1974'
    ]
  },
  {
    id: 'coda-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format: '1 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Coda_Vinyl_Reissue_Amazon_V2_BR.jpg',
    orderLink: 'https://smarturl.it/CodaLP',
    details: [
      'Original album newly remastered on 180 gram vinyl',
      'Gatefold sleeve replicating the original album',
      '8-color embossed printing'
    ]
  },
  {
    id: 'coda-dig',
    title: '',
    subtitle: 'Digital',
    format: 'Remastered audio featuring 23 tracks',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/Coda_Vinyl_Amazon_BR.jpg',
    orderLink: 'https://smarturl.it/CodaDgtl',
    details: [
      'The remastered album plus fifteen companion audio tracks',
      'Available in standard and high-definition formats'
    ]
  },
  //pasted here
    {
    id: 'pg-box',
    title: 'LED ZEPPELIN - PHYSICAL GRAFFITI',
    subtitle: 'Super Deluxe Edition Box',
    format1: '3 CD + 3 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_super_deluxe_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZPGSuperDlxBox',
    details: [
      'CD 1 & 2: Remastered double album on CD in vinyl replica sleeve',
      'CD 3: Companion audio on CD featuring new alternate cover art',
      'Vinyl 1 & 2: Remastered double album on 180-gram vinyl',
      'Vinyl 3: Companion audio on 180-gram vinyl',
      'HD Download Card (All content at 96kHz/24 bit)',
      'Hard bound, 96 page book filled with rare photos',
      'High-quality print of the original album cover'
    ]
  },
  {
    id: 'pg-cd',
    title: '',
    subtitle: 'Remastered Original CD',
    format1: '2 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_deluxe-3_cd_reissue.jpg',
    orderLink: 'https://smarturl.it/LZPG2CD',
    details: [
      'Remastered album packaged in a replica of the original LP jacket'
    ]
  },
  {
    id: 'pg-cd3',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format1: '3 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_2_cd_original.jpg',
    orderLink: 'https://smarturl.it/LZPG3CDdlx',
    details: [
      'Remastered album on two discs',
      'Plus a third disc of unreleased companion audio'
    ]
  },
  {
    id: 'pg-vinyl',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format1: '2 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_2_lp_original_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZPG2LP',
    details: [
      'Remastered album on 180-gram vinyl',
      'Packaged in a sleeve that replicates the LP\'s first pressing'
    ]
  },
];

const pgAlbums = [
  {
    id: 'pg-box',
    title: 'LED ZEPPELIN - PHYSICAL GRAFFITI',
    subtitle: 'Super Deluxe Edition Box',
    format1: '3 CD + 3 LP',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_super_deluxe_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZPGSuperDlxBox',
    details: [
      'CD 1 & 2: Remastered double album on CD in vinyl replica sleeve',
      'CD 3: Companion audio on CD featuring new alternate cover art',
      'Vinyl 1 & 2: Remastered double album on 180-gram vinyl',
      'Vinyl 3: Companion audio on 180-gram vinyl',
      'HD Download Card (All content at 96kHz/24 bit)',
      'Hard bound, 96 page book filled with rare photos',
      'High-quality print of the original album cover'
    ]
  },
  {
    id: 'pg-cd',
    title: '',
    subtitle: 'Remastered Original CD',
    format1: '2 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_deluxe-3_cd_reissue.jpg',
    orderLink: 'https://smarturl.it/LZPG2CD',
    details: [
      'Remastered album packaged in a replica of the original LP jacket'
    ]
  },
  {
    id: 'pg-cd3',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format1: '3 CD',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_2_cd_original.jpg',
    orderLink: 'https://smarturl.it/LZPG3CDdlx',
    details: [
      'Remastered album on two discs',
      'Plus a third disc of unreleased companion audio'
    ]
  },
  {
    id: 'pg-vinyl',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format1: '2 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_2_lp_original_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZPG2LP',
    details: [
      'Remastered album on 180-gram vinyl',
      'Packaged in a sleeve that replicates the LP\'s first pressing'
    ]
  },
  {
    id: 'pg-vinyl3',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format1: '3 LP VINYL',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_reissue_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZPG3LPDlx',
    details: [
      'Remastered album and unreleased companion audio on 180-gram vinyl'
    ]
  },
  {
    id: 'pg-dig',
    title: '',
    subtitle: 'Digital',
    format1: 'REMASTERED AUDIO',
    image: 'https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_digital_cover.jpg?123',
    orderLink: 'https://smarturl.it/LZPGDgtl',
    details: [
      'Remastered album and companion audio',
      'Available in standard and high-definition formats'
    ]
  },
  //pasted here
  
];

const lzivAlbums = [
  {
    id: 'lziv-box',
    title: 'LED ZEPPELIN IV',
    subtitle: 'Super Deluxe Edition Box',
    format: '2 CD + 2 LP',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lziv_original.jpg',
    orderLink: 'https://smarturl.it/LZIVSuperDlxBox',
    details: [
      'CD1: Remastered album on CD in vinyl replica sleeve',
      'CD2: Companion audio on CD featuring new alternate cover art',
      'Vinyl 1: Remastered album on 180-gram vinyl',
      'Vinyl 2/3: Companion audio on 180-gram vinyl',
      'HD Download Card (All content @ 96 kHz/ 24 bit)',
      'Hard bound, 80 page book filled with rare photos',
      'High-quality print of the original album cover'
    ]
  },
  {
    id: 'lziv-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format: '2 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lziv_2cd.jpg',
    orderLink: 'https://smarturl.it/LZIV2CDdlx',
    details: [
      'Remastered album, plus a second disc of unreleased companion audio'
    ]
  },
  {
    id: 'lziv-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format: '1 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lziv_1cd.jpg',
    orderLink: 'https://smarturl.it/LZIV1CD',
    details: [
      'Remastered album packaged in a gatefold card wallet'
    ]
  },
  {
    id: 'lziv-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format: '2 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lziv_2lp.jpg',
    orderLink: 'https://smarturl.it/LZIVDlx2LP',
    details: [
      'Remastered album and unreleased companion audio on 180-gram vinyl'
    ]
  },
  {
    id: 'lziv-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format: '1 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lziv_1lp.jpg',
    orderLink: 'https://smarturl.it/LZIVLP',
    details: [
      'Remastered album on 180-gram vinyl',
      'Packaged in a sleeve that replicates the LP\'s first pressing'
    ]
  },
  {
    id: 'lziv-dig',
    title: '',
    subtitle: 'Digital',
    format: 'Remastered audio featuring 17 tracks',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lziv_1cd.jpg',
    orderLink: 'https://smarturl.it/LZIVDgtl',
    details: [
      'Remastered album and companion audio will both be available'
    ]
  }
];

const hothAlbums = [
  {
    id: 'hoth-box',
    title: 'HOUSES OF THE HOLY',
    subtitle: 'Super Deluxe Edition Box',
    format: '2 CD + 2 LP',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lzv_hoth_original.jpg',
    orderLink: 'https://smarturl.it/HOTHSuperDlxBox',
    details: [
      'CD1: Remastered album on CD in vinyl replica sleeve',
      'CD2: Companion audio on CD featuring new alternate cover art',
      'Vinyl 1: Remastered album on 180-gram vinyl',
      'Vinyl 2/3: Companion audio on 180-gram vinyl',
      'HD Download Card (All content @ 96 kHz/ 24 bit)',
      'Hard bound, 80 page book filled with rare photos',
      'High-quality print of the original album cover'
    ]
  },
  {
    id: 'hoth-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format: '2 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lzv_hoth_2cd.jpg',
    orderLink: 'https://smarturl.it/HOTH2CDdlx',
    details: [
      'Remastered album, plus a second disc of unreleased companion audio'
    ]
  },
  {
    id: 'hoth-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format: '1 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lzv_hoth_1cd.jpg',
    orderLink: 'https://smarturl.it/HOTH1CD',
    details: [
      'Remastered album packaged in a gatefold card wallet'
    ]
  },
  {
    id: 'hoth-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format: '2 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lzv_hoth_2lp.jpg',
    orderLink: 'https://smarturl.it/HOTHDlx2LP',
    details: [
      'Remastered album and unreleased companion audio on 180-gram vinyl'
    ]
  },
  {
    id: 'hoth-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format: '1 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lzv_hoth_1lp.jpg',
    orderLink: 'https://smarturl.it/HOTHLP',
    details: [
      'Remastered album on 180-gram vinyl',
      'Packaged in a sleeve that replicates the LP\'s first pressing'
    ]
  },
  {
    id: 'hoth-dig',
    title: '',
    subtitle: 'Digital',
    format: 'Remastered audio featuring 19 tracks',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lzv_hoth_1cd.jpg',
    orderLink: 'https://smarturl.it/HOTHDgtl',
    details: [
      'Remastered album and companion audio will both be available'
    ]
  }
];

const lziAlbums = [
  {
    id: 'lzi-box',
    title: 'LED ZEPPELIN',
    subtitle: 'Super Deluxe Edition Box',
    format: '2 CD + 3 LP',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lz_i.jpg',
    orderLink: 'https://smarturl.it/LZISuperDlxBox',
    details: [
      'CD1: Original album newly remastered in vinyl replica sleeve',
      'CD2: Companion audio featuring previously unreleased October 1969 concert from Paris',
      'Vinyl 1: Original album newly remastered on 180 gram vinyl',
      'Vinyl 2/3: Companion audio on two LPs (180 gram vinyl)',
      'HD Download Card (Original album @ 96 kHz/ 24 bit, Concert @ 48 kHz/ 24 bit)',
      'LP sized, high quality print of the original album cover',
      'Album-size hardback book (72 pages)',
      'Replica of original Atlantic press kit'
    ]
  },
  {
    id: 'lzi-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format: '2 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZI_CD.jpg',
    orderLink: 'https://smarturl.it/LZI2CDdlx',
    details: [
      'Deluxe 2 CD package with original and negative artwork',
      'Original album newly remastered',
      '2nd CD featuring previously unreleased October 1969 concert from Paris',
      '16 page booklet'
    ]
  },
  {
    id: 'lzi-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format: '1 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZI_Original_CD.jpg',
    orderLink: 'https://smarturl.it/LZISingleCD',
    details: [
      'The original album, newly remastered',
      'Gatefold sleeve with 8 page booklet'
    ]
  },
  {
    id: 'lzi-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format: '3 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZI_Re-Issue_LP.jpg',
    orderLink: 'https://smarturl.it/LZIDlx2LP',
    details: [
      'Original remastered LP, plus 2 LPs of companion audio on 180 gram vinyl',
      'Tri-fold sleeve featuring previously unreleased October 1969 concert from Paris'
    ]
  },
  {
    id: 'lzi-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format: '1 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZI_original_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZIAlbumLP',
    details: [
      'Original album on 180 gram vinyl',
      'Newly remastered in single sleeve replicating the original album'
    ]
  },
  {
    id: 'lzi-dig',
    title: '',
    subtitle: 'Digital',
    format: 'Remastered audio featuring 17 tracks',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZI_Original_CD.jpg',
    orderLink: 'https://smarturl.it/LZIDgtl',
    details: [
      'The remastered original album, plus 8 Companion Audio tracks'
    ]
  }
];

const lziiAlbums = [
  {
    id: 'lzii-box',
    title: 'LED ZEPPELIN II',
    subtitle: 'Super Deluxe Edition Box',
    format: '2 CD + 2 LP',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lz_ii.jpg',
    orderLink: 'https://smarturl.it/LZIISuperDlxBox',
    details: [
      'CD1: Original album newly remastered in vinyl replica gatefold sleeve',
      'CD2: Companion audio featuring previously unreleased studio outtakes',
      'Vinyl 1: Original album newly remastered on 180 gram vinyl',
      'Vinyl 2: Companion audio on 180 gram vinyl',
      'HD Download Card (Original album and Companion Audio in 96 kHz/24 bit)',
      'LP sized, high quality print of the original album cover',
      'Album-size hardback book (88 pages)'
    ]
  },
  {
    id: 'lzii-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format: '2 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZII_CD.jpg',
    orderLink: 'https://smarturl.it/LZII2CDdlx',
    details: [
      'Deluxe 2 CD package with original and negative artwork',
      'Original album newly remastered',
      '2nd CD features previously unreleased studio outtakes',
      '16 page booklet'
    ]
  },
  {
    id: 'lzii-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format: '1 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/140227-Zep149841_original_2.jpg',
    orderLink: 'https://smarturl.it/LZIISingleCD',
    details: [
      'The original album, newly remastered',
      'Gatefold sleeve with 8 page booklet'
    ]
  },
  {
    id: 'lzii-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format: '2 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZII_Re-Issue_LP.jpg',
    orderLink: 'https://smarturl.it/LZIIDlx2LP',
    details: [
      'Original remastered LP, plus an album of companion audio on 180 gram vinyl',
      'Tri-fold sleeve featuring previously unreleased studio outtakes'
    ]
  },
  {
    id: 'lzii-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format: '1 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZII_original_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZIIAlbumLP',
    details: [
      'Original album on 180 gram vinyl',
      'Newly remastered in gatefold sleeve replicating the original album'
    ]
  },
  {
    id: 'lzii-dig',
    title: '',
    subtitle: 'Digital',
    format: 'Remastered audio featuring 17 tracks',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/140227-Zep149841_original_2.jpg',
    orderLink: 'https://smarturl.it/LZIIDgtl',
    details: [
      'The remastered original album, plus 8 Companion Audio tracks'
    ]
  }
];

const lziiiAlbums = [
  {
    id: 'lziii-box',
    title: 'LED ZEPPELIN III',
    subtitle: 'Super Deluxe Edition Box',
    format: '2 CD + 2 LP',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/lz_iii.jpg',
    orderLink: 'https://smarturl.it/LZIIISuperDlxBox',
    details: [
      'CD1: Original album newly remastered in vinyl replica gatefold sleeve with wheel and die cut holes',
      'CD2: Companion audio featuring previously unreleased studio outtakes',
      'Vinyl 1: Original album newly remastered on 180 gram vinyl with wheel and die cut holes',
      'Vinyl 2: Companion audio on 180 gram vinyl',
      'HD Download Card (Original album and Companion Audio in 96 kHz/24 bit)',
      'LP sized, high quality print of the original album cover',
      'Album-size hardback book (80 pages)'
    ]
  },
  {
    id: 'lziii-cd',
    title: '',
    subtitle: 'Deluxe Edition CD',
    format: '2 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZIII_CD.jpg',
    orderLink: 'https://smarturl.it/LZIII2CDdlx',
    details: [
      'Deluxe 2 CD package with original and negative artwork',
      'Original album newly remastered',
      '2nd CD features previously unreleased studio outtakes',
      'Artwork replicates original LP sleeve with wheel and die-cut holes',
      '16 page booklet'
    ]
  },
  {
    id: 'lziii-cd1',
    title: '',
    subtitle: 'Remastered Original CD',
    format: '1 CD',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/140227-Zep149841_original_3.jpg',
    orderLink: 'https://smarturl.it/LZIIISingleCD',
    details: [
      'The original album, newly remastered',
      'Gatefold sleeve replicates original LP with wheel and die-cut holes',
      '8 page booklet'
    ]
  },
  {
    id: 'lziii-vinyl',
    title: '',
    subtitle: 'Deluxe Edition Remastered Vinyl',
    format: '3 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZIII_Re-Issue_LP.jpg',
    orderLink: 'https://smarturl.it/LZIIIDlx2LP',
    details: [
      'Original remastered LP, plus an album of companion audio on 180 gram vinyl',
      'Tri-fold sleeve includes wheel and die-cut holes from original LP sleeve',
      'Second LP features previously unreleased studio outtakes'
    ]
  },
  {
    id: 'lziii-lp',
    title: '',
    subtitle: 'Remastered Original Vinyl',
    format: '1 LP VINYL',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/LZIII_original_vinyl.jpg',
    orderLink: 'https://smarturl.it/LZIIIAlbumLP',
    details: [
      'Original album newly remastered on 180 gram vinyl',
      'Gatefold sleeve replicating the original album with wheel and die cut holes'
    ]
  },
  {
    id: 'lziii-dig',
    title: '',
    subtitle: 'Digital',
    format: 'Remastered audio featuring 19 tracks',
    image: '/sites/g/files/g2000013721/files/sites/default/files/201701/140227-Zep149841_original_3.jpg',
    orderLink: 'https://smarturl.it/LZIIIDgtl',
    details: [
      'The remastered original album, plus 9 Companion Audio tracks'
    ]
  }
];

function AlbumCard({ album }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="format">
      <h3>{album.subtitle}</h3>
      <h4>{album.format}</h4>
      <a href={album.orderLink} target="_blank" rel="noopener noreferrer">
        <img src={album.image} alt={album.title} className="prodImage" />
      </a>
      <div style={album?.format1 && {display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontWeight: 'bold'}}>
      {album?.format1 && <div style={{border: '1px solid brown', padding: '.2rem 1rem', color: 'brown', fontSize: '13px'}}>{album?.format1}</div>}
      <a style={album?.format1 && {width: '55%', background: 'brown', borderRadius: 'none'}} href={album.orderLink} target="_blank" rel="noopener noreferrer" className="btn green">
        {album?.format1? 'Order Here': 'ORDER NOW'}
      </a>
      </div>
      <p>
        {expanded && (
          <span className="moreText">
            {album?.format1?
            <>
            {album.details.map((detail, index) => (
              <span style={{color: 'black', fontSize: '12px'}} key={index}>
                • {detail}
                <br />
              </span>
            ))}</>
            :
            <>
            {album.details.map((detail, index) => (
              <span key={index}>
                • {detail}
                <br />
              </span>
            ))}
            </>}

          </span>
        )}
        <span 
          className="readMore" 
          onClick={() => setExpanded(!expanded)}
          style={{ cursor: 'pointer' }}
        >
          [ {expanded ? 'hide...' : 'more info...'} ]
        </span>
      </p>
    </div>
  );
}

function AlbumSection({ title, albums, id, className = "threeCol" }) {
  const mainAlbum = albums[0];
  const otherAlbums = albums.slice(1);

  return (
    <div id={id} className={className}>
      <div className="format main-album">
        <img 
          src={mainAlbum.image} 
          alt={mainAlbum.title} 
          className="prodImage main-image" 
        />
        <h4>{mainAlbum.title}</h4>
      </div>
      {otherAlbums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
      <div className="clearFix"></div>
    </div>
  );
}

function TwoColSection({ albums }) {
  const leftAlbums = albums.filter((_, i) => i % 2 === 0);
  const rightAlbums = albums.filter((_, i) => i % 2 === 1);

  return (
    <div className="twoCol-wrapper">
      <div className="twoCol">
        {leftAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>

      <div className="twoCol">
        {rightAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

function FullWidthSection({ album }) {
  return (
    <div className="oneCol no-top-padding">
      <div className="format red-bg">
        <div className="topFullWidth">
          <a href={album.orderLink} target="_blank" rel="noopener noreferrer">
            <img src={album.image} alt={album.title} />
          </a>
        </div>
        <h4 style={{color: 'brown'}}>{album.title}</h4>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home">

      {/* Content Section */}
      <div className="contentInner buyPage">
        
        {/* TSRTS Section - 3 columns */}
        <div className="tsrts-grid">
  {albums.map((album) => (
    <div key={album.id} className="tsrts-card">
      <AlbumCard album={album} />
    </div>
  ))}
</div>

        {/* How The West Was Won - Full Width */}
        <FullWidthSection album={htwbwAlbums[0]} />
        
        {/* HTWBW - Two Column */}
        <TwoColSection albums={htwbwAlbums.slice(1)} />

        {/* BBC Sessions - Full Width */}
        <div className="oneCol" style={{ clear: 'both' }}>
          <div className="format">
            <div className="topFullWidth">
              <a href="https://smarturl.it/LZBBCBOX" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/led-zeppelin-bbc-800x400.jpg" 
                  alt="LED ZEPPELIN - THE COMPLETE BBC SESSIONS" 
                />
              </a>
            </div>
            <h4 style={{color: '#c1171e', fontFamily: 'Arial'}}>LED ZEPPELIN - THE COMPLETE BBC SESSIONS</h4>
            <div className="clearFix"></div>
          </div>
          <div className="clearFix"></div>
        </div>

        {/* BBC - Two Column */}
        <TwoColSection albums={bbcAlbums} />

        {/* Release jumps */}
        <div id="reledzeppresence" className="releaseJump">release jump</div>

        {/* Presence */}
<div className="three-section-wrapper">

  {/* Presence */}
  <div className="three-section-item">
    <AlbumSection title="PRESENCE" albums={presenceAlbums} id="threeCol2" />
  </div>

  {/* In Through The Out Door */}
  <div className="three-section-item">
    <div style={{background:'#fff'}} className="format main-album">
      <img 
        src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/pres_invert_(257x257).jpg" 
        alt="IN THROUGH THE OUT DOOR" 
        className="prodImage main-image" 
      />
      <h4 style={{color: '#c1171e', fontFamily: 'Arial'}}>IN THROUGH THE OUT DOOR</h4>
    </div>
    {ittodAlbums.slice(1).map((album) => (
      <AlbumCard key={album.id} album={album} />
    ))}
  </div>

  {/* Coda */}
  <div className="three-section-item">
    <div style={{background:'#fff'}} className="format main-album">
      <img 
        src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/coda_invert_(257x257).jpg" 
        alt="CODA" 
        className="prodImage main-image" 
      />
      <h4 style={{color: '#c1171e', fontFamily: 'Arial'}}>CODA</h4>
    </div>
    {codaAlbums.slice(1).map((album) => (
      <AlbumCard key={album.id} album={album} />
    ))}
  </div>

</div>

        {/* Physical Graffiti - Full Width */}
        <div id="reledzepphysgraf" className="releaseJump">release jump</div>
        <div className="oneCol" id="oneCol2" style={{ clear: 'both' }}>
          <div className="format">
            <div className="topFullWidth">
              <img 
                src="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/201701/lz_pg_covers.jpg" 
                alt="LED ZEPPELIN - PHYSICAL GRAFFITI" 
              />
            </div>
            <h4 style={{color: '#c1171e', fontFamily: 'Arial'}}>LED ZEPPELIN - PHYSICAL GRAFFITI</h4>
            <div className="clearFix"></div>
          </div>
          <div className="clearFix"></div>
        </div>

        {/* PG - 3 columns */}
        <div className="threeCol-wrapper">
          <div className="threeCol">
            <AlbumCard album={pgAlbums[0]} />
            <AlbumCard album={pgAlbums[1]} />
            <div className="clearFix"></div>
          </div>
          <div id="ledZeppelinII" className="threeCol">
            <AlbumCard album={pgAlbums[2]} />
            <AlbumCard album={pgAlbums[3]} />
            <div className="clearFix"></div>
          </div>
          <div id="ledZeppelinIII" className="threeCol lastCol">
            <AlbumCard album={pgAlbums[4]} />
            <AlbumCard album={pgAlbums[5]} />
            <div className="clearFix"></div>
          </div>
        </div>

        {/*LZ IV and HOTH*/}
        {/* <div id="reledzepiv" className="releaseJump">release jump</div>
        <div id="reledzephoth" className="releaseJump">release jump</div>
        <div className="clearFix"></div> */}

        {/* Led Zeppelin IV */}
        {/* <div className="twoCol" id="twoCol1">
          <div className="format main-album">
            <div className="topOriginalFour swipeyBackground">
              <div className="bottomInvertedFour swipeyForeground"></div>
            </div>
            <h4>LED ZEPPELIN IV</h4>
          </div>
          {lzivAlbums.slice(1).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div> */}

        {/* Houses of the Holy */}
        {/* <div className="twoCol lastCol">
          <div className="format main-album">
            <div id="ledZeppelinHOTH" className="topOriginalFive swipeyBackground">
              <div className="bottomInvertedFive swipeyForeground"></div>
            </div>
            <h4>HOUSES OF THE HOLY</h4>
          </div>
          {hothAlbums.slice(1).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div> */}

        {/* Release jumps */}
        {/* <div id="reledzep" className="releaseJump">release jump</div>
        <div id="reledzepii" className="releaseJump">release jump</div>
        <div id="reledzepiii" className="releaseJump">release jump</div>
        <div className="clearFix"></div> */}

        {/* Led Zeppelin I, II, III */}
        {/* <AlbumSection title="LED ZEPPELIN" albums={lziAlbums} id="threeCol1" />
        <div id="ledZeppelinIIa" className="threeCol">
          <div className="format main-album">
            <img 
              src="/sites/g/files/g2000013721/files/sites/default/files/201701/lz_ii.jpg" 
              alt="LED ZEPPELIN II" 
              className="prodImage main-image" 
            />
            <h4>LED ZEPPELIN II</h4>
          </div>
          {lziiAlbums.slice(1).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <div id="ledZeppelinIIIa" className="threeCol lastCol">
          <div className="format main-album">
            <img 
              src="/sites/g/files/g2000013721/files/sites/default/files/201701/lz_iii.jpg" 
              alt="LED ZEPPELIN III" 
              className="prodImage main-image" 
            />
            <h4>LED ZEPPELIN III</h4>
          </div>
          {lziiiAlbums.slice(1).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>

        <div className="clearFix"></div> */}
      </div>
    </div>
  );
}
return <Home />;

}

export default Album
