import React from "react";
import styled from "styled-components";

type Category = {
  id: string;
  label: string;
  imageSrc: string;
};

type CategoryStripProps = {
  items: Category[];
  onSelect?: (id: string) => void;
};

const Strip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 24px 40px;
  overflow-x: auto;

  /* hide scrollbar on WebKit (optional) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const ImageWrapper = styled.div`
//   width: 190px;
//   height: 360px;
//   border-radius: 999px;
//   overflow: hidden;
//   background: #f7f1e9;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s ease-out;
//   box-shadow: 0 0 0 rgba(0, 0, 0, 0);

//   ${Item}:hover & {
//     transform: translateY(-4px);
//     box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
const ImageWrapper = styled.div`
  width: 180px;              /* try 170–200px until it visually matches */
  aspect-ratio: 2 / 4;       /* width : height => tall oval; adjust to taste */
  border-radius: 50%;        /* perfect ellipse based on width/height */
  overflow: hidden;
  background: #f7f1e9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  ${Item}:hover & {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;   /* fills the ellipse without distortion */
  object-position: top center; /* keeps model’s head higher; tweak if needed */
`;


const Label = styled.span`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

export const CategoryStrip: React.FC<CategoryStripProps> = ({ items, onSelect }) => {
  return (
    <Strip>
      {items.map(item => (
        <Item key={item.id} onClick={() => onSelect?.(item.id)}>
          <ImageWrapper>
            <Image src={item.imageSrc} alt={item.label} />
          </ImageWrapper>
          <Label>{item.label}</Label>
        </Item>
      ))}
    </Strip>
  );
};