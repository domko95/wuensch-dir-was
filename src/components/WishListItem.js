import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 20px 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px orange;
  color: orange;
`;

export default function WishListSelector({ title }) {
  return (
    <>
      <Container>{title}</Container>
    </>
  );
}

WishListSelector.propTypes = {
  title: PropTypes.string.isRequired,
};
