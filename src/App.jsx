import './App.css';
import ExploreSection from './Components/ExploreSection';
import Footer from './Components/Footer';
import GetVerify from './Components/GetVerify';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HowItWorksSection from './Components/HowItWorksSection';
import InfoSection from './Components/InfoSection';

function App() {
  return (
    <div className="App">
        <Header/>
        <HeroSection/>
        <ExploreSection/>
        <InfoSection/>
        <GetVerify/>
        <HowItWorksSection/>
        <Footer/>
    </div>
  );
}

export default App;
