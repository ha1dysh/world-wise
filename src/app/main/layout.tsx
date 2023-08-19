"use client";

import type { Metadata } from "next";
import Sidebar from "@/components/layout/sidebar/sidebar";
import styles from "./layout.module.scss";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/layout/map/map"), {
	loading: () => <p>loading...</p>,
	ssr: false,
});

export const metadata: Metadata = {
	title: "World Wise | Map",
	description: "World Wise Application",
};

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [toggle, setToggle] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);

	function handleMenu() {
		setToggle(!toggle);
	}

	useEffect(() => {
		updateScreenWidth();

		window.addEventListener("resize", updateScreenWidth);

		return () => {
			window.removeEventListener("resize", updateScreenWidth);
		};
	});

	const updateScreenWidth = () => {
		setScreenWidth(window.innerWidth);
	};

	return (
		<div className={styles.container}>
			{!toggle && <Sidebar>{children}</Sidebar>}
			<div className={styles.menuMap} onClick={handleMenu}>
				<span>map</span>
			</div>
			{(screenWidth > 768 || toggle) && <Map />}
		</div>
	);
}
