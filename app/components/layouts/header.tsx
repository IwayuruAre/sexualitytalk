import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="container">
                <div className="logo">SexualityTalk</div>
                <Link href="/login" className="login-btn">
                    ログイン
                </Link>
            </nav>
        </header>
    );
}