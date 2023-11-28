import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { selectProducts, removeselectProduct, addselectProduct } from '../redux/actions/ProductActions'

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {id, title, image, price, category,description} = product;
    const {productId} = useParams();
    console.log(product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchProductDetails = async ()=> {
        const response = await axios.get(`http://localhost:5000/products/${productId}`)
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(selectProducts(response.data));
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return (() => {
            dispatch(removeselectProduct());
        })
    }, [productId])

    

    const handleClick = () => {
      // Use navigate to navigate to a different route
      dispatch(addselectProduct(product));
      navigate('/cart');
        
    }

    

  return (
        <div className="ui grid container">
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
                <div className="ui vertical animated button" tabIndex="0" onClick={handleClick}>
                    <div className="hidden content">
                        <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        )};
    </div>
    )
}
export default ProductDetail