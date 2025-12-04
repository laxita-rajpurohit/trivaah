import styled from "styled-components";
import MegaDropdown from "./Dropdown";
import { useState, useRef } from "react";

const Bar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 42px;
  background: #fff;
  position: relative;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 25px;

  /* Remove solid borders */
  border: none;

  /* Top black shadow */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px; /* thickness of the shadow */
    background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0)); /* fading black */
    box-shadow: 0 2px 6px rgba(0,0,0,0.2); /* subtle shadow */
  }

  /* Bottom black shadow */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; /* thickness */
    background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.4)); /* fading black */
    box-shadow: 0 -2px 6px rgba(0,0,0,0.2); /* subtle shadow */
  }
`;


const MenuItem = styled.div`
  position: relative;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  cursor: pointer;
  // padding: 6px 4px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: #2b2b2b;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.22s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const HoverArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 260px;
  pointer-events: none;
`;


const data = [
  { label: "Sale" },
  { label: "Bestsellers" },
  { label: "New Arrivals" },

  {
    label: "Sarees",
    dropdown: [
      {
        heading: "By Type",
        items: [
          "Floral Sarees",
          "Pastel Sarees",
          "Sequins Sarees",
          "Stonework Sarees",
          "Printed Sarees",
          "Heavy Sarees"
        ]
      },
      {
        heading: "By Material",
        items: [
          "Art Silk Sarees",
          "Organza Sarees",
          "Satin Sarees",
          "Banarasi Sarees",
          "Net Sarees",
          "Crepe Sarees",
          "Georgette Sarees",
          "Pure Silk Sarees"
        ]
      },
      {
        heading: "By Colour",
        items: [
          "Black Sarees",
          "Yellow Sarees",
          "Red Sarees",
          "Green Sarees",
          "Pink Sarees",
          "Blue Sarees",
          "Wine Sarees"
        ]
      }
    ]
  },

  {
    label: "Lehengas",
    dropdown: [
      {
        heading: "By Type",
        items: [
          "Semi Stitched Lehengas",
          "Readymade Lehengas",
        ],
      },
      {
        heading: "By Material",
        items: [
          "Georgette Lehengas",
          "Net Lehengas",
          "Silk Lehengas",
          "Velvet Lehengas",
        ],
      },
      {
        heading: "By Colour",
        items: [
          "Pink Lehengas",
          "Green Lehengas",
          "Blue Lehengas",
          "Yellow Lehengas",
        ],
      },
    ],
  },

  { label: "Dress Materials" },
  { label: "Salwar Suits" },

  {
    label: "Occassions",
    dropdown: [
      {
        heading: "By Occasion",
        items: [
          "Summer Sarees",
          "Wedding Sarees",
          "Engagement Sarees",
          "Reception Sarees",
          "Haldi Sarees",
          "Festive Sarees",
          "Party Wear Sarees",
        ]
      }
    ]
  }
];

export default function CategoriesBar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [dropdownX, setDropdownX] = useState<number>(0);
  const barRef = useRef<HTMLDivElement | null>(null);

  const hoveredItem = data.find((d) => d.label === hovered);

  return (
    <Bar
      ref={barRef}
      onMouseLeave={() => setHovered(null)}
    >
      {data.map((item) => (
        <MenuItem
          key={item.label}
          onMouseEnter={(e) => {
            if (item.dropdown) {
              const rect = e.currentTarget.getBoundingClientRect();
              const barRect = barRef.current!.getBoundingClientRect();

              const centerX = rect.left - barRect.left + rect.width / 2;

              setDropdownX(centerX);
              setHovered(item.label);
            } else {
              setHovered(null);
            }
          }}
        >
          {item.label}
        </MenuItem>
      ))}

      <MegaDropdown
        columns={hoveredItem?.dropdown ?? null}
        visible={!!hovered}
        x={dropdownX}
      />

      <HoverArea />
    </Bar>
  );
}
