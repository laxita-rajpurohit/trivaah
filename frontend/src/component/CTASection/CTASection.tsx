import React from "react";
import {
  HeroCTAWrap,
  HeroCTALayer,
  HeroCTAText,
  HeroCTATitle,
  HeroCTASubtitle,
  HeroCTAOffer,
} from "./CTASection.styled";

export type HeroCTAProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  offerText?: string;
  codeText?: string;
  buttonLabel?: string;
  align?: "left" | "right"; // text alignment for each side card
  onClick?: () => void;
};

export const HeroCTA: React.FC<HeroCTAProps> = ({
  backgroundImage,
  title,
  subtitle,
  offerText,
  codeText,
  // buttonLabel,
  align = "left",
  // onClick,
}) => {
  return (
    <HeroCTAWrap $bg={backgroundImage}>
      <HeroCTALayer>
        <HeroCTAText $align={align}>
          {subtitle && <HeroCTASubtitle>{subtitle}</HeroCTASubtitle>}
          <HeroCTATitle>{title}</HeroCTATitle>
          {(offerText || codeText) && (
            <HeroCTAOffer>
              {offerText}
              {offerText && codeText && " | "}
              {codeText}
            </HeroCTAOffer>
          )}
          {/* <HeroCTAButton onClick={onClick}>{buttonLabel}</HeroCTAButton> */}
        </HeroCTAText>
      </HeroCTALayer>
    </HeroCTAWrap>
  );
};
