import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Topic() {
  const H3 = styled.h3`
    text-align: center;
    color: purple;
  `;
  const { topicId } = useParams();
  return <H3>Requested topic ID: {topicId}</H3>;
}
