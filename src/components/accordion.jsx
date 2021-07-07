import React, { useState } from "react";
import { Data } from "./data";
import styled from "styled-components";
import { IconContext } from "react-icons";

const AccordionSection = styled.div`
  background: blue;
  color: white;
  text-align: center;
`;
const Container = styled.div``;
const Wrap = styled.div`
  margin: 20px;
`;
const Drop = styled.div``;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <AccordionSection>
      <Container>
        {Data.map((item, index) => {
          return (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h3>{item.q}</h3>
              </Wrap>
              {clicked === index ? (
                <Drop>
                  <h5>{item.a}</h5>
                </Drop>
              ) : null}
            </>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

export default Accordion;
