import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Product = (props) => {
    const {deleteProduct, editProduct} = props
    const {id, name, price, img} = props.product

    return (
        <div className='storefront' >
            <div id='storefront'>
                <div>
                    <h2> {name} </h2>
                    <h3> ${price} </h3>
                </div>
                <div>
                    <img id='product-shot' src={img} alt="" />
                </div>
                <div>
                    <Link to={`/form/${id}`} > 
                        <button onClick={() => editProduct(id)}> Edit </button> 
                    </Link>
                    <button onClick={() => deleteProduct(id)}> Delete </button>
                </div>
            </div>
            
        </div>
    )
}
export default withRouter(Product)