import React from "react";
import './Contact.css';
// import bgimg from "./images/british-museum.jpg";
import { useState } from "react";
import axios from 'axios';


function ContactUs() {
  const [validationError, setValidationError] = useState(false);
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [mobile , setMobile] = useState("");
  const [message , setMessage] = useState("");
  const [list, setList] = useState([]);
  const onChangeusername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };

  const onChangemobile = (e) => {
    setMobile(e.target.value);
  };

  const onChangemessage = (e) => {
    setMessage(e.target.value);
  };

  const userContact = async () =>{
    if(username != "" || email != "" || mobile != "" , message  !="")
    // if(username = "" || email == "" || mobile == "" , message =="")
    {
      alert(`Check your mail we'll get back to you soon !!`);
    }
    else
    {
      alert("invalid !! Username sholud be atleast 6 characters and message should contain atleast 1 uppercase 1 lowercase 1 digit 1 special character and should have atleast atleast 8 characters");
      setValidationError(true);
      return;
      
    }

    const url = "http://localhost:5100/add-message";
    const data = {
      username : username,
      email : email,
      mobile : mobile,
      message : message,
    };


    await axios.post(url, data);

    const newlist = [data, ...list];
    setList(newlist);

    setUsername("");
    setEmail("");
    setMobile("");
    setMessage("");

  }

  const getUsers = async () => {
    const url = "http://localhost:5100/messages";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };
  return (
    <>
      {/* <div className="" style={{backgroundImage: `url(${bgimg}`}}> */}
      
      <div className="contentbg">
        
            <div><br /><br />
                <h3 style={{textAlign:"center"}}>Your support is vital and helps the Museum to share the collection with the world.</h3><br></br>
    
                {/* <div className="info-content">
                    <ul style={{listStyleType:"none"}}>
                        <li>
                            <p>For more information about supporting the Museum:</p>
                        </li>
                        <li>
                            <p>Email:&nbsp;</p>
                            <a href="mailto:ourmail@gmail.com">ourmail@gmail.com</a>
                        </li>
                        <li>
                            <p>Phone: .......</p>
                        </li>
                    </ul>
                </div> */}
            </div>
            {/* <div className="my-5">
        <h1 className="">Contact Us</h1>
      </div> */}
            <div className="container w-100 ">
        <div className="row ">
          <div className="col-md-4 col-8 mx-auto justify-content-end">
          {/* col-md-4 col-8 mx-auto justify-content-end */}
          {/* <h1 className="">Contact Us</h1> */}
            <form style={{fontSize:"15px"}} className="w-100 bg-black">
              <div className="form-group w-100">
              <h3 className="">Contact Us</h3>
              </div>
              <div className="form-group w-100 ">
                <div>
                <label for="">Enter Full Name</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  style={{borderRadius : "2px"}}
                  placeholder="Enter Your Name" value={username} onChange={onChangeusername}
                  className={username == "" && validationError ? "border border-danger" : ""}
                />
              </div>
              <div className="form-group pt-3">
              <div>
                <label for="">Email address</label>
              </div>
                <input
                  type="email"
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  id=""
                  placeholder="name@example.com" value={email} onChange={onChangeemail}
                  className={email == "" && validationError ? "border border-danger" : ""}
                />
              </div>
              <div className="form-group pt-3">
              <div>
                <label for="">Contact Number</label>
              </div>
                <input
                  type="text"
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  id=""
                  placeholder="+91-" value={mobile} onChange={onChangemobile}
                  className={mobile == "" && validationError ? "border border-danger" : ""}
                />
              </div>

              <div className="form-group pt-3">
              <div>
                <label for="">Type your Message Here</label>
              </div>
                <textarea
                  className="form-control w-100 rounded-pill border-0 shadow-sm px-4" id="" rows="3"placeholder="Message" value={message} onChange={onChangemessage}
                  className={message == "" && validationError ? "border border-danger" : ""}></textarea>
                </div>

              <div className="col-12 pt-3">
                <button
                  onClick={userContact}
                  className="btn btn-dark"
                  type="submit"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default ContactUs;
