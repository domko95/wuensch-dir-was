import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getWishes } from '../api/lists';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

export default function WishList() {
  const { title } = useParams();
  const [wishes, setWishes] = useState([]);
  useEffect(async () => {
    const newWishes = await getWishes(title);
    setWishes(newWishes);
  }, []);
  return (
    <>
      <H2>{title}&apos;s Wishlist</H2>
      {wishes?.map((wish) => (
        <WishListItem title={wish} />
      ))}
    </>
  );
}
