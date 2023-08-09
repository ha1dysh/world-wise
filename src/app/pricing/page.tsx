/* eslint-disable @next/next/no-img-element */
import Header from "@/components/layout/header/header";
import styles from "./page.module.scss";

export default function Pricing() {
	return (
		<div className={styles.container}>
			<Header />

			<main className={styles.main}>
				<div>
					<h2>
						Simple pricing.
						<br />
						Just $9/month.
					</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Vitae vel labore mollitia iusto. Recusandae quos
						provident, laboriosam fugit voluptatem iste.
					</p>
				</div>
				<img
					src='img-2.jpg'
					alt='overview of a large city with skyscrapers'
				/>
			</main>
		</div>
	);
}
