import styled from 'styled-components';
import { Accordion, AccordionDetails, Button } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

export const IconButton = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color: gray;
  cursor: pointer;
  :hover {
    background: whitesmoke;
  }
`;

export const StyledAccordion = styled(Accordion)`
  && {
    text-align: left;
    width: 80vw;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
`;

export const ButtonSection = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Detail = styled.div`
  text-align: left;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
`;
