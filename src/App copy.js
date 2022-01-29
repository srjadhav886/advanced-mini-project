import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
// import Collection from "./Collection";
import TicketBooking from "./TicketBooking";
import Login from "./Login";
import Register from "./Register";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Users from './Users';
import Messages from './Messages';
import Visitors from './Visitors';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        {/* <Route exact path="/collection" component={Collection} /> */}
        <Route exact path="/ticketbooking" component={TicketBooking} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/visitors" component={Visitors} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
