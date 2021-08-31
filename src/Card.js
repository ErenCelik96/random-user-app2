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

    useEffect(async () =>{
       await axios.get('https://randomuser.me/api/')
        .then(res => setChange(res.data.results[0]))
        .catch((err)=>console.log(err))
    }, [show]);

    //icons for gender type
    const gender = async () => {
        if (await change?.gender !== 'male') {
            document.querySelector("#woman").style.display = 'inline';
            document.querySelector("#agewoman").style.display = 'inline';
            document.querySelector("#man").style.display = 'none';
            document.querySelector("#ageman").style.display = 'none';
        } else {
            document.querySelector("#woman").style.display = 'none';
            document.querySelector("#agewoman").style.display = 'none';
            document.querySelector("#man").style.display = 'inline';
            document.querySelector("#ageman").style.display = 'inline';
        }
    }
    gender();

    //show text
    function showText(txt) {
        document.querySelector(txt).style.visibility="visible";
    }

    //hide text
    function hideText(txt) {
        document.querySelector(txt).style.visibility="hidden";
    }

    //add user
    const addUser = () => {
        document.querySelector("tbody").innerHTML+=`
        <td>${change.name?.first}</td> 
        <td>${change.email}</td> 
        <td>${change?.phone}</td> 
        <td>${change.dob?.age}</td>
        `
        document.querySelector("table").style.display="inline";
    }

    return (
        <div className="card">
            <img className="logo" src={Logo} width="100px" height="100px" alt="logo"/>
            <div className="card--container">
                <img className="userPp" src={change.picture?.large || Logo} alt="profile photo"/>
                <div className="textContainer">
                    <p className="text name">My name is <br/><span>{change.name?.first || "Clarusway"}</span></p>
                    <p className="text email">My email is <br/><span>{change.email|| "Clarusway"}</span></p>
                    <p className="text age">My age is <br/><span>{change.dob?.age || "Clarusway"}</span></p>
                    <p className="text city">My city is <br/><span>{change.location?.city || "Clarusway"}</span></p>
                    <p className="text phone">My phone is <br/><span>{change?.phone || "Clarusway"}</span></p>
                    <p className="text password">My password is <br/><span>{change.login?.password || "Clarusway"}</span></p>
                </div>
                <div className="icon-group">
                    <img id="woman" className="icon woman" src={woman} alt="logo" onMouseOver={()=>
                        showText(".name")} onMouseOut={()=>
                        hideText(".name")}/>
                    <img id="man" className="icon man" src={man} alt="logo" onMouseOver={()=>
                        showText(".name")} onMouseOut={()=>
                        hideText(".name")}/>
                    <img className="icon" src={mail} alt="logo" onMouseOver={()=>
                        showText(".email")} onMouseOut={()=>
                        hideText(".email")}/>
                    <img id="agewoman" className="icon woman" src={ageWoman} alt="logo"onMouseOver={()=>
                        showText(".age")} onMouseOut={()=>
                        hideText(".age")}/>
                    <img id="ageman" className="icon man" src={ageMan} alt="logo"onMouseOver={()=>
                        showText(".age")} onMouseOut={()=>
                        hideText(".age")}/>
                    <img className="icon" src={map} alt="logo"onMouseOver={()=>
                        showText(".city")} onMouseOut={()=>
                        hideText(".city")}/>
                    <img className="icon" src={phone} alt="logo"onMouseOver={()=>
                        showText(".phone")} onMouseOut={()=>
                        hideText(".phone")}/>
                    <img className="icon" src={lock} alt="logo"onMouseOver={()=>
                        showText(".password")} onMouseOut={()=>
                        hideText(".password")}/>
                </div>
                <div className="button-group">
                    <button type="button" className="newUser" onClick={()=>{setShow(!show)}}>New User</button>
                    <button type="button" className="addUser" onClick={()=>addUser()}>Add User</button>
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
