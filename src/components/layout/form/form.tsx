"use client";
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { FormEvent, useState } from "react";

import styles from "./form.module.scss";
import Button from "@/components/shared/button/button";
import { useRouter } from "next/navigation";
import { useCities } from '@/localStorage/cityStorage';
import { ICity } from "@/localStorage/types";

// export function convertToEmoji(countryCode) {
// 	const codePoints = countryCode
// 		.toUpperCase()
// 		.split("")
// 		.map((char) => 127397 + char.charCodeAt());
// 	return String.fromCodePoint(...codePoints);
// }

export default function Form() {
	const [cities, setCities] = useCities();
	const [cityName, setCityName] = useState("");
	const [date, setDate] = useState(new Date());
	const [notes, setNotes] = useState("");
	const router = useRouter();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const city = {
			cityName,
			notes,
			date,
			country: '',
			emoji: '',
			id: 1,
			position: { lat: 1, lng: 1 }
		};

		setCities((state: ICity[]) =>
			[...state, city]);

		router.push('/main/cities');
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.row}>
				<label htmlFor='cityName'>City name</label>
				<input
					id='cityName'
					onChange={(e) => setCityName(e.target.value)}
					value={cityName}
				/>
				{/* <span className={styles.flag}>{emoji}</span> */}
			</div>

			<div className={styles.row}>
				<label htmlFor='date'>When did you go to {cityName}?</label>
				<input
					id='date'
					onChange={(e) => setDate(new Date(e.target.value))}
					value={date.toISOString()}
				/>
			</div>

			<div className={styles.row}>
				<label htmlFor='notes'>
					Notes about your trip to {cityName}
				</label>
				<textarea
					id='notes'
					onChange={(e) => setNotes(e.target.value)}
					value={notes}
				/>
			</div>

			<div className={styles.buttons}>
				<Button btnType='primary'>Add</Button>
				<Button
					btnType='back'
					onClick={(e: FormEvent) => {
						e.preventDefault();
						router.push("/main/cities/");
					}}
				>
					&larr; Back
				</Button>
			</div>
		</form>
	);
}
