import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Topics from './pages/Topics';

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  background: lightgrey;
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
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </Nav>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/topics">
            <Topics />
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
