import React, {useState, useEffect} from 'react';
import "../assets/css/dashboardGrid.css";
import BigPanel from './BigPanel';
import MiniPanel from './MiniPanel';
import ProductContainer from './ProductContainer';
import StatusContext from './Status';


function DashboardGrid(props) {
    const [status, setStatus] = useState('productos');
    //const [ultimaPagina, setUltimaPagina] = useState(1);
    //const [paginaActual, setPaginaActual] = useState(1);
    const [productos, setProductos] = useState({});
    const [oneProduct, setOneProduct] = useState({});
    const [marcas, setMarcas] = useState({});
    const [tipos, setTipos] = useState({});
    const [usuarios, setUsuarios] = useState({});

    const pages = "2/22 paginas"; //props.pages

    useEffect( () => {
        fetch('http://localhost:3001/api/products/')
        .then (response => response.json())
        .then(data => {
            setProductos(data)
            /* setPaginado({ultimaPagina: 
                data.count % 18 !== 0 ? Math.round(data.count/18) + 1 : data.count/18
            }) */
        })
    }, []);

    useEffect( () => {
        fetch('http://localhost:3001/api/users/')
        .then (response => response.json())
        .then(data => {
            setUsuarios(data)
        })
    }, []);
    
    useEffect( () => {
        fetch('http://localhost:3001/api/products/70267136')
        .then (response => response.json())
        .then(data => {
            setOneProduct(data.headingsCollection);
            setMarcas(data.brandsCollection);
            setTipos(data.familiesCollection);
        })
    }, []);

    //const paginadoMas = () => {
    //    setPaginado({paginaActual: paginado.paginaActual + 1});
    //    console.log('mas', paginaActual)
    //}
    //const paginadoMenos = () => {
    //    setPaginado({paginaActual:paginado.paginaActual - 1});
    //    console.log('menos', paginaActual)
    //}
    
    return (
        <StatusContext.Provider value={{status, setStatus}}>
        <div className="dashboardgrid">

        <MiniPanel row={1} col={1} num={productos.count} concept={"productos"} />
        <MiniPanel row={1} col={2} num={usuarios.count} concept={"usuarios"} />
        <MiniPanel row={1} col={3} num={oneProduct.length} concept={"categorías"}/>

        <MiniPanel row={2} col={1} num={marcas.length} concept={"marcas"} />
        <MiniPanel row={2} col={2} num={tipos.length} concept={"tipos"} />
        <MiniPanel row={2} col={3} num={"1.600"} concept={"ventas / mes"} bg={"#a0a0a0"} clr={"#ffffff"}  />
        <BigPanel flag={ (status === "ventas / mes") ? true :false }/>
        <ProductContainer />
        <div className="bar" dangerouslySetInnerHTML={{__html: pages}}/>
            <i className="left fas fa-angle-double-left"/>
            <i className="right fas fa-angle-double-right"/>
        </div>
        </StatusContext.Provider>
    )
}

export default DashboardGrid
