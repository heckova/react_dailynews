import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
//COMPONENTS
import Header from "./header";
import Footer from "./footer";
//CONTAINERS
import Home from "../containers/home";
import News from "../containers/news";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/news/:id" component={News}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;