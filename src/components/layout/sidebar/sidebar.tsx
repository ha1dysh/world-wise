import { ReactNode } from "react";
import styles from "./sidebar.module.scss";
import MainNav from "../mainNav/mainNav";
import Logo from "@/components/shared/logo/logo";

function Sidebar({ children }: { children: ReactNode }) {
	return (
		<div className={styles.container}>
			<Logo />
			<MainNav />
			{children}
			<footer className={styles.footer}>
				<p className={styles.copyright}>
					&copy; Copyright {new Date().getFullYear()} by WorldWise
					Inc.
				</p>
			</footer>
		</div>
	);
}

export default Sidebar;
