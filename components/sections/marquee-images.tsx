import Image from 'next/image'

const IMAGES = [
  {
    src: '/images/portfolio/kave-pop-salaya-19-10-25/565837354_1264137652393338_5874985742714031512_n.jpg',
    alt: 'Kave Pop Salaya',
  },
  {
    src: '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-26-09-25/555964878_1242495291224241_6075924189607063286_n.jpg',
    alt: 'Atmoz Palacio',
  },
  {
    src: '/images/portfolio/chiang-rak-noi-high-end-25-02-25/486672388_1095151112625327_8710768517893518078_n.jpg',
    alt: 'Chiang Rak Noi',
  },
  {
    src: '/images/portfolio/nichatra-high-end-03-07-25/586527453_1293537312786705_3433954164989993035_n.jpg',
    alt: 'Nichatra',
  },
  {
    src: '/images/portfolio/the-lofts-asoke-18-12-24/486380288_1094864549320650_2630213902559893738_n.jpg',
    alt: 'The Lofts Asoke',
  },
  {
    src: '/images/portfolio/soi-phet-kasem-51-high-end-17-04-25/492219358_1112019630938475_5063944754424876728_n.jpg',
    alt: 'Soi Phet Kasem 51',
  },
  {
    src: '/images/portfolio/baanwangjaru-bangnuathong-24-04-26/678231774_1420007453473023_5927893980942885921_n.jpg',
    alt: 'Baanwangjaru Village',
  },
  {
    src: '/images/portfolio/atmoz-palacio-ladprao-wanghin-high-end-16-07-25/520280014_1182018863938551_3946851036892814065_n.jpg',
    alt: 'Atmoz Palacio Jul 2025',
  },
  {
    src: '/images/portfolio/mantana-westgatei-high-end-26-05-24/445181938_873258871481220_8135254820683322889_n.jpg',
    alt: 'Mantana Westgate',
  },
  {
    src: '/images/portfolio/nichatra-high-end-06-02-26/628420878_1353620610111708_633601835838337285_n.jpg',
    alt: 'Nichatra 2026',
  },
  {
    src: '/images/hero/473278.jpg',
    alt: 'Luxury living room',
  },
  {
    // Clean, no-watermark version (was 494070972…_n.jpg, which had a watermark).
    src: '/images/hero/ddasdaavdftf.jpg',
    alt: 'Atmoz Palacio Apr 2025',
  },
]

// Duplicate for seamless infinite loop
const TRACK = [...IMAGES, ...IMAGES]

export function MarqueeImages() {
  return (
    <div className="overflow-hidden border-y border-sand/25 bg-canvas py-3">
      <div
        style={{
          maskImage:
            'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          className="marquee-track flex w-max gap-3"
          style={{ animationDuration: '38s' }}
        >
          {TRACK.map((img, i) => (
            <div
              key={i}
              className="relative h-[124px] w-[168px] shrink-0 overflow-hidden rounded-xl md:h-[210px] md:w-[280px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="280px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
