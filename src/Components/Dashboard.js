import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import Product from './Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory: [],
            id: ''
        }
    }
    componentDidMount() {
        console.log(this.state.inventory)
        this.getInventory()
    }
    getInventory = () => {
        axios.get('/api/inventory').then(results => {
            console.log(results.data)
            this.setState({inventory: results.data})
        }).catch(err => console.log(err))
    }
    editProduct = (id) => {
        this.setState({id: id})
        this.props.history.push(`/dashboard/${id}`)
    }
    deleteProduct = (id) => {
        console.log(this.props.getInventory())
        axios.delete(`/api/product/${id}`).then(results => {
            this.props.getInventory()
        }).catch(err => console.log(err))
    }
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then(results => {
            this.setState({inventory: results.data})
        }).catch(err => console.log(err))
    }
    render() {
       let feed = this.state.inventory.map(item => (<Product key={item.id} editProduct={this.editProduct} deleteProduct={this.deleteProduct} product={item} />))
        return (
            <div>
                <div id='home-feed' >
                    {feed}
                </div>
            </div>
        )
    }
}
export default withRouter(Dashboard)