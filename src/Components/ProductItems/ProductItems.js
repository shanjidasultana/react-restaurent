import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItems.css';

const ProductItems = ({food}) => {
    const {title,image,phrase,price,key}= food;
    return (
        <Link to={"/products-details/"+key} style={{textDecoration : "none"}}>

        <div className="product-items col-md-6">
            <img className="card-image-top" src={image} alt="" />
            <div className="card-body">
                <h5>{title}</h5>
                <h4>{phrase}</h4>
                <h2> ${price}</h2>
            </div>
        </div>
        </Link>
    );
};

export default ProductItems;