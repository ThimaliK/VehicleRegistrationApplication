import React, { Component } from 'react'
import axios from 'axios'

class Delete extends Component {

    constructor(props) {
        super(props)

        this.state = {
            licensePlate:''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        if (window.confirm('Delete Vehicle having License Plate Number - '+this.state.licensePlate+'?')) {
            e.preventDefault()
            axios.delete('http://localhost:8080/vehicles/'+this.state.licensePlate)
                .then(() => console.log('deleted successfully'))
            .catch(error => {
                console.log(error)
            })

            this.setState({licensePlate:'done'})
        }
    }

    render() {

    const { licensePlate } = this.state

    return (
        <div style={{textAlign: "center"}}>
            <h3>Delete Registered Vehicle </h3>

            <form onSubmit={this.submitHandler}>
            License Plate Number: <input type="text" name="licensePlate" value={licensePlate} onChange={this.changeHandler}></input> <br/> <br/>
            <button type="submit"> Delete Vehicle </button> { this.state.licensePlate=="done" ? <span> Vehicle Deleted Successfully! </span>: null}
            </form>
        </div>
    )

    }


}

export default Delete