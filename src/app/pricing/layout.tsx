import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "World Wise | Price",
	description: "World Wise Application",
};

export default function PriceLayout({
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
