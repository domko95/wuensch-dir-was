import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: orange;
  border-radius: 50%;
  font-size: 3rem;
  color: white;
  width: 50px;
  height: 50px;
  line-height: 1;
  cursor: pointer;
  ${(props) =>
    props.pos === 'bottom-right'
      ? 'position: absolute; bottom: 20px; right: 20px;'
      : ''}
`;

export default Button;
