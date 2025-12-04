import styled from "styled-components";
import MegaDropdown from "./Dropdown";
import { useState } from "react";

const Bar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 42px;
  // padding: 18px 0;
  background: #fff;
  position: relative; /* important: dropdown will position against this */
  align-items: center;
`;

/* wrapper for menu items so we can keep ::after underline absolute */
const MenuItem = styled.div`
  position: relative; /* for underline only */
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  cursor: pointer;
  padding: 6px 4px;

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

/* invisible hit area to keep dropdown visible when mouse moves between menu and dropdown */
const HoverArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 260px;
  pointer-events: none;
`;

/* ----------------------- MENU DATA ----------------------- */
const data: {
  label: string;
  dropdown?: { heading: string; items: string[] }[];
}[] = [
  { label: "Sale" },
  { label: "Bestsellers" },
  { label: "New Arrivals" },

  {
    label: "Sarees",
    dropdown: [
      // {
      //   heading: "By Occasion",
      //   items: [
      //     "Summer Sarees",
      //     "Wedding Sarees",
      //     "Engagement Sarees",
      //     "Reception Sarees",
      //     "Haldi Sarees",
      //     "Festive Sarees",
      //     "Party Wear Sarees"
      //   ]
      // },
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
      },
      // {
      //   heading: "",
      //   items: [
      //     "Sarees Under 5000",
      //     "Bestsellers",
      //     "New Arrival Sarees",
      //     "Blouses"
      //   ]
      // }
    ]
  }
,  

  {
    label: "Lehengas",
    dropdown: [
      // {
      //   heading: "By Occasion",
      //   items: [
      //     "Bridal Lehengas",
      //     "Reception Lehengas",
      //     "Haldi Lehengas",
      //     "Bridesmaid Lehengas",
      //     "Mehendi Lehengas",
      //   ],
      // },
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
      // {
      //   heading: " ",
      //   items: [
      //     "Lehengas Under 10000",
      //     "New Arrivals",
      //   ],
      // },
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
        ],
      },
    ],
  },
];


export default function CategoriesBar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredItem = data.find((d) => d.label === hovered);

  return (
    <Bar
      onMouseLeave={() => {
        setHovered(null); // hide dropdown when leaving bar area
      }}
    >
      {data.map((item) => (
        <MenuItem
          key={item.label}
          onMouseEnter={() => {
            // show dropdown only if present
            if (item.dropdown) setHovered(item.label);
            else setHovered(null);
          }}
        >
          {item.label}
        </MenuItem>
      ))}

      {/* The dropdown is rendered once and centered relative to `Bar` */}
      <MegaDropdown columns={hoveredItem?.dropdown ?? null} visible={!!hovered} />

      {/* optional invisible hover area keeps mouse flow stable (pointer-events none) */}
      <HoverArea />
    </Bar>
  );
}
