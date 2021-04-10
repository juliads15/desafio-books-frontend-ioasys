import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Books from "./pages/BooksPage/books";
import Login from "./pages/LoginPage/login";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/books" component={Books} />
        </Switch>
    </BrowserRouter>
);

export default Routes;