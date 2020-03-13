import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/shelfie_icon.png'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            price: 0,
            img: '',
            edit: false
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params
        console.log(this.props)

        if (id) {
            axios.get(`/api/product/${id}`).then(results => {
                const {name, price, img} = results.data[0]
                console.log(results.data)
                this.setState({id, name, price, img, edit: true})
            })
        }
    }
    componentDidUpdate = (prevProp) => {
        const {id} = this.props.match.params

        if(!id && this.props !== prevProp) {
          this.setState({id: '', name: '', price: '', img: '', edit: false})
        }
    }
    componentDidUpdate = (prevProps) => {
        const {id} = this.props

        if (id && prevProps.id === id) {
            axios.get(`/api/product/${id}`).then(results => {
            const {name, price, img} = results.data[0]
            this.setState({name: name, price: price, img: img, edit: true})
            })
        }
    }
    handleChange = ({name, value}) => {
        this.setState({[name]: value})
    }
    addProduct = () => {
        const {name, price, img} = this.state

        axios.post(`/api/product`, {name, price, img}).then(results => {
            this.clearInputs()
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }
    editProduct = () => {
        const {id, name, price, img} = this.state

        axios.put(`/api/product/${id}`, {name, price, img}).then(results => {
            this.clearInputs()
            this.props.history.push('/')
        })
    }
    clearInputs = () => {
        this.props.history.push('/')
        this.setState({name: '', price: 0, img: '', edit: false})
    }
    render() {
        const {edit, name, price, img} = this.state
        return (
            <div className='form'>
                <div id='form-container' >
                    <div>
                        <div id='details'>
                            <img alt='' src={img} id='form-product' />
                        </div>
                    <h3> Update Product Image: </h3>
                    <input name='img' value={img} placeholder='Upload Image' onChange={(e) => this.handleChange(e.target)} />
                    <input name='name' value={name} placeholder='Product Title' onChange={(e) => this.handleChange(e.target)} />
                    <h3> Update Product Price: </h3>
                    <input name='price' value={price} placeholder='Set Price' onChange={(e) => this.handleChange(e.target)} />

                    {   //  PUT/POST TOGGLE | TERNARY 
                        edit ? <button id='edit' className='form-button' onClick={this.editProduct}> Save Changes </button> 
                        : <button onClick={this.addProduct} > Add to Product Feed </button> 
                    }

                    <button onClick={this.clearInputs} > Cancel </button>
                    </div>
                </div>

            </div>
        )
    }
}
export default withRouter(Form)