import { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    )
  }
}