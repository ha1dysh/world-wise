import { useState, useEffect } from "react";
import { ICity } from "./types";

export function useCities() {
	const [cities, setCities] = useState<ICity[] | []>([]);
	
	useEffect(() => {
		const items = localStorage.getItem("cities");
		
		if (!items) {
			return setCities([]);
		}
		const parsedItems = JSON.parse(items);
		setCities(parsedItems);
	}, []);

	useEffect(() => {
		localStorage.setItem('cities', JSON.stringify(cities));
	}, [cities]);
	
	return [cities, setCities] as const;
}
