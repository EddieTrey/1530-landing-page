import React from 'react';
//import { Component } from '../globalStyles';
import styled from 'styled-components';
import BgImg from '../assets/bg-image.png';
import Gifts from '../assets/gifts.png';


//This is the background:
// Is a png image
// Need to somehow extend it to the very bottom of page
// height: 100% isn't working for some reason
const Section = styled.section`
  background-image: url(${BgImg});
  height: full;
  //display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// A space for the "portfolio" at top of the page - incomplete
const Top = styled.div`
    font-size: 60px;
    color: white;
    font-weight: 400;
    padding-left: 865px;
`;

// margin so that text isn't at the left most of page
const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

//Title for who are we descrip
const Title = styled.p`
  font-size: 45px;
  color: #9ea0ac;
  font-weight: 400;
`;

//Body for who are we
// can be changed at anytime. copy/pasted from srs
const Desc = styled.p`
  font-size: 25px;
  width: 780px;
  color: #9ea0ac;
  font-weight: 400;
  margin-top: 35px;
`;

//Title for what we do
const Title1 = styled.p`
    font-size: 45px;
    color: #9ea0ac;
    font-weight: 400;
`;

// description for what we do
// can be changed at anytime. copy/pasted from srs
const Desc1 = styled.p`
    width: 780px;
    color: #9ea0ac;
    font-size: 25px;
    //line-height: 30px;
    margin-top: 35px;
`;

const ImgPad = styled.div`
  padding-left: 900px;
  padding-top: 143px;
`;

const Landing = () => {
  return (
    <Section>

      <Top>
      Portfolio
      </Top>
        <Left>
          <Title>
            Who Are We?
            <Desc>
            We are a group of college students at the University of Pittsburgh,
            mostly studying Computer Science and Computer Enginerring. etcetc
            </Desc>
            <br />
          </Title>
          <Title1>
          Purpose
            <Desc1>
            Our purpose is to eliminate as much cost of donating as possible
            through the use of direct deposit.
            Our audience will be those who are charitable and
            those in need all over
            the world with availability to a bank and internet access.
            </Desc1>
          </Title1>
        </Left>
    </Section>
  );
};

export default Landing;
