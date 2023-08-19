import styles from "./cityItem.module.scss";
import { ICity } from "@/localStorage/types";
import Link from "next/link";

export default function CityItem({ city }: { city: ICity }) {
	const { cityName, emoji, date, id, position } = city;

	// function handleClick(e) {
	// 	e.preventDefault();
	// 	deleteCity(id);
	// }

	return (
		<li>
			<Link
				// className={`${styles.cityItem} ${
				// 	id === currentCity.id ? styles["cityItem--active"] : ""
				// }`}
				className={`${styles.cityItem} `}
				href={`/main/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
			>
				<span className={styles.emoji}>{emoji}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.date}>
					{new Date(date).toLocaleDateString("uk")}
				</time>
				{/* <button className={styles.deleteBtn} onClick={handleClick}> */}
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
}
