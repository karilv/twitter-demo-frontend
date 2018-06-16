import React, { Component } from "react";
import logo from "./icons/twitterlogo.svg";
import "normalize.css";
import "./App.css";
import Header from "./Header";
import styled from "styled-components";
import "flexboxgrid2";

const ProfileHeaderName = styled.h1`
  color: #14171a;
  font-size: 22px;
  line-spacing: 0.02px;
  font-weight: bold;
  line-height: 1.5;
  vertical-align: middle;
`;

const Tick = styled.img`
  max-height: 18px;
  max-width: 18px;
  vertical-align: middle;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <div className="row">
            <div className="cox-lg-3" />
            <ProfileHeaderName>Every Interact </ProfileHeaderName>
            <span>
              <Tick
                src={process.env.PUBLIC_URL + "pics/Tick.jpg"}
                alt="pics/Tick.jpg"
              />
            </span>
          </div>
          <div className="col-lg-6" />
        </div>
      </div>
    );
  }
}

export default App;
