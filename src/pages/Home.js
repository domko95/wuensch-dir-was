import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

const titles = ['Dominique', 'Hans', 'Sven', 'Marie', 'Leon', 'Philipp'];
const title = titles.map((name) => (
  <Link to={name}>
    <WishListItem title={name} />
  </Link>
));

export default function Home() {
  return (
    <>
      <H2>Welcome to Wishlist</H2>
      {title}
      <Link to="/add">
        <Button pos="bottom-right">+</Button>
      </Link>
    </>
  );
}
