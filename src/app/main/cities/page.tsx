"use client";
import CityList from "@/components/layout/cityList/cityList";
import { useCities } from '@/localStorage/cityStorage';

export default function Cities() {
	const [cities] = useCities();

	return <CityList cities={cities} />;
}
