import Hero from '../components/Hero'
import About from '../components/About'
import DevelopmentWork from '../components/DevelopmentWork'
import News from '../components/News'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import usePageMeta from '../hooks/usePageMeta'
import useReveal from '../hooks/useReveal'

export default function Home() {
  usePageMeta()
  useReveal()
  return (
    <>
      <Hero />
      <About />
      <DevelopmentWork />
      <News />
      <Gallery />
      <Contact />
    </>
  )
}
