/* eslint-disable @next/next/no-img-element */
import styles from "../page.module.scss";

export default function Product() {

	return (
		<main className={styles.main}>
			<img
				src='/img-1.jpg'
				alt='person with dog overlooking mountain with sunset'
			/>
			<div>
				<h3>About WorldWide.</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Illo est dicta illum vero culpa cum quaerat architecto
					sapiente eius non soluta, molestiae nihil laborum,
					placeat debitis, laboriosam at fuga perspiciatis?
				</p>
			</div>
		</main>
	);
}
