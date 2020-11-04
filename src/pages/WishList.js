import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getListById } from '../api/lists';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

export default function WishList() {
  const { listId } = useParams();
  const [list, setList] = useState([]);
  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  if (!list) {
    return <div>Loading . . . </div>;
  }

  return (
    <>
      <H2>{list.title}&apos;s Wishlist</H2>
      {list.wishes?.map((wish) => (
        <WishListItem key={wish} title={wish} />
      ))}
    </>
  );
}
