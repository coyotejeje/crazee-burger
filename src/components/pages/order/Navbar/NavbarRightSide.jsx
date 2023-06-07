import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="Activer le mode Admin"
        labelIfChecked="Désactiver le mode Admin"
      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
