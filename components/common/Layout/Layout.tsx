import { FC } from "react";

import s from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={"fit"}>
      <main className={s.root}>{children}</main>;
    </div>
  );
};

export default Layout;
