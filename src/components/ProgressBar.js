import styled from 'styled-components';

const ProgressBar = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    #ffd230 ${props => props.scrolling},
    transparent  0);
  width: 100%;
  height: 4px;
  z-index: 3;
`;

export default ProgressBar;