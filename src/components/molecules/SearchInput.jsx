// molecules: atomを小さい単位で組み合わせて一つのまとまりとしたもの
import { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = memo(() => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

// 入力欄と検索ボタンを横並びにする為 2つを囲う divタグに styled-componentsで cssを設定
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 入力欄と検索ボタンとの間に少しスペースを入れる為 <PrimaryButton>を囲う divタグを styled-componentsで設定
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
