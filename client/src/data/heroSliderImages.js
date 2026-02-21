/**
 * Hero / intro slider images.
 * Local images: add files to client/public/slider/ as 1.jpg, 2.jpg, 3.jpg (saved from
 * Google search "prabhu engineering works chakia bihar"). If a local image fails to load,
 * the fallback URL is used.
 */
const SLIDER_BASE = '/slider'

export const heroSliderImages = [
  { src: `${SLIDER_BASE}/1.jpg`, alt: 'Prabhu Engineering Hardware', fallback: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80' },
  { src: `${SLIDER_BASE}/2.jpg`, alt: 'Shop', fallback: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80' },
  { src: `${SLIDER_BASE}/3.jpg`, alt: 'Store', fallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80' },
  { src: `${SLIDER_BASE}/4.jpg`, alt: 'Hardware', fallback: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80' },
]
