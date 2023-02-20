import styled from 'styled-components';

const ProgressBar = styled.div`
  position: fixed;
  right: 0;
  background: linear-gradient(
    to bottom,
    #ffd230 ${props => props.scrolling},
    transparent  0);
  width: 5px;
  height: 100%;
  z-index: 60;
`;

export default ProgressBar;