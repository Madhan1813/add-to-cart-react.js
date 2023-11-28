import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {removeselectProduct, addselectProduct } from '../redux/actions/ProductActions'


const Cart = () => {
    const product = useSelector((state) => state.product);
    const {id, title, image, price, category,description} = product;
    const {productId} = useParams();
    console.log(product);
    const dispatch = useDispatch();

    const fetchProductDetails = async ()=> {
        const response = await axios.get(`http://localhost:5000/products/${productId}`)
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(addselectProduct(response.data));
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return (() => {
            dispatch(removeselectProduct());
        })
    }, [productId])

  return (
    <div>
         {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
        ) : (
        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
                <div className="column lp">
                <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                <h1>{title}</h1>
                <h2>
                    <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                </div>
            </div>
            </div>
        </div>
        )};
    </div>
  )
}

export default Cart