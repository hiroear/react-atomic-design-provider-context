// templates: コンテンツをまとめるレイアウトファイル (templates自身は情報を持たない)
// ヘッダーのみを表示するレイアウト
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = ({ children }) => {
  // ヘッダーの下の、コンテンツの部分はどんな propsでも対応できるように、childrenでまとめて受け取れるようにする
  return (
    <>
      <Header />
      {children}
    </>
  );
};
