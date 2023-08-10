// templates: コンテンツをまとめるレイアウトファイル (templates自身は情報を持たない)
// ヘッダーとフッターを表示するレイアウト
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = ({ children }) => {
  // ヘッダーとフッターの間のコンテンツの部分はどんな コンテンツでも対応できるように、propsの childrenでまとめて受け取れるようにする

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
