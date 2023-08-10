import Sidebar from "@/components/layout/sidebar/sidebar";
import styles from "./layout.module.scss";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={styles.container}>
			<Sidebar>{children}</Sidebar>
		</div>
	);
}
