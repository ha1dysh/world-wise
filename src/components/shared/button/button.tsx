import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	btnType: string;
};

export default function Button({ children, btnType }: Props) {
	return (
		<button className={`${styles.btn} ${styles[btnType]}`}>
			{children}
		</button>
	);
}
