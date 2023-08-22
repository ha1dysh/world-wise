/* eslint-disable @next/next/no-img-element */
import styles from "../page.module.scss";

export default function Pricing() {
	return (
		<main className={styles.main}>
			<div>
				<h3>
					Simple pricing.
					<br />
					Just $9/month.
				</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Vitae vel labore mollitia iusto. Recusandae quos
					provident, laboriosam fugit voluptatem iste.
				</p>
			</div>
			<img
				src='/img-2.jpg'
				alt='overview of a large city with skyscrapers'
			/>
		</main>
	);
}
