import ImageAndTextSection from "../components/ImageAndTextSection";
import Footer from "../components/Footer";

const OurHorsesPage = () => {

  return (
    <>
        <h1>Våra hästar</h1>
        <ImageAndTextSection title="Black Beauty" textContent="Black Beauty, också kallad Blackie, är en av våra lugnaste hästar. Han är en 5 årig valack och passar bra för nybörjare."/>
        <ImageAndTextSection title="Skywalker" textContent="Skywalker är en 4 årig fjording som älskar uppmärksamhet och att bli kliad bakom högra örat. Han passar bra för en ryttare med grundkunskaper."/>
        <ImageAndTextSection title="Leia" textContent="Leia är ett sto på 6 år. Hon är lugn och passare nybörjare. Ta med en bit morot till henne så vinner du hennes hjärta."/>
        <ImageAndTextSection title="Pegasus" textContent="Pegasus, 4 år, tycker inte om barn men är i övrigt en medgörlig och mycket matmotiverad vallack."/>
        <ImageAndTextSection title="Herman" textContent="Tvååriga Herman är en vallack med väldigt mycket energi och mycket egna åsikter. Kräver en erfaren ryttare med tålamod."/>
        <ImageAndTextSection title="Rosetta" textContent="Rosetta är ett 3 år gammalt sto med mycket energi och attityd. Hon passar bäst för en erfaren ryttare."/>
        <Footer/>
    </>
  )
}

export default OurHorsesPage;