import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "World Wise | Login",
	description: "World Wise Application",
};

export default function LoginLayout({
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
