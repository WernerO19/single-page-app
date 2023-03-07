import React from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import useAxiosGet from "../hooks/httpRequests";

function Products (){
    const { id } = useParams();
    const url ='https://64020d5d0a2a1afebef81c2d.mockapi.io/products/'+id;
    let product = useAxiosGet(url);

    if(product.loading){
        return (
            <div style={{padding: 5}}>
                <Loader />
            </div>
        )
    }

    if(product.data){
        return (
            <div style={{padding: 5}}>
                <h1 className="text-2xl">{product.data.name}</h1>
                <img src={product.data.Images} alt={product.data.name} />
                <p>{product.data.Price}</p>
                <p>{product.data.Description}</p>
            </div>
        )
    }
    
    return (
        <div style={{padding: 5}}>
            No Product Found
        </div>
    )
}

export default  Products;