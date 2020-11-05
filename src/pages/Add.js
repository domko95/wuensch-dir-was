import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postList } from '../api/lists';

export default function App() {
  const history = useHistory();

  const [title, setTitle] = useState('');

  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };

  const [wishes, setWishes] = useState([]);

  const handleWishChange = (event) => {
    setWishes(event.target.value.split(','));
  };

  const handleAddList = (event) => {
    event.preventDefault();
    postList(title, wishes);
    history.push('/');
  };
  return (
    <>
      <h2>Add a new List for</h2>
      <form onSubmit={handleAddList}>
        <input
          type="text"
          onChange={handleNameChange}
          value={title}
          placeholder="Insert Name"
          required="true"
        />
        <input
          type="text"
          onChange={handleWishChange}
          value={wishes}
          placeholder="Insert Wishes here: Wish 1, Wish 2, ..."
        />
        <button type="submit">Add new List</button>
      </form>
    </>
  );
}
