import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Awards from '@/components/Awards'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

export default function Home() {
  return (
    <main className="min-h-screen bg-space dark:bg-dark-space">
      <Header />
      <div className="pt-16 pb-16 md:pb-0">
        <div id="about">
          <Hero />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="why-us">
          <WhyUs />
        </div>
        <div id="awards">
          <Awards />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
      <MobileNav />
    </main>
  )
}
