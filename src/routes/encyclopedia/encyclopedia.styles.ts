import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 24px;
`;

export const StyledCard = styled(Card)`
  min-width: 320px;
  max-width: 90vw;
  margin: 8px 8px;
`;

export const PlantName = styled.h3``;

export const LatinName = styled.p`
  font-style: italic;
`;

export const NeedsContainer = styled.div`
  display: flex;
`;

export const NeedLabel = styled.div`
  font-weight: bold;
  white-space: break-spaces;
`;

export const WaterNeed = styled.div`
  margin-right: 16px;
  display: flex;
`;

export const SunNeed = styled.div`
  display: flex;
`;
