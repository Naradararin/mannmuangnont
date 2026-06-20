const ITEM =
  'ผ้าม่านสั่งตัด · Custom Curtains · วอลเปเปอร์นำเข้า · Imported Wallpaper · กระเบื้องพรีเมียม · Premium Tiles · ติดตั้งโดยช่างชำนาญ · Expert Installation · '

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-sand/30 py-4">
      <div className="marquee-track flex w-max">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="whitespace-nowrap font-dm-sans text-xs tracking-[0.15em] text-sand"
          >
            {ITEM.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  )
}
