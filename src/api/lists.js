export async function getLists() {
  const response = await fetch('http://localhost:5000/lists');
  const lists = await response.json();
  return lists;
}

export async function getListById(id) {
  const response = await fetch(`http://localhost:5000/lists/${id}`);
  const list = await response.json();
  return list;
}

export async function deleteListById(id) {
  await fetch(`http://localhost:5000/lists/${id}`, {
    method: 'DELETE',
  });
}

export async function postList(name, items) {
  await fetch('http://localhost:5000/lists', {
    method: 'POST',
    body: JSON.stringify({
      title: name,
      wishes: items,
    }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}

export async function patchListItemIntoListId(id, item) {
  await fetch(`http://localhost:5000/lists/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      wishes: item,
    }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}
