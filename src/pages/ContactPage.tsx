import ImageAndTextSection from "../components/ImageAndTextSection";
import Footer from "../components/Footer";

const ContactPage = () => {

  return (
    <>
        <h1>Kontakta oss</h1>
        <ImageAndTextSection title="Så här når du oss bäst"/>
        <div>
          <h2>Mejl</h2>
          <p>solvallastall@hotmail.com</p>
          <h2>Telefon</h2>
          <p>070 1234 5678</p>
          <h2>Instagram & Facebook</h2>
          <p>@solvallastall</p>

          <h2>Kontaktformulär</h2>
          <h3>Fyll i vårt formulär så hör vi av oss!</h3>

          <form>
            
          </form>
        </div>
        <Footer/>
    </>
  )
}

export default ContactPage