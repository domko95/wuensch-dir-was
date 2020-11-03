import styled from 'styled-components';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

export default function Home() {
  const H2 = styled.h2`
    text-align: center;
    color: red;
  `;
  return (
    <>
      <H2>Home</H2>
      <WishListItem title="Dominique" />
      <Button>+</Button>
    </>
  );
}
