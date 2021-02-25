import React, { useState } from 'react';
import './User.css'

// class User extends Component {
//     handleClick(){
//         console.log("The button works bitch!!!!")
//     }
//     reverseClick(){
//         console.log("HERE TO ERASE THE DATA");
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name.first}</h1>
//                 <img src={this.props.image} alt='lol'/>
//                 <br/>
//                 <button onClick={this.handleClick} className='button'>Show Details</button>
//                 <button onClick={this.reverseClick} className='reverse'>Hide Details</button>
//             </div>
//         )
//     }
// }
const User = (props) => {
    const[handleClick, setHandleClick] = useState(false);

    const buttonClick = () => {
        setHandleClick(false);
    }
    const reverseClick = () => {
        setHandleClick(true);
    }

    if(handleClick){
        return (
            <div>
                <h1>{props.name}</h1>
                <img src={props.image} alt='lol'/>
                <p>{`Age: ${props.age}`}</p>
                <p>{`Email: ${props.email}`}</p>
                <p>{`Phone: ${props.phone}`}</p>
                <p>{props.location}</p>
                <br/>
                <button onClick={buttonClick} className='button'>Hide Details</button>
            </div>

        )
    } else {
        return (
            <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt='lol'/>
            <br/>
            <button onClick={reverseClick} className='button'>Show Details</button>
        </div>
        )
    }

}


export default User;