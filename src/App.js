import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from "./components/Navbar"
import ProudMember from './components/ProudMember'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Install from './components/Install'
import CashWithdrawalUI from './components/CashWithdrawalUI'

function App() {
  return (
    <div>
      <Navbar />
       <HeroSection />
       <CashWithdrawalUI />
       <Install />
       <ProudMember />
       <FaqSection />
       <Footer />
    </div>
  )
}

export default App
