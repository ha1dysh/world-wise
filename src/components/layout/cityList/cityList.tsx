import { ICity } from "@/localStorage/types";
import styles from "./cityList.module.scss";
import CityItem from "./cityItem";

export default function CityList({ cities }: { cities: ICity[] }) {
	if (!cities.length) {
		return <h1>Add your first city by clicking on a city on the map</h1>;
	}

	return (
		<ul className={styles.cityList}>
			{cities.map((city) => (
				<CityItem city={city} key={Math.random()} />
			))}
		</ul>
	);
}
