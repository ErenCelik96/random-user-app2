import "./App.css";
import React, {useState, useEffect} from 'react'
import Logo from "./assets/cw.svg";
import woman from "./assets/woman.svg";
import man from "./assets/man.svg";
import mail from "./assets/mail.svg";
import phone from "./assets/phone.svg";
import ageWoman from "./assets/growing-up-woman.svg";
import ageMan from "./assets/growing-up-man.svg";
import map from "./assets/map.svg";
import lock from "./assets/padlock.svg";
import axios from "axios";

export default function Card() {
    const [change, setChange] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() =>{
        axios.get('https://randomuser.me/api/')
        .then(res => setChange(res.data.results[0]))
    }, [show]);

    //show this text


    return (
        <div className="card">
            <img className="logo" src={Logo} width="100px" height="100px" alt="logo"/>
            <div className="card--container">
                <img className="userPp" src={change.picture?.large} alt="profile photo"/>
                <p className="text name">My name is <br/><span>{change.name?.first}</span></p>
                <p className="text email">My email is <br/><span>{change.email}</span></p>
                <p className="text age">My age is <br/><span>{change.dob?.age}</span></p>
                <p className="text city">My city is <br/><span>{change.location?.city}</span></p>
                <p className="text password">My password is <br/><span>{change.login?.password}</span></p>
                <div className="icon-group">
                    <img className="icon woman" src={woman} alt="logo" />
                    <img className="icon man" src={man} alt="logo" />
                    <img className="icon" src={mail} alt="logo"/>
                    <img className="icon woman" src={ageWoman} alt="logo"/>
                    <img className="icon man" src={ageMan} alt="logo"/>
                    <img className="icon" src={map} alt="logo"/>
                    <img className="icon" src={phone} alt="logo"/>
                    <img className="icon" src={lock} alt="logo"/>
                </div>
                <div className="button-group">
                    <button type="button" className="newUser" onClick={()=>{setShow(!show)}}>New User</button>
                    <button type="button" className="addUser">Add User</button>
                </div>
                <div className="user-group">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
