import imagePath from "../assets/horses-5499465_1280.jpg"
import heroVideo from "../assets/82211-578691551_medium.mp4"

const Hero = () => {
  return (
    <header 
    id="hero" >
        {/* <img 
        className="heroBg" 
        src={imagePath} 
        alt="En vy av vår hage" />         */}
        <video 
        className="heroBg"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        poster={imagePath}
        />
        <div className="heroText">
          <h1>Solvalla stall</h1>
          <h2>Ridlektioner & skogsturer</h2>
        </div>
    </header>
  )
}

export default Hero