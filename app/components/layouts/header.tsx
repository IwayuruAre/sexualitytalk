import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.container} ${styles.nav}`}>
                <div className={styles.logo}>SexualityTalk</div>
                <Link href="/login" className={styles.login__btn}>
                    ログイン
                </Link>
            </nav>
        </header>
    );
}