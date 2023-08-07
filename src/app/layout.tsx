import "./globals.css";
import type { Metadata } from "next";

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
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
