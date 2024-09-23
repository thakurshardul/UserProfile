// Create About component here to display the a small content here.
// In this component use paragraph tag (p) to display the content
import { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <>

                <div className="about">
                    <p>Hi, my name is Pranav. I am a full stack web  developer</p>
                    <p> and   I have developed several projects with the MERN </p>
                    <p> stack. I am  also familiar with Python and Django.</p>
                </div>

            </>
        )
    }
}