import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import TweetFeed from "./TweetFeed.js";
import styled from "styled-components";
import "flexboxgrid2";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title> Every Interactive</title>
          </Helmet>
          <Switch>
            <Redirect exact from="/" to="/EveryInteract" />
          </Switch>
          <header>
            <Route path="/" component={Header} />
          </header>
          <main>
            <Route path="/EveryInteract" component={TweetFeed} />
            <Route path="/home" component={TweetFeed} />
            <Route path="/notifications" component={TweetFeed} />
            <Route path="/messages" component={TweetFeed} />
            <Route path="/moments" component={TweetFeed} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
