const URL = process.env.BASE_URL;

export default async function getCities() {
	const res = await fetch(URL + "cities");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();
	return data;
}
