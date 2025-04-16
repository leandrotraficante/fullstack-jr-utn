// componente reutilizable

function Colors(props) {
    const color = props.color;
    return (
        <div style={{ backgroundColor: color, height: 50, width: '100%' }}>
            <button onClick={props.show}>Hace Click</button>
        </div>
    )
}

export default Colors;