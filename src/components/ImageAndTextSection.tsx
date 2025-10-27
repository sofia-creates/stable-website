import Btn from "./Btn"
import imagePath from "../assets/raphael-wicker-P6JRr7-FxLw-unsplash.jpg"

interface ImageAndTextSectionProps {
  image?: string;
  title?: string;
  textContent?: string;
}

let defaultParagraph = "Solvalla Stall är ett familjärt stall på landet där gemenskap, glädje och omtanke om hästarna står i centrum. Vi erbjuder ridlektioner för alla nivåer, härliga skogsturer i natursköna omgivningar och en trygg miljö där både ryttare och hästar trivs."

const ImageAndTextSection = ({image = imagePath , title="Om oss", textContent=defaultParagraph}:ImageAndTextSectionProps) => {
  return (
    <section className="imageAndTextSection">
        <img src={image} alt="" />
        <div className="IATSectionContent">
          <h3>{title}</h3>
          <p>{textContent}</p>
          <Btn/>
        </div>
    </section>
  )
}

export default ImageAndTextSection