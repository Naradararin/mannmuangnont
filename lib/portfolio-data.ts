export type ImageType = 'result-only' | 'process-and-result'
export type Tier = 'ทั่วไป' | 'High-End' | 'Luxury'

export interface BiLang {
  th: string
  en: string
}

export interface PortfolioEntry {
  id: string
  tier: Tier
  folderName: string
  date: string
  province: BiLang
  location: BiLang
  sourceLink: string
  mainCategories: BiLang[]
  curtainTypes: BiLang[]
  lightBlocking: string
  propertyType: BiLang
  imageType: ImageType
  imageUrls: string[]
  processImageUrls?: string[]
  featuredOrder?: number
  isPlaceholder?: boolean
  detailHref?: string
  /**
   * Marks `location` as a descriptive phrase (a building/work description)
   * rather than a named place, so the generated description restructures the
   * sentence instead of forcing an awkward "...ที่<description>".
   */
  locationKind?: 'descriptor'
  /** Auto-generated Thai summary built only from the fields above. */
  description: string
}

type PortfolioSeed = Omit<PortfolioEntry, 'description'>

const PORTFOLIO_RAW: PortfolioSeed[] = [
  // ===== ทั่วไป (16 entries) =====
  {
    id: 'casa-ville-ratchaphruek-2026-06',
    tier: 'ทั่วไป',
    folderName: 'Casa Ville Ratchaphruek 16-06-26',
    date: '2026-06-16',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'คาซ่าวิลล์ ราชพฤกษ์-รัตนาธิเบศร์ 2', en: 'Casa Ville Ratchaphruek–Rattanathibet 2' },
    sourceLink: 'https://www.facebook.com/share/p/1HFnniYnUw/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ตาไก่', en: 'Eyelet' }, { th: 'จีบ', en: 'Pinch Pleat' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/726495140_1468822361924865_1653762496845575414_n.jpg',
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/722910134_1468822211924880_6490375548028892982_n.jpg',
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/725560068_1468822271924874_8402858702385845893_n.jpg',
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/725574425_1468821928591575_5933533179560703220_n.jpg',
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/725715449_1468822425258192_3106751726433291535_n.jpg',
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/725793365_1468822618591506_7164118646067337614_n.jpg',
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/726564788_1468821998591568_5313272734727901345_n.jpg',
      '/images/portfolio/casa-ville-ratchaphruek-16-06-26/727159126_1468822091924892_7576060768715655002_n.jpg',
    ],
  },
  {
    id: 'wood-grain-2026-06',
    tier: 'ทั่วไป',
    folderName: 'wood grain 05-06-26',
    date: '2026-06-05',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'งานปูพื้นลายไม้', en: 'Wood Grain Flooring' },
    locationKind: 'descriptor',
    sourceLink: 'https://www.facebook.com/share/p/1HjiUKoEoN/',
    mainCategories: [{ th: 'กระเบื้องยาง', en: 'Vinyl Flooring' }],
    curtainTypes: [],
    lightBlocking: '-',
    propertyType: { th: '-', en: '-' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/wood-grain-05-06-26/713903471_1456402226500212_6142999916480279380_n.jpg',
      '/images/portfolio/wood-grain-05-06-26/714570789_1456402183166883_944922821482411181_n.jpg',
    ],
  },
  {
    id: 'baanwangjaru-2026-04b',
    tier: 'ทั่วไป',
    folderName: 'Baanwangjaru Bangnuathong 24-04-26',
    date: '2026-04-24',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'หมู่บ้านวังจารุ', en: 'Baanwangjaru Village' },
    sourceLink: 'https://www.facebook.com/share/p/19CtKHW811/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [
      { th: 'ลอน', en: 'Ripple-Fold' },
      { th: 'ตาไก่', en: 'Eyelet' },
      { th: 'จีบ', en: 'Pinch Pleat' },
      { th: 'พับ', en: 'Fold-Panel' },
    ],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    featuredOrder: 2,
    imageUrls: [
      '/images/portfolio/baanwangjaru-bangnuathong-24-04-26/678231774_1420007453473023_5927893980942885921_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-24-04-26/677670807_1420006643473104_3262539898860969589_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-24-04-26/680235279_1420008410139594_3656819354133188649_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-24-04-26/680467671_1420006556806446_1872808121291217578_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-24-04-26/682072685_1420008783472890_1802727121274502533_n.jpg',
    ],
  },
  {
    id: 'baanwangjaru-2026-04a',
    tier: 'ทั่วไป',
    folderName: 'Baanwangjaru Bangnuathong 19-04-26',
    date: '2026-04-19',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'หมู่บ้านวังจารุ', en: 'Baanwangjaru Village' },
    sourceLink: 'https://www.facebook.com/share/p/1Buk1Wssy4/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [
      { th: 'ลอน', en: 'Ripple-Fold' },
      { th: 'ตาไก่', en: 'Eyelet' },
      { th: 'พับ', en: 'Fold-Panel' },
    ],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/baanwangjaru-bangnuathong-19-04-26/673022805_1415808283892940_7332146149359432485_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-04-26/672448687_1415808600559575_8210611652929230269_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-04-26/672680155_1415808457226256_8765265326686597119_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-04-26/672680527_1415809810559454_1084471745686103420_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-04-26/673544154_1415808247226277_1602959395821069246_n.jpg',
    ],
  },
  {
    id: 'modiz-vault-2026-03',
    tier: 'ทั่วไป',
    folderName: 'Modiz Vault Kaset Sripatum 26-03-26',
    date: '2026-03-26',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'โมดิซ วอลท์ เกษตร ศรีปทุม', en: 'Modiz Vault Kaset Sripatum' },
    sourceLink: 'https://www.facebook.com/share/p/1Ghjsa8V8c/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/modiz-vault-kaset-sripatum-26-03-26/656935785_1395978842542551_7313288147563425218_n.jpg',
      '/images/portfolio/modiz-vault-kaset-sripatum-26-03-26/654271125_1395978705875898_5617487944749556739_n.jpg',
      '/images/portfolio/modiz-vault-kaset-sripatum-26-03-26/656681765_1395979105875858_5053777056536585840_n.jpg',
      '/images/portfolio/modiz-vault-kaset-sripatum-26-03-26/657155290_1395978969209205_6034979125383000424_n.jpg',
    ],
  },
  {
    id: 'the-village-hathairat-2026-03',
    tier: 'ทั่วไป',
    folderName: 'The Village Hathairat-Wongwaen 17-03-26',
    date: '2026-03-17',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'เดอะ วิลเลจ หทัยราษฎร์-วงแหวนฯ', en: 'The Village Hathairat–Wongwaen' },
    sourceLink: 'https://www.facebook.com/share/p/17yTknj2xA/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ตาไก่', en: 'Eyelet' }, { th: 'พับ', en: 'Fold-Panel' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านน็อคดาวน์', en: 'Prefab House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/the-village-hathairat-wongwaen-17-03-26/653705113_1387827826690986_3526528730874335197_n.jpg',
      '/images/portfolio/the-village-hathairat-wongwaen-17-03-26/651370926_1387827953357640_3795094491321877625_n.jpg',
      '/images/portfolio/the-village-hathairat-wongwaen-17-03-26/651673082_1387827790024323_3018503257745763724_n.jpg',
      '/images/portfolio/the-village-hathairat-wongwaen-17-03-26/651782703_1387827690024333_3370658613737563509_n.jpg',
      '/images/portfolio/the-village-hathairat-wongwaen-17-03-26/651894637_1387827850024317_1833645839823971643_n.jpg',
      '/images/portfolio/the-village-hathairat-wongwaen-17-03-26/653434783_1387827980024304_2265176503648804778_n.jpg',
      '/images/portfolio/the-village-hathairat-wongwaen-17-03-26/653698087_1387827740024328_4314302429055370817_n.jpg',
    ],
  },
  {
    id: 'pathum-thani-sai-nai-2026-01',
    tier: 'ทั่วไป',
    folderName: 'Pathum Thani-Sai Nai Alley 31-01-26',
    date: '2026-01-31',
    province: { th: 'ปทุมธานี', en: 'Pathum Thani' },
    location: { th: 'อาคารพาณิชย์ ติดแม่น้ำเจ้าพระยา', en: 'Commercial Building by the Chao Phraya River' },
    locationKind: 'descriptor',
    sourceLink: 'https://www.facebook.com/share/p/18Y8unQsHa/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }, { th: 'พับ', en: 'Fold-Panel' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'ทาวน์เฮ้าส์', en: 'Townhouse' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/pathum-thani-sai-nai-alley-31-01-26/624246675_1349373787203057_2953491053808605381_n.jpg',
      '/images/portfolio/pathum-thani-sai-nai-alley-31-01-26/622732632_1349373310536438_4343242019666763062_n.jpg',
      '/images/portfolio/pathum-thani-sai-nai-alley-31-01-26/623804530_1349373357203100_1503600649034960064_n.jpg',
      '/images/portfolio/pathum-thani-sai-nai-alley-31-01-26/624160661_1349373410536428_3560166351839524423_n.jpg',
    ],
  },
  {
    id: 'pattanakarn-road-2026-01',
    tier: 'ทั่วไป',
    folderName: 'Pattanakarn Road, Prawet District 10-01-26',
    date: '2026-01-10',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'ถนนพัฒนาการ เขตประเวศ', en: 'Pattanakarn Road, Prawet District' },
    sourceLink: 'https://www.facebook.com/share/p/1BsErPvYvy/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ม่านปรับแสง', en: 'Sheer' }],
    lightBlocking: '-',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/pattanakarn-road-prawet-district-10-01-26/613153205_1330946939045742_3379042826390421622_n.jpg',
      '/images/portfolio/pattanakarn-road-prawet-district-10-01-26/612164116_1330946899045746_3100939348044526468_n.jpg',
      '/images/portfolio/pattanakarn-road-prawet-district-10-01-26/612319835_1330946842379085_7501153133083905986_n.jpg',
      '/images/portfolio/pattanakarn-road-prawet-district-10-01-26/614577727_1330947039045732_5145100612186536441_n.jpg',
    ],
  },
  {
    id: 'the-centro-rattanathibet-2025-12',
    tier: 'ทั่วไป',
    folderName: 'The Centro Rattanathibet 03-12-25',
    date: '2025-12-03',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'เดอะเซนโทรรัตนาธิเบศร์', en: 'The Centro Rattanathibet' },
    sourceLink: 'https://www.facebook.com/share/p/14heV9B8rk1/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'จีบ', en: 'Pinch Pleat' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/the-centro-rattanathibet-03-12-25/594847381_1301947798612323_7137541025017489473_n.jpg',
      '/images/portfolio/the-centro-rattanathibet-03-12-25/590793620_1301947878612315_6522542274377566147_n.jpg',
      '/images/portfolio/the-centro-rattanathibet-03-12-25/590922939_1301947581945678_8220897091396205702_n.jpg',
      '/images/portfolio/the-centro-rattanathibet-03-12-25/592482659_1301947931945643_3835422557794548330_n.jpg',
      '/images/portfolio/the-centro-rattanathibet-03-12-25/593961366_1301947301945706_348350005924224003_n.jpg',
    ],
  },
  {
    id: 'nichatra-2025-11',
    tier: 'ทั่วไป',
    folderName: 'Nichatra 22-11-25',
    date: '2025-11-22',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'ณิชาตรา', en: 'Nichatra' },
    sourceLink: 'https://www.facebook.com/share/p/1EC9ipC4GZ/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ม่านปรับแสง', en: 'Sheer' }],
    lightBlocking: '-',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/nichatra-22-11-25/586458922_1293619806111789_190169419457090829_n.jpg',
      '/images/portfolio/nichatra-22-11-25/584732923_1293537752786661_1147035787840238256_n.jpg',
      '/images/portfolio/nichatra-22-11-25/584761732_1293536882786748_6684385390617824142_n.jpg',
      '/images/portfolio/nichatra-22-11-25/586210611_1293537692786667_4240132023377969149_n.jpg',
    ],
  },
  {
    id: 'baanwangjaru-2025-10',
    tier: 'ทั่วไป',
    folderName: 'Baanwangjaru Bangnuathong 19-10-25',
    date: '2025-10-19',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'หมู่บ้านวังจารุ', en: 'Baanwangjaru Village' },
    sourceLink: 'https://www.facebook.com/share/p/1E81psvk3f/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [
      { th: 'ลอน', en: 'Ripple-Fold' },
      { th: 'ตาไก่', en: 'Eyelet' },
      { th: 'พับ', en: 'Fold-Panel' },
    ],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/baanwangjaru-bangnuathong-19-10-25/565354716_1264164572390646_7812664522507677439_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-10-25/565132731_1264164292390674_474232947168630976_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-10-25/565153130_1264166189057151_3443159288510591248_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-10-25/565245640_1264165395723897_4552610386032706682_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-10-25/565657132_1264165185723918_1497057227736353479_n.jpg',
      '/images/portfolio/baanwangjaru-bangnuathong-19-10-25/565662050_1264162879057482_7504328128152072504_n.jpg',
    ],
  },
  {
    id: 'kave-pop-salaya-2025-10',
    tier: 'ทั่วไป',
    folderName: 'Kave Pop Salaya 19-10-25',
    date: '2025-10-19',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'Kave Pop Salaya', en: 'Kave Pop Salaya' },
    sourceLink: 'https://www.facebook.com/share/p/1E9TySVxGP/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    featuredOrder: 1,
    imageUrls: [
      '/images/portfolio/kave-pop-salaya-19-10-25/564234071_1264136789060091_1744282931963897644_n.jpg',
      '/images/portfolio/kave-pop-salaya-19-10-25/565178509_1264136742393429_4710503772792484059_n.jpg',
      '/images/portfolio/kave-pop-salaya-19-10-25/565765917_1264137409060029_815543596137558194_n.jpg',
      '/images/portfolio/kave-pop-salaya-19-10-25/565837354_1264137652393338_5874985742714031512_n.jpg',
      '/images/portfolio/kave-pop-salaya-19-10-25/565925647_1264136639060106_3336168542215580796_n.jpg',
      '/images/portfolio/kave-pop-salaya-19-10-25/566222222_1264136825726754_2656700444656033568_n.jpg',
      '/images/portfolio/kave-pop-salaya-19-10-25/566782789_1264137825726654_5895939181882469928_n.jpg',
    ],
  },
  {
    id: 'the-lofts-asoke-2024-12',
    tier: 'ทั่วไป',
    folderName: 'The Lofts Asoke 18-12-24',
    date: '2024-12-18',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'เดอะ ลอฟท์ อโศก', en: 'The Lofts Asoke' },
    sourceLink: 'https://www.facebook.com/share/p/1Ccg1HgXw6/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'จีบ', en: 'Pinch Pleat' }, { th: 'มู่ลี่', en: 'Venetian Blind' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    featuredOrder: 3,
    imageUrls: [
      '/images/portfolio/the-lofts-asoke-18-12-24/486380288_1094864549320650_2630213902559893738_n.jpg',
      '/images/portfolio/the-lofts-asoke-18-12-24/486303565_1094864619320643_825280101206584899_n.jpg',
      '/images/portfolio/the-lofts-asoke-18-12-24/486491958_1094864662653972_5821830896873508742_n.jpg',
      '/images/portfolio/the-lofts-asoke-18-12-24/486787783_1094864685987303_8442983500941022607_n.jpg',
      '/images/portfolio/the-lofts-asoke-18-12-24/486835396_1094864495987322_243277181481049123_n.jpg',
      '/images/portfolio/the-lofts-asoke-18-12-24/486874216_1094864682653970_8321161528726322265_n.jpg',
      '/images/portfolio/the-lofts-asoke-18-12-24/487481689_1094864625987309_1210908095466123754_n.jpg',
    ],
  },
  {
    id: 'metro-park-sathorn-2024-12',
    tier: 'ทั่วไป',
    folderName: 'Metro Park Sathorn 02-12-24',
    date: '2024-12-02',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'เมโทร พาร์ค สาทร', en: 'Metro Park Sathorn' },
    sourceLink: 'https://www.facebook.com/share/p/1D5nKpVNZG/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'จีบ', en: 'Pinch Pleat' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/metro-park-sathorn-02-12-24/486670631_1094364746037297_302241885515330594_n.jpg',
      '/images/portfolio/metro-park-sathorn-02-12-24/486669972_1094364639370641_5752168328935887242_n.jpg',
      '/images/portfolio/metro-park-sathorn-02-12-24/486805911_1094364709370634_9150135470929528241_n.jpg',
      '/images/portfolio/metro-park-sathorn-02-12-24/486951922_1094364696037302_2432163100104657934_n.jpg',
      '/images/portfolio/metro-park-sathorn-02-12-24/487139831_1094364692703969_1637209602295307800_n.jpg',
      '/images/portfolio/metro-park-sathorn-02-12-24/487217750_1094364749370630_3987911270820567672_n.jpg',
    ],
  },
  {
    id: 'chichakorn-kaewin-2024-08',
    tier: 'ทั่วไป',
    folderName: 'Chichakorn Kaewin 28-08-24',
    date: '2024-08-28',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'ชิชากรแก้วอินทร์', en: 'Chichakorn Kaewin' },
    sourceLink: 'https://www.facebook.com/share/p/1BZtZANrnx/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [
      { th: 'ลอน', en: 'Ripple-Fold' },
      { th: 'ม่านปรับแสง', en: 'Sheer' },
      { th: 'จีบ', en: 'Pinch Pleat' },
    ],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/chichakorn-kaewin-28-08-24/457178422_934448815362225_4736209097829316553_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/485669878_1092288362911602_7918167835349047462_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/486058374_1092288299578275_3212396212603267912_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/486119166_1092288339578271_8342194065763996970_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/486163708_1092288466244925_2795560350757252520_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/486180182_1092288259578279_6543865266921050487_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/486297086_1092288386244933_3843983729678527404_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/486460775_1092288329578272_2784303513271330279_n.jpg',
      '/images/portfolio/chichakorn-kaewin-28-08-24/486549958_1092288242911614_2813806202789419934_n.jpg',
    ],
  },
  {
    id: 'chuan-chuen-chaengwattana-2024-06',
    tier: 'ทั่วไป',
    folderName: 'Chuan Chuen Chaengwattana Village 04-06-24',
    date: '2024-06-04',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'หมู่บ้านชวนชื่นแจ้งวัฒนะ', en: 'Chuan Chuen Chaengwattana Village' },
    sourceLink: 'https://www.facebook.com/share/p/1HVP4gwAzf/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'จีบ', en: 'Pinch Pleat' }, { th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/486322351_1090831096390662_8035198892147984858_n.jpg',
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/485792022_1090831396390632_2291260014886287786_n.jpg',
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/486045018_1090831113057327_5171535127150620584_n.jpg',
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/486059630_1090831116390660_7278773297664978109_n.jpg',
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/486096682_1090831373057301_8143600458277913272_n.jpg',
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/486165039_1090831036390668_2270457461784836760_n.jpg',
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/486248495_1090831273057311_1024470216601095097_n.jpg',
      '/images/portfolio/chuan-chuen-chaengwattana-village-04-06-24/486377615_1090831086390663_4904353078407828354_n.jpg',
    ],
  },

  // ===== High-End (12 entries) =====
  {
    id: 'nichatra-he-2026-02',
    tier: 'High-End',
    folderName: 'Nichatra(High-End) 06-02-26',
    date: '2026-02-06',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'ณิชาตรา', en: 'Nichatra' },
    sourceLink: 'https://www.facebook.com/share/p/1BsZ8uY75c/',
    mainCategories: [{ th: 'วอลเปเปอร์', en: 'Wallpaper' }],
    curtainTypes: [],
    lightBlocking: '-',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/nichatra-high-end-06-02-26/628420878_1353620610111708_633601835838337285_n.jpg',
      '/images/portfolio/nichatra-high-end-06-02-26/625385151_1353620853445017_5517070432750183485_n.jpg',
      '/images/portfolio/nichatra-high-end-06-02-26/625882766_1353620800111689_2481133927381368259_n.jpg',
      '/images/portfolio/nichatra-high-end-06-02-26/627748659_1353620653445037_78370017280790537_n.jpg',
      '/images/portfolio/nichatra-high-end-06-02-26/629139006_1353620713445031_3891161072916215674_n.jpg',
    ],
  },
  {
    id: 'atmoz-palacio-2025-09',
    tier: 'High-End',
    folderName: 'Atmoz Palacio Ladprao Wanghin(High-End) 26-09-25',
    date: '2025-09-26',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'Atmoz Palacio Ladprao Wanghin', en: 'Atmoz Palacio Ladprao Wanghin' },
    sourceLink: 'https://www.facebook.com/share/p/1CA6yDg9H7/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    featuredOrder: 3,
    imageUrls: [
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555042600_1242494951224275_1920910821692335161_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/553072294_1242495747890862_607548501180178725_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/554386923_1242495987890838_6759673489036756982_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/554434461_1242494884557615_1438978971650447118_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/554571338_1242495867890850_8461825212603897629_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555044189_1242494784557625_7134704199586568121_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555047187_1242496047890832_3149688549087233317_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555451454_1242495164557587_1436984374824677581_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555518597_1242495707890866_1470931435578273352_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555550486_1242495514557552_6090205581977277329_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555964878_1242495291224241_6075924189607063286_n.jpg',
    ],
  },
  {
    id: 'atmoz-palacio-2025-07b',
    tier: 'High-End',
    folderName: 'Atmoz Palacio Ladprao Wanghin(High-End) 16-07-25',
    date: '2025-07-16',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'Atmoz Palacio Ladprao Wanghin', en: 'Atmoz Palacio Ladprao Wanghin' },
    sourceLink: 'https://www.facebook.com/share/p/1EeTMhy3vR/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/520280014_1182018863938551_3946851036892814065_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/517682214_1182018927271878_2141373306147255484_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/517695339_1182019090605195_4363380387951437083_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/518252311_1182019273938510_8513987723393460024_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/518266922_1182018890605215_7311864008080075318_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/518291845_1182019687271802_3850596839596582059_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/518304203_1182019487271822_3196360352894200435_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/518796157_1182019620605142_8437311466587748735_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/519470270_1182019040605200_5235673934647644084_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/519673303_1182019010605203_8744988547981956310_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/521474337_1182019353938502_5662887887607571473_n.jpg',
    ],
  },
  {
    id: 'atmoz-palacio-2025-07a',
    tier: 'High-End',
    folderName: 'Atmoz Palacio Ladprao Wanghin(High-End) 13-07-25',
    date: '2025-07-13',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'Atmoz Palacio Ladprao Wanghin', en: 'Atmoz Palacio Ladprao Wanghin' },
    sourceLink: 'https://www.facebook.com/share/p/1BNuR7ijVU/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ม่านปรับแสง', en: 'Sheer' }],
    lightBlocking: '-',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-13-07-25/516532699_1179376770869427_3994466032784753_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-13-07-25/517225664_1179376600869444_6078737587872208813_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-13-07-25/517364376_1179376050869499_1498540198661545185_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-13-07-25/517774159_1179376357536135_8566805701293287325_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-13-07-25/517984604_1179376817536089_2542242867262798299_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-13-07-25/517999632_1179376724202765_607449335064570398_n.jpg',
    ],
  },
  {
    id: 'nichatra-he-2025-07',
    tier: 'High-End',
    folderName: 'Nichatra(High-End) 03-07-25',
    date: '2025-07-03',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'ณิชาตรา', en: 'Nichatra' },
    sourceLink: 'https://www.facebook.com/share/p/1Efci884op/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }, { th: 'มู่ลี่', en: 'Venetian Blind' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/nichatra-high-end-03-07-25/514262606_1171732488300522_2646324643825508912_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514254530_1171732091633895_7145505815615436022_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514257234_1171732818300489_6665948734857102990_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514272423_1171732024967235_2418236443428718042_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514275208_1171732301633874_4854107849496019650_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514353055_1171731908300580_7191073399010684712_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514355032_1171732234967214_5287776379744267806_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514402325_1171731738300597_7605293689914276007_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/514420833_1171732731633831_27315703901550073_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/515012864_1171733334967104_8233585732609613159_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/515019693_1171731821633922_1339594734780146929_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/515284679_1171731781633926_1059802609507239815_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/515489216_1171732131633891_271000085135621834_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/515492740_1171731708300600_4162768098338979151_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/515850178_1171731988300572_1140717515358859260_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/516378267_1171733051633799_5536785927289028358_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/586527453_1293537312786705_3433954164989993035_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/590661307_1299815695492200_4870961864148613976_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/590766591_1299814705492299_9084847525223174861_n.jpg',
      '/images/portfolio/nichatra-high-end-03-07-25/591721028_1299814818825621_4716821750420953073_n.jpg',
    ],
  },
  {
    id: 'atmoz-palacio-2025-06',
    tier: 'High-End',
    folderName: 'Atmoz Palacio Ladprao Wanghin(High-End) 24-06-25',
    date: '2025-06-24',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'Atmoz Palacio Ladprao Wanghin', en: 'Atmoz Palacio Ladprao Wanghin' },
    sourceLink: 'https://www.facebook.com/share/p/1MB18C2zBP/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-24-06-25/511163685_1163781279095643_4258434193113619707_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-24-06-25/510998587_1163780925762345_1474713272211654992_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-24-06-25/511096006_1163781012429003_4241752391837209352_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-24-06-25/511148336_1163781092428995_7256898992639310298_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-24-06-25/511165472_1163780789095692_787932397921275546_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-24-06-25/511271334_1163780635762374_5742367485247586769_n.jpg',
    ],
  },
  {
    id: 'atmoz-palacio-2025-04',
    tier: 'High-End',
    folderName: 'Atmoz Palacio Ladprao Wanghin(High-End) 30-04-25',
    date: '2025-04-30',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'Atmoz Palacio Ladprao Wanghin', en: 'Atmoz Palacio Ladprao Wanghin' },
    sourceLink: 'https://www.facebook.com/share/p/18eRe2Kbou/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    featuredOrder: 2,
    imageUrls: [
      // Clean, no-watermark cover (was 494070972…_n.jpg, which had a watermark).
      '/images/hero/ddasdaavdftf.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-30-04-25/494050676_1122019789938459_895704875691398311_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-30-04-25/494098114_1122019686605136_7230707499213618536_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-30-04-25/494197858_1122019723271799_2067413315173681888_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-30-04-25/494634726_1122020273271744_7760649265083688186_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-30-04-25/494655881_1122019753271796_7381754305616293728_n.jpg',
    ],
  },
  {
    id: 'soi-phet-kasem-51-2025-04',
    tier: 'High-End',
    folderName: 'Soi Phet Kasem 51(High-End) 17-04-25',
    date: '2025-04-17',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'ซอยเพชรเกษม 51', en: 'Soi Phet Kasem 51' },
    sourceLink: 'https://www.facebook.com/share/p/1HnrEXqCjp/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [
      { th: 'จีบ', en: 'Pinch Pleat' },
      { th: 'มู่ลี่', en: 'Venetian Blind' },
      { th: 'ตาไก่', en: 'Eyelet' },
    ],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/492219358_1112019630938475_5063944754424876728_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/490981001_1112019830938455_6058524230342436060_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/491160417_1112020910938347_8306890459717770598_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/491264883_1112021124271659_3561980112455088136_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/491338869_1112020207605084_3201037115516559160_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/491626576_1112020440938394_8563415478634657508_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/491826760_1112021074271664_6055301616866546347_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/491873298_1112020817605023_7547993222209733167_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/491971708_1112020747605030_314241053447250296_n.jpg',
      '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/492252229_1112020504271721_8898730097855430132_n.jpg',
    ],
  },
  {
    id: 'atmoz-palacio-2025-03',
    tier: 'High-End',
    folderName: 'Atmoz Palacio Ladprao Wanghin(High-End) 09-03-25',
    date: '2025-03-09',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'Atmoz Palacio Ladprao Wanghin', en: 'Atmoz Palacio Ladprao Wanghin' },
    sourceLink: 'https://www.facebook.com/share/p/1FuVQANfDJ/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [{ th: 'ลอน', en: 'Ripple-Fold' }],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'คอนโด', en: 'Condo' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489068103_1103891448417960_6722455699261952259_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/488865299_1103895018417603_4049896413960044929_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/488886294_1103893195084452_4993041488004662597_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/488935222_1103891618417943_8847842624393147369_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489222769_1103892011751237_7974006022616186973_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489283392_1103895361750902_4417588474835639030_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489473869_1103895131750925_1164325077883662417_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489509036_1103893045084467_7162864864925062584_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489564133_1103893485084423_8715345681796285536_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489630106_1103894841750954_6355998099241220780_n.jpg',
      '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-09-03-25/489806796_1103892025084569_6464262253508845961_n.jpg',
    ],
  },
  {
    id: 'chiang-rak-noi-2025-02',
    tier: 'High-End',
    folderName: 'Chiang Rak Noi(High-End) 25-02-25',
    date: '2025-02-25',
    province: { th: 'อยุธยา', en: 'Ayutthaya' },
    location: { th: 'Chiang Rak Noi', en: 'Chiang Rak Noi' },
    sourceLink: 'https://www.facebook.com/share/p/18ywm8sSRT/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [
      { th: 'ลอน', en: 'Ripple-Fold' },
      { th: 'ม้วน (MagicScreen)', en: 'Roller (MagicScreen)' },
      { th: 'มูลี่', en: 'Venetian Blind' },
    ],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    featuredOrder: 1,
    imageUrls: [
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486829305_1095747405899031_1641953211838636839_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486666557_1095747002565738_2545095622512652727_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486672388_1095151112625327_8710768517893518078_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486713165_1095747025899069_6826125920834598607_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486811324_1095747392565699_804917897544678150_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486824391_1095747275899044_308777405937283432_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486967012_1095747259232379_3421928630440554319_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487128880_1095747385899033_601038362133267568_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487130379_1095747399232365_8615969887857560125_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487162082_1095747019232403_4344416934039465124_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487175420_1095747422565696_6611192413271723521_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487184687_1095747389232366_4525388797924895267_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487209702_1095747409232364_2255493380843128422_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487217420_1095747469232358_7935106586183094681_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487232173_1095747435899028_8737874648858609744_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487239631_1095747419232363_7841748170877433025_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487378564_1095747429232362_8002088237687860333_n.jpg',
      '/images/portfolio/chiang-rak-noi-high-end-25-02-25/487399887_1095747485899023_9187313924784377791_n.jpg',
    ],
  },
  {
    id: 'mantana-westgate-curtain-2024-05',
    tier: 'High-End',
    folderName: 'Mantana Westgatei(High-End) 26-05-24',
    date: '2024-05-26',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'มัณฑนา เวสต์เกต', en: 'Mantana Westgate' },
    sourceLink: 'https://www.facebook.com/share/p/14nRLccGFXx/',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }],
    curtainTypes: [
      { th: 'ลอน', en: 'Ripple-Fold' },
      { th: 'มู่ลี่', en: 'Venetian Blind' },
      { th: 'พับ', en: 'Fold-Panel' },
    ],
    lightBlocking: 'Dimout 80-90%',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/445181938_873258871481220_8135254820683322889_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485152036_1090732386400533_4575192990917651694_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485792374_1090732329733872_1225544116567312913_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485804730_1090732706400501_1241371068793416794_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485857961_1090732346400537_7213480130782258830_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485883106_1090732553067183_108168914828039204_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485888330_1090732256400546_8429610334504269905_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485954016_1090732299733875_6362251379070808961_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486205067_1090732559733849_8046902371205831254_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486323333_1090732399733865_5322915461638601702_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486376139_1090732683067170_5450598754617521771_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486412789_1090577319749373_821787910642472604_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486620616_1090732353067203_6975272455661277861_n.jpg',
    ],
  },
  {
    id: 'mantana-westgate-wallpaper-2024-05',
    tier: 'High-End',
    folderName: 'Mantana Westgatei(High-End) 26-05-24',
    date: '2024-05-26',
    province: { th: 'นนทบุรี', en: 'Nonthaburi' },
    location: { th: 'มัณฑนา เวสต์เกต', en: 'Mantana Westgate' },
    sourceLink: 'https://www.facebook.com/share/p/14nRLccGFXx/',
    mainCategories: [{ th: 'วอลเปเปอร์', en: 'Wallpaper' }],
    curtainTypes: [],
    lightBlocking: '-',
    propertyType: { th: 'บ้านเดี่ยว', en: 'Detached House' },
    imageType: 'result-only',
    imageUrls: [
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/445181938_873258871481220_8135254820683322889_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485152036_1090732386400533_4575192990917651694_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485792374_1090732329733872_1225544116567312913_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485804730_1090732706400501_1241371068793416794_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485857961_1090732346400537_7213480130782258830_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485883106_1090732553067183_108168914828039204_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485888330_1090732256400546_8429610334504269905_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/485954016_1090732299733875_6362251379070808961_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486205067_1090732559733849_8046902371205831254_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486323333_1090732399733865_5322915461638601702_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486376139_1090732683067170_5450598754617521771_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486412789_1090577319749373_821787910642472604_n.jpg',
      '/images/portfolio/mantana-westgatei-high-end-26-05-24/486620616_1090732353067203_6975272455661277861_n.jpg',
    ],
  },

  // ===== Luxury =====
  {
    id: 'thep-rak-49-2024-03',
    tier: 'Luxury',
    folderName: 'Thep Rak 49(Luxury) 16-03-24',
    date: '2024-03-16',
    province: { th: 'กรุงเทพ', en: 'Bangkok' },
    location: { th: 'เทพรักษ์ 49', en: 'Thep Rak 49' },
    sourceLink: '',
    mainCategories: [{ th: 'ผ้าม่าน', en: 'Curtains' }, { th: 'วอลเปเปอร์', en: 'Wallpaper' }],
    curtainTypes: [
      { th: 'ลอน', en: 'Ripple-Fold' },
      { th: 'มูลี่', en: 'Venetian Blind' },
      { th: 'มอเตอร์ไฟฟ้า', en: 'Motorised' },
    ],
    lightBlocking: 'Blackout 100%',
    propertyType: { th: 'คฤหาสน์', en: 'Mansion' },
    imageType: 'result-only',
    imageUrls: ['/images/portfolio/thep-rak-49/Premium/473279.jpg'],
    detailHref: '/portfolio/thep-rak-49',
  },
]

