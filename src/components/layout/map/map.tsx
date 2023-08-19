"use client";
import { useSearchParams } from "next/navigation";
import styles from "./map.module.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapOptions, latLng } from "leaflet";

export default function Map() {
	const searchParams = useSearchParams();
	const lat = searchParams.get("lat") || 48.3;
	const lng = searchParams.get("lng") || 31.1;

	const options: MapOptions = {
		center: latLng(Number(lat), Number(lng)),
		zoom: 6,
	};

	return (
		<div className={styles.mapContainer}>
			<MapContainer
				className={styles.map}
				center={options.center}
				zoom={6}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
			</MapContainer>
		</div>
	);
}
