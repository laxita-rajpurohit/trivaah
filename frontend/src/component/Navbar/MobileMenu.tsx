// src/components/Navbar/MobileMenu.tsx
import type { FC } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { navCategories, type CategoryItem } from "../../data/navCategories";
import { CategoryStrip } from "../CategoryStrip";
import { categoryStripItems } from "../../data/homePageData";
import logo from "../../assets/trivaah-logo.svg";
type Props = {
  open: boolean;
  onClose: () => void;
};

const Backdrop = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.25s ease;
  z-index: 1999;
   backdrop-filter: blur(6px);       /* <- blur effect */
  -webkit-backdrop-filter: blur(6px);
`;

const DrawerWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  max-width: 320px;
  background: #ffffff;
  box-shadow: 2px 0 14px rgba(0, 0, 0, 0.25);
  transform: translateX(${({ open }) => (open ? "0" : "-100%")});
  transition: transform 0.25s ease;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const DrawerHeader = styled.div`
  height: 56px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  img{
  margin-left: 42px;
  margin-top: 8px;
  }
`;

const CloseIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const TopLevelItem = styled.button<{ open?: boolean }>`
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  span {
    color: black;
  }
`;


const Chevron = styled.span<{ open?: boolean }>`
  font-size: 16px;
  transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  transition: transform 0.2s ease;
`;

const SubSection = styled.div`
  padding: 0 0 10px 8px;
  border-left: 1px solid #f0f0f0;
`;

const SubHeading = styled.div`
  font-size: 11px;
  font-weight: 600;
  margin: 4px 0 2px;
  text-transform: uppercase;
  color: #999;
`;

const SubItem = styled.button`
  border: none;
  background: none;
  text-align: left;
  padding: 4px 0;
  font-size: 13px;
  cursor: pointer;
  color: #333;
`;

const DrawerScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 18px 24px;
`;


const MobileMenu: FC<Props> = ({ open, onClose }) => {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  // prevent body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleTopClick = (item: CategoryItem) => {
    if (!item.dropdown) {
      // direct nav if needed
      onClose();
      return;
    }
    setOpenLabel((prev) => (prev === item.label ? null : item.label));
  };

  return (
    <>
      <Backdrop open={open} onClick={onClose} />
      <DrawerWrapper open={open}>
      
        <DrawerHeader>
        <img src={logo} alt="Trivaah logo" width={118} height={30} />
          <CloseIcon onClick={onClose}>×</CloseIcon>
        </DrawerHeader>

        <DrawerScroll>
           {/* top image strip */}
  <CategoryStrip
    items={categoryStripItems}
    onSelect={(id) => {
      // optional: open corresponding section when a card is tapped
      const match = navCategories.find((c) =>
        c.label.toLowerCase().includes(id.toLowerCase())
      );
      if (match) {
        if (match.dropdown) {
          setOpenLabel(match.label);
        }
        // you can also scroll to that section later if needed
      }
    }}
  />

  {/* separator if you want */}
  <hr style={{ border: "none", borderTop: "1px solid #f1f1f1", margin: "8px 0 12px" }} />

          {navCategories.map((item) => {
            const isOpen = !!item.dropdown && openLabel === item.label;
            return (
              <div key={item.label}>
                <TopLevelItem open={isOpen} onClick={() => handleTopClick(item)}>
                  <span>{item.label}</span>
                  {item.dropdown && <Chevron open={isOpen}>⌃</Chevron>}
                </TopLevelItem>

                {isOpen &&
                  item.dropdown?.map((group) => (
                    <SubSection key={group.heading}>
                      <SubHeading>{group.heading}</SubHeading>
                      {group.items.map((it) => (
                        <SubItem key={it} onClick={onClose}>
                          {it}
                        </SubItem>
                      ))}
                    </SubSection>
                  ))}
              </div>
            );
          })}
        </DrawerScroll>
      </DrawerWrapper>
    </>
  );
};

export default MobileMenu;
