export function initialsAvatar(name: string, bg = '#3f5b44', fg = '#f5f1e8') {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect width="400" height="400" fill="${bg}"/>
    <text x="200" y="220" font-family="DM Sans, sans-serif" font-size="120" fill="${fg}" text-anchor="middle">${initials}</text>
  </svg>`

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}
