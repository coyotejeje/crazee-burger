import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <div className="profile">
        <p>Bonjour {username}</p>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
      <div className="picture"></div>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  background: purple;
  display: flex;
  align-items: center;

  /* .admin-button {
    background: lightblue;
  } */

  .profile {
    background: yellow;
  }
`;
