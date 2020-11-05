import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getLists } from '../api/lists';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

const H2 = styled.h2`
  text-align: center;
  color: orange;
`;

const CenteredDiv = styled.div`
  display: grid;
  place-items: center;
`;

export default function Home() {
  const [lists, setLists] = useState(null);
  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  if (!lists) {
    return <CenteredDiv>loading . . . </CenteredDiv>;
  }

  return (
    <>
      <H2>Welcome to Wishlist</H2>
      {lists?.map((list) => (
        <Link key={list.id} to={`/${list.id}`}>
          <WishListItem title={list.title} />
        </Link>
      ))}
      <Link to="/add">
        <Button pos="bottom-right">+</Button>
      </Link>
    </>
  );
}
