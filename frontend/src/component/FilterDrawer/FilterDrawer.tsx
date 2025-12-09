import React from "react";
import {
  FilterBar,
  FilterIcon,
  DrawerBackdrop,
  DrawerPanel,
  DrawerHeader,
  DrawerClose,
  DrawerBody,
  DrawerFooter,
  ClearButton,
  ApplyButton,
  DrawerSection,
  DrawerSectionTitle,
} from "./FilterDrawer.styled";

type FilterDrawerProps = {
  isOpen: boolean;
  totalProducts: number;
  onToggle: () => void;
  onApply: () => void;
  onClear: () => void;
  children?: React.ReactNode;
};

export const FilterTrigger: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
  <FilterBar type="button" onClick={onOpen}>
    <FilterIcon />
    FILTER
  </FilterBar>
);

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  totalProducts,
  onToggle,
  onApply,
  onClear,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <DrawerBackdrop onClick={onToggle}>
      <DrawerPanel onClick={(e) => e.stopPropagation()}>
        <DrawerHeader>
          <span>FILTER AND SORT</span>
          <DrawerClose onClick={onToggle}>×</DrawerClose>
        </DrawerHeader>

        <DrawerBody>
          <DrawerSection>
            <DrawerSectionTitle>{totalProducts} PRODUCTS</DrawerSectionTitle>
          </DrawerSection>
          {children}
        </DrawerBody>

        <DrawerFooter>
          <ClearButton onClick={onClear}>Clear</ClearButton>
          <ApplyButton onClick={onApply}>Apply</ApplyButton>
        </DrawerFooter>
      </DrawerPanel>
    </DrawerBackdrop>
  );
};
    