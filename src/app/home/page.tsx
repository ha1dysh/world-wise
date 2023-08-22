import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
	return (
			<main className={styles.homeMain}>
				<h1>
					You travel the world.
					<br />
					WorldWise keeps track of your adventures.
				</h1>
				<h2>
					A world map that tracks your footsteps into every city you
					can think of. Never forget your wonderful experiences, and
					show your friends how you have wandered the world.
				</h2>
				<Link className={styles.start} href='/main/cities'>
					Start tracking now
				</Link>
			</main>
	);
}
