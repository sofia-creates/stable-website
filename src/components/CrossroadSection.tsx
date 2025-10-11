import Crossroad from "./Crossroad"
import type { CrossroadsProps } from "../interfaces/interfaces"

interface CrossroadSectionProps {
 crossroads: CrossroadsProps[]
}

const CrossroadSection = ({crossroads}:CrossroadSectionProps) => {
  return (
    <section className="crossroadsSection">
      {crossroads.map((item, index) => (
        <Crossroad
        key={index}
        title={item.title}
        backgroundUrl={item.backgroundUrl}
        />
      ))}
    </section>
  )
}

export default CrossroadSection