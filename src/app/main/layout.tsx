import type { Metadata } from "next";
import Sidebar from "@/components/layout/sidebar/sidebar";
import styles from "./layout.module.scss";
import Map from "@/components/layout/map/map";

export const metadata: Metadata = {
	title: "World Wise | Map",
	description: "World Wise Application",
};

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={styles.container}>
			<Sidebar>{children}</Sidebar>
			<Map />
		</div>
	);
}
