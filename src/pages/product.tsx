import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/product/HeroBanner";
import Products from "@/components/product/ProductGrid";

export default function product(){
    return(
        <div>
            <Header/>
            <HeroBanner/>
            <Products/>
            <Footer/>
        </div>
    )
}