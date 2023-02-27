import Counter from "../Counter/ItemCount";
const ItemDetail = ({detail}) => {
  return (
    <div
     style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        flexDirection: 'column',
        
        }}
    >
        <img src={detail.imagen} alt={detail.titulo} width="300px" />
        <h2>{detail.titulo}</h2>
        <h2>{detail.precio}</h2>
        <Counter />
    </div>
  )
};

export default ItemDetail