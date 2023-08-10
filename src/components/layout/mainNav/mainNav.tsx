"use client";
import Link from "next/link";
import styles from "./mainNav.module.scss";
import { usePathname } from "next/navigation";

export default function MainNav() {
	const links = ["cities", "countries"];
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<ul>
				{links.map((link) => {
					const isActive = pathname === `/main/${link}`;
					return (
						<li key={link}>
							<Link
								className={isActive ? "active" : ""}
								href={`/main/${link}`}
							>
								{link}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
