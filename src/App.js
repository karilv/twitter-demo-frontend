import React, { Component } from "react";
import logo from "./icons/twitterlogo.svg";
import "./App.css";
import styled from "styled-components";
import homeicon from "./icons/Icon_Home.svg";
import momentsicon from "./icons/Icon_Moments.svg";
import notifyicon from "./icons/Icon_Notifications.svg";
import msgicon from "./icons/Icon_Messages.svg";
import searchicon from "./icons/icon_magnifier.svg";
import "flexboxgrid2";

const NavLink = styled.p`
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  font-family: HelveticaNeue;
  color: #667580;
  letter-spacing: 0.01 px;
  display: inline;
`;

const NavIcon = styled.img`
  color: #667580;
  vertical-align: middle;
  max-height: 18px;
`;

function NavBtn(props) {
  return (
    <a href={props.link}>
      <NavIcon src={props.source} alt={props.alter} />
      <NavLink>{props.text}</NavLink>
    </a>
  );
}

const CoverImg = styled.img`
  width: 100%;
`;

const TwitterLogo = styled.img``;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const SearchInput = styled.input`
  border-color: #e6ecf0;
  background: #f5f8fa;
  border-radius: 100px;
  padding-left: 11px;
  padding-top: 9px;
  padding-bottom: 8px;
  background-image: url(${searchicon});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 15px 15px;
  text-align: left;
  font-family: HelveticaNeue;
  line-height: 14px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header-bar">
          <div className="container">
            <div className="row between-lg">
              <div className="row">
                <NavBtn
                  link="https://twitter.com"
                  source={homeicon}
                  alter="homeicon"
                  text="Home"
                />
                <NavBtn
                  link="https://twitter.com"
                  source={momentsicon}
                  alter="momentsicon"
                  text="Moments"
                />
                <NavBtn
                  link="https://twitter.com"
                  source={notifyicon}
                  alter="notifyicon"
                  text="Notifications"
                />
                <NavBtn
                  link="https://twitter.com"
                  source={msgicon}
                  alter="msgicon"
                  text="Messages"
                />
              </div>

              <div className="row">
                <TwitterLogo src={logo} alt="logo" />
              </div>

              <div className="row">
                <SearchInput placeholder="Search Twitter" />
              </div>
            </div>
          </div>
        </header>

        <CoverImg
          src={process.env.PUBLIC_URL + "pics/everyinteract_cover.jpg"}
          alt="cover-everyinteract"
        />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Wrapper>
          <Title>Hello World, this is my first styled component!</Title>
        </Wrapper>
      </div>
    );
  }
}

export default App;
