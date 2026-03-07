# KOETE - 外国人雇用現場向け勤務管理アプリ

**多国籍チームの報・連・相を一元管理するAI翻訳搭載チャットツール**

VanNess株式会社  
https://koete.ai

---

## 📁 リポジトリ構成

```
KOETE/
├── README.md              # このファイル（全体概要）
├── docs/                  # ドキュメント
│   ├── product/           # 製品資料（顧客向け）
│   ├── agency/            # 代理店向け資料
│   ├── faq/               # よくある質問
│   └── internal/          # 内部メモ・仕様書
├── website/               # 公開Webサイト
│   ├── index.html         # トップページ
│   ├── faq.html           # FAQ
│   ├── company.html       # 会社概要
│   └── ...                # その他ページ
└── images/                # 画像素材

```

---

## 🎯 プロジェクト概要

### サービス概要

KOETEは、外国人労働者を雇用する企業向けの業務用チャットツールです。

**主な機能:**
- **AI翻訳**: スタッフは母国語で入力、管理者は日本語で即座に確認
- **日報・勤怠管理**: 構造化テンプレートで簡単報告
- **トラブル報告**: リアルタイム通知
- **管理者ダッシュボード**: データ集計・エクスポート

**対応言語:**
- 日本語・英語・ベトナム語・タイ語・ミャンマー語・中国語・インドネシア語など

---

## 💰 料金プラン

| プラン | ユーザー数 | 月額料金 |
|--------|----------|---------|
| MINI | 〜20名 | 40,000円 |
| SMALL | 21〜50名 | 70,000円 |
| STANDARD | 51〜100名 | 100,000円 |
| ENTERPRISE | 101名〜 | 個別見積 |

- **全プラン14日間無料トライアル付き**
- **先着30社限定**: 初年度50%OFFキャンペーン実施中

---

## 📚 ドキュメント

### 顧客向け資料

- [製品資料](docs/product/) - サービス概要・機能詳細
- [FAQ](docs/faq/) - よくある質問
- [Webサイト](https://koete.ai) - 公式サイト

### 代理店向け資料

- [代理店Q&A](docs/agency/README.md) - 販売パートナー向けガイド
- 提案資料テンプレート（準備中）
- トークスクリプト（準備中）

### 内部資料

- [仕様書](docs/internal/) - 技術仕様・要件定義
- 開発ロードマップ（準備中）

---

## 🛠️ 開発者向け情報

### Webサイト更新

```bash
# リポジトリをclone
git clone https://github.com/kaz419/KOETE.git
cd KOETE

# ファイルを編集
nano index.html

# コミット & プッシュ
git add .
git commit -m "Update: ..."
git push origin main

# デプロイ（Firebase Hosting）
firebase deploy --only hosting
```

---

## 📝 作業ルール（Mike & Claude共有）

### Git運用

1. **Mike側**: 資料作成 → commit & push
2. **Claude側**: pull → 追加/修正 → commit & push
3. **相互同期**: 定期的にpullして最新を取得

### ファイル配置ルール

- **顧客向け資料**: `docs/product/`
- **代理店向け資料**: `docs/agency/`
- **FAQ**: `docs/faq/`
- **内部メモ**: `docs/internal/`
- **Webサイト**: ルート直下（`index.html`等）

### コミットメッセージ

```
Add: 新規追加
Update: 更新
Fix: 修正
Docs: ドキュメント整備
```

---

## 🔗 リンク

- **公式サイト**: https://koete.ai
- **GitHub**: https://github.com/kaz419/KOETE
- **お問い合わせ**: info@vanness.co.jp

---

## 📌 TODO（Claude側で追加してほしい情報）

以下のファイルをClaude側で作成・追加してください:

### 優先度: 高

- [ ] `docs/product/overview.md` - 製品概要（顧客向け）
- [ ] `docs/product/features.md` - 機能詳細
- [ ] `docs/product/pricing.md` - 料金・契約条件
- [ ] `docs/faq/customer_faq.md` - 顧客向けFAQ（最新版）
- [ ] `docs/agency/talk_script.md` - 営業トークスクリプト

### 優先度: 中

- [ ] `docs/product/case_studies.md` - 導入事例・想定ケース
- [ ] `docs/product/competitive_analysis.md` - 競合比較表
- [ ] `docs/agency/proposal_template.md` - 提案書テンプレート
- [ ] `docs/internal/roadmap.md` - 開発ロードマップ

### 優先度: 低

- [ ] `docs/internal/api_spec.md` - API仕様（将来用）
- [ ] `docs/internal/design_system.md` - デザインガイドライン

---

**最終更新**: 2026-03-06  
**管理者**: VanNess株式会社 / Mike (AI秘書) & Claude
