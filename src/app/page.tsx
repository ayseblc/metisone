import HeroSection from '../components/HeroSection';
import PartnerSection from '@/components/PartnerSection';
import MissionSection from "../components/MissionSection";
import GlobalReachSection from '@/components/GlobalSearchSection';
import ApproachSection from '@/components/ApproachSection';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <MissionSection />
      <GlobalReachSection/>
      <ApproachSection/>
      <CustomerReviews/>
      <Footer/>
    </>
  );
}
