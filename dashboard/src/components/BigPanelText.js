import React from 'react'
import "../assets/css/bigPanelText.css"

const BigPanelText = () => {
    const textus = "<h1>Más vendido<hr><b>1.200 ventas</b></h1>" + "<p><b>Racer Flexion</b><br><br><b>$6990.00</b><br><br><b>Nullam vitae turpis rutrum, vehicula nunc vitae, auctor sem. Quisque.</b><br><br><b>Sexo:</b> Hombre<br><br><b>Edad:</b> Adulto<br><br><b>Color:</b> Pepino<br><br><b>Talle:</b> XL<br><br><b>Tamaño:</b> nada</P>"

    return (
        <div id="big-panel-text" dangerouslySetInnerHTML={{__html: textus}}>
            
        </div>
    )
}

export default BigPanelText