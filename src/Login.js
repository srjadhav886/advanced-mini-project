import React from "react";
import './Login.css';
import { useState } from "react";
import axios from "axios";
import './Login.css';
import swal from "sweetalert";
import { useEffect } from "react";
import { Link } from "react-router-dom";





function Login() {



  useEffect(() => {
    document.title = "Login";
  }, []);

  const [validationError, setValidationError] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const [userList, setUserList] = useState([]);


  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };



  const loginUser = () => {

    if (password === "" || email === "") {
      setValidationError(true);
      return;
    }





    const url = "http://localhost:8080/user/login";
    const data = {

      email: email,
      password: password,
    };

    axios.post(url, data)
      .then((response) => {
        if (response.data.role === "USER") {
          sessionStorage.setItem("username", response.data.firstName)
          const userdata = {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email
          };
          sessionStorage.setItem("userdata", JSON.stringify(userdata));
          sessionStorage.setItem("userSession", response.data.email);
          localStorage.setItem("user_id", response.data.id);
          localStorage.setItem("user", response.data.email);
          // console.log(JSON.parse(sessionStorage.user).id);
          window.location = "/user";
        }
        if (response.data.role === "admin") {
          window.location = "/admin/viewcomplaints"
        }
      }).catch((error) => {
        swal("something went wrong");
      });




    setValidationError(false);
  };
  return (
    <>
      <div className="divform">
        <div className="container">
          <div className="row px-3 mt mb-5">
            <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
              <div className="img-left d-none d-md-flex"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} /></div>

              <div className="card-body">
                <h4 className="title text-center mt-4">
                  Login into account
                </h4>
                <form className="form-box px-3">

                  <div className="form-input">
                    <span><i className="fa fa-envelope-o"></i></span>
                    <input type="email" name="" placeholder="Email Address" value={email} onChange={handleEmail}
                      className={email === "" && validationError ? "border border-danger" : ""} />
                  </div>
                  <div className="form-input">
                    <span><i className="fa fa-key"></i></span>
                    <input type="password" name="" placeholder="Password" value={password} onChange={handlePassword}
                      className={password === "" && validationError ? "border border-danger" : ""} />
                  </div>

                  <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="cb1" name="" />
                      <label className="custom-control-label" for="cb1">Remember me</label>
                    </div>
                  </div>

                  <div class="mb-3">
                    <button type="submit" class="btn btn-block text-uppercase" onClick={loginUser}>
                      Login
                    </button>
                  </div>

                  <div className="text-right">
                    <a href='#' className="forget-link">
                      Forget Password?
                    </a>
                  </div>





                  <div className="text-center mb-0">
                    Don't have an account?
                    <a href='./sign-up' className="register-link">
                      Register here
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Login;


