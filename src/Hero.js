// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import { Component } from "react";

export default class Hero extends Component{
    render(){
        return(
            <>
            <div className="hero">
                <h3>Name: Pranav Sharad Yeole</h3>
                <p>Email: pranav@google.com</p>
                <p>Phone: 8546465544</p>
                <p>Address: ABC, xyz street.</p>
            </div>
            </>
        )
    }
}