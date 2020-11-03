import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 20px 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px limegreen;
`;

export default function WishListSelector({ title }) {
  return (
    <>
      <Link to={`${title}`}>
        <Container>{title}</Container>
      </Link>
    </>
  );
}

WishListSelector.propTypes = {
  title: PropTypes.string.isRequired,
};
