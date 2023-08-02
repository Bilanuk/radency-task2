import styled from 'styled-components';

import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiTask } from 'react-icons/bi';
import { AiOutlineQuestion } from 'react-icons/ai';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPageWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  width: 150px;
  margin: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const StyledActionButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const ActionTd = styled.td`
  text-align: center;
  padding: 0;
`;

const DefaultIcon = `
  font-size: 20px;
  padding: 5px;
  margin-right: 5px;
  color: #ffffff;
  background-color: #2f2f2f; 
  border-radius: 5px;
  vertical-align: middle;
`;

const StyledHiOutlineLightBulb = styled(HiOutlineLightBulb)`
  ${DefaultIcon}
`;

const StyledBiTask = styled(BiTask)`
  ${DefaultIcon}
`;

const StyledAiOutlineQuestion = styled(AiOutlineQuestion)`
  ${DefaultIcon}
`;

const StyledAiFillDelete = styled(AiFillDelete)`
  ${DefaultIcon}
`;

const StyledAiFillEdit = styled(AiFillEdit)`
  ${DefaultIcon}
`;

const StyledBiArchiveIn = styled(BiArchiveIn)`
  ${DefaultIcon}
`;

const StyledBiArchiveOut = styled(BiArchiveOut)`
  ${DefaultIcon}
`;

export {
  AppWrapper,
  StyledPageWrapper,
  StyledButton,
  ActionTd,
  StyledActionButton,
  StyledHiOutlineLightBulb,
  StyledBiTask,
  StyledAiOutlineQuestion,
  StyledAiFillDelete,
  StyledAiFillEdit,
  StyledBiArchiveIn,
  StyledBiArchiveOut,
};
