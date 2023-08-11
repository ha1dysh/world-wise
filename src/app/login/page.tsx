"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Header from "@/components/layout/header/header";
import Button from "@/components/shared/button/button";

export default function Login() {
	const [email, setEmail] = useState("example@gmail.com");
	const [password, setPassword] = useState("example");

	return (
		<div className={styles.container}>
			<Header />
			<form className={styles.form}>
				<label className={styles.row} htmlFor='email'>
					Email address
					<input
						type='email'
						id='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>

				<label className={styles.row} htmlFor='password'>
					Password
					<input
						type='password'
						id='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>

				<Button btnType='primary'>Login</Button>
			</form>
		</div>
	);
}
