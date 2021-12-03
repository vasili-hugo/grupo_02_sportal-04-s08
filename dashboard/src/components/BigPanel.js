import React, { useState, useEffect }from 'react';
import "../assets/css/bigPanel.css";
import BigPanelImage from './BigPanelImage';
import BigPanelText from './BigPanelText';
import Chart from './Chart';

const BigPanel = (props) => {
    const [imagen, setImagen] = useState({});
    const [nameProduct, setNameProduct] = useState({});
    const [priceProduct, setPriceProduct] = useState({});
    const [descProduct, setDescProduct] = useState({});
    const [qtySold, setQtySold] = useState({});
    const flagChart = !props.flag;

    useEffect( () => {
        // fetch('http://localhost:3001/api/products/search/?rpp=1&page=1&searchString=')
        // .then (response => response.json())
        // .then(data => {
        //     setImagen(data.products[0].image);
        //     setNameProduct(data.products[0].name);
        //     setPriceProduct(data.products[0].price);
        //     setDescProduct(data.products[0].description);
        // })
        fetch('http://localhost:3001/api/cart/bestSeller')
        .then (response => response.json())
        .then(data => {
            setImagen(data.record.image);
            setNameProduct(data.record.model);
            setPriceProduct(data.record.price);
            setDescProduct(data.record.desc);
            setQtySold(data.sales);
        })

    }, []);

    //const bigImage = "images/select200/AD_CM8534-1.JPG"
    return (
        <>
        <div id="big-panel" ></div>
        {flagChart ? <> <BigPanelImage  bigImage={imagen}/> <BigPanelText nombre={nameProduct} precio={priceProduct} desc={descProduct} sales={qtySold}/> </> : <Chart />}
        </>
    )
}

export default BigPanel
