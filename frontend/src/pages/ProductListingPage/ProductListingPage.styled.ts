import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
`;

export const PageHeader = styled.div`
  padding: 40px 80px 20px;
  max-width: 1400px;
  margin: 0 auto;
  // width: 100%;

  @media (max-width: 900px) {
    padding: 20px 20px 15px;
  }
`;

export const PageTitle = styled.h1`
  font-family: "Mahalika", serif;
  font-size: 42px;
  font-weight: bold;
  margin: 0 0 16px 0;
  color: #202020;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

export const PageDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4d3b35;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

export const StyledLink = styled.a`
  color: #202020;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px 80px;
  overflow-x: auto;
  max-width: 1400px;
  margin: 0 auto;
  // width: 100%;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 2px;
  }

  @media (max-width: 900px) {
    padding: 15px 20px;
  }
`;

export const FilterButton = styled.button`
  padding: 10px 24px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  color: #202020;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    border-color: #202020;
    background: #202020;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 80px 60px;
  // max-width: 1400px;
  margin: 0 auto;
  // width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 15px 20px 40px;
    gap: 30px;
  }
`;

export const Sidebar = styled.aside`
  min-width: 250px;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 100px;

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    min-width: 100%;
  }
`;

export const SidebarTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 24px 0;
  color: #202020;
`;

export const FilterSection = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #202020;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  span {
    font-size: 14px;
    color: #666;
  }
`;

export const PriceInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 14px;
  width: 80px;

  &:focus {
    outline: none;
    border-color: #202020;
  }
`;

export const GoButton = styled.button`
  padding: 8px 20px;
  background: #202020;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ResultsCount = styled.p`
  font-size: 16px;
  color: #202020;
  margin: 0;
`;

export const SortDropdown = styled.select`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  color: #202020;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #202020;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 20px;
  }
`;

export const ProductCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f7f1e9;
  margin-bottom: 12px;
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductTag = styled.div<{ tagType?: "discount" | "bestseller" | "offer" }>`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 12px;
  background: ${({ tagType }) => {
    if (tagType === "bestseller") return "#d4af37";
    if (tagType === "discount") return "#e74c3c";
    return "#c0392b";
  }};
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 4px;
  z-index: 2;
  white-space: nowrap;
`;

export const ProductInfo = styled.div`
  text-align: center;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #202020;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #202020;
  margin: 0;
`;

