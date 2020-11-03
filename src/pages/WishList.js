import styled from 'styled-components';
import PropTypes from 'prop-types';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

export default function WishList({ title }) {
  return (
    <>
      <H2>{title}</H2>
      <WishListItem title="hässliche Socken" />
      <WishListItem title="grauenvoller Pullover" />
      <WishListItem title="ekelhafte Süßigkeiten" />
    </>
  );
}

WishList.propTypes = {
  title: PropTypes.string.isRequired,
};
