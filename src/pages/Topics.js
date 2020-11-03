import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Topic from '../components/Topic';

export default function Topics() {
  const match = useRouteMatch();

  const Nav = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
    background: yellow;
    margin: 0;
    padding: 1rem 0;
  `;

  const H2 = styled.h2`
    text-align: center;
    color: blue;
  `;

  const H3 = styled.h3`
    text-align: center;
    color: green;
  `;

  return (
    <div>
      <H2>Topics</H2>
      <Nav>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </Nav>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <H3>Please select a topic.</H3>
        </Route>
      </Switch>
    </div>
  );
}
