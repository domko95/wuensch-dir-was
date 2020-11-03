import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import WishListSelector from '../components/WishListSelector';

const H2 = styled.h2`
  text-align: center;
  color: limegreen;
`;

export default function Home() {
  return (
    <>
      <H2>Home</H2>
      <WishListSelector title="Dominique" />
      <Link to="/add">
        <Button pos="bottom-right">+</Button>
      </Link>
    </>
  );
}
