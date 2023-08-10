import styled from "styled-components";
import { BaseButton } from "./BaseButton"; //共通の styled(css)

export const PrimaryButton = ({ children }) => {
  //↑ 色んなボタンの文字に対応できるよう、親要素の propsから childrenを指定 (例: <button>ここの文字</button>)
  return <SButton>{children}</SButton>;
};

// 共通の styled、BaseButton に追加・上書き
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
