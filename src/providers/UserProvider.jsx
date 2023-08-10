// ユーザーの情報を扱う Provider
// グローバルな state を管理するコンテキストを作るには createContextを使用する
import React, { createContext, useState } from "react";

// コンテキストを作りますという意味で UserContextを定義。空のオブジェクトを渡している。他の画面でも UserContextを参照できるよう export しておく
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(); //isAdmin: true / false を保持する state

  return (
    /* createContextの中に Provider というものがあり、それを返却していく。
    どんな要素でも囲っていけるよう childrenを受け取れるようにしておく。
    グローバルに参照できる値は Providerの valueという propsに渡していくことで、グローバルな stateを提供できる  */
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

/** コンテキストを扱う際の注意点
 * stateをファイルからファイルへ propsで渡すバケツリレーをせずに、グローバルに stateを管理できるのはとても便利だが、
 * Provider内で渡している値 (value={{ userInfo, setUserInfo }}) が更新されたときは、その値を使っているコンポーネントは
 * 全て再レンダリングされてしまう。
 * コンテキストを使う場合は、stateの更新時にどのコンポーネントが更新されてしまうのかを把握し、再レンダリングの必要のないコンポーネントは memo化すること
 */
