import './top.css';
import Header from "./components/layouts/header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>SexualityTalk</h1>
        <p className="catchphrase">恋も友情も、あなたのペースで</p>
        <Link href="/login" className="cta-btn">
          今すぐ始める
        </Link>
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>安全な環境</h3>
            <p>プライバシーと安全性を最優先に考えた、信頼できるプラットフォーム</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌈</div>
            <h3>多様性の尊重</h3>
            <p>あらゆるセクシュアリティとジェンダーアイデンティティを歓迎</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤝</div>
            <h3>コミュニティ形成</h3>
            <p>恋愛だけでなく、友情や支援のネットワークづくりもサポート</p>
          </div>
        </div>
      </main>
    </>
  );
}