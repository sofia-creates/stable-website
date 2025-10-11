import background from "../assets/tassilo-groper-1_IIeyBtXEk-unsplash.jpg"


const Footer = () => {
  return (
    <footer
    style = {{ backgroundImage: `url(${background})` }}
    >
        <div>
            <h4>Sociala medier</h4>
            <p>Instagram: <a href="#">@solvallastall</a></p>
            <p>Facebook: <a href="#">Solvalla stall</a></p>
        </div>
        <div>
             <h4>Meny</h4>
             <h3>Turer & priser</h3>
             <h3>Våra hästar</h3>
             <h3>Kontakt</h3>
        </div>
    </footer>
  )
}

export default Footer