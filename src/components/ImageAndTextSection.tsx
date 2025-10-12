import Btn from "./Btn"
import imagePath from "../assets/raphael-wicker-P6JRr7-FxLw-unsplash.jpg"

const ImageAndTextSection = () => {
  return (
    <section className="imageAndTextSection">
        <img src={imagePath} alt="" />
        <div className="IATSectionContent">
          <h3>Om oss</h3>
          <p>jfvhkodjvgnbrf ekf ojerjorfn efne fefj jr j j j j jf jifiknlgj jrbojek wjopjwe lfdnven</p>
          <Btn></Btn>
        </div>
    </section>
  )
}

export default ImageAndTextSection