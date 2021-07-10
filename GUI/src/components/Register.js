import React, { Component } from 'react'
import axios from 'axios'
import Message from './message'

const initialState = {
    licensePlate: '',
    vehicleForm: '',
    color: '',
    brand: '',
    type: ''
}

var error = false

const finalState = 'registered'

class Register extends Component {

    

    constructor(props) {
        super(props)
        this.state = initialState
    }

    validate() {

        if(!this.state.licensePlate.includes("W")) {
            console.log(this.state.licensePlate)
            error = true
        } else {
            error = false
        }
    
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
        if(e.target.name=="licensePlate") {
            this.validate()
        }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        

        if(!error) {

            axios.post('http://localhost:8080/vehicles', this.state)
            .then(response => {
                console.log(response)
                
            })
            .catch(error => {
                console.log(error)
            })

            this.setState({licensePlate: "done"})
            
        } 

        
    }

    render() {

    const { licensePlate, color, brand, type } = this.state
    

    return (
        <div style={{textAlign: "center", paddingLeft:"35%"}}>
            <h3 style={{textAlign: "left"}}>Register New Vehicle </h3> <br/>

            <form style={{textAlign: "left"}} onSubmit={this.submitHandler}>

            Licence Plate Number: <input type="text" name="licensePlate" value={licensePlate} onChange={this.changeHandler}></input> { error ? <span> Invalid... </span> : null }  
             <br/> <br/>

            Vehicle Color: <input type="text" name="color" value={color} onChange={this.changeHandler}></input> <br/> <br/>
            Vehicle Brand: <input type="text" name="brand" value={brand} onChange={this.changeHandler}></input> <br/> <br/>
            Vehicle Type: <input type="text" name="type" value={type} onChange={this.changeHandler}></input> <br/> <br/>
            <button type="submit"> Register Vehicle </button>  { this.state.licensePlate=="done" ? <span> Vehicle Successfully Registered! </span>: null}
            
            </form>

        </div>
    )

    }


}

export default Register