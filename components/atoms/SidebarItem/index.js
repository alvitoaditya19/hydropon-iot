import React from 'react';
import cx from "classnames";
import Link from "next/link";

export default function SidebarItem({icon, title, href, active}) {
  const classItem = cx({
    "item-menu": true,
    // "mb-30": true,
    active: active,
  });
  return (
    <>
    <Link href={href}>
      <a className={classItem}>
        <i className={icon}></i>
        {title}
      </a>
      </Link>
    </>
  )
}
