import styled from "styled-components";
import { BaseButton } from "./BaseButton"; //共通の styled(css)

export const SecondaryButton = ({ children, onClick }) => {
  //↑ 色んなボタンの文字に対応できるよう、親要素の propsから childrenを指定 (例: <button>ここの文字</button>)
  return <SButton onClick={onClick}>{children}</SButton>;
};

// 共通の styled、BaseButton に追加・上書き (既存のコンポーネントを拡張していく場合はstyled()の中に要素を書く)
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
