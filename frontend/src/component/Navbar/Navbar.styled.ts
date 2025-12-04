// src/components/Navbar/Navbar.styled.ts
import styled from "styled-components";

export const NavWrapper = styled.nav`
  // width: 100%;
  padding: 14px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const LeftMenu = styled.div`
    flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  width: 140px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const RightMenu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;
