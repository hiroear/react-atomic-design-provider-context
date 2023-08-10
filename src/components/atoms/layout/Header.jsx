import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

//↓ react-router-domの Linkを拡張 (既存のコンポーネントを拡張していく場合はstyled()の中に要素を書く)
const SLink = styled(Link)`
  margin: 0 8px;
`;
