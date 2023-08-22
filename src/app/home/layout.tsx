import type { Metadata } from "next";
import styles from './page.module.scss';
import Header from "@/components/layout/header/header";

export const metadata: Metadata = {
	title: "World Wise",
	description: "World Wise Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={styles.container}>
			<Header />
			{children}
		</div>
	);
}
