// pages: 最終地点、ページを構成する全ての要素を集めたファイル
import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { UserContext } from "../../providers/UserProvider";

// 10件分のユーザーの配列を生成 → {オブジェクト}にして返し、usersに格納
const users = [...Array(10).keys()].map((val) => {
  // returnの後に{オブジェクト}で返す
  return {
    id: val,
    name: `ひろえ-${val}`,
    image: "https://source.unsplash.com/TzjMd7i5WQI",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "荒木商店"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  // [切り替え]ボタンを押すと、今の userInfoの値の反対の値が userInfoに更新される
  // この時、実際はこの Users.jsx のみ再レンダリングされて欲しいのに、ボタンを押すたびに、Users.jsx で使用している子コンポーネントも
  // 一緒に再レンダリングされてしまうので、子コンポーネントを一つづつ memo化してあげる必要がある
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />

      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>

      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

// レスポンシブに対応したグリッドデザイン
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
