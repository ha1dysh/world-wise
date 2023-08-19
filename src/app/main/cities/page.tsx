"use client";
import { ICity } from "@/localStorage/types";
import CityList from "@/components/layout/cityList/cityList";
import { useEffect, useState } from "react";

export default function Cities() {
	const [cities, setCities] = useState<ICity[] | []>([]);

	useEffect(() => {
		const items = localStorage.getItem("cities");
		if (!items) {
			return setCities([]);
		}
		const parsedItems = JSON.parse(items);
		setCities(parsedItems);
	}, []);

	return <CityList cities={cities} />;
}
