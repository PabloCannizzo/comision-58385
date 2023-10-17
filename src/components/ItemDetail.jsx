const ItemDetail = ({item}) => {
    return(
        <div>
            <img src={item.imagen} />
            <h3>{item.nombre}</h3>
            <br />
            <h4>Categoria: {item.categoria}</h4>
            <h4>Stock: {item.cantidad}</h4>
            <br />
            <b>Precio c/u: $ {item.precio}</b>
        </div>
    )
}


export default ItemDetail