'use client'
import React, { PropsWithChildren, useState } from "react";
import classNames from "classnames";

const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <div
      className={classNames({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      {/* sidebar */}
      <div className="bg-indigo-700 text-white">
        <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
            X
        </button>
      </div>
      {/* content */}
      <div className=""> {props.children}</div>
    </div>
  );
};
export default Layout;