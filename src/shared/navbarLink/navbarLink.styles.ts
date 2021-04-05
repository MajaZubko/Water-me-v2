import styled from 'styled-components';

export const LinkBody = styled.div<{ active: boolean }>`
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  margin-right: 8px;
  margin-left: 8px;
`;
