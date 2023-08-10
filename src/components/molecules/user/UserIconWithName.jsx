// molecules: atomを小さい単位で組み合わせて一つのまとまりとしたもの
import React, { useContext, memo } from "react"; //Providerのコンテキストの値を参照するには useContextという Hooksを使う
import { UserContext } from "../../../providers/UserProvider";
import styled from "styled-components";

export const UserIconWithName = memo(({ image, name }) => {
  // useContextを呼び出し、どの contextの値か判別できるよう UserProvider.jsx内で exportした UserContextを引数に渡す
  const { userInfo } = useContext(UserContext);
  console.log(userInfo); // Object { isAdmin: true/false }

  // UserContextから取り出した userInfoが存在していたら、入っている値をそのまま返し、存在しなかったら falseを返す
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}{" "}
      {/* isAdminが trueだったら編集ボタンを表示 */}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
