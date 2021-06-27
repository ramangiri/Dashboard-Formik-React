// importing modules and methods
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./Users/userContext";

// importing components

import Sidebar from './Component/Sidebar';
import Navigation from './Component/Navbar';
import Dashboard from './Component/Dashboard'
import Datatable from  './Table/Table';
import Users from './Users/Users';
import Userscreate from './Users/usersCreate';
import Usersedit from './Users/usersEdit';
import Products from "./Products/Products";
import Productscreate from "./Products/ProductCreate";
import Productsedit from "./Products/ProductsEdit";
import Footer from "./Component/Footer";



function App() {
 return <>
 <Router> 
   <div id="wrapper">
   <Sidebar></Sidebar>
   <div id="content-wrapper" class="d-flex flex-column">
   <div id="content">
        <Navigation></Navigation>
        <UserProvider>
        <Switch>
         <Route path="/dashboard" component={Dashboard} exact={true}></Route>
         <Route path="/products" component={Products} exact={true}></Route>
         <Route path="/users" component={Users} exact={true}></Route>
         <Route path="/userscreate" component={Userscreate} exact={true}></Route>
         <Route path="/tables" component={Datatable} exact={true}></Route>
         <Route path="/productscreate" component={Productscreate} exact={true}></Route>
         <Route path="/productsedit/:id" component={Productsedit} exact={true}></Route>
         <Route path="/usersedit/:id" component={Usersedit} exact={true}></Route>
       </Switch>
       </UserProvider>
   </div>
   <Footer></Footer>
   </div>
 </div>
 </Router>


 </>
}

export default App;