// ---------------------------------------------------------------------------
// Auto-generated descriptions
//
// Pure, reproducible: builds a natural Thai sentence ONLY from existing field
// values (project type, curtain type, light-blocking level, location, residence
// type, province). It never invents claims and never writes "ไม่มีข้อมูล" — any
// field equal to '-' or empty is simply skipped.
// ---------------------------------------------------------------------------

// Joins Thai items with spaces, placing "และ" before the final item.
function joinThai(items: string[]): string {
  if (items.length <= 1) return items[0] ?? ''
  return `${items.slice(0, -1).join(' ')} และ${items[items.length - 1]}`
}

// Bangkok is not administratively a จังหวัด, so use the colloquial short form.
function provincePhrase(province: string): string {
  return province === 'กรุงเทพ' ? 'กรุงเทพฯ' : `จังหวัด${province}`
}

export function buildDescription(e: PortfolioSeed): string {
  const cats = e.mainCategories.map(c => c.th)
  const curtains = e.curtainTypes.map(t => t.th)

  // Project type(s) + curtain types. With a single category the curtain types
  // attach directly (ผ้าม่านลอน ตาไก่ …); with multiple categories they're
  // parenthesised so they bind only to the curtain category.
  let catPart: string
  if (cats.length > 1) {
    const primary = curtains.length ? `${cats[0]} (${joinThai(curtains)})` : cats[0]
    catPart = joinThai([primary, ...cats.slice(1)])
  } else {
    catPart = curtains.length ? `${cats[0]}${joinThai(curtains)}` : cats[0]
  }

  let s = `ผลงานติดตั้ง${catPart}`

  if (e.lightBlocking !== '-') {
    s += ` ระดับกันแสง ${e.lightBlocking}`
  }

  const province = provincePhrase(e.province.th)
  const loc = e.location.th
  const property = e.propertyType.th
  // Thai joins to the next token without a space, but a Latin-script location
  // reads better with one (e.g. "ที่ Chiang Rak Noi" rather than "ที่Chiang…").
  const locSpaced = (/^[A-Za-z]/.test(loc) ? ' ' : '') + loc

  if (e.locationKind === 'descriptor') {
    // location already describes the building/work, so it fills the slot a
    // residence type would normally occupy. A "งาน…" phrase reads naturally on
    // its own; other descriptors take "สำหรับ".
    s += loc.startsWith('งาน')
      ? ` ${loc} ${province}`
      : ` สำหรับ${locSpaced} ${province}`
  } else if (property !== '-') {
    s += ` สำหรับ${property}ที่${locSpaced} ${province}`
  } else {
    s += ` ที่${locSpaced} ${province}`
  }

  return s
}

