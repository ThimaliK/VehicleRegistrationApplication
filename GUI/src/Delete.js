import React, { Component } from 'react'
import axios from 'axios'


class Delete extends Component {

    constructor(props) {
        super(props)

        this.state = {
            licensePlate:''
        }
    }

    // deleteVehicle() {
    //     if (window.confirm('Are you sure?')) {
    //         axios.delete('http://localhost:8080/vehicles/'+this.state.licensePlate)
    //             .then(() => console.log('deleted successfully'));
    //     }
    // }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        if (window.confirm('Are you sure?')) {
            e.preventDefault()
            axios.delete('http://localhost:8080/vehicles/'+this.state.licensePlate)
                .then(() => console.log('deleted successfully'))
            .catch(error => {
                console.log(error)
            })
        }
    }

    render() {

    const { licensePlate } = this.state

    return (
        <div style={{textAlign: "center"}}>
            <h3>Delete Registered Vehicle </h3>

            <form onSubmit={this.submitHandler}>
            Licence Plate Number: <input type="text" name="licensePlate" value={licensePlate} onChange={this.changeHandler}></input> <br/> <br/>
            <button type="submit"> Delete Vehicle </button>
            </form>
        </div>
    )

    }


}

export default Delete