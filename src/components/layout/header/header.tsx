"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.scss";
import Logo from "@/components/shared/logo/logo";

const links = ["PRICING", "PRODUCT"];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<Logo />
			<nav>
				<ul>
					{links.map((link) => {
						const isActive = pathname.endsWith(link.toLowerCase());
						return (
							<li key={link}>
								<Link
									className={isActive ? "active" : ""}
									href={link.toLowerCase()}
								>
									{link}
								</Link>
							</li>
						);
					})}
					<Link className={styles.ctaLink} href='/login'>
						LOGIN
					</Link>
				</ul>
			</nav>
		</header>
	);
}
