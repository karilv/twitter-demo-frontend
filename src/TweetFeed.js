import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import ProfileInfoCardleft from "./ProfileInfoCard.js";
import styled from "styled-components";
import "flexboxgrid2";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
import pinicon from "./icons/Icon_Pinned.svg";
// import retweeticon from "./icons/Icon_Retweet.svg";
// import loveicon from "./icons/Icon_Loves.svg";
// import commenticon from "./icons/Icon_Comments.svg";

const StatsBar = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 2px #b0b8be;
  height: 60px;
`;

const StatsName = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #707e88;
  text-align: center;
  margin: 0;
`;

const StatsValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #707e88;
  text-align: center;
  display: block;
`;

const StatsItem = styled(NavLink)`
  display: inline-block;
  padding: 14px 15px 9px 14px;
  text-decoration: none;
  &.active {
    border-color: #1da1f2;
    border-bottom-width: 4px;
    border-bottom-style: solid;
  }
`;

const FollowButton = styled.button`
  background: #fffffff;
  color: #1da1f2;
  border-color: #1da1f2;
  font-size: 14px;
  font-weight: bold;
  border-radius: 100px;
  line-spacing: 0.01px;
  line-height: 18px;
  margin-left: 16px;
  border-width: 1px;
  width: 99px;
  height: 36px;
`;

const TweetNavMenu = styled.div`
  margin-top: 8px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border-color: #d8d8d8;
`;

const TweetNavLink = styled(NavLink)`
  padding: 15px 15px 10px 15px;
  text-decoration: none;
  font-weight: bold;
  color: #1da1f2;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const TweetList = styled.div`
  width: 100%;
  background-color: #fff;
`;

const TweetWrapper = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 8px 10px 8px 10px;
  border-color: #d8d8d8;
`;

const PinIcon = styled.img`
  margin-right: 12px;
  height: 12px;
`;

const PinnedLabel = styled.span`
  font-size: 12px;
  color: #707e88;
`;

const PinnedBlock = styled.div`
  margin-left: 35px;
  margin-bottom: 4px;
`;

const TweetContentWrapper = styled.div`
  margin-left: 60px;
`;

const TweetHeader = styled.div``;

const TweetProfileAva = styled.img`
  position: absolute;
  margin-left: -50px;
  width: 50px;
`;

const ProfileProfileName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #292f33;
`;

const ProfileUserName = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #707e88;
`;

const Caption = styled.p`
  margin: 0px;
  font-size: 24px;
  font-weight: 300;
  margin-top: 10px;
`;

const TweetImg = styled.img`
  width: 100%;
`;

const FirstTweet = {
  profile: {
    avatar: "/pics/ei-avatar.jpg",
    profilename: "EveryInteraction",
    username: "@EveryInteract"
  },
  caption:
    "We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
  img: "/pics/TweetPic.jpg"
};

function Tweet(props) {
  const profileavatarurl = `${process.env.PUBLIC_URL}${
    props.tweet.profile.avatar
  }`;
  const tweetimg = `${process.env.PUBLIC_URL}${props.tweet.img}`;
  return (
    <TweetWrapper>
      <PinnedBlock>
        <PinIcon src={pinicon} alt="pinicon" />
        <PinnedLabel>Pinned Tweet</PinnedLabel>
      </PinnedBlock>
      <TweetContentWrapper>
        <TweetHeader>
          <TweetProfileAva src={profileavatarurl} />
          <ProfileProfileName>
            {props.tweet.profile.profilename}
          </ProfileProfileName>
          <span>&nbsp;</span>
          <ProfileUserName>{props.tweet.profile.username}</ProfileUserName>
        </TweetHeader>
        <Caption>{props.tweet.caption}</Caption>
        <br />
        <TweetImg src={tweetimg} alt="tweetimg" />
      </TweetContentWrapper>
    </TweetWrapper>
  );
}

function TweetFeed(props) {
  return (
    <div>
      <StatsBar>
        <div className="container">
          <div className="row middle-lg">
            <div className="col-lg-offset-3 col-lg-6 start-lg">
              <StatsItem to="/Everyinteract/tweets">
                <StatsName>Tweets</StatsName>
                <StatsValue>8,058</StatsValue>
              </StatsItem>
              <StatsItem to="/Everyinteract/following">
                <StatsName>Following</StatsName>
                <StatsValue>8,058</StatsValue>
              </StatsItem>
              <StatsItem to="/Everyinteract/followers">
                <StatsName>Followers</StatsName>
                <StatsValue>721</StatsValue>
              </StatsItem>
              <StatsItem to="/Everyinteract/likes">
                <StatsName>Likes</StatsName>
                <StatsValue>460</StatsValue>
              </StatsItem>
              <StatsItem to="/Everyinteract/lists">
                <StatsName>Lists</StatsName>
                <StatsValue>2</StatsValue>
              </StatsItem>
            </div>
            <div className="col-lg-3 end-lg">
              <FollowButton>Follow</FollowButton>
            </div>
          </div>
        </div>
      </StatsBar>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfoCardleft />
          </div>
          <div className="col-lg-6 start-lg">
            <TweetNavMenu>
              <TweetNavLink to="/Everyinteract"> Tweets </TweetNavLink>
              <TweetNavLink to="/Everyinteract/with_replies">
                Tweets&Replies
              </TweetNavLink>
              <TweetNavLink to="/Everyinteract/media">Media</TweetNavLink>
            </TweetNavMenu>
            <TweetList>
              <Tweet tweet={FirstTweet} />
            </TweetList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetFeed;
