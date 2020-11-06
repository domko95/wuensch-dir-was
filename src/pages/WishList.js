import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import {
  deleteListById,
  getListById,
  patchListItemIntoListId,
} from '../api/lists';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

const CenteredDiv = styled.div`
  display: grid;
  place-items: center;
`;

export default function WishList() {
  const { listId } = useParams();
  const history = useHistory();
  const [list, setList] = useState(null);
  const [wishToAdd, setWishToAdd] = useState('');

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  const handleDelete = () => {
    deleteListById(listId);
    history.push('/');
  };

  const handleChange = (e) => {
    setWishToAdd([...list.wishes, e.target.value]);
  };

  const handleSubmit = () => {
    patchListItemIntoListId(listId, wishToAdd);
  };

  if (!list) {
    return <CenteredDiv>Loading . . . </CenteredDiv>;
  }

  return (
    <>
      <H2>{list.title}&apos;s Wishlist</H2>
      {list.wishes?.map((wish) => (
        <WishListItem key={wish} title={wish} />
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new Wish"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
