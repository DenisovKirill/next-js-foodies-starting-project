"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './navLink.module.scss'

export default function NavLink({ href, children }) {
    const { active,link } = styles;
    const path = usePathname();
    return (
        <Link href={href} className={`${link} ${path.startsWith(href) ? active : undefined}`}>{children}</Link>
    );
}