import header from "./Header/header";
import Footer from "./Footer/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header></header>
      {children}
      <footer></footer>
    </div>
  );
}

