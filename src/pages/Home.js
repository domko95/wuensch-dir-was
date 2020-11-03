import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

export default function Home({ title }) {
  return (
    <>
      <H2>Welcome to Wishlist</H2>
      <Link to={title}>
        <WishListItem title={title} />
      </Link>
      <Link to="/add">
        <Button pos="bottom-right">+</Button>
      </Link>
    </>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};
