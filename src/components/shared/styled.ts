import { FaSadTear } from 'react-icons/fa';
import styled from 'styled-components';

const VerySadComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const StyledVerySadComponent = styled(FaSadTear)`
  color: #acacac;
  font-size: 100px;
`;

export { VerySadComponentWrapper, StyledVerySadComponent };