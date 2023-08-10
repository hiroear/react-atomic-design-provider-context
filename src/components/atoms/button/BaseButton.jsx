import styled from "styled-components";

// 共通の style(css)は共通のコンポーネントとしてそこだけ切り離しておく
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border-radius: 9999px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
