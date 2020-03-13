import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Product = (props) => {
    const {deleteProduct, editProduct} = props
    const {id, name, price, img} = props.product
    return (
        <section>
            <div>
                <div>
                    <h2> {name} </h2>
                    <h3> ${price} </h3>
                </div>
                <div>
                    <div>
                        <img src={img} alt="" />
                    <Link to={`/form/${id}`} >
                        <button onClick={() => editProduct(id)}> Edit </button> 
                    </Link>
                        <button onClick={() => deleteProduct(id)}> Delete </button>
                    </div>
                </div>
            </div>            
        </section>
    )
}
export default withRouter(Product)