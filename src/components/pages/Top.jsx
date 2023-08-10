// pages: 最終地点、ページを構成する全ての要素を集めたファイル
import React, { useContext } from "react"; //Providerのコンテキストの値を参照するには useContextという Hooksを使う
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider"; // Providerから

export const Top = () => {
  const history = useHistory();

  // useContextを呼び出し、どの contextの値か判別できるよう UserProvider.jsx内で exportした UserContextを引数に渡す
  // isAdminを更新したいので value={{ userInfo, setUserInfo }} の内 setUserInfoの方を取り出す
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true }); // setUserInfoを更新してページ遷移
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
