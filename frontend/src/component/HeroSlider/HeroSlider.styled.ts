// src/component/HeroSlider/HeroSlider.styled.ts
import styled from "styled-components";


export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;

  .swiper {
    width: 100%;
    max-width: 100vw;
  }

  .swiper-wrapper {
    width: 100%;
    max-width: 100vw;
  }

  .swiper-slide {
    width: 100% !important;
  }
`;

export const SlideWrapper = styled.article`
  position: relative;
  width: 100%;
`;

export const SlideImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100vw;
  height: auto;
  object-fit: cover;
`;

export const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 7%;
  padding-left: 7%;
  color: #ffffff;
  pointer-events: none;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 0 12%;
  }
`;

export const Badge = styled.p`
  display: none; /* not visible in given screenshot */
`;

export const Title = styled.h2`
  max-width: 520px;
  font-family: "Georgia", "Times New Roman", serif;
  font-weight: 400;
  font-size: clamp(2.4rem, 4.4vw, 3.4rem);
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-align: right;
  margin: 0 0 1.6rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.95rem;
  margin: 0 0 0.75rem;

  /* allow manual line break for UNDER ₹2499 part */
  white-space: pre-line;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CTAButton = styled.a`
  pointer-events: auto;
  margin-top: 1.8rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 3.4rem;
  border-radius: 999px;
  border: none;

  background-color: #ffffff;
  color: #222222;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 45px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2.8rem;
    font-size: 0.9rem;
  }
`;
