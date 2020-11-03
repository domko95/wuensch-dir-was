import styled from 'styled-components';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: lightblue;
`;

export default function WishList() {
  return (
    <>
      <H2>Person XYZ</H2>
      <WishListItem title="hässliche Socken" />
      <WishListItem title="grauenvoller Pullover" />
      <WishListItem title="ekelhafte Süßigkeiten" />
    </>
  );
}
