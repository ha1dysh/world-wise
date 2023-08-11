import getCities from "@/api/api";
import { ICity } from "@/api/types";
import CityList from "@/components/layout/cityList/cityList";

export default async function Cities() {
	const cities: ICity[] = await getCities();

	return <CityList cities={cities} />;
}
