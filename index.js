// 日本語 (Japanese) interface language for Scriba.
//
// This plugin contributes a complete interface translation. It registers one language
// through the public plugin API; nothing in Scriba's core has to know about Japanese.
//
// Notes for anyone adapting this into another language plugin:
//   - The id must be a BCP-47 tag ("ja-JP"), because settings and the HTML lang attribute
//     use it verbatim.
//   - Keys follow the core dictionary. Any key you omit falls back to English at
//     runtime, so a partial translation is usable — it just leaves gaps.
//   - The native application menu is translated by the main process, which only knows
//     the languages compiled into the app. A plugin language therefore shows an English
//     menu. This is a known limitation of the current API.

var MESSAGES = {
  // ── common ──────────────────────────────────────────────────────────────
  'common.close': '閉じる',
  'common.cancel': 'キャンセル',
  'common.ok': 'OK',
  'common.create': '作成',
  'common.rename': '名前を変更',
  'common.delete': '削除',
  'common.remove': '削除',
  'common.open': '開く',
  'common.enable': '有効にする',
  'common.disable': '無効にする',
  'common.done': '完了',
  'common.loading': '読み込み中…',

  // ── app ─────────────────────────────────────────────────────────────────
  'app.saved': '保存しました',
  'app.exportedHtml': 'HTML を書き出しました',
  'app.exportedPdf': 'PDF を書き出しました',
  'app.exportedWord': 'Word を書き出しました',
  'app.exportedText': 'プレーンテキストを書き出しました',
  'app.exportedImage': '画像を書き出しました',
  'app.exportedLatex': 'LaTeX を書き出しました',
  'app.exportedEpub': 'EPUB を書き出しました',
  'app.folderExported': '{count} 個のファイルを書き出しました（{size}）',
  'app.folderSkippedLarge': 'サイズが大きすぎるため {count} 個のファイルをスキップしました',
  'app.noFolderToExport': '先にフォルダーを開いてください',
  'app.linksUpdated': '{count} 件の参照を更新しました',
  'app.printed': 'プリンターに送信しました',
  'app.recentCleared': '最近開いた項目を消去しました',

  // ── find ────────────────────────────────────────────────────────────────
  'find.placeholder': '検索',
  'find.replacePlaceholder': '置換後の文字列',
  'find.matchCount': '{count} 件一致',
  'find.caseSensitive': '大文字と小文字を区別',
  'find.wholeWord': '単語単位で検索',
  'find.regexp': '正規表現を使用',
  'find.previous': '前へ',
  'find.next': '次へ',
  'find.toggleReplace': '置換を表示',
  'find.replace': '置換',
  'find.replaceAll': 'すべて置換',

  'app.confirmClose': '「{name}」を変更を保存せずに閉じますか？',
  'app.dropHint': 'Markdown ファイルをドロップして開く',
  'app.themeSwitched': 'テーマ：{name}',
  'app.languageSwitched': '言語：{name}',
  'app.settingsReset': '設定を初期値に戻しました',
  'app.sourceOn': 'ソースコードモードに切り替えました',
  'app.sourceOff': 'ライブプレビューに切り替えました',

  // ── title bar ───────────────────────────────────────────────────────────
  'titlebar.palette': 'コマンドパレット (Ctrl+P)',
  'titlebar.openFolder': 'フォルダーを開く (Ctrl+Shift+O)',
  'titlebar.toggleSidebar': 'サイドバーの切り替え (Ctrl+\\)',
  'titlebar.plugins': 'プラグインマネージャー',
  'titlebar.settings': '設定 (Ctrl+,)',

  // ── themes ──────────────────────────────────────────────────────────────
  'theme.violetNight': 'ヴァイオレットナイト（既定）',
  'theme.light': 'ライト',
  'theme.dark': 'ダーク',
  'theme.solarizedLight': 'Solarized ライト',
  'theme.solarizedDark': 'Solarized ダーク',
  'theme.nord': 'Nord',

  // ── sidebar / search ────────────────────────────────────────────────────
  'sidebar.files': 'ファイル',
  'sidebar.search': '検索',
  'search.placeholder': 'フォルダー全体を検索…',
  'search.hint': 'キーワードを入力すると、ワークスペース内のすべての文書を検索します。',
  'search.noResults': '一致する内容はありません。',
  'search.searching': '検索中…',
  'search.summary': '{files} ファイル、{matches} 件一致',
  'sidebar.outline': 'アウトライン',
  'sidebar.plugins': 'パネル',
  'sidebar.newFile': '新規ファイル',
  'sidebar.newFolder': '新規フォルダー',
  'sidebar.refresh': '更新',
  'sidebar.openFolder': 'フォルダーを開く',
  'sidebar.noFolder': 'フォルダーが開かれていません。',
  'sidebar.searchPlaceholder': '名前でファイルを絞り込む…',
  'sidebar.noMatches': '一致するファイルはありません。',
  'sidebar.emptyFolder': 'このフォルダーは空です。',
  'sidebar.noHeadings': 'この文書に見出しはありません。',
  'sidebar.reveal': 'エクスプローラーで表示',
  'sidebar.confirmDelete': '「{name}」を削除しますか？ごみ箱に移動されます。',
  'sidebar.folderName': 'フォルダー名',
  'sidebar.fileName': 'ファイル名',

  // ── tabs ────────────────────────────────────────────────────────────────
  'tabs.close': '閉じる',
  'tabs.newFile': '新規ファイル (Ctrl+N)',

  // ── status bar ──────────────────────────────────────────────────────────
  'status.cursor': '{line} 行、{col} 列',
  'status.stats': '{words} 語 · {chars} 文字',
  'status.wordCountHint': 'この文書の語数と文字数',
  'status.toggleSource': 'ソースコードモードの切り替え (Ctrl+/)',
  'status.sourceMode': 'ソース',
  'status.previewMode': 'プレビュー',

  // ── welcome ─────────────────────────────────────────────────────────────
  'welcome.tagline': 'プラグイン駆動の Markdown エディター',
  'welcome.newFile': '新規ファイル',
  'welcome.openFile': 'ファイルを開く',
  'welcome.openFolder': 'フォルダーを開く',
  'welcome.paletteHint': 'コマンドパレット',
  'welcome.saveHint': '保存',
  'welcome.focusHint': '集中モード',

  // ── command palette ─────────────────────────────────────────────────────
  'palette.placeholder': 'コマンドを入力…',
  'palette.empty': '一致するコマンドはありません',

  // ── settings ────────────────────────────────────────────────────────────
  'settings.title': '設定',
  'settings.appearance': '外観',
  'settings.editor': 'エディター',
  'settings.shortcutsSection': 'ショートカット',

  // ── shortcuts ───────────────────────────────────────────────────────────
  'shortcut.hintTitle': 'カスタムショートカット',
  'shortcut.hintDesc':
    'キー欄をクリックして新しい組み合わせを押してください。Esc で取り消します。',
  'shortcut.clickToChange': 'クリックして新しいショートカットを押す',
  'shortcut.pressKeys': 'キーを押してください…',
  'shortcut.unbound': '未設定',
  'shortcut.resetOne': '既定値に戻す',
  'shortcut.resetAll': 'すべて戻す',
  'shortcut.displaced': 'その組み合わせは「{name}」から削除されました',
  'shortcut.group.format': 'インライン書式',
  'shortcut.group.paragraph': '段落',
  'shortcut.group.insert': '挿入',
  'shortcut.group.view': '表示',
  'shortcut.group.file': 'ファイル',
  'shortcut.bold': '太字',
  'shortcut.italic': '斜体',
  'shortcut.underline': '下線',
  'shortcut.strike': '取り消し線',
  'shortcut.highlight': 'ハイライト',
  'shortcut.inlineCode': 'インラインコード',
  'shortcut.link': 'リンク',
  'shortcut.clearFormat': '書式を解除',
  'shortcut.heading1': '見出し 1',
  'shortcut.heading2': '見出し 2',
  'shortcut.heading3': '見出し 3',
  'shortcut.heading4': '見出し 4',
  'shortcut.heading5': '見出し 5',
  'shortcut.heading6': '見出し 6',
  'shortcut.paragraph': '段落',
  'shortcut.promoteHeading': '見出しレベルを上げる',
  'shortcut.demoteHeading': '見出しレベルを下げる',
  'shortcut.quote': '引用',
  'shortcut.orderedList': '番号付きリスト',
  'shortcut.bulletList': '箇条書き',
  'shortcut.taskList': 'タスクリスト',
  'shortcut.indent': 'インデントを増やす',
  'shortcut.outdent': 'インデントを減らす',
  'shortcut.insertTable': '表を挿入',
  'shortcut.insertCodeBlock': 'コードブロックを挿入',
  'shortcut.insertMath': '数式ブロックを挿入',
  'shortcut.insertImage': '画像を挿入',
  'shortcut.insertFootnote': '脚注を挿入',
  'shortcut.insertHr': '水平線を挿入',
  'shortcut.find': '検索',
  'shortcut.replace': '検索と置換',
  'shortcut.palette': 'コマンドパレット',
  'shortcut.sourceMode': 'ソースモードの切り替え',
  'shortcut.sidebar': 'サイドバーの切り替え',
  'shortcut.settings': '設定を開く',
  'shortcut.focusMode': '集中モード',
  'shortcut.typewriter': 'タイプライターモード',
  'shortcut.save': '保存',
  'shortcut.saveAs': '名前を付けて保存',
  'shortcut.newFile': '新規ファイル',
  'shortcut.openFile': 'ファイルを開く',
  'shortcut.openFolder': 'フォルダーを開く',

  'settings.workspace': 'ワークスペース',
  'settings.about': 'このアプリについて',
  'settings.language': '言語',
  'settings.languageDesc': 'アプリのインターフェースで使用する言語。',
  'settings.theme': 'テーマ',
  'settings.themeDesc': 'エディターと UI 全体で使用する配色テーマ。',
  'settings.editorFont': 'エディターのフォント',
  'settings.editorFontDesc': '文書本文に使用する書体。',
  'settings.fontSerif': 'セリフ',
  'settings.fontSans': 'サンセリフ',
  'settings.fontMono': '等幅',
  'settings.fontSize': '本文の文字サイズ',
  'settings.fontSizeDesc': '文書本文の文字サイズを調整します。インターフェースには影響しません。',
  'settings.uiScale': 'インターフェースの拡大率',
  'settings.uiScaleDesc':
    'サイドバー、メニュー、ダイアログの文字サイズを調整します。本文には影響しません。高解像度ディスプレイで便利です。',
  'settings.uiScaleReset': '既定値に戻す',
  'settings.lineNumbers': '行番号',
  'settings.lineNumbersDesc': '左側の余白に行番号を表示します。',
  'settings.sourceMode': 'ソースコードモード',
  'settings.sourceModeDesc': 'ライブプレビューを使わずに生の Markdown を表示します。',
  'settings.wordWrap': '折り返し',
  'settings.wordWrapDesc': '長い行をエディター幅に合わせて折り返します。',
  'settings.autoPair': '自動補完',
  'settings.autoPairDesc': '入力時に括弧や引用符などを自動で閉じます。',
  'settings.spellcheck': 'スペルチェック',
  'settings.spellcheckDesc': '綴りの誤りと思われる箇所に下線を引きます（再起動後に有効）。',
  'settings.typewriter': 'タイプライターモード',
  'settings.typewriterDesc': '現在の行を常に垂直方向の中央に保ちます。',
  'settings.focus': '集中モード',
  'settings.focusDesc': '現在の行以外を暗く表示します。',
  'settings.restoreFolder': '最後のフォルダーを復元',
  'settings.restoreFolderDesc': 'Scriba の起動時に前回のワークスペースを再度開きます。',
  'settings.autoSave': '自動保存',
  'settings.autoSaveDesc':
    '変更されたファイルを短い遅延の後に自動保存します。一度も保存していないファイルは「名前を付けて保存」が必要です。',
  'settings.aboutDesc': 'Electron と CodeMirror で作られたプラグイン駆動の Markdown エディター。',
  'settings.dataFolders': 'データフォルダー',
  'settings.userData': 'ユーザーデータ',
  'settings.pluginsDir': 'プラグイン',
  'settings.themesDir': 'テーマ',
  'settings.openPluginsFolder': 'プラグインフォルダーを開く',
  'settings.openThemesFolder': 'テーマフォルダーを開く',
  'settings.openExportTemplates': '書き出しテンプレートフォルダーを開く',
  'settings.exportTemplate': '書き出しスタイルテンプレート',
  'settings.exportTemplateDesc':
    'CSS ファイルを書き出しテンプレートフォルダーに入れると、HTML・PDF・Word の書き出しに適用されます。',
  'settings.reset': '既定値に戻す',

  // ── marketplace ─────────────────────────────────────────────────────────
  'marketplace.searchPlaceholder': 'プラグインを検索（GitHub の scriba-plugin）…',
  'marketplace.searching': '検索中…',
  'marketplace.noGithubResults':
    '一致するプラグインはありません。リポジトリに scriba-plugin トピックを追加するとここに表示されます。',
  'marketplace.resultCount': '{total} 件中 {shown} 件を表示',
  'marketplace.tokenPlaceholder': 'GitHub トークン（任意）',
  'marketplace.tokenHint':
    '未認証の GitHub 検索は 1 分あたり 10 回までです。読み取り専用トークンを設定すると 30 回に増えます。トークンはこのマシンにのみ保存されます。',
  'marketplace.noTokenHint':
    'GitHub トークンが未設定のため、検索回数が制限されています。⚙ をクリックして追加してください。',
  'marketplace.saveToken': 'トークンを保存',
  'marketplace.tokenSaved': 'トークンを保存しました',
  'marketplace.badNaming': '命名が規約外',
  'marketplace.invalidPlugin': '有効なプラグインではありません',
  'marketplace.title': 'プラグインマーケットプレイス',
  'marketplace.browse': '探す',
  'marketplace.installed': 'インストール済み',
  'marketplace.refresh': '更新',
  'marketplace.loading': 'プラグイン一覧を取得中…',
  'marketplace.empty': 'マーケットプレイスに利用可能なプラグインがありません。',
  'marketplace.error': 'マーケットプレイスを読み込めませんでした：{message}',
  'marketplace.install': 'インストール',
  'marketplace.installing': 'インストール中…',
  'marketplace.installedBadge': 'インストール済み',
  'marketplace.updatable': '更新可能',
  'marketplace.incompatible': 'v{version} 以降が必要',
  'marketplace.installedToast': '{name} をインストールしました',
  'marketplace.source': 'プラグインの取得元',
  'marketplace.sourceHint':
    '空欄にすると組み込みのインデックスを使用します。独自の index.json URL を入力することもできます。',
  'marketplace.by': '作者：{author}',
  'marketplace.noDescription': '説明なし',

  // ── plugin manager ──────────────────────────────────────────────────────
  'plugins.title': 'プラグインマネージャー',
  'plugins.empty':
    'プラグインがインストールされていません。プラグインフォルダーにプラグインを置くか、「フォルダーからインストール」をクリックしてください。',
  'plugins.incompatibleBadge': 'v{version} 以降が必要',
  'plugins.incompatibleHint':
    'このプラグインは Scriba v{required} 以降が必要です。現在のバージョンには必要な API がない可能性があります。',
  'plugins.builtin': '組み込み',
  'plugins.disabled': '無効',
  'plugins.removeConfirm': '「{name}」をアンインストールしますか？',
  'plugins.themes': 'プラグインのテーマ',
  'plugins.openPluginsFolder': 'プラグインフォルダーを開く',
  'plugins.openThemesFolder': 'テーマフォルダーを開く',
  'plugins.reload': '再読み込み',
  'plugins.installFolder': 'フォルダーからインストール',
  'plugins.reloaded': 'プラグインを再読み込みしました',
  'plugins.installed': 'プラグイン「{id}」をインストールしました',
  'plugins.removed': 'プラグイン「{id}」を削除しました',
  'plugins.failed': 'プラグイン「{name}」の読み込みに失敗しました：{message}',
  'plugins.needActivate': 'プラグインは activate(api) 関数をエクスポートする必要があります',

  // ── commands ────────────────────────────────────────────────────────────
  'command.new': '新規ファイル',
  'command.openFile': 'ファイルを開く…',
  'command.openFolder': 'フォルダーを開く…',
  'command.save': '保存',
  'command.saveAs': '名前を付けて保存…',
  'command.exportHtml': 'HTML として書き出す…',
  'command.exportPdf': 'PDF として書き出す…',
  'command.exportWord': 'Word として書き出す…',
  'command.find': '文書内を検索',
  'command.replace': '文書内を置換',
  'command.toggleSidebar': 'サイドバーの切り替え',
  'command.outline': 'アウトラインを表示',
  'command.focus': '集中モードの切り替え',
  'command.typewriter': 'タイプライターモードの切り替え',
  'command.sourceMode': 'ソースコードモードの切り替え',
  'command.theme': 'テーマの切り替え',
  'command.language': '言語の切り替え',
  'command.settings': '設定を開く',
  'command.plugins': 'プラグインマネージャーを開く',
  'command.reloadPlugins': 'プラグインを再読み込み',
  'command.bold': '書式：太字',
  'command.italic': '書式：斜体',
  'command.underline': '書式：下線',
  'command.strike': '書式：取り消し線',
  'command.highlight': '書式：ハイライト',
  'command.superscript': '書式：上付き文字',
  'command.subscript': '書式：下付き文字',
  'command.code': '書式：インラインコード',
  'command.link': '挿入：リンク',
  'command.image': '挿入：画像',
  'command.table': '挿入：表',
  'command.math': '挿入：数式ブロック',
  'command.mermaid': '挿入：Mermaid 図',

  // ── insert templates ────────────────────────────────────────────────────
  'insert.imageTemplate': '![代替テキスト](path/to/image.png)',
  'insert.tableTemplate': '\n| 列 1 | 列 2 |\n| --- | --- |\n| セル | セル |\n',

  // ── table tools ─────────────────────────────────────────────────────────
  'table.tools': '表の操作',
  'table.addRow': '行を追加',
  'table.addColumn': '列を追加',
  'table.resizeColumn': 'ドラッグで幅を変更、ダブルクリックでリセット',
  'table.insertRowAbove': '上に行を挿入',
  'table.insertRowBelow': '下に行を挿入',
  'table.deleteRow': '行を削除',
  'table.insertColumnLeft': '左に列を挿入',
  'table.insertColumnRight': '右に列を挿入',
  'table.deleteColumn': '列を削除',
  'table.alignLeft': '左揃え',
  'table.alignCenter': '中央揃え',
  'table.alignRight': '右揃え',
  'table.alignDefault': '既定の配置',

  // ── table of contents ───────────────────────────────────────────────────
  'toc.title': '目次',
  'toc.empty': '見出しがまだありません',
  'toc.untitled': '無題の見出し',

  // ── editor widgets ──────────────────────────────────────────────────────
  'widget.renderingDiagram': '図を描画中…',
  'widget.mermaidError': 'Mermaid エラー：{message}',
  'widget.image': '[画像：{name}]'
}

