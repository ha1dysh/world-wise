"use client";
import { ReactNode, useState } from "react";
import Sidebar from "@/components/layout/sidebar/sidebar";
import styles from "./layout.module.scss";
import { ICity } from "@/api/types";

export default function MainLayout({ children }: { children: ReactNode }) {
	const [currentCity, setCurrentCity] = useState<ICity | null>(null);

	return (
		<div className={styles.container}>
			<Sidebar>{children}</Sidebar>
		</div>
	);
}
