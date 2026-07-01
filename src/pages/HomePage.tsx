import Hero from "../components/Hero"
import ImageAndTextSection from "../components/ImageAndTextSection"
import Footer from "../components/Footer"
import CrossroadSection from "../components/CrossroadSection"

import crossroadImg1 from "../assets/horses-5499465_1280.jpg"


const HomePage = () => {
  const crossroadsData = [
    {
      title: "Våra hästar",
      backgroundUrl: crossroadImg1,
    },
    {
      title: "Turer & priser",
      backgroundUrl: crossroadImg1,
    },
    {
      title: "Kontakt",
      backgroundUrl: crossroadImg1,
    },
  ];

  return (
    <>
        <Hero/>
        <ImageAndTextSection/>
        <CrossroadSection crossroads={crossroadsData}/>
        <ImageAndTextSection/>
        <Footer/>
    </>
  )
}

export default HomePage