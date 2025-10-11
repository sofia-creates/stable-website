interface CrossroadsProps {
  title: string;
  backgroundUrl: string;
}

const Crossroad = ({backgroundUrl, title}:CrossroadsProps) => {
  return (
    <div className="crossroad" style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <h4>{title}</h4>
    </div>
  )
}

export default Crossroad