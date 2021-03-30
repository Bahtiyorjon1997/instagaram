import React from "react";
import styled from "styled-components";
import { GrFormDown } from "react-icons/gr";

const Footer = () => {
  return (
    <HeadWrapper>
      <FooterWrapper>
        <div>About</div>
        <div>Blog</div>
        <div>Jobs</div>
        <div>Help</div>
        <div>API</div>
        <div>Privacy</div>
        <div>Term</div>
        <div>Top Accounts</div>
        <div>Hash Tags</div>
        <div>Locations</div>
      </FooterWrapper>
      <div className="last-data">
        <p>
          English <GrFormDown style={{ height: "1rem" }} />{" "}
        </p>
        <p className="sec-p">© 2021 Instagram from Facebook</p>
      </div>
    </HeadWrapper>
  );
};

export default Footer;

const HeadWrapper = styled.div`
  opacity: 0.7;

  .last-data {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -3.5rem;
    padding-top: -1rem;
    padding-bottom: 3rem;
  }

  .sec-p {
    padding-left: 2rem;
    padding-right: -2rem;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 0rem;

  height: 5rem;
  width: 0 auto;

  font-size: 13px;
`;
