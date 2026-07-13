import ImageAndTextSection from "../components/ImageAndTextSection";
import {Link} from "react-router-dom"
import Footer from "../components/Footer";

const ToursAndPricesPage = () => {

  return (
    <>
        <h1>Turer och priser</h1>
        <ImageAndTextSection title="Våra långturer"/>
        <ImageAndTextSection title="Korta turer"/>
        <ImageAndTextSection title="B&B paket"/>
        <ImageAndTextSection title="Event"/>
        <button><Link to="/contact">Kontakta oss!</Link></button>
        <Footer/>
    </>
  )
}

export default ToursAndPricesPage