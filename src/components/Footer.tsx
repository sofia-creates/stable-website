import background from "../assets/tassilo-groper-1_IIeyBtXEk-unsplash.jpg"
import instaLogo from "../assets/square-instagram-brands-solid-full-white.svg"
import fbLogo from "../assets/square-facebook-brands-solid-full-white.svg"


const Footer = () => {
  return (
    <footer
    style = {{ backgroundImage: `url(${background})` }}
    >
        <div>
            <h3>Sociala medier</h3>
            <p>
              <img className="footerLogo" src={instaLogo} alt="Instagram logotype"/> 
              <a href="#">@solvallastall</a></p>
            <p> 
              <img className="footerLogo" src={fbLogo} alt="Facebook logotype"/> 
              <a href="#">Solvalla stall</a>
            </p>
        </div>
        <div>
             <h3>Meny</h3>
             <h4>Turer & priser</h4>
             <h4>Våra hästar</h4>
             <h4>Kontakt</h4>
        </div>
    </footer>
  )
}

export default Footer