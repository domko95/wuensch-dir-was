import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

export default function WishList() {
  const { title } = useParams();
  return (
    <>
      <H2>{title}&apos;s Wishlist</H2>
      <WishListItem title="hässliche Socken" />
      <WishListItem title="grauenvoller Pullover" />
      <WishListItem title="ekelhafte Süßigkeiten" />
    </>
  );
}