export const PORTFOLIO: PortfolioEntry[] = PORTFOLIO_RAW.map(e => ({
  ...e,
  description: buildDescription(e),
}))

// Where a card should link. Entries with a bespoke page point at their own
// route via `detailHref`; everything else uses the generic `/portfolio/[id]`
// template (see app/portfolio/[id]/page.tsx + generateStaticParams).
export function detailPath(e: PortfolioEntry): string {
  return e.detailHref ?? `/portfolio/${e.id}`
}

// ---------------------------------------------------------------------------
// Recommended projects ("แนะนำ")
//
// Returns up to `count` projects to show at the bottom of a detail page:
//   1. the most-recent OTHER projects in the SAME tier as `current`, then
//   2. if fewer than `count`, backfill with the most-recent projects from
//      other tiers.
// `current` itself is always excluded. Ordering is deterministic: newest date
// first, then a featured project, then id as a final stable tiebreaker.
// ---------------------------------------------------------------------------
function byRecency(a: PortfolioEntry, b: PortfolioEntry): number {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1
  const fa = a.featuredOrder ?? Infinity
  const fb = b.featuredOrder ?? Infinity
  if (fa !== fb) return fa - fb
  return a.id < b.id ? -1 : 1
}

export function getRecommended(current: PortfolioEntry, count = 3): PortfolioEntry[] {
  const others = PORTFOLIO.filter(e => e.id !== current.id)
  const sameTier = others.filter(e => e.tier === current.tier).sort(byRecency)
  const picks = sameTier.slice(0, count)

  if (picks.length < count) {
    const chosen = new Set(picks.map(e => e.id))
    const fillers = others
      .filter(e => !chosen.has(e.id))
      .sort(byRecency)
      .slice(0, count - picks.length)
    picks.push(...fillers)
  }

  return picks
}

export function countByTier() {
  const counts: Record<Tier, number> = { 'ทั่วไป': 0, 'High-End': 0, 'Luxury': 0 }
  PORTFOLIO.forEach(e => counts[e.tier]++)
  return counts
}

export function countByCategory() {
  const counts: Record<string, number> = {}
  PORTFOLIO.forEach(e =>
    e.mainCategories.forEach(c => { counts[c.th] = (counts[c.th] ?? 0) + 1 })
  )
  return counts
}
