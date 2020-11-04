import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Add from './pages/Add';
import WishList from './pages/WishList';

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  background: orange;
  margin: 0;
  padding: 1rem 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav>
          <li>
            <Link to="/">Home</Link>
          </li>
        </Nav>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/:listId">
            <WishList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
