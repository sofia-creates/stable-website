import background from "../assets/tassilo-groper-1_IIeyBtXEk-unsplash.jpg"


const Footer = () => {
  return (
    <footer
    style = {{ backgroundImage: `url(${background})` }}
    >
        <div>
            <h3>Sociala medier</h3>
            <p>Instagram: <a href="#">@solvallastall</a></p>
            <p>Facebook: <a href="#">Solvalla stall</a></p>
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