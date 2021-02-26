import styled from 'styled-components';
import { Button, Input } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  && {
    min-width: 30vw;
    max-width: 80vw;
    input {
      padding: 4px 0;
    }
  }
`;

export const StyledLabel = styled.label`
  margin-top: 8px;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`;

export const ModalBody = styled.div`
  max-width: 80vw;
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DelayForm = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  flex-direction: column;
`;
