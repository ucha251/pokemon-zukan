// ジョウト地方のジムマップ
window.JOHTO_MAP_DATA = window.JOHTO_MAP_DATA || {
  title: "ジョウト地方",
  spots: []
};

window.JOHTO_MAP_DATA.spots.push(
  // ==========================================
  // 【ポケモンジム】の詳細データ
  // ==========================================
  {
    id: "kikyou_gym",
    name: "キキョウジム",
    category: "ポケモンジム",
    desc: "ひこうタイプの使い手ハヤトが待つ、ジョウト地方最初のポケモンジム。",

    // 1. シナリオ攻略チャート
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. <a href="#" onclick="jumpToMapSpot('johto', 'kikyou_city', 'キキョウシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">キキョウシティ</a>に到着したら挑戦できる。ジム内のトレーナーを倒しながら奥へ進む。<br>
2. 最奥にいる<strong>ジムリーダー ハヤト</strong>に話しかけてバトルに挑む。<br>
3. ハヤトを倒すと<strong>ウイングバッジ</strong>と<strong>わざマシン31「どろぼう」</strong>（金・銀・クリスタル版）をもらえる。<br>
4. ジムを出ると<strong>ウツギ博士</strong>から電話がかかってくるので、ポケモンセンターへ行ってふしぎなタマゴを受け取ろう。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ウイングバッジ</strong></td><td>ジムリーダー ハヤトを倒すともらえる</td></tr>
          <tr><td><strong>わざマシン31「どろぼう」</strong></td><td>ジムリーダー ハヤトを倒すともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 7. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>とりつかい ショウタ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('オニスズメ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニスズメ</a> (Lv.9 / ノーマル・ひこう)
            </td>
            <td>216円</td>
          </tr>
          <tr>
            <td><strong>とりつかい ツバサ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.7 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.7 / ノーマル・ひこう)
            </td>
            <td>168円</td>
          </tr>
          <tr>
            <td><strong>ジムリーダー ハヤト</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.7 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ピジョン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ピジョン</a> (Lv.9 / ノーマル・ひこう)
            </td>
            <td>900円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント
    subEventHtml: `
      <p><strong>◉ ウツギ博士からの電話イベント:</strong><br>
      ハヤトに勝利してジムの外に出ると、ウツギ博士から電話がかかってくる。キキョウシティのポケモンセンターでタマゴを受け取るイベントへつながるよ。</p>
    `,

    // 9. 攻略メモ
    memoHtml: `
      <p><strong>▶ でんき・いわ・こおりタイプが有利:</strong><br>
      ハヤトはひこうタイプ中心（特にLv.9のピジョン）を使ってくるよ。でんきタイプやいわタイプ、こおりタイプの技が効果バツグン！</p>
      <p><strong>▶ ピジョンの「どろかけ」に注意:</strong><br>
      ピジョンの「どろかけ」を受けると命中率が下がってしまうため、早めに押し切るか、回復アイテムを準備しておくと安心だよ。</p>
    `
  },

  {
    id: "hiwada_gym",
    name: "ヒワダジム",
    category: "ポケモンジム",
    desc: "むしタイプの使い手ツクシが待つ、回転する糸の足場を進むポケモンジム。",

    // 1. シナリオ攻略チャート
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. <a href="#" onclick="jumpToMapSpot('johto', 'hiwada_town', 'ヒワダタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヒワダタウン</a>に到着し、<a href="#" onclick="jumpToMapSpot('johto', 'slowpoke_well', 'ヤドンのいど'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヤドンのいど</a>でのロケット団イベントを解決すると挑戦できるようになる。<br>
2. ジム内の回転する糸の足場を渡りながらトレーナーを倒し、奥にいる<strong>ジムリーダー ツクシ</strong>のもとへ進む。<br>
3. ツクシを倒すと<strong>インセクトバッジ</strong>と<strong>わざマシン49「れんぞくぎり」</strong>（金・銀・クリスタル版）をもらう。<br>
4. ジムを出ると<strong>ライバル</strong>とのバトルイベントが発生する。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー（画像準拠 ＋ 図鑑リンク対応）
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ふたごちゃん クミとルミ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('イトマル'); return false;" style="color:#2b6cb0; text-decoration:underline;">イトマル</a> (Lv.10 / むし・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a> (Lv.10 / むし・ひこう)
            </td>
            <td>200円</td>
          </tr>
          <tr>
            <td><strong>むしとり ノリユキ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('キャタピー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キャタピー</a> (Lv.12 / むし)<br>
              <a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a> (Lv.12 / むし・どく)
            </td>
            <td>192円</td>
          </tr>
          <tr>
            <td><strong>むしとり サダオ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a> (Lv.7 / むし・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('スピアー'); return false;" style="color:#2b6cb0; text-decoration:underline;">スピアー</a> (Lv.12 / むし・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コクーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コクーン</a> (Lv.9 / むし・どく)
            </td>
            <td>192円</td>
          </tr>
          <tr>
            <td><strong>むしとり トモミチ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('パラス'); return false;" style="color:#2b6cb0; text-decoration:underline;">パラス</a> (Lv.13 / むし・くさ)
            </td>
            <td>208円</td>
          </tr>
          <tr>
            <td><strong>ジムリーダー ツクシ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('トランセル'); return false;" style="color:#2b6cb0; text-decoration:underline;">トランセル</a> (Lv.14 / むし)<br>
              <a href="#" onclick="jumpToPokemonByName('コクーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コクーン</a> (Lv.14 / むし・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ストライク'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ストライク</a> (Lv.16 / むし・ひこう)
            </td>
            <td>1600円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>インセクトバッジ</strong></td><td>ジムリーダー ツクシを倒すともらえる</td></tr>
          <tr><td><strong>わざマシン49「れんぞくぎり」</strong></td><td>ジムリーダー ツクシを倒すともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント
    subEventHtml: `
      <p><strong>◉ ジムを出たあとのライバル戦:</strong><br>
      ツクシに勝ってヒワダジムから出ると、ライバルが現れてバトルになる。最初のポケモンでチコリータを選んでいた場合は、ライバルのゴース（Lv.14）に注意しよう。</p>
    `,

    // 9. 攻略メモ
    memoHtml: `
      <p><strong>▶ ほのお・ひこう・いわタイプが有利:</strong><br>
      むしタイプ中心のジムなので、ほのおタイプやひこうタイプ、いわタイプの技があると一気に押し切れるよ。<br>
      ストライクはむし・ひこう複合なので、いわタイプの技だと4倍弱点（金・銀・クリスタル版）を狙えて特に強力！</p>
      <p><strong>▶ ストライクの「れんぞくぎり」に注意:</strong><br>
      連続で命中するほど威力が上がるため、長引かせず早めに倒すか、HPに余裕を持って戦おう。</p>
    `
  },

{
    id: "kogane_gym",
    name: "コガネジム",
    category: "ポケモンジム",
    desc: "ノーマルタイプの使い手アカネが待つ、ピッピ人形の迷路を抜けて進むポケモンジム。",

    // 1. シナリオ攻略チャート
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. ジム内のピッピ人形の通路を通り抜けながらトレーナーを倒し、奥にいる<strong>ジムリーダー アカネ</strong>に話しかけてバトルに挑む。<br>
2. アカネに勝ったあと、すぐにはバッジをもらえないので、ジム内の女の子に話しかけてからもう一度アカネと話す。<br>
3. <strong>レギュラーバッジ</strong>と<strong>わざマシン45「メロメロ」</strong>をもらう。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー（画像準拠 ＋ 図鑑リンク対応）
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>おとなのおねえさん アケミ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('オタチ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オタチ</a> (Lv.9 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('オタチ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オタチ</a> (Lv.13 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('オタチ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オタチ</a> (Lv.17 / ノーマル)
            </td>
            <td>1496円</td>
          </tr>
          <tr>
            <td><strong>おとなのおねえさん ナオコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ニャース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニャース</a> (Lv.16 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ニャース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニャース</a> (Lv.16 / ノーマル)
            </td>
            <td>1408円</td>
          </tr>
          <tr>
            <td><strong>ミニスカート ミカ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ブルー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ブルー</a> (Lv.18 / ノーマル)
            </td>
            <td>432円</td>
          </tr>
          <tr>
            <td><strong>ミニスカート アスカ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('プリン'); return false;" style="color:#2b6cb0; text-decoration:underline;">プリン</a> (Lv.15 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('プリン'); return false;" style="color:#2b6cb0; text-decoration:underline;">プリン</a> (Lv.15 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('プリン'); return false;" style="color:#2b6cb0; text-decoration:underline;">プリン</a> (Lv.15 / ノーマル)
            </td>
            <td>360円</td>
          </tr>
          <tr>
            <td><strong>ジムリーダー アカネ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ピッピ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ピッピ</a> (Lv.18 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ミルタンク'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ミルタンク</a> (Lv.20 / ノーマル)
            </td>
            <td>2000円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>レギュラーバッジ</strong></td><td>ジムリーダー アカネを倒した後、ジム内の女の子と話してから再度アカネに話しかけるともらえる</td></tr>
          <tr><td><strong>わざマシン45「メロメロ」</strong></td><td>レギュラーバッジと同時にもらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント
    subEventHtml: `
      <p><strong>◉ アカネ戦後のバッジ受け取りイベント:</strong><br>
      アカネに勝った直後は泣き出してバッジをもらえないことがある。ジム内の女の子に話しかけてからもう一度アカネに話しかけると、レギュラーバッジとわざマシン45を受け取れるよ。</p>
      <p><strong>◉ 「メロメロ」の入手:</strong><br>
      相手と性別が異なるときにメロメロ状態にできる「メロメロ」は、手持ちの技構成の幅を広げたいときにも役立つよ。</p>
    `,

    // 9. 攻略メモ
    memoHtml: `
      <p><strong>▶ かくとうタイプが有利（ミルタンク対策）:</strong><br>
      ノーマルタイプ中心のジムなので、かくとうタイプの技が効果バツグン！<br>
      コガネシティのデパート屋上で交換できるワンリキー（または「いわくだき」など）を用意しておくとミルタンク戦がかなり楽になるよ。</p>
      <p><strong>▶ ミルタンクの「ころがる」「ミルクのみ」に注意:</strong><br>
      連続で命中すると威力が上がる「ころがる」と、HPを回復する「ミルクのみ」がとても厄介。<br>
      まひ・こんらん・メロメロや、攻撃・防御を下げる技、高火力の技で一気に押し切るのがおすすめ！</p>
    `
  },

{
    id: "enju_gym",
    name: "エンジュジム",
    category: "ポケモンジム",
    desc: "ゴーストタイプの使い手マツバが待つ、見えない床と炎の灯りを頼りに進むポケモンジム。",

    // 1. シナリオ攻略チャート
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. <a href="#" onclick="jumpToMapSpot('johto', 'enju_city', 'エンジュシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">エンジュシティ</a>に到着し、<a href="#" onclick="jumpToMapSpot('johto', 'burned_tower', 'やけたとう'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">やけたとう</a>でのイベント（スイクン・ライコウ・エンテイ解放とミナキ戦）を終えると挑戦できるようになる。<br>
2. ジム内の見えない床に気をつけながらトレーナーを倒し、スタート地点に戻される（真っ暗になる）ギミックを突破して奥へ進む。<br>
3. 最奥にいる<strong>ジムリーダー マツバ</strong>に話しかけてバトルに挑む。<br>
4. マツバを倒すと<strong>ファントムバッジ</strong>と<strong>わざマシン30「シャドーボール」</strong>（金・銀・クリスタル版）をもらう。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー（画像準拠 ＋ 図鑑リンク対応）
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ぼうず ジェイ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.16 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.16 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.16 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.16 / ゴースト・どく)
            </td>
            <td>512円</td>
          </tr>
          <tr>
            <td><strong>イタコ タエコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.16 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.20 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.20 / ゴースト・どく)
            </td>
            <td>800円</td>
          </tr>
          <tr>
            <td><strong>ぼうず ウンショウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.22 / ゴースト・どく)
            </td>
            <td>704円</td>
          </tr>
          <tr>
            <td><strong>イタコ ヨネコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.18 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.20 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.20 / ゴースト・どく)
            </td>
            <td>800円</td>
          </tr>
          <tr>
            <td><strong>ジムリーダー マツバ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.21 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.21 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.23 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ゲンガー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ゲンガー</a> (Lv.25 / ゴースト・どく)
            </td>
            <td>2300円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ファントムバッジ</strong></td><td>ジムリーダー マツバを倒すともらえる</td></tr>
          <tr><td><strong>わざマシン30「シャドーボール」</strong></td><td>ジムリーダー マツバを倒すともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント
    subEventHtml: `
      <p><strong>◉ 「シャドーボール」の入手:</strong><br>
      ゴーストタイプやエスパータイプに対して非常に強力で、物理・特殊の仕様（金・銀・クリスタル版ではシャドーボールは物理技）も含めて使い勝手の良いわざマシンだよ。</p>
    `,

    // 9. 攻略メモ
    memoHtml: `
      <p><strong>▶ 見えない床とスタート地点戻りに注意:</strong><br>
      足元が見えないルートや、間違えると入り口に戻されるギミックがあるよ。少しずつ慎重に進もう！</p>
      <p><strong>▶ ゲンガーの「さいみんじゅつ」「ゆめくい」「のろい」に警戒:</strong><br>
      マツバのエースであるゲンガーは火力が高く、ねむり状態からの「ゆめくい」や「のろい」が厄介。<br>
      ねむけざまし・なんでもなおしを用意したり、先手を取れるポケモンやノーマル・あくタイプの技（ゴースト技はノーマルに無効）をうまく活用しよう！</p>
    `
  },

{
    id: "tanba_gym",
    name: "タンバジム",
    category: "ポケモンジム",
    desc: "かくとうタイプの使い手シジマが待つ、大きな岩を動かしながら進むポケモンジム。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. <a href="#" onclick="jumpToMapSpot('johto', 'tanba_city', 'タンバシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">タンバシティ</a>に到着し、タンバ薬局で<strong>ひでんのくすり</strong>をもらったあと（または到着後）に挑戦できる。<br>
2. ジム内の大きな岩を「かいりき」で押しながら進み、トレーナーを倒していく。<br>
3. 奥にいる<strong>ジムリーダー シジマ</strong>に話しかけてバトルに挑む。<br>
4. シジマを倒すと<strong>ショックバッジ</strong>と<strong>わざマシン01「ばくれつパンチ」</strong>をもらう。<br>
5. ジムを出たあと、近くにいるシジマの奥さんに話しかけると<strong>ひでんマシン02「そらをとぶ」</strong>をもらえる。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー（画像準拠 ＋ 図鑑リンク対応）
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>からておう キヨマサ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('サワムラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">サワムラー</a> (Lv.27 / かくとう)
            </td>
            <td>648円</td>
          </tr>
          <tr>
            <td><strong>からておう フミヒト</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('エビワラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">エビワラー</a> (Lv.27 / かくとう)
            </td>
            <td>648円</td>
          </tr>
          <tr>
            <td><strong>からておう テッカン</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a> (Lv.25 / かくとう)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴーリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴーリキー</a> (Lv.25 / かくとう)
            </td>
            <td>600円</td>
          </tr>
          <tr>
            <td><strong>からておう モリカズ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マンキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">マンキー</a> (Lv.23 / かくとう)<br>
              <a href="#" onclick="jumpToPokemonByName('マンキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">マンキー</a> (Lv.23 / かくとう)<br>
              <a href="#" onclick="jumpToPokemonByName('オコリザル'); return false;" style="color:#2b6cb0; text-decoration:underline;">オコリザル</a> (Lv.25 / かくとう)
            </td>
            <td>600円</td>
          </tr>
          <tr>
            <td><strong>ジムリーダー シジマ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('オコリザル'); return false;" style="color:#2b6cb0; text-decoration:underline;">オコリザル</a> (Lv.27 / かくとう)<br>
              <a href="#" onclick="jumpToPokemonByName('ニョロボン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ニョロボン</a> (Lv.30 / みず・かくとう)
            </td>
            <td>3000円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ショックバッジ</strong></td><td>ジムリーダー シジマを倒すともらえる</td></tr>
          <tr><td><strong>わざマシン01「ばくれつパンチ」</strong></td><td>ジムリーダー シジマを倒すともらえる</td></tr>
          <tr><td><strong>ひでんマシン02「そらをとぶ」</strong></td><td>シジマ撃破後、ジムの外にいるシジマの奥さんに話しかけるともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 「そらをとぶ」の入手:</strong><br>
      シジマに勝ったあと、ジムの外で待っているシジマの奥さんから<strong>ひでんマシン02「そらをとぶ」</strong>をもらえる。<br>
      一度行ったことのある町へ瞬時に移動できるようになるため、アサギシティへの帰還や今後の探索が一気に快適になるよ！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ひこう・エスパータイプが有利:</strong><br>
      かくとうタイプ中心のジムなので、ひこうタイプやエスパータイプの技があると戦いやすいよ。<br>
      ただしニョロボンはみずタイプも持っているため、でんきタイプやくさタイプの技も有効だよ！</p>
      <p><strong>▶ ニョロボンの「さいみんじゅつ」「ばくれつパンチ」に注意:</strong><br>
      ねむり状態やこんらん状態になると行動が止まりやすい。<br>
      回復アイテムを多めに用意し、早めに高火力技で押し切ろう！</p>
    `
  },

{
    id: "asagi_gym",
    name: "アサギジム",
    category: "ポケモンジム",
    desc: "はがねタイプの使い手ミカンが待つ、シンプルながらも高い防御力を誇るポケモンジム。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. <a href="#" onclick="jumpToMapSpot('johto', 'asagi_city', 'アサギシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギシティ</a>に到着した直後はミカンが灯台にいるため戦えない。<br>
2. <a href="#" onclick="jumpToMapSpot('johto', 'asagi_lighthouse', 'アサギのとうだい'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギのとうだい</a>でミカンと話したあと、海を渡って<strong>タンバシティ</strong>のタンバ薬局で<strong>ひでんのくすり</strong>をもらう。<br>
3. アサギシティに戻って灯台のミカンに<strong>ひでんのくすり</strong>を渡すと、ジムリーダーのミカンがジムへ戻ってくる。<br>
4. ジム内の奥にいる<strong>ジムリーダー ミカン</strong>に話しかけてバトルに挑む。<br>
5. ミカンを倒すと<strong>スチールバッジ</strong>と<strong>わざマシン23「アイアンテール」</strong>をもらえる。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ジムリーダー ミカン</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.30 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.30 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('ハガネール'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ハガネール</a> (Lv.35 / はがね・じめん)
            </td>
            <td>3500円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>スチールバッジ</strong></td><td>ジムリーダー ミカンを倒すともらえる</td></tr>
          <tr><td><strong>わざマシン23「アイアンテール」</strong></td><td>ジムリーダー ミカンを倒すともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ ジム内に一般トレーナーは不在:</strong><br>
      アサギジムには仕掛けや道中のトレーナーがいないため、ミカンがジムに戻っていればすぐに挑戦できる。<br>
      事前にポケモンセンターで回復し、万全の状態で挑もう！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ じめん・ほのお・かくとうタイプが有利:</strong><br>
      コイル（でんき・はがね）にはじめんタイプの技が4倍弱点になり、ほのおタイプやかくとうタイプも有効だよ。<br>
      ハガネール（はがね・じめん）は「ぼうぎょ」が非常に高いため、みず・ほのお・くさ・こおりなど、特殊技で攻めるのがおすすめ！</p>
      <p><strong>▶ コイルの「でんじは」「ちょうおんぱ」に注意:</strong><br>
      まひやこんらんで行動を止められるとテンポを崩されやすい。<br>
      じめんタイプで電気技を無効化しつつ、高火力技で一気に押し切ろう！</p>
    `
  },

  {
    id: "chouji_gym",
    name: "チョウジジム",
    category: "ポケモンジム",
    desc: "こおりタイプの使い手ヤナギが待つ、氷の床を滑ってルートを切り開くポケモンジム。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. <a href="#" onclick="jumpToMapSpot('johto', 'chouji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>に到着した直後はジム前を男がふさいでいて入れない。<br>
2. いかりのみずうみでのイベント後、チョウジタウンのおみやげやから<a href="#" onclick="jumpToMapSpot('johto', 'rocket_hideout', 'ロケット団アジト'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ロケット団アジト</a>へ突入し、事件を解決するとジムに入れるようになる。<br>
3. ジム内の氷の床を滑って進みながらトレーナーを倒し、最奥にいる<strong>ジムリーダー ヤナギ</strong>に話しかけてバトルに挑む。<br>
4. ヤナギを倒すと<strong>アイスバッジ</strong>と<strong>わざマシン16「こごえるかぜ」</strong>をもらう。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー（画像準拠 ＋ 図鑑リンク対応）
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ボーダー フミヤ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('パウワウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">パウワウ</a> (Lv.24 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('ジュゴン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ジュゴン</a> (Lv.25 / みず・こおり)<br>
              <a href="#" onclick="jumpToPokemonByName('パウワウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">パウワウ</a> (Lv.24 / みず)
            </td>
            <td>1728円</td>
          </tr>
          <tr>
            <td><strong>ボーダー キンジ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('シェルダー'); return false;" style="color:#2b6cb0; text-decoration:underline;">シェルダー</a> (Lv.24 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('パルシェン'); return false;" style="color:#2b6cb0; text-decoration:underline;">パルシェン</a> (Lv.25 / みず・こおり)<br>
              <a href="#" onclick="jumpToPokemonByName('シェルダー'); return false;" style="color:#2b6cb0; text-decoration:underline;">シェルダー</a> (Lv.24 / みず)
            </td>
            <td>1728円</td>
          </tr>
          <tr>
            <td><strong>スキーヤー サチコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ルージュラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ルージュラ</a> (Lv.28 / こおり・エスパー)
            </td>
            <td>2016円</td>
          </tr>
          <tr>
            <td><strong>ボーダー ノリヒロ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ウリムー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウリムー</a> (Lv.26 / こおり・じめん)<br>
              <a href="#" onclick="jumpToPokemonByName('ウリムー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウリムー</a> (Lv.26 / こおり・じめん)
            </td>
            <td>1872円</td>
          </tr>
          <tr>
            <td><strong>スキーヤー アユミ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ジュゴン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ジュゴン</a> (Lv.28 / みず・こおり)
            </td>
            <td>2016円</td>
          </tr>
          <tr>
            <td><strong>ジムリーダー ヤナギ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('パウワウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">パウワウ</a> (Lv.27 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('ジュゴン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ジュゴン</a> (Lv.29 / みず・こおり)<br>
              <a href="#" onclick="jumpToPokemonByName('イノムー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">イノムー</a> (Lv.31 / こおり・じめん)
            </td>
            <td>3100円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>アイスバッジ</strong></td><td>ジムリーダー ヤナギを倒すともらえる</td></tr>
          <tr><td><strong>わざマシン16「こごえるかぜ」</strong></td><td>ジムリーダー ヤナギを倒すともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 「こごえるかぜ」の入手:</strong><br>
      ヤナギに勝つともらえるわざマシン16「こごえるかぜ」は、相手の「すばやさ」を1段階下げられる便利な技。<br>
      先手を取って攻めたいときや、サポート技として活用できるよ！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ほのお・くさ・でんき・かくとうタイプが有利:</strong><br>
      ヤナギの手持ちはこおり・みず・じめんの複合タイプが中心。<br>
      ほのおタイプやでんきタイプ、くさタイプ、かくとうタイプの技をうまく使い分けよう！</p>
      <p><strong>▶ イノムーの「ふぶき」「じしん」に注意:</strong><br>
      イノムーはこおり・じめんタイプなので、ほのおタイプやでんきタイプだけでは弱点を突けない。<br>
      みず・くさ・かくとう・はがねタイプの技を用意しておくと安全に突破できるよ！</p>
    `
  },

{
    id: "fusube_gym",
    name: "フスベジム",
    category: "ポケモンジム",
    desc: "ドラゴンタイプの使い手イブキが待つ、溶岩に岩を落として道を作るジョウト最後のポケモンジム。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【挑戦できるタイミング】</strong></td>
            <td>
1. <a href="#" onclick="jumpToMapSpot('johto', 'fusube_city', 'フスベシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">フスベシティ</a>に到着したら挑戦できる（事前に「かいりき」を覚えたポケモンを用意しておこう）。<br>
2. ジム内の岩を「かいりき」で押して溶岩のくぼみに落とし、足場を作りながらトレーナーを倒して奥へ進む。<br>
3. 最奥にいる<strong>ジムリーダー イブキ</strong>に話しかけてバトルに挑む。<br>
4. イブキを倒したあと、ジム奥から<a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>の祠へ向かい、イベントをクリアすると<strong>ライジングバッジ</strong>と<strong>わざマシン24「りゅうのいぶき」</strong>をもらえる。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー（【1F】【2F】構成・画像準拠）
    trainerTable: `
      <p><strong>【1F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>エリートトレーナー マサル</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a> (Lv.34 / ドラゴン)<br>
              <a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a> (Lv.34 / ドラゴン)<br>
              <a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a> (Lv.34 / ドラゴン)
            </td>
            <td>1632円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー テツロウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a> (Lv.37 / ドラゴン)
            </td>
            <td>1776円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー マリコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a> (Lv.34 / ドラゴン)<br>
              <a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a> (Lv.36 / ドラゴン)
            </td>
            <td>1728円</td>
          </tr>
          <tr>
            <td><strong>ジムリーダー イブキ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a> (Lv.37 / ドラゴン)<br>
              <a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a> (Lv.37 / ドラゴン)<br>
              <a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a> (Lv.37 / ドラゴン)<br>
              <a href="#" onclick="jumpToPokemonByName('キングドラ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">キングドラ</a> (Lv.40 / みず・ドラゴン)
            </td>
            <td>4000円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【2F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>エリートトレーナー トモエ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('シードラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">シードラ</a> (Lv.37 / みず)
            </td>
            <td>1776円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー トモヒコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('タッツー'); return false;" style="color:#2b6cb0; text-decoration:underline;">タッツー</a> (Lv.34 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('シードラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">シードラ</a> (Lv.36 / みず)
            </td>
            <td>1728円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ライジングバッジ</strong></td><td>イブキ撃破後、<a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>の祠でのイベントクリア時にもらえる</td></tr>
          <tr><td><strong>わざマシン24「りゅうのいぶき」</strong></td><td>ライジングバッジと同時にもらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 撃破後は「りゅうのあな」の祠へ:</strong><br>
      イブキに勝った時点ではまだバッジを受け取れない。<br>
      ジム奥から行ける「りゅうのあな」の祠でイベントを進めると、ライジングバッジとわざマシン24を手に入れられるよ！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ こおり・ドラゴンタイプが有利:</strong><br>
      ハクリューにはこおりタイプやドラゴンタイプの技が効果バツグン。<br>
      「れいとうビーム」や「りゅうのいぶき」などを覚えたポケモンがいるとかなり戦いやすいよ！</p>
      <p><strong>▶ キングドラは「みず・ドラゴン」で弱点が少ない:</strong><br>
      キングドラは弱点がドラゴンタイプしかなく、炎・水・鋼タイプの技も半減してくる。<br>
      でんじは・あくび・状態異常や、みず・こおり・かくとうなどの等倍技、ドラゴン技を組み合わせて着実にHPを削ろう！</p>
    `
  }


);