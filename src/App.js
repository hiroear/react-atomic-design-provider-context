import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    // 一番上の親コンポーネントで<UserProvider>で全てを囲むことで、その配下ではコンテキストが参照できるようになる
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
