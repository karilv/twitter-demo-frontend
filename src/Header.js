import React, { Component } from "react";
import logo from "./icons/twitterlogo.svg";
import "normalize.css";
import styled from "styled-components";
import homeicon from "./icons/Icon_Home.svg";
import momentsicon from "./icons/Icon_Moments.svg";
import notifyicon from "./icons/Icon_Notifications.svg";
import msgicon from "./icons/Icon_Messages.svg";
import searchicon from "./icons/icon_magnifier.svg";
import "flexboxgrid2";

const NavIcon = styled.img`
  color: #667580;
  vertical-align: middle;
  max-height: 18px;
  max-width: 18px;
  margin-right: 6px;
`;

const NavLink = styled.span`
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  font-family: HelveticaNeue;
  color: #667580;
  letter-spacing: 0.01 px;
  display: inline;
`;

const NavBtn = styled.div`
  display: flex;
  align-content: align-center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 6px;
  margin-bottom: 7px;
`;

const NavMenuItem = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const TwitterLogo = styled.img`
  width: 20px;
`;

const SearchInput = styled.input`
  background: #f5f8fa;
  border-radius: 100px;
  padding-left: 11px;
  background-image: url(${searchicon});
  background-repeat: no-repeat;
  background-position: center right 10px;
  background-size: 15px 15px;
  text-align: left;
  font-size: 12px;
  line-height: 14px;
  border-color: #e6ecf0;
  border-style: solid;
  border-width: 1px;
`;

const SmallAva = styled.img`
  max-height: 32px;
  max-width: 32px;
`;

const CoverImg = styled.img`
  width: 100%;
`;

const Button = styled.button`
  background: #1da1f2;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100px;
  line-spacing: 0.01px;
  line-height: 18px;
  margin-left: 16px;
  border-width: 0px;
`;

const HeaderBar = styled.header`
  background: #ffffff;
  width: 100%;
`;

function Header(props) {
  return (
    <div className={props.className}>
      <HeaderBar>
        <div className="container">
          <div className="row between-lg">
            <NavMenuItem>
              <NavBtn>
                <NavIcon src={homeicon} alt="homeicon" />
                <NavLink>Home</NavLink>
              </NavBtn>

              <NavBtn>
                <NavIcon src={momentsicon} alt="momentsicon" />
                <NavLink>Moments</NavLink>
              </NavBtn>

              <NavBtn>
                <NavIcon src={notifyicon} alt="notifyicon" />
                <NavLink>Notifications</NavLink>
              </NavBtn>

              <NavBtn>
                <NavIcon src={msgicon} alt="msgicon" />
                <NavLink>Messages</NavLink>
              </NavBtn>
            </NavMenuItem>

            <NavMenuItem>
              <TwitterLogo src={logo} alt="logo" />
            </NavMenuItem>

            <NavMenuItem>
              <SearchInput placeholder="Search Twitter" type="text" />

              <SmallAva
                src={process.env.PUBLIC_URL + "pics/small_ava.jpg"}
                alt="small-ava"
              />

              <Button>Tweet</Button>
            </NavMenuItem>
          </div>
        </div>
      </HeaderBar>

      <CoverImg
        src={process.env.PUBLIC_URL + "pics/everyinteract_cover.jpg"}
        alt="cover-everyinteract"
      />
    </div>
  );
}

export default Header;
