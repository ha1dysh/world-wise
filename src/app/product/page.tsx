/* eslint-disable @next/next/no-img-element */
import Header from "@/components/layout/header/header";
import styles from "./page.module.scss";

export default function Product() {
	return (
		<div className={styles.container}>
			<Header />

			<main className={styles.main}>
				<img
					src='img-1.jpg'
					alt='person with dog overlooking mountain with sunset'
				/>
				<div>
					<h2>About WorldWide.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Illo est dicta illum vero culpa cum quaerat architecto
						sapiente eius non soluta, molestiae nihil laborum,
						placeat debitis, laboriosam at fuga perspiciatis?
					</p>
				</div>
			</main>
		</div>
	);
}
