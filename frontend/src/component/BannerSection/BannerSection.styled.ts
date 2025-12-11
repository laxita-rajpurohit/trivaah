import styled from "styled-components";

export const BannerRoot = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  background: #f4f4f6;
  padding: 20px 40px 20px 40px;
  margin: 0 20px;
  column-gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
    margin-top: 40px;
  }
`;

export const LeftMediaGrid = styled.div<{ $count: number }>`
  display: grid;
  gap: 12px;

  ${({ $count }) => {
    if ($count === 1) {
      return `
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      `;
    }
    if ($count === 2) {
      return `
        grid-template-rows: 1fr;
      `;
    }
    return `
      grid-template-columns: 1.1fr 1fr;
      grid-template-areas:
        "main top"
        "main bottom";
    `;
  }}
`;

export const MainCell = styled.div`
  grid-area: main;
  overflow: hidden;
  border-radius: 8px;
`;

export const TopCell = styled.div`
  grid-area: top;
  overflow: hidden;
  border-radius: 8px;
`;

export const BottomCell = styled.div`
  grid-area: bottom;
  overflow: hidden;
  border-radius: 8px;
`;

export const SmallCell = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

export const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MediaVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RightContent = styled.div<{ $bg?: string }>`
  background: ${({ $bg }) => $bg || "#f4f4f6"};
  border-radius: 8px;
  padding: 72px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 900px) {
    padding: 40px 28px;
    align-items: center;
    text-align: center;
  }
`;

export const Eyebrow = styled.p`
  font-size: 18px;
  margin: 0 0 8px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #202020;
`;

export const Title = styled.h2`
  font-family: "Mahalika", "Times New Roman", serif;
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 16px;
  color: #202020;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0 0 28px;
  color: #4d3b35;
`;

export const CtaButton = styled.button`
  padding: 12px 40px;
  border-radius: 999px;
  border: none;
  background: #000000;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #222222;
    transform: translateY(-1px);
  }
`;

