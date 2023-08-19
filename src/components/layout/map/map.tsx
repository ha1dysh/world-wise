"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import styles from "./map.module.scss";

export default function Map() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	return (
		<div
			className={styles.mapContainer}
			onClick={() => router.push("/main/form")}
		>{`lat: ${lat} lng: ${lng}`}</div>
	);
}