// Strings for this plugin's own UI. Registered separately so they follow the active
// language like the core interface does.
var PLUGIN_MESSAGES = {
  'ja-JP': {
    'japanese.command': '日本語に切り替える',
    'japanese.switched': '日本語に切り替えました',
    'japanese.active': '日本語'
  },
  'en-US': {
    'japanese.command': 'Switch to Japanese',
    'japanese.switched': 'Switched to Japanese',
    'japanese.active': 'Japanese'
  },
  'zh-CN': {
    'japanese.command': '切换到日语',
    'japanese.switched': '已切换到日语',
    'japanese.active': '日语'
  }
}

module.exports.activate = function activate(scriba) {
  // Contribute the language. After this the settings dropdown lists 日本語.
  scriba.i18n.registerLanguage({
    id: 'ja-JP',
    name: '日本語',
    translations: MESSAGES
  })

  // Translate this plugin's own strings in every language the app may be running in.
  var ids = Object.keys(PLUGIN_MESSAGES)
  for (var i = 0; i < ids.length; i += 1) {
    scriba.i18n.registerTranslations(ids[i], PLUGIN_MESSAGES[ids[i]])
  }

  // A command so the language is reachable from the palette as well as from settings.
  scriba.commands.register({
    id: 'japanese.switch',
    name: 'Switch to Japanese',
    nameKey: 'japanese.command',
    run: function () {
      // No-op when already active, so the confirm toast is not misleading.
      if (scriba.i18n.getLanguage() !== 'ja-JP') {
        scriba.i18n.setLanguage('ja-JP')
      }
      scriba.ui.showToast(scriba.i18n.t('japanese.switched'), 'success')
    }
  })

  scriba.log('Japanese language pack ready')
}

// Optional. The runtime stops the command registration itself, so there is nothing to
// undo here beyond telling the user the language is gone; the core falls back to English
// automatically when a plugin language disappears.
module.exports.deactivate = function deactivate() {}
