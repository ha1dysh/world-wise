"use client";
import { ICity } from "@/localStorage/types";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useCities } from "@/localStorage/cityStorage";

export default function City({ params }: { params: { id: string } }) {
	const [cities] = useCities();
	const [city, setCity] = useState<ICity | {}>({});

	useEffect(() => {
		const city = cities.find((e: ICity) => e.id === Number(params.id));
		if (city) {
			setCity(city);
		}
	}, [cities, params.id]);

	const { cityName, emoji, date, notes } = city as ICity;

	return (
		<div className={styles.city}>
			<div className={styles.row}>
				<h6>City name</h6>
				<h3>
					<span>{emoji}</span> {cityName}
				</h3>
			</div>

			<div className={styles.row}>
				<h6>You went to {cityName} on</h6>
				<p>{new Date(date).toLocaleDateString()}</p>
			</div>

			{notes && (
				<div className={styles.row}>
					<h6>Your notes</h6>
					<p>{notes}</p>
				</div>
			)}

			<div className={styles.row}>
				<h6>Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${cityName}`}
					target='_blank'
					rel='noreferrer'
				>
					Check out {cityName} on Wikipedia &rarr;
				</a>
			</div>

			<div></div>
		</div>
	);
}
