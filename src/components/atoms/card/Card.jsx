import styled from "styled-components";

export const Card = ({ children }) => {
  // <Card>プロフィール情報(名前やメール、会社名...)</Card> という構成になるので children = 中のプロフィール情報全て

  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
