import Header from "@/components/Header";
import HeroBanner from "@/components/services/HeroBanner";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/services/ServicesSection";
import Information from "@/components/services/Information";


export default function service(){
    return(
        <section>
            <Header />
            <HeroBanner />
            <ServicesSection />
            <Information />
            <Footer />
        </section>
    )
}