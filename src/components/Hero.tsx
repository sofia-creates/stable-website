import imagePath from "../assets/horses-5499465_1280.jpg"

const Hero = () => {
  return (
    <div>
        <img src={imagePath} alt="En vy av vår hage" />        
        <h1>Solvalla stall</h1>
        <h2>Ridlektioner & skogsturer</h2>
    </div>
  )
}

export default Hero