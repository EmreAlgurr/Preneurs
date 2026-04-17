import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SearchPanel from '../components/SearchPanel';
import { FeatureCards, HowItWorks } from '../components/FeatureCards';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <HeroSection>
        <SearchPanel />
      </HeroSection>
      <FeatureCards />
      <HowItWorks />
      <Footer />
    </div>
  );
}
