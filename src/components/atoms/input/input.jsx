import styled from "styled-components";

export const Input = ({ placeholder = "" }) => {
  //↑ 色んなplaceholderの文字に対応できるよう、親要素の propsから placeholderを指定、かつ、placeholderが何も届かなかった場合に備えてから文字をデフォルトに設定
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
