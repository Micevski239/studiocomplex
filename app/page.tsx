import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div id="about">
          <Hero />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="tech-stack">
          <WhyUs />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
