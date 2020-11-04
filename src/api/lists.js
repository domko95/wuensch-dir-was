export async function getLists() {
  const response = await fetch('http://localhost:5000/lists');
  const lists = await response.json();
  return lists;
}

export async function getWishes(name) {
  const response = await fetch(`http://localhost:5000/lists?title=${name}`);
  const list = await response.json();
  return list[0].wishes;
}
