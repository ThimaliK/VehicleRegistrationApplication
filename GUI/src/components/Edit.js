import React, { Component } from 'react'
import axios from 'axios'


class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            licensePlate: '',
            vehicle: [],
            color: '',
            brand: '',
            type: ''
        }

    }

    changeHandler = e => {
        this.setState({licensePlate: e.target.value})
    }

    selectVehicle = e => {
        e.preventDefault()
        console.log(this.state)
        axios.get('http://localhost:8080/vehicles/'+this.state.licensePlate)
        .then(response => {
            console.log(response)
            this.setState({vehicle: response.data})
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    editData = e => {
        if(e.target.value!=null) {
            this.setState({[e.target.name]: e.target.value})
        }
    }

    confirmEdit = e => {
        if(this.state.color!="") {
            this.state.vehicle.color = this.state.color
        }
        if(this.state.type!="") {
            this.state.vehicle.type = this.state.type
        }
        if(this.state.brand!="") {
            this.state.vehicle.brand = this.state.brand
        }
        axios.put('http://localhost:8080/vehicles/'+this.state.licensePlate, this.state.vehicle)
        .then(console.log(this.state.vehicle));
    }

    render() {

    const { licensePlate, vehicle } = this.state

    return (
        <div style={{textAlign: "center"}}>
            <h3> Edit Vehicle </h3>

            <form onSubmit={this.selectVehicle}>
            Enter the License Plate Number to find the Vehicle: <input type="text" name="licensePlate" value={licensePlate} onChange={this.changeHandler}></input> <br/> <br/>
            <button type="submit"> Find Vehicle </button>
            </form>

            <div>
            {
                    vehicle.length!=0 ?
                    <div style={{textAlign: "center", paddingLeft:"35%"}}> 
                        <h4 style={{textAlign: "left"}}> Vehicle to be edited: </h4>

                        <div style={{textAlign: "left"}}> License Plate Number: {vehicle.licensePlate} </div>
                        <div style={{textAlign: "left"}}> Vehicle Form: {vehicle.vehicleForm} </div>
                        <form onSubmit={this.confirmEdit}>
                        <div style={{textAlign: "left"}}> Vehicle Color: {vehicle.color} | Change color to: <input type="text" name="color" onChange={this.editData}></input></div>
                        <div style={{textAlign: "left"}}> Vehicle Type: {vehicle.type} | Change type to: <input type="text" name="type" onChange={this.editData}></input> </div>
                        <div style={{textAlign: "left"}}> Vehicle Brand: {vehicle.brand} | Change brand to: <input type="text" name="brand" onChange={this.editData}></input></div> <br/>
                        <div style={{textAlign: "left"}}><button type="submit"> Edit Vehicle </button></div>
                        </form>
                    </div> :
                    null
            }
            </div>

        </div>
    )

    }

}

export default Edit