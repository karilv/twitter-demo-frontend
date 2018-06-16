import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import ProfileInfoCardleft from "./ProfileInfoCard.js";
import styled from "styled-components";
import "flexboxgrid2";
import locationicon from "./icons/Icon_ Location.svg";
import linkicon from "./icons/Icon_ Link.svg";
import joinedicon from "./icons/icon_ joined.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileInfoCardleft />
            </div>
          </div>
          <div className="col-lg-6" />
        </div>
      </div>
    );
  }
}

export default App;
