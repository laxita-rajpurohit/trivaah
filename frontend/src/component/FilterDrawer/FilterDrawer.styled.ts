// src/pages/ProductListing/FilterDrawer.styled.ts
import styled from "styled-components";

export const FilterBar = styled.button`
//   width: 100%;
  padding: 10px 5px;
  margin: 20px 0 0 20px;
  border: none;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-family: "Mahalika",serif;
  font-size: 16px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  &:hover {
    border-color: transparent;
      }
  &:focus {
    border-color: transparent;
  }
  &:active {
    border-color: transparent;
  }
  &:visited {
    border-color: transparent;
  }
`;

export const FilterIcon = styled.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 2px solid #111;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 3px;
    right: 3px;
    height: 2px;
    background: #111;
  }

  &::before {
    top: 5px;
  }

  &::after {
    bottom: 5px;
  }
`;

export const DrawerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
  display: flex;
  justify-content: flex-start;
`;

export const DrawerPanel = styled.div`
  width: min(360px, 100%);
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const DrawerHeader = styled.div`
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-family: "Mahalika",serif;

`;

export const DrawerClose = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  font-family: "Mahalika",serif;
`;

export const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
`;

export const DrawerFooter = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const ClearButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 999px;
  border: 1px solid #000;
  background: #ffffff;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 999px;
  border: none;
  background: #000;
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
`;

// Sections inside drawer (availability / price / size / category)
export const DrawerSectionTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const DrawerSection = styled.div`
  margin-bottom: 20px;
`;
