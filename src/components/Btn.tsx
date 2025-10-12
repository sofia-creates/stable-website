interface BtnProps{
  title?: string;
}

const Btn = ({title = "Kontakta oss"}:BtnProps) => {
  return (
    <button >{title}</button>
  )
}

export default Btn