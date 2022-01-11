import { FC } from "react";

import s from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <main className={s.root}>
      <div className={"fit"} style={{ color: "var(--primary)" }}>
        {children}
      </div>
    </main>
  );
};

export default Layout;
