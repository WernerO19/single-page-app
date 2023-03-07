import React from "react";
import Loader from "../components/Loader";
import { Link } from 'react-router-dom';
import useAxiosGet from "../hooks/httpRequests";

function HomePage (){
    const url ='https://64020d5d0a2a1afebef81c2d.mockapi.io/products/?page=1&limit=10';
    let content = null;
    let products = useAxiosGet(url);

    if(products.loading){
            content =  <Loader />;
    }

    if(products.error){
            content =  <div>Failed to Load content</div>;
    }

    if(products.data){
        content = 
        products.data.map((product, key) => 
            <div key={key}>
                <img src={product.Images} alt={product.name} />
                <h1 className="font-bold text-2xl mb-3">{product.name}</h1>
                <p className="font-bold text-2xl mb-3">${product.Price}</p>
                <p>{product.Description}</p>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"

                >
                    <Link to={`/products/`+product.id}>Button</Link>
                </button>
                <br/><br/>
            </div>
        )
    }
    
    return (
        <div style={{padding: 5}}>
            <h1 className="font-bold text-2xl mb-3">Best Seller</h1>
            <div>
                {content}
            </div>
        </div>
    )
}

export default  HomePage;