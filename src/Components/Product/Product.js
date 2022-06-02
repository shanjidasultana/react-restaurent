import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductItems from '../ProductItems/ProductItems';
import './Product.css'


const Product = () => {
    const [selectedFood, setSelectedFood] = useState("lunch");

    const [foods,setFoods] =useState([]);


    useEffect(()=>{
        fetch("foodsInfo.json")
            .then(res=>res.json())
            .then(data=>setFoods(data))
    },[selectedFood])
    return (
        <div>
            <section>
                <div className="container my-5">
                    <nav>
                        <ul className="nav justify-content-center">
                            <li onClick={()=>{setSelectedFood("breakfast")}} className="nav-item">
                                <span to="breakfast" className={selectedFood==="breakfast"? "nav-link active": "nav-link"}>Breakfast</span>
                            </li>
                            <li onClick={()=>{setSelectedFood("lunch")}} className="nav-item">
                                <span to="lunch" className={selectedFood==="lunch"? "nav-link active": "nav-link"}>Lunch</span>
                            </li>
                            <li onClick={()=>{setSelectedFood("dinner")}} className="nav-item">
                                <span to="dinner" className={selectedFood==="dinner"? "nav-link active": "nav-link"}>Dinner</span>
                            </li>
                        </ul>
                    </nav>

                </div>
            </section>
            <div className="food-container">
            {
                foods.map(food=><ProductItems
                key={food.key}
               food={food}
                ></ProductItems>)
            }
            </div>
           
            

                   
        </div>
    );
};

export default Product;