import React from "react";
import { styled } from "@mui/material";

const FooterContainer = styled("footer")`
  background-color: #161616;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  const projectName = "YOUR PROJECT NAME ";
  const linkedinUrl = "https://www.linkedin.com";

  const LinkedInLink = styled("a")`
  color: lightblue;
`;

  return (
    <FooterContainer>
      <p>{projectName}</p>
      <p>
        Follow us on LinkedIn:{" "}
        <LinkedInLink href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <b>SANA </b>
        </LinkedInLink>
      </p>
      <p>&copy; {new Date().getFullYear()} SANA. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
