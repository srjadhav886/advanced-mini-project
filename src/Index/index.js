import React from "react";
import { useEffect, useState } from "react";
import './index.css'





function Index() {

    useEffect(() => {
        document.title = "index";
        if (sessionStorage.getItem("userSession") == null) {
            window.location = "/login"
        } else if (localStorage.getItem("user") == null) {
            window.location = "./login"
        }

    })


    return (
        <>



            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#!">Amaze.io</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a class="nav-link" href="#!">Logout</a></li>
                            <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead d-flex align-items-center">
                <div className="container px-4 px-lg-5 text-center">
                    <h1 className="mb-1">Welcome</h1>
                    <h1 className="mb-5"><em>{sessionStorage.getItem("userSession")}</em></h1>
                    <a className="btn btn-primary btn-xl" href="#about">Create Resume</a>
                </div>
            </header>

            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-mailchimp" /> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span>
                                    </div>
                                </div>
                                <div className="badge"> <span>Design</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br />Designer-Singapore</h3>
                                <div className="mt-5">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-dribbble" /> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0">Dribbble</h6> <span>4 days ago</span>
                                    </div>
                                </div>
                                <div className="badge"> <span>Product</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Junior Product<br />Designer-Singapore</h3>
                                <div className="mt-5">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bx bxl-reddit" /> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0">Reddit</h6> <span>2 days ago</span>
                                    </div>
                                </div>
                                <div className="badge"> <span>Design</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Software Architect <br />Java - USA</h3>
                                <div className="mt-5">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
export default Index;