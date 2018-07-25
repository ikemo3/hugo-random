# hugo-random

[Hugo][]で、ランダムボタンを作るためのテーマコンポーネントです。

## 前提条件

[Theme Components][]を使用するため、[Hugo][] 0.42以上が必要です。

## テンプレートへの組み込み方法

また、config.tomlに以下のような定義が必要です[^1]。
既に定義がある場合は`JSON`を追加してください。

```toml
[outputs]
home = ["HTML", "RSS", "JSON"]
```

テンプレートに以下の記述を追加してください。

```
{{- partialCached "hugo-random" . }}
```

最後に、以下のようにリンクやボタンで`random_jump()`を呼び出してください。
(まだ開発中なので後で変わる予定です)

```html
<a href="#" onclick="random_jump();">Random</a>
```

## ライセンス

MITライセンスです。

[Hugo]: https://gohugo.io/
[Theme Components]: https://gohugo.io/themes/theme-components/
[^1]: [Custom Output Formats | Hugo](https://gohugo.io/templates/output-formats/#default-output-formats)
