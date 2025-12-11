import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  overflow: hidden;
  padding: 0 0 20px 0;
  perspective: 1400px;

  @media (max-width: 768px) {
    height: 360px;                 /* shorter carousel */
    padding: 0 0 10px 0;
  }
`;

export const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SlideCard = styled.div<{ $offset: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 260px;
  height: 420px;
  border-radius: 28px;
  overflow: hidden;
  background: #000;
  transform-style: preserve-3d;
  transition: transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease;
  cursor: pointer;

  ${({ $offset }) => {
    const abs = Math.abs($offset);
    const baseAngle = 18;
    const rotateY = $offset * baseAngle;
    const translateZ = $offset === 0 ? 260 : 180 - abs * 40;
    const translateX = $offset * 120;
    const translateY = 40 + abs * 10;
    const rotateZ = $offset * 2;
    const scale = $offset === 0 ? 1.05 : 0.9 - abs * 0.03;
    const opacity = abs > 4 ? 0 : 1 - abs * 0.12;
    const zIndex = 20 - abs;
    const shadow =
      abs === 0
        ? "0 30px 80px rgba(0,0,0,0.45)"
        : "0 20px 50px rgba(0,0,0,0.35)";

    return `
      transform:
        translate3d(-50%, -50%, 0)
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
        scale(${scale});
      opacity: ${opacity};
      z-index: ${zIndex};
      box-shadow: ${shadow};
    `;
  }}

  /* MOBILE: smaller cards & tighter fan */
  @media (max-width: 768px) {
    width: 190px;
    height: 300px;
    border-radius: 20px;

    ${({ $offset }) => {
      const abs = Math.abs($offset);
      const baseAngle = 14;
      const rotateY = $offset * baseAngle;
      const translateZ = $offset === 0 ? 220 : 150 - abs * 35;
      const translateX = $offset * 90;
      const translateY = 30 + abs * 8;
      const rotateZ = $offset * 1.5;
      const scale = $offset === 0 ? 1.03 : 0.9 - abs * 0.02;
      const opacity = abs > 3 ? 0 : 1 - abs * 0.14;
      const zIndex = 20 - abs;
      const shadow =
        abs === 0
          ? "0 20px 40px rgba(0,0,0,0.4)"
          : "0 14px 30px rgba(0,0,0,0.3)";

      return `
        transform:
          translate3d(-50%, -50%, 0)
          translateX(${translateX}px)
          translateY(${translateY}px)
          translateZ(${translateZ}px)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
          scale(${scale});
        opacity: ${opacity};
        z-index: ${zIndex};
        box-shadow: ${shadow};
      `;
    }}
  }
`;

export const Arrow = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 48px;" : "right: 48px;")}
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: none;
  background: rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 20;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
    transform: translateY(-50%) scale(1.05);
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    ${({ $side }) => ($side === "left" ? "left: 16px;" : "right: 16px;")}
  }
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  font-size: 20px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SlideVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
