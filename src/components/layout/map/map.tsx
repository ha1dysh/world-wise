"use client";
import { useSearchParams } from "next/navigation";
import styles from "./map.module.scss";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { MapOptions, latLng } from "leaflet";

export default function Map() {
	const searchParams = useSearchParams();
	const lat = searchParams.get("lat") || 48.3;
	const lng = searchParams.get("lng") || 31.1;

	const options: MapOptions = {
		center: latLng(Number(lat), Number(lng)),
		zoom: 5,
	};

	return (
		<div className={styles.mapContainer}>
			<MapContainer
				className={styles.map}
				center={options.center}
				zoom={options.zoom}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
				/>
				<ChangeCenter position={[Number(lat), Number(lng)]} />
			</MapContainer>
		</div>
	);
}

export function ChangeCenter({ position }: { position: [number, number] }) {
	const map = useMap();

	map.setView(position);
	return null;
}