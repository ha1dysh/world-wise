/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./logo.module.scss";

export default function Logo() {
	return (
		<Link href='/home'>
			<img src='/logo.png' alt='WorldWise logo' className={styles.logo} />
		</Link>
	);
}
