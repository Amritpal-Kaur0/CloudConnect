import React from "react";
import { styled } from "@mui/material";

const FooterContainer = styled("footer")`
  background-color: #EA906C;
  color: #2B2A4C;
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  const projectName = "CloudConnect ";
  const linkedinUrl = "https://www.linkedin.com";

  const LinkedInLink = styled("a")`
  color: #B31312;
`;

  return (
    <FooterContainer>
      <p>{projectName}</p>
      <p>
        Follow us on LinkedIn:{" "}
        <LinkedInLink href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <b>HERE</b>
        </LinkedInLink>
      </p>
      <p>&copy; {new Date().getFullYear()}  <b style={{color:'red'}}>......CloudCoNNECT......</b>  All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
