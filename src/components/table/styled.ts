import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 100%;

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 0;
  }
  
  th {
    text-align: center;
    background-color: #55608f;
  }
  
  tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  td:hover {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: -9999px;
      bottom: -9999px;
      background-color: rgba(255, 255, 255, 0.2);
      z-index: -1;
    }
  }
`;
