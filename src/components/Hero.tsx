import imagePath from "../assets/horses-5499465_1280.jpg"

const Hero = () => {
  return (
    <header id="hero">
        <img src={imagePath} alt="En vy av vår hage" />        
        <h1>Solvalla stall</h1>
        <h2>Ridlektioner & skogsturer</h2>
    </header>
  )
}

export default Hero