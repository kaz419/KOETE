# KOETE プロジェクト — Claude 作業ルール

## 必須: 作業前の Git Pull

KOETE関連の作業を開始する際は、**必ず最初に以下を実行**すること：

```bash
cd /Users/kaz/KOETE && git pull origin main
```

Mikeも同じリポジトリで作業しているため、pull を忘れると競合が発生する。

## Git ワークフロー

1. `git pull origin main` — 最新取得（必須・最初に）
2. README.md & docs/ を確認 — 変更がないかチェック
3. 作業実行
4. `git add . && git commit -m "Update: [説明]" && git push origin main`

## ファイル配置ルール

- 顧客向け資料: `docs/product/`
- 代理店向け資料: `docs/agency/`
- FAQ: `docs/faq/`
- 内部メモ: `docs/internal/`
- Webサイト: ルート直下（`index.html` 等）

## コミットメッセージ規約

- `Add:` 新規追加
- `Update:` 更新
- `Fix:` 修正
- `Docs:` ドキュメント整備

## スライド資料の作成ルール

- **Google Slides で作成する**（PowerPointは使わない）
- 作成フロー:
  1. python-pptx でPPTXを生成（デザインの自由度が高いため）
  2. `pptx_to_gslides.py` で Google Slides に自動変換
  3. 変換後のGoogle SlidesのURLを共有
- 変換スクリプト: `/tmp/pptx_to_gslides.py`
- OAuth認証情報: `/Users/kaz/KOETE/.credentials/`（.gitignoreで除外済み）
- デザイントンマナ: Webサイト準拠（NAVY #0F172A / BLUE #2563EB / ORANGE #F97316 / Noto Sans JP）

## 競合防止

- 可能なら新規ファイルで作成（例: `qa_v2_claude.md`）
- 既存ファイルを大幅編集する場合は事前に確認

## 関連パス

- リポジトリ: `/Users/kaz/KOETE/`
- Webサイト（Firebase デプロイ元）: `/Users/kaz/KOETE-website/`
- 営業資料: Google Drive `共有ドライブ/01_VanNess/01_KOETE/営業資料/`
- 本番サイト: https://koete.ai

## Google Slides リンク

- KOETE 営業資料 v3: https://docs.google.com/presentation/d/1wem_ZIhnwXZFD75hqOAf3gqKImlIDufs3k4x0oS7iT8/edit
- 代理店向け ご提案資料: https://docs.google.com/presentation/d/1S0JEl5JWPhXdOEwHkoN_u8xd08Wyb0DaMOfhtLmX7c4/edit
- 代理店向け 勉強用資料: https://docs.google.com/presentation/d/1SNRBAn7ZQIfgYUnE_7aoqI4iTVx1rCbsiqSf4n9IplI/edit
