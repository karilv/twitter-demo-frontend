import React, { Component } from "react";
import logo from "./icons/twitterlogo.svg";
import "normalize.css";
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

const AvatarSmall = styled.img`
  max-height: 32px;
  max-width: 32px;
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
  line-height: 14px;
`;

function SmallAva(props) {
  return (
    <div>
      <a>
        <AvatarSmall src={props.src} alt={props.alt} />
      </a>
    </div>
  );
}

const Button = styled.button`
  background: #1da1f2;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100px;
  line-spacing: 0.01px;
  line-height: 18px;
`;

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
                <SearchInput placeholder="Search Twitter" type="text" />

                <SmallAva
                  src={process.env.PUBLIC_URL + "pics/small_ava.jpg"}
                  alt="small-ava"
                />

                <Button>Tweet</Button>
              </div>
            </div>
          </div>
        </header>

        <CoverImg
          src={process.env.PUBLIC_URL + "pics/everyinteract_cover.jpg"}
          alt="cover-everyinteract"
        />

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
