import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .25s ease, transform .25s ease;
  transform: translateY(10px);
  z-index: 999;

  /* white background panel */
 & > .content-box {
  width: auto;                  /* shrink to content */
  max-width: 90vw;              /* safe limit */
  background: #ffffff;
  padding: 30px 50px;
  border-radius: 12px;
  box-shadow: 0 25px 45px rgba(0,0,0,0.08);
  display: flex;
  gap: 80px;
  justify-content: center;      /* keep columns centered */
}

`;

const VisibleWrapper = styled(Wrapper)<{ visible?: boolean }>`
  ${({ visible }) =>
    visible &&
    `
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateY(0);
    `}
`;


const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 180px;
`;

const Heading = styled.h4`
  font-size: 13px;
  letter-spacing: 0.16em;
  color: #202020;
  text-transform: uppercase;
  margin: 0 0 8px 0;
`;

const Item = styled.a`
  font-size: 12px;
  color: #202020;
  text-decoration: none;
  letter-spacing: 0.02em;
  cursor: pointer;
  display: inline-block;
//   padding: 6px 0;

  &:hover {
    opacity: 0.65;
    color:red;
  }
`;

export default function MegaDropdown({
  columns,
  visible = false,
}: {
  columns: { heading: string; items: string[] }[] | null;
  visible?: boolean;
}) {
  if (!columns || columns.length === 0) return null;

  return (
    <VisibleWrapper visible={visible}>
    <div className="content-box">
      {columns.map((col) => (
        <Column key={col.heading}>
          <Heading>{col.heading}</Heading>

          {col.items.map((name) => (
            <Item key={name}>{name}</Item>
          ))}
        </Column>
      ))}
    </div>
  </VisibleWrapper>
  );
}
