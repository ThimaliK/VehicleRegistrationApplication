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
        <div style={{textAlign: "center", paddingLeft:"35%"}}>
            <h3 style={{textAlign: "left"}}> Edit Vehicle </h3>

            <form style={{textAlign: "left"}} onSubmit={this.selectVehicle}>
            Enter the License Plate Number to find the Vehicle: <input type="text" name="licensePlate" value={licensePlate} onChange={this.changeHandler}></input> <br/> <br/>
            <button type="submit"> Find Vehicle </button>
            </form>

            <div style={{textAlign: "center"}}>
            {
                    vehicle.length!=0 ?
                    <div style={{textAlign: "left"}}> 
                        <h4> Vehicle to be edited: </h4>

                        <div> (Edit any/all necessary field(s)) </div> <br/> <br/>

                        <div> License Plate Number: {vehicle.licensePlate} </div>
                        <div> Vehicle Form: {vehicle.vehicleForm} </div>

                        <form onSubmit={this.confirmEdit}>
                        <div> Vehicle Color: {vehicle.color} | Change color to: <input type="text" name="color" onChange={this.editData}></input></div>
                        <div> Vehicle Type: {vehicle.type} | Change type to: <input type="text" name="type" onChange={this.editData}></input> </div>
                        <div> Vehicle Brand: {vehicle.brand} | Change brand to: <input type="text" name="brand" onChange={this.editData}></input></div> <br/>
                        <div> <button type="submit"> Edit Vehicle </button> </div>
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