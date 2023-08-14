import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "World Wise | Product",
	description: "World Wise Application",
};

export default function ProductLayout({
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
