const JOHTO_ROUTE_SPOTS = [
  {
    id: "route_29",
    name: "29番道路",
    category: "道路・水道",
    desc: "ワカバタウンとヨシノシティをつなぐジョウト地方最初の道路。草むらで野生のポケモンと出会ったり、トレーナーとバトルしたりしながら冒険の第一歩を踏み出そう。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 東に進み<a href="#" onclick="jumpToMapSpot('johto', 'yoshino_city', 'ヨシノシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヨシノシティ</a>へ向かう。<br>
            </td>
          </tr>
          <tr>
            <td><strong>【ウツギ博士にふしぎなタマゴを渡した後】</strong></td>
            <td>
              <span class="step-badge">1</span> 道路に入ると途中にいる男性からポケモンの捕まえ方を教えてもらうことができる。<br>
              <span class="step-badge">2</span> ヨシノシティを通って30番道路まで行く。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>△ △ ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>◎ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>161</td>
            <td><a href="#" onclick="jumpToPokemonByName('オタチ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オタチ</a></td>
            <td>◎ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>187</td>
            <td><a href="#" onclick="jumpToPokemonByName('ハネッコ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハネッコ</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>キズぐすり</strong></td><td>道路北東端で拾う</td></tr>
          <tr><td><strong>きのみ</strong></td><td>道路北西にあるきのみの木から入手</td></tr>
          <tr><td><strong>ピンクのリボン</strong></td><td>[火曜日・ジムリーダー ハヤト撃破後] 道路中央付近にいる曜日兄弟のヒコからもらう</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 冒険の基礎を学べるNPC:</strong><br>
      29番道路にはポケモンの捕獲方法や操作方法を教えてくれる人がいるよ。<br>
      ボールの使い方や回復のタイミングを確認しておくと安心だよ！</p>
      <p><strong>◉ 曜日兄弟:</strong><br>
      キキョウシティジムでジムリーダー ハヤトを倒した後、火曜日に29番道路の中央付近に行くと曜日兄弟のヒコが出現する。<br>
      ヒコに話しかけると<strong>ピンクのリボン</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 時間帯で変わる出現ポケモン:</strong><br>
      朝・昼にはポッポやオタチ、朝昼にはハネッコ、夜にはコラッタやホーホーが出現するよ。<br>
      序盤の戦力や図鑑埋めに合わせて時間帯を変えて探してみよう！</p>
    `
  },

{
    id: "route_30",
    name: "30番道路",
    category: "道路・水道",
    desc: "ヨシノシティの北に延びる道路。序盤のトレーナーとのバトルが始まり、ポケモンじいさんの家へとつながっている。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 北に進み、道路北東の民家に行く。<br>
              <span class="step-badge">2</span> 民家に入るとイベント。<br>ポケモンじいさんから<strong>ふしぎなタマゴ</strong>をもらう。<br>オーキド博士から<strong>ポケモンずかん</strong>をもらう。<br>
              <span class="step-badge">3</span> ポケモンじいさんからポケモンを回復してもらったら家の外に出ると、ウツギ博士から電話がかかってくる。<br>
              <span class="step-badge">4</span> 来た道を通って<a href="#" onclick="jumpToMapSpot('johto', 'yoshino_city', 'ヨシノシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヨシノシティ</a>まで戻る。<br>
            </td>
          </tr>
          <tr>
            <td><strong>【ウツギ博士にふしぎなタマゴを渡した後】</strong></td>
            <td>
              <span class="step-badge">1</span> 途中の分かれ道を北西に進み31番道路へ。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>010</td>
            <td><a href="#" onclick="jumpToPokemonByName('キャタピー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キャタピー</a></td>
            <td>◎ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>○ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>013</td>
            <td><a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>187</td>
            <td><a href="#" onclick="jumpToPokemonByName('ハネッコ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハネッコ</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>165</td>
            <td><a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a></td>
            <td>○ × ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>167</td>
            <td><a href="#" onclick="jumpToPokemonByName('イトマル'); return false;" style="color:#2b6cb0; text-decoration:underline;">イトマル</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="5">060</td>
            <td rowspan="5"><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>061</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="3">129</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr><td><strong>たんパンこぞう ゴロウ</strong></td><td>コラッタ Lv.4（ノーマル）</td><td>64円</td></tr>
          <tr><td><strong>たんパンこぞう アキラ</strong></td><td>ポッポ Lv.2（ノーマル・ひこう） / コラッタ Lv.4（ノーマル）</td><td>64円</td></tr>
          <tr><td><strong>むしとり ミキヤス</strong></td><td>キャタピー Lv.3（むし） / キャタピー Lv.3（むし）</td><td>48円</td></tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>きのみ</strong></td><td>道路南の民家にいる男性からもらえる</td></tr>
          <tr><td><strong>きのみ</strong></td><td>道路南の民家の左横にあるきのみの木から入手</td></tr>
          <tr><td><strong>どくけし</strong></td><td>道路南の民家の裏辺りで拾う</td></tr>
          <tr><td><strong>どくけしのみ</strong></td><td>ポケモン爺さんの家の左にある木から入手</td></tr>
          <tr><td><strong>ポケモンずかん</strong></td><td>道路北東の民家にいるオーキド博士からもらう</td></tr>
          <tr><td><strong>ふしぎなタマゴ</strong></td><td>道路北東の民家にいるポケモンじいさんからもらう</td></tr>
          <tr><td><strong>マックスアップ</strong></td><td>道路西側にいるたんパンのゴロウとバトルした後、ポケギアにゴロウの電話番号を登録しておくと、ゴロウから電話がかかってきて再戦できることがある。再々戦後（3度目のバトル後）、ゴロウからマックスアップをもらえる</td></tr>
          <tr><td><strong>がくしゅうそうち</strong></td><td>[あかいウロコ入手後] 道路北東の民家にいるポケモンじいさんにあかいウロコを渡すともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ ポケモンじいさんの家:</strong><br>
      道路北側にあるポケモンじいさんの家では、序盤の重要イベントが発生し、オーキド博士から<strong>ポケモンずかん</strong>をもらえるよ。<br></p>
      <p><strong>◉ たんぱんこぞうのゴロウ:</strong><br>
      たんぱんこぞうのゴロウとバトル後、ポケギアに電話番号を登録できる。<br>
      ゴロウは月曜日の昼にこちらから電話すると再戦できる。<br>
      また3度目のバトル後に<strong>マックスアップ</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 序盤のむしタイプを仲間にしよう:</strong><br>
      朝はレディバ、夜はイトマル、朝・昼はキャタピーやビードルが出現するよ。<br>
      進化が早いため、最初のジム戦に向けた戦力づくりにおすすめだよ！</p>
      <p><strong>◉ 道を塞ぐ少年:</strong><br>
      道路西の段差は初め少年たちがポケモンバトルをしていて通れない。<br>
      ウツギ博士にふしぎなタマゴを渡した後に通れるようになる。<br></p>
    `
  },

  {
    id: "route_31",
    name: "31番道路",
    category: "道路・水道",
    desc: "30番道路の北から西へ延び、キキョウシティへとつながる道路。北側にはくらやみのほらあなの入口がある。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> ★道路途中にある洞窟入口からくらやみのほらあなへ行けるが、ポケモンの技「フラッシュ」がないと探索が難しい上、現時点ではほとんどのエリアを探索できない。<br>
              <span class="step-badge">2</span> 西に進み、キキョウシティへ向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>069</td>
            <td><a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>○ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>010</td>
            <td><a href="#" onclick="jumpToPokemonByName('キャタピー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キャタピー</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>013</td>
            <td><a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>187</td>
            <td><a href="#" onclick="jumpToPokemonByName('ハネッコ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハネッコ</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>165</td>
            <td><a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a></td>
            <td>○ × ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>167</td>
            <td><a href="#" onclick="jumpToPokemonByName('イトマル'); return false;" style="color:#2b6cb0; text-decoration:underline;">イトマル</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="2">092</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="4">060</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>061</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="3">129</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>むしとり コウイチ</strong></td>
            <td>キャタピー Lv.2（むし） / キャタピー Lv.2（むし） / キャタピー Lv.2（むし） / ビードル Lv.3（むし・どく）</td>
            <td>32円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>キズぐすり</strong></td><td>暗闇の洞穴の入口左で拾う</td></tr>
          <tr><td><strong>にがいきのみ</strong></td><td>道路北の池のすぐ南側にあるきのみの木から入手</td></tr>
          <tr><td><strong>モンスターボール</strong></td><td>道路北の池から南に進んだところで拾う</td></tr>
          <tr>
            <td><strong>きのみ / にがいきのみ / まひなおしのみ / どくけしのみ</strong></td>
            <td>道路南にいるむしとりのコウイチとバトルした後、ポケギアにコウイチの電話番号を登録しておくと、コウイチから電話がかかってきて「きのみ」「にがいきのみ」「まひなおしのみ」「どくけしのみ」の中からランダムでどれか1つをもらえることがある</td>
          </tr>
          <tr>
            <td><strong>わざマシン50「あくむ」</strong></td>
            <td>35番道路南ゲートにいる警備員から預かったメールを、31番道路の中央付近にいる男性に届けるともらえる</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ むしとりのコウイチ:</strong><br>
      31番道路の南にいる虫取りのコウイチとバトル後に話しかけると、ポケギアにコウイチの電話番号を登録してくれる。<br>
      その後、コウイチから電話がかかってきたときに会いに行くと、<strong>きのみ</strong>、<strong>にがいきのみ</strong>、<strong>まひなおしのみ</strong>、<strong>どくけしのみ</strong>のいずれかがもらえる。<br>
      またコウイチは火曜日の夜にこちらから電話すると再戦できるほか、しぜんこうえんで虫取り大会がある日に電話で教えてくれる。<br></p>
      <p><strong>◉ オニスズメの手紙:</strong><br>
      35番道路の南ゲートにいる警備員からメールを持ったオニスズメを預かったら、31番道路の池の手前にいる男性に渡してあげると<strong>わざマシン50「あくむ」</strong>がもらえる。<br>
      ちなみにオニスズメは男性に渡すと手持ちから抜けていなくなってしまうが、このオニスズメが欲しいときはメールを一旦預かり、他のいらないポケモンにメールを持たせてから男性に渡すことでオニスズメが手持ちから抜けない。<br>
      ちなみにこの後35番道路の南ゲートに戻ると、警備員からお礼に<strong>マックスアップ</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ マダツボミを捕まえておこう:</strong><br>
      31番道路の草むらにはマダツボミが一日中出現するよ。<br>
      キキョウシティの民家でイワークと交換してもらえるので、ぜひ1匹捕まえておこう！</p>
      <p><strong>◉ 母親から電話:</strong><br>
      ウツギ博士にふしぎなタマゴを届けた後、自宅で母親と会話していないと31番道路に入った直後に母親から電話があり、貯金するか聞かれる。<br></p>
    `
  },

  {
    id: "route_32",
    name: "32番道路",
    category: "道路・水道",
    desc: "キキョウシティの南から長く南北に延びるジョウト地方最長の道路。途中のポケモンセンターやユニオンのどうくつを経てヒワダタウンへとつながっている。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> ★32番道路に入ってすぐ左にあるゲートからアルフのいせきに行ける。<br>遺跡の地下でアンノーンを3匹捕まえると、遺跡内の研究所にいる研究員から<strong>アンノーンずかん</strong>をもらえる。<br>
              <span class="step-badge">2</span> 32番道路を南に進んでいく。<br>ポケモンセンター手前でイベント。<br>おいしいシッポを買うか聞かれるが実際に買うことはできない。<br>
              <span class="step-badge">3</span> ★途中のポケモンセンターにいる釣り人から<strong>ボロのつりざお</strong>をもらう。<br>
              <span class="step-badge">4</span> 道路南の洞窟入口からつながりのどうくつに行く。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>069</td>
            <td><a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>023</td>
            <td><a href="#" onclick="jumpToPokemonByName('アーボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>187</td>
            <td><a href="#" onclick="jumpToPokemonByName('ハネッコ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハネッコ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>194</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウパー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウパー</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>092</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="4">072</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('メノクラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">メノクラゲ</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>073</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドククラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドククラゲ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>195</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヌオー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヌオー</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="3">129</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="4">211</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('ハリーセン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハリーセン</a></td>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお・大量発生）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>たんパンこぞう シンゴ</strong></td>
            <td>コラッタ Lv.6（ノーマル） / ズバット Lv.8（どく・ひこう）</td>
            <td>128円</td>
          </tr>
          <tr>
            <td><strong>ピクニックガール カオリ</strong></td>
            <td>ニドラン♀ Lv.9（どく）</td>
            <td>180円</td>
          </tr>
          <tr>
            <td><strong>キャンプボーイ タカヒロ</strong></td>
            <td>ニドラン♂ Lv.9（どく）</td>
            <td>180円</td>
          </tr>
          <tr>
            <td><strong>つりびと タクロウ</strong></td>
            <td>ニョロモ Lv.8（みず） / ニョロモ Lv.8（みず）</td>
            <td>320円</td>
          </tr>
          <tr>
            <td><strong>つりびと ヒサシ</strong></td>
            <td>コイキング Lv.5（みず） / コイキング Lv.5（みず） / コイキング Lv.15（みず） / コイキング Lv.5（みず）</td>
            <td>200円</td>
          </tr>
          <tr>
            <td><strong>つりびと ヤスアキ</strong></td>
            <td>トサキント Lv.10（みず）</td>
            <td>400円</td>
          </tr>
          <tr>
            <td><strong>たんパンこぞう マサタカ</strong></td>
            <td>ウパー Lv.10（みず・じめん）</td>
            <td>160円</td>
          </tr>
          <tr>
            <td><strong>とりつかい ノブマサ</strong></td>
            <td>ポッポ Lv.6（ノーマル・ひこう） / ポッポ Lv.6（ノーマル・ひこう） / オニスズメ Lv.8（ノーマル・ひこう）</td>
            <td>192円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>きせきのタネ</strong></td><td>[ジムリーダー ハヤト撃破後] キキョウシティ側から道路に入ってすぐの場所にいる男性からもらえる</td></tr>
          <tr><td><strong>わざマシン05「ほえる」</strong></td><td>[要いあいぎり] 道路北の段差の上にいる男性からもらえる</td></tr>
          <tr><td><strong>むしよけスプレー</strong></td><td>道路中央北の草むらで拾う</td></tr>
          <tr><td><strong>スーパーボール</strong></td><td>道路中央南の草むらで拾う</td></tr>
          <tr><td><strong>ボロのつりざお</strong></td><td>道路南のポケモンセンターにいる釣り人からもらえる</td></tr>
          <tr><td><strong>どくバリ</strong></td><td>[金曜日・ジムリーダー ハヤト撃破後] 道路南のポケモンセンター後ろの森にいる曜日兄弟のカネコからもらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 曜日兄弟:</strong><br>
      キキョウシティジムでジムリーダー ハヤトを倒した後、金曜日に32番道路南のポケモンセンターの北に伸びる森の通路を進んだ先に曜日兄弟のカネコが出現する。<br>
      カネコに話しかけると<strong>どくバリ</strong>がもらえる。<br></p>
      <p><strong>◉ ピクニックガールのカオリ:</strong><br>
      ピクニックガールのカオリとバトル後に話しかけると、ポケギアに電話番号を登録できる。<br>
      カオリは木曜日の昼にこちらから電話すると再戦できる。<br></p>
      <p><strong>◉ つりびとのヤスアキ:</strong><br>
      道路途中の橋上の南の方に釣り人のヤスアキがいる。<br>
      バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      ヤスアキは32番道路でハリーセンが大量発生しているとき電話で教えてくれるほか、水曜日の朝にこちらから電話すると再戦できる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ メリープやウパーを仲間にしよう:</strong><br>
      32番道路ではメリープやウパーが出現するよ。<br>
      ヒワダジム（むしタイプ）やその先の攻略に向けて育てておくととても心強いよ！</p>
      <p><strong>◉ おいしいシッポ:</strong><br>
      ポケモンセンターの左にヤドンのおいしいシッポを100万円で販売している人がいる。<br>
      ポケモンクリスタル版では主人公のおこづかい上限は99万9999円なのでこのシッポを買うことはできない。<br></p>
      <p><strong>◉ 道を塞ぐ人:</strong><br>
      キキョウジムリーダーのハヤトを倒していないと、32番道路に入ってすぐにいる男性にジムに行けと言われ通してもらえない。<br></p>
    `
  },

  {
    id: "route_33",
    name: "33番道路",
    category: "道路・水道",
    desc: "つながりのどうくつを抜けた先にある短い道路。西へ進むとすぐヒワダタウンに到着する。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> つながりのどうくつを抜け、33番道路に出る。<br>
              <span class="step-badge">2</span> 西へ進んで<a href="#" onclick="jumpToMapSpot('johto', 'hiwada_town', 'ヒワダタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヒワダタウン</a>へ入る。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>021</td>
            <td><a href="#" onclick="jumpToPokemonByName('オニスズメ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニスズメ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>187</td>
            <td><a href="#" onclick="jumpToPokemonByName('ハネッコ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハネッコ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>023</td>
            <td><a href="#" onclick="jumpToPokemonByName('アーボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボ</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>やまおとこ ツトム</strong></td>
            <td>イシツブテ Lv.11（いわ・じめん） / ワンリキー Lv.11（かくとう）</td>
            <td>352円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>どくけしのみ</strong></td><td>きのみの木から入手</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ やまおとこのツトム:</strong><br>
      道路の左の方に山男のツトムがいる。<br>
      バトル後に話しかけるとポケギアにツトムの電話番号を登録できる。<br>
      ツトムはくらやみのほらあなでノコッチが大量発生したとき電話で教えてくれるほか、金曜日の夜にこちらから電話すると再戦できる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ あかぼんぐりを回収しよう:</strong><br>
      ヒワダタウン手前には<strong>あかぼんぐり</strong>の木があるよ。<br>
      ガンテツに渡すとレベルボールを作ってもらえるので、捕獲用に活用しよう！</p>
    `
  },

  {
    id: "route_34",
    name: "34番道路",
    category: "道路・水道",
    desc: "ウバメのもりの北からコガネシティへと南北に延びる道路。途中には育て屋があり、タマゴやポケモンの育成拠点として利用できる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> ウバメのもりの北から34番道路へ出る。<br>
              <span class="step-badge">2</span> 北へ進み、ゲートを抜けて<a href="#" onclick="jumpToMapSpot('johto', 'kogane_city', 'コガネシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">コガネシティ</a>へ向かう。<br>
            </td>
          </tr>
          <tr>
            <td><strong>【ラジオ塔占拠イベント時】</strong></td>
            <td>
              <span class="step-badge">1</span> 育て屋付近のイベントを進め、コガネシティのラジオ塔奪還へ向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>063</td>
            <td><a href="#" onclick="jumpToPokemonByName('ケーシィ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ケーシィ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>039</td>
            <td><a href="#" onclick="jumpToPokemonByName('プリン'); return false;" style="color:#2b6cb0; text-decoration:underline;">プリン</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>132</td>
            <td><a href="#" onclick="jumpToPokemonByName('メタモン'); return false;" style="color:#2b6cb0; text-decoration:underline;">メタモン</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>209</td>
            <td><a href="#" onclick="jumpToPokemonByName('ブルー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ブルー</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>096</td>
            <td><a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>072</td>
            <td><a href="#" onclick="jumpToPokemonByName('メノクラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">メノクラゲ</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>073</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドククラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドククラゲ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="2">129</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="3">098</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>099</td>
            <td><a href="#" onclick="jumpToPokemonByName('キングラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キングラー</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">222</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('サニーゴ'); return false;" style="color:#2b6cb0; text-decoration:underline;">サニーゴ</a></td>
            <td>○ ○ ×</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ×</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">120</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ヒトデマン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒトデマン</a></td>
            <td>× × ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>× × ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>たんパンこぞう コウタ</strong></td>
            <td>コラッタ Lv.7（ノーマル） / サンド Lv.10（じめん） / オニスズメ Lv.8（ノーマル・ひこう） / オニスズメ Lv.8（ノーマル・ひこう）</td>
            <td>128円</td>
          </tr>
          <tr>
            <td><strong>だいすきクラブ コウサク</strong></td>
            <td>ブルー Lv.13（ノーマル）</td>
            <td>1040円</td>
          </tr>
          <tr>
            <td><strong>ピクニックガール ミズホ</strong></td>
            <td>ハネッコ Lv.9（くさ・ひこう） / ハネッコ Lv.9（くさ・ひこう） / フシギダネ Lv.12（くさ・どく）</td>
            <td>240円</td>
          </tr>
          <tr>
            <td><strong>たんパンこぞう ショウヘイ</strong></td>
            <td>マンキー Lv.10（かくとう） / ディグダ Lv.12（じめん）</td>
            <td>192円</td>
          </tr>
          <tr>
            <td><strong>おまわりさん マモル</strong></td>
            <td>ガーディ Lv.17（ほのお）</td>
            <td>680円</td>
          </tr>
          <tr>
            <td><strong>キャンプボーイ ヨウイチ</strong></td>
            <td>コダック Lv.14（みず）</td>
            <td>280円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>リーフのいし</strong></td>
            <td>道路中央付近にいるピクニックガールのミズホとバトルした後、ポケギアにミズホの電話番号を登録しておくと、ミズホから電話がかかってきて「リーフのいし」をもらえることがある</td>
          </tr>
          <tr>
            <td><strong>きんのたま</strong></td>
            <td>[要なみのり] 道路西の柵に囲まれた場所で拾う</td>
          </tr>
          <tr>
            <td><strong>やわらかいすな</strong></td>
            <td>[要なみのり] 道路南にいるエリートトレーナー3人とバトルした後にもらえる</td>
          </tr>
          <tr>
            <td><strong>タマゴけん</strong></td>
            <td>[GB版限定] モバイルアダプタGBを使ってモバイルモードにした後、育て屋に話しかけるともらえる</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ ピクニックガールのミズホ:</strong><br>
      ピクニックガールのミズホは道路途中の草むらに囲まれたところにいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      ミズホは日曜日の昼にこちらから電話すると再戦でき、<strong>リーフのいし</strong>をくれることがある。<br></p>
      <p><strong>◉ キャンプボーイのヨウイチ:</strong><br>
      キャンプボーイのヨウイチはコガネシティの入口付近にいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      ヨウイチは土曜日の朝に電話すると再戦できる。<br>
      またコガネシティの百貨店でバーゲンが開催されると電話で教えてくれる。<br></p>
      <p><strong>◉ エリートトレーナー三姉妹:</strong><br>
      34番道路の西側の海を波乗りで南に進んでいき、南端で上陸するとエリートトレーナーの三姉妹がいてバトルとなる。<br>
      バトル後に<strong>やわらかいすな</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ブルーやメタモンを仲間にしよう:</strong><br>
      34番道路の草むらには朝・昼にブルー、時間帯問わず低確率でメタモンが出現するよ。<br>
      育て屋を活用してタマゴを産ませたいときにも便利なエリアだよ！</p>
      <p><strong>◉ ポケモン育て屋:</strong><br>
      34番道路の途中にある建物はポケモン育て屋。<br>
      手持ちのポケモンを2匹まで預けておけて、主人公が歩いた歩数に応じて預けたポケモンがレベルアップする。<br>
      また同じタマゴグループに属するポケモン♂♀2匹を預けておくと、ポケモンのタマゴができることがある。<br>
      タマゴを孵すとメスの方のポケモンと同じポケモンが生まれる（♀ポケモンが進化形の場合、タマゴから生まれるのは進化前のポケモンとなる）。<br></p>
      <p><strong>◉ 警官とバトル:</strong><br>
      34番道路にいるおまわりさんのマモルとは夜のみポケモンバトルになる。<br>
      昼間は話しかけてもバトルにならない。<br></p>
    `
  },

  {
    id: "route_35",
    name: "35番道路",
    category: "道路・水道",
    desc: "コガネシティの北からしぜんこうえんへと延びる道路。南側と北側にゲートがあり、周辺には草むらや木の実の木が広がっている。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> ★途中にあるゲートからしぜんこうえんへ行ける。<br>火/木/土曜日ならゲート受付で虫取り大会に参加できる。<br>
              <span class="step-badge">2</span> 36番道路へ向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>063</td>
            <td><a href="#" onclick="jumpToPokemonByName('ケーシィ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ケーシィ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>039</td>
            <td><a href="#" onclick="jumpToPokemonByName('プリン'); return false;" style="color:#2b6cb0; text-decoration:underline;">プリン</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>132</td>
            <td><a href="#" onclick="jumpToPokemonByName('メタモン'); return false;" style="color:#2b6cb0; text-decoration:underline;">メタモン</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>058</td>
            <td><a href="#" onclick="jumpToPokemonByName('ガーディ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ガーディ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>209</td>
            <td><a href="#" onclick="jumpToPokemonByName('ブルー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ブルー</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>096</td>
            <td><a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="2">193</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ヤンヤンマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤンヤンマ</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>草むら（大量発生）</td>
          </tr>
          <tr>
            <td>029</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニドラン♀'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニドラン♀</a></td>
            <td>○ ○ ○</td>
            <td>草むら（大量発生）</td>
          </tr>
          <tr>
            <td>032</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニドラン♂'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニドラン♂</a></td>
            <td>○ ○ ○</td>
            <td>草むら（大量発生）</td>
          </tr>
          <tr>
            <td rowspan="2">054</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('コダック'); return false;" style="color:#2b6cb0; text-decoration:underline;">コダック</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>055</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルダック'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルダック</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="3">129</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="3">060</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ピクニックガール カナミ</strong></td>
            <td>ロコン Lv.15（ほのお）</td>
            <td>300円</td>
          </tr>
          <tr>
            <td><strong>キャンプボーイ アキヒロ</strong></td>
            <td>サンド Lv.13（じめん） / マリル Lv.15（みず）</td>
            <td>300円</td>
          </tr>
          <tr>
            <td><strong>ピクニックガール イクエ</strong></td>
            <td>ピカチュウ Lv.16（でんき）</td>
            <td>320円</td>
          </tr>
          <tr>
            <td><strong>キャンプボーイ カズヤ</strong></td>
            <td>ディグダ Lv.10（じめん） / ディグダ Lv.14（じめん） / ズバット Lv.10（どく・ひこう）</td>
            <td>280円</td>
          </tr>
          <tr>
            <td><strong>ひふきやろう トシハル</strong></td>
            <td>ブーバー Lv.11（ほのお） / ブーバー Lv.13（ほのお）</td>
            <td>624円</td>
          </tr>
          <tr>
            <td><strong>ジプシージャグラー マイク</strong></td>
            <td>ビリリダマ Lv.2（でんき） / ビリリダマ Lv.6（でんき） / ビリリダマ Lv.10（でんき） / ビリリダマ Lv.14（でんき）</td>
            <td>560円</td>
          </tr>
          <tr>
            <td><strong>むしとり ヨウタ</strong></td>
            <td>コンパン Lv.15（むし・どく）</td>
            <td>240円</td>
          </tr>
          <tr>
            <td><strong>とりつかい ヨシキ</strong></td>
            <td>ポッポ Lv.12（ノーマル・ひこう） / ピジョン Lv.14（ノーマル・ひこう）</td>
            <td>336円</td>
          </tr>
          <tr>
            <td><strong>おまわりさん シンイチ</strong></td>
            <td>ガーディ Lv.14（ほのお） / ガーディ Lv.14（ほのお）</td>
            <td>560円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>マックスアップ</strong></td>
            <td>南ゲートにいる警備員の頼みを聞き、31番道路にいる友達にメールを持ったポケモンを届けた後、再び警備員に話しかけるとお礼としてもらえる</td>
          </tr>
          <tr>
            <td><strong>わざマシン04「ころがる」</strong></td>
            <td>道路東側の柵と木で囲まれた場所で拾う</td>
          </tr>
          <tr>
            <td><strong>ふしぎなきのみ</strong></td>
            <td>[要なみのり] 道路南西にあるきのみの木から入手</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ オニスズメの手紙:</strong><br>
      35番道路の南ゲートにいる警備員からメールを持ったオニスズメを預かったら、31番道路の池の手前にいる男性に渡してあげると<strong>わざマシン50「あくむ」</strong>がもらえる。<br>
      ちなみにオニスズメは男性に渡すと手持ちから抜けていなくなってしまうが、このオニスズメが欲しいときはメールを一旦預かり、他のいらないポケモンにメールを持たせてから男性に渡すことでオニスズメが手持ちから抜けない。<br>
      ちなみにこの後35番道路の南ゲートに行くと、お礼に警備員から<strong>マックスアップ</strong>がもらえる。<br></p>
      <p><strong>◉ ジプシージャグラーのマイク:</strong><br>
      35番道路の北ゲート手前にいるジプシージャグラーのマイクは、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      マイクとは再戦できないが、電話をかけてくることがある。<br></p>
      <p><strong>◉ 虫取りのヨウタ:</strong><br>
      35番道路北東の草むらの奥にいるむしとりのヨウタは、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      ヨウタは火曜日の朝に電話すると再戦できるほか、35番道路でヤンヤンマが大量発生したときに教えてくれる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ キリンリキやヤンヤンマを探索しよう:</strong><br>
      35番道路の草むらではキリンリキやヤンヤンマが出現するよ。<br>
      ジム戦や図鑑埋めに向けて気になるポケモンがいたら探してみよう！</p>
      <p><strong>◉ 警官とバトル:</strong><br>
      自然公園のゲート前にいるおまわりさんのシンイチは、こちらから話しかけると夜限定でポケモンバトルになる。<br></p>
      <p><strong>◉ 手紙の内容:</strong><br>
      南ゲートの警備員から31番道路にいる友達に宛てた手紙を読むと、暗闇の洞穴が別な道に通じていることが書かれている。<br></p>
    `
  },

  {
    id: "route_36",
    name: "36番道路",
    category: "道路・水道",
    desc: "しぜんこうえんの東からエンジュシティや35番道路へとつながる道路。途中にはウソッキーが道を塞いでいる場所があり、ゼニガメじょうろが必要になる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 道路途中の動く木の近くにいる少女（サキ）に話しかける。<br>
              <span class="step-badge">2</span> サキを追ってコガネシティのフラワーショップまで戻り、<strong>ゼニガメじょうろ</strong>をもらう。<br>
              <span class="step-badge">3</span> 36番道路へ戻り、動く木を調べてゼニガメじょうろで水をかける。<br>ウソッキー（Lv20）とバトル。<br>
              <span class="step-badge">4</span> ★ウソッキーがいた場所から右に少し進んだ所にいる男性から<strong>わざマシン08「いわくだき」</strong>をもらう。<br>
              <span class="step-badge">5</span> 道路を北西に進み37番道路へ。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>069</td>
            <td><a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>◎ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>058</td>
            <td><a href="#" onclick="jumpToPokemonByName('ガーディ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ガーディ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>165</td>
            <td><a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a></td>
            <td>○ × ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>092</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>167</td>
            <td><a href="#" onclick="jumpToPokemonByName('イトマル'); return false;" style="color:#2b6cb0; text-decoration:underline;">イトマル</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
      <h4 style="margin-top:14px; margin-bottom:6px; color:#2d3748;">入手ポケモン（特別なポケモン）</h4>
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:34%;">入手方法・入手場所</th>
            <th>初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>185</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウソッキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウソッキー</a></td>
            <td>36番道路で道を塞いでいる動く木に「ゼニガメじょうろ」で水をかけるとウソッキーとバトルになる。（1体限定）</td>
            <td>
              名前：任意<br>
              親：トレーナー名<br>
              ID：トレーナーID<br>
              レベル：20<br>
              性別：ランダム（♂or♀）<br>
              個体値：ランダム<br>
              持ち物：なし<br>
              技：いわおとし・ものまね・じたばた・けたぐり<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>サイキッカー シン</strong></td>
            <td>ケーシィ Lv.13（エスパー） / ケーシィ Lv.13（エスパー） / ユンゲラー Lv.15（エスパー）</td>
            <td>480円</td>
          </tr>
          <tr>
            <td><strong>じゅくがえり マナブ</strong></td>
            <td>モンジャラ Lv.16（くさ）</td>
            <td>512円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>こおったきのみ</strong></td><td>道路西にあるきのみの木から入手</td></tr>
          <tr>
            <td><strong>ほのおのいし</strong></td>
            <td>道路南西にいるじゅくがえりのマナブとバトルした後、ポケギアにマナブの電話番号を登録しておくと、マナブから電話がかかってきて「ほのおのいし」をもらえることがある</td>
          </tr>
          <tr><td><strong>わざマシン08「いわくだき」</strong></td><td>[ウソッキーとバトル後] 道路東にいる男性からもらう</td></tr>
          <tr><td><strong>かたいいし</strong></td><td>[木曜日] 道路東にいる曜日兄弟のモクオからもらう</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ ウソッキーとの遭遇:</strong><br>
      36番道路の道を塞いでいるウソッキーに<strong>ゼニガメじょうろ</strong>で水をかけると、Lv.20のウソッキーとバトルになるよ。<br>
      倒すこともできるけれど、ここでしか捕まえられないので捕獲を狙うのもおすすめだよ！</p>
      <p><strong>◉ 曜日兄弟:</strong><br>
      木曜日に36番道路の南ゲート付近に曜日兄弟のモクオが出現する。<br>
      モクオに話しかけると<strong>かたいいし</strong>がもらえる。<br></p>
      <p><strong>◉ 塾帰りのマナブ:</strong><br>
      36番道路の南にいるじゅくがえりのマナブは、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      マナブは水曜日の昼に電話すると再戦できるほか、<strong>ほのおのいし</strong>をくれることがある。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ロコンやガーディ、オドシシを探してみよう:</strong><br>
      36番道路の草むらではロコンやガーディ、低確率でオドシシが出現するよ。<br>
      パーティの戦力強化や図鑑登録に活用しよう！</p>
    `
  },

  {
    id: "route_37",
    name: "37番道路",
    category: "道路・水道",
    desc: "36番道路の北西からエンジュシティの南へと延びる短い道路。木の実の木が並んでいるほか、時間帯や条件によって珍しいポケモンも出現する。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 36番道路から北西へ進み、37番道路に入る。<br>
              <span class="step-badge">2</span> 北へ進んで<a href="#" onclick="jumpToMapSpot('johto', 'enju_city', 'エンジュシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">エンジュシティ</a>へ向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>058</td>
            <td><a href="#" onclick="jumpToPokemonByName('ガーディ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ガーディ</a></td>
            <td>◎ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>○ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>017</td>
            <td><a href="#" onclick="jumpToPokemonByName('ピジョン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ピジョン</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>165</td>
            <td><a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a></td>
            <td>○ × ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>166</td>
            <td><a href="#" onclick="jumpToPokemonByName('レディアン'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディアン</a></td>
            <td>△ × ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>234</td>
            <td><a href="#" onclick="jumpToPokemonByName('オドシシ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オドシシ</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>167</td>
            <td><a href="#" onclick="jumpToPokemonByName('イトマル'); return false;" style="color:#2b6cb0; text-decoration:underline;">イトマル</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>164</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヨルノズク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヨルノズク</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>168</td>
            <td><a href="#" onclick="jumpToPokemonByName('アリアドス'); return false;" style="color:#2b6cb0; text-decoration:underline;">アリアドス</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ふたごちゃん マナとカナ</strong></td>
            <td>プリン Lv.16（ノーマル） / ピッピ Lv.16（ノーマル）</td>
            <td>320円</td>
          </tr>
          <tr>
            <td><strong>サイキッカー リョウ</strong></td>
            <td>スリープ Lv.17（エスパー）</td>
            <td>544円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>じしゃく</strong></td><td>[日曜日] 道路東にいる曜日兄弟のニチオからもらう</td></tr>
          <tr><td><strong>あかぼんぐり</strong></td><td>道路北東にあるぼんぐりの木（左上）から入手</td></tr>
          <tr><td><strong>あおぼんぐり</strong></td><td>道路北東にあるぼんぐりの木（右上）から入手</td></tr>
          <tr><td><strong>くろぼんぐり</strong></td><td>道路北東にあるぼんぐりの木（中央下）から入手</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 曜日兄弟:</strong><br>
      日曜日に37番道路の東に曜日兄弟のニチオが出現する。<br>
      ニチオに話しかけると<strong>じしゃく</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ピィやオドシシを捕まえてみよう:</strong><br>
      37番道路の草むらでは、夜にピィや時間帯問わずオドシシが出現するよ。<br>
      エンジュシティ到着前に戦力や図鑑を整えておこう！</p>
    `
  },

  {
    id: "route_38",
    name: "38番道路",
    category: "道路・水道",
    desc: "エンジュシティの西からアサギシティへと東西に延びる道路。広い草むらや牧場のようなエリアがあり、ミルタンクやケンタロスなどのポケモンが出現する。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> エンジュシティの西から38番道路に入る。<br>
              <span class="step-badge">2</span> 西へ進み、39番道路を経由して<a href="#" onclick="jumpToMapSpot('johto', 'asagi_city', 'アサギシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギシティ</a>へ向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>081</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>128</td>
            <td><a href="#" onclick="jumpToPokemonByName('ケンタロス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ケンタロス</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>241</td>
            <td><a href="#" onclick="jumpToPokemonByName('ミルタンク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミルタンク</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>017</td>
            <td><a href="#" onclick="jumpToPokemonByName('ピジョン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ピジョン</a></td>
            <td>× ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>052</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニャース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニャース</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>164</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヨルノズク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヨルノズク</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ふなのり マサヒロ</strong></td>
            <td>ウパー Lv.19（みず・じめん）</td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>ミニスカート リカ</strong></td>
            <td>モココ Lv.18（でんき） / コダック Lv.18（みず）</td>
            <td>432円</td>
          </tr>
          <tr>
            <td><strong>じゅくがえり クリオ</strong></td>
            <td>バリヤード Lv.19（エスパー）</td>
            <td>608円</td>
          </tr>
          <tr>
            <td><strong>おとなのおねえさん ユリカ</strong></td>
            <td>ハネッコ Lv.17（くさ・ひこう） / ポポッコ Lv.17（くさ・ひこう）</td>
            <td>1496円</td>
          </tr>
          <tr>
            <td><strong>とりつかい ハルキ</strong></td>
            <td>ドードー Lv.15（ノーマル・ひこう） / ドードー Lv.16（ノーマル・ひこう） / ドードー Lv.17（ノーマル・ひこう）</td>
            <td>408円</td>
          </tr>
          <tr>
            <td><strong>おとなのおねえさん ミスズ</strong></td>
            <td>サニーゴ Lv.19（みず・いわ）</td>
            <td>1672円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>きのみ</strong></td><td>道路西の段差上にあるきのみの木から入手</td></tr>
          <tr>
            <td><strong>かみなりのいし</strong></td>
            <td>道路北にいるミニスカートのリカとバトルした後、ポケギアにリカの電話番号を登録しておくと、リカから電話がかかってきて「かみなりのいし」をもらえることがある</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 牧場エリアのトレーナーとバトル:</strong><br>
      38番道路にはミルタンクやケンタロスを使うトレーナーもいるよ。<br>
      アサギジム戦に向けてでんきタイプやかくとうタイプのポケモンを育てておくと安心だよ！</p>
      <p><strong>◉ ミニスカートのリカ:</strong><br>
      38番道路の北にミニスカートのリカがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      リカは木曜日の夜に電話すると再戦できるほか、<strong>かみなりのいし</strong>をもらえることがある。<br></p>
      <p><strong>◉ 塾帰りのクリオ:</strong><br>
      38番道路の北端にじゅくがえりのクリオがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      クリオは金曜日の朝に電話すると再戦できる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ミルタンクやケンタロスを仲間にしよう:</strong><br>
      38番道路の草むらではミルタンクやケンタロス、コイルなどが出現するよ。<br>
      戦力補強や図鑑完成を目指して探してみよう！</p>
    `
  },

  {
    id: "route_39",
    name: "39番道路",
    category: "道路・水道",
    desc: "38番道路の西からアサギシティへと延びる道路。南側には牧場があり、草むらや海沿いなど幅広いエリアでポケモンと出会える。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 38番道路から西へ進み、39番道路に入る。<br>
              <span class="step-badge">2</span> 南へ進んで<a href="#" onclick="jumpToMapSpot('johto', 'asagi_city', 'アサギシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギシティ</a>へ向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>081</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>017</td>
            <td><a href="#" onclick="jumpToPokemonByName('ピジョン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ピジョン</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>128</td>
            <td><a href="#" onclick="jumpToPokemonByName('ケンタロス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ケンタロス</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>241</td>
            <td><a href="#" onclick="jumpToPokemonByName('ミルタンク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミルタンク</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>052</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニャース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニャース</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>164</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヨルノズク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヨルノズク</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>サイキッカー カイ</strong></td>
            <td>ヤドン Lv.17（みず・エスパー） / ヤドン Lv.20（みず・エスパー）</td>
            <td>640円</td>
          </tr>
          <tr>
            <td><strong>だいすきクラブ トモコ</strong></td>
            <td>ピカチュウ Lv.17（でんき）</td>
            <td>1360円</td>
          </tr>
          <tr>
            <td><strong>だいすきクラブ ミハエル</strong></td>
            <td>ピカチュウ Lv.17（でんき）</td>
            <td>1360円</td>
          </tr>
          <tr>
            <td><strong>ふなのり ミツオ</strong></td>
            <td>ニョロゾ Lv.17（みず） / クラブ Lv.19（みず） / ラッタ Lv.17（ノーマル）</td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>だいすきクラブ カヨコ</strong></td>
            <td>ニャース Lv.16（ノーマル）</td>
            <td>1280円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>はっかのみ</strong></td><td>モーモー牧場北にあるきのみの木から入手</td></tr>
          <tr><td><strong>わざマシン13「いびき」</strong></td><td>モーモー牧場の牛舎で弱っているミルタンクにきのみを7個与えて元気にすると、牧場主からお礼にもらえる</td></tr>
          <tr><td><strong>モーモーミルク</strong></td><td>ミルタンクが元気になった後、500円で購入できる</td></tr>
          <tr>
            <td><strong>きんのたま</strong></td>
            <td>道路中央付近にいるだいすきクラブのミハエルとバトルした後、手持ちにピカチュウがいる状態でミハエルに話しかけると電話番号を登録できる。ミハエルから電話がかかってきて「きんのたま」をもらえることがある</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 牧場とモーモーミルク:</strong><br>
      39番道路の牧場では、回復アイテムとして優秀な<strong>モーモーミルク</strong>を手に入れられるよ。<br>
      アサギジム戦やその後の冒険でも役立つのでチェックしておこう！</p>
      <p><strong>◉ 弱ったミルタンク:</strong><br>
      39番道路北西にモーモー牧場がある。<br>
      牛舎に弱っているミルタンクがいるが、持っているきのみを7個あげると元気になる。<br>
      その後に牧場主からお礼に<strong>わざマシン13「いびき」</strong>をもらえる。<br>
      また、<strong>モーモーミルク</strong>を1本500円で買えるようになる。<br></p>
      <p><strong>◉ 大好きクラブのミハエル:</strong><br>
      39番道路の段差上にいる男性はだいすきクラブのミハエル。<br>
      手持ちにピカチュウがいる状態でバトル後に話しかけると、ポケギアに電話番号を登録できる。<br>
      ミハエルから電話がかかってきて<strong>きんのたま</strong>をもらえることがある。<br></p>
      <p><strong>◉ 大好きクラブのカヨコ:</strong><br>
      39番道路の南西の草むらにいる女性はだいすきクラブのカヨコ。<br>
      カヨコとは夜限定でバトルできる。<br>
      カヨコはバトル後に「出会った場所・時間帯で戦わせると懐きやすい」というヒントを教えてくれる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ アサギシティ目前の最終調整:</strong><br>
      39番道路を抜けるとすぐアサギシティに到着するよ。<br>
      回復アイテムや手持ちのコンディションを整えてから進もう！</p>
    `
  },

  {
    id: "route_40",
    name: "40番水道",
    category: "道路・水道",
    desc: "アサギシティの南西から41番道路やうずまきじま方面へと広がる海上の水道。なみのりを使って水上を進み、多くのふなのりやスイマーとバトルしながら進む。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【なみのり入手後】</strong></td>
            <td>
              <span class="step-badge">1</span> <a href="#" onclick="jumpToMapSpot('johto', 'asagi_city', 'アサギシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギシティ</a>の南西から40番道路の水上へ出る。<br>
              <span class="step-badge">2</span> なみのりで南へ進み、41番道路へ向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">213</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ツボツボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ツボツボ</a></td>
            <td>△ △ ×</td>
            <td>いわくだき</td>
          </tr>
          <tr>
            <td>○ ○ ◎</td>
            <td>いわくだき</td>
          </tr>
          <tr>
            <td rowspan="3">098</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>072</td>
            <td><a href="#" onclick="jumpToPokemonByName('メノクラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">メノクラゲ</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>073</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドククラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドククラゲ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="2">129</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>099</td>
            <td><a href="#" onclick="jumpToPokemonByName('キングラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キングラー</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">222</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('サニーゴ'); return false;" style="color:#2b6cb0; text-decoration:underline;">サニーゴ</a></td>
            <td>○ ○ ×</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ×</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">120</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ヒトデマン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒトデマン</a></td>
            <td>× × ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>× × ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>かいパンやろう ノブオ</strong></td>
            <td>メノクラゲ Lv.20（みず・どく） / メノクラゲ Lv.20（みず・どく）</td>
            <td>160円</td>
          </tr>
          <tr>
            <td><strong>ビキニのおねえさん リサ</strong></td>
            <td>ヒトデマン Lv.21（みず）</td>
            <td>420円</td>
          </tr>
          <tr>
            <td><strong>ビキニのおねえさん ミチコ</strong></td>
            <td>ヒトデマン Lv.19（みず） / シェルダー Lv.19（みず）</td>
            <td>380円</td>
          </tr>
          <tr>
            <td><strong>かいパンやろう ナオユキ</strong></td>
            <td>シェルダー Lv.18（みず） / シェルダー Lv.18（みず） / カメール Lv.20（みず）</td>
            <td>144円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>するどいくちばし</strong></td>
            <td>[月曜日] 道路北の海岸にいる曜日兄弟のツキコからもらう</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 水上トレーナーとマンタイン:</strong><br>
      40番道路の水上ではマンタインやシェルダーなどのポケモンと出会えるよ。<br>
      でんきタイプやかくとう・くさタイプのポケモンを連れて進むとスムーズだよ！</p>
      <p><strong>◉ 曜日兄弟:</strong><br>
      月曜日にアサギシティから西に進んだ先の砂浜に曜日兄弟のツキコが出現する。<br>
      ツキコに話しかけると<strong>するどいくちばし</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 回復アイテムをしっかり用意しよう:</strong><br>
      海上ではポケモンセンターにすぐ戻れないため、きずぐすりやげんきのかけらを多めに持っていこう。<br>
      41番道路やその先の探索にも備えておくと安心だよ！</p>
      <p><strong>◉ バトルタワー:</strong><br>
      アサギシティから西に進んだところの砂浜にバトルタワーがあるが、初めて来たときは扉が閉まっていて塔に入れない。<br></p>
    `
  },

  {
    id: "route_41",
    name: "41番水道",
    category: "道路・水道",
    desc: "40番道路の南からタンバシティへとつながる広い海上の水道。中央付近にうずまきじまの4つの島々が浮かんでおり、スイマーたちとバトルしながら進む。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> ★41番水道の各所にはうずまきじまの洞窟入口が点在しているが、途中の海上にある渦を超えるには、秘伝技「うずしお」が必要。<br>先にチョウジタウン方面を攻略し、チョウジタウンジムでアイスバッジを入手していればうずまきじまに進める。<br>ただしうずまきじまの中は暗いので探索には秘伝技「フラッシュ」も必要。<br>
              <span class="step-badge">2</span> 水道を西に進んでいき、<a href="#" onclick="jumpToMapSpot('johto', 'tanba_city', 'タンバシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">タンバシティ</a>へ。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>226</td>
            <td><a href="#" onclick="jumpToPokemonByName('マンタイン'); return false;" style="color:#2b6cb0; text-decoration:underline;">マンタイン</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="3">072</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('メノクラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">メノクラゲ</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">073</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ドククラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドククラゲ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">129</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">090</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('シェルダー'); return false;" style="color:#2b6cb0; text-decoration:underline;">シェルダー</a></td>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">170</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('チョンチー'); return false;" style="color:#2b6cb0; text-decoration:underline;">チョンチー</a></td>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>171</td>
            <td><a href="#" onclick="jumpToPokemonByName('ランターン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ランターン</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>かいパンやろう ムネオ</strong></td>
            <td>メノクラゲ Lv.16（みず・どく） / メノクラゲ Lv.17（みず・どく） / メノクラゲ Lv.17（みず・どく） / ヒトデマン Lv.19（みず） / メノクラゲ Lv.16（みず・どく）</td>
            <td>152円</td>
          </tr>
          <tr>
            <td><strong>かいパンやろう タツヤ</strong></td>
            <td>テッポウオ Lv.19（みず） / シェルダー Lv.21（みず） / ドククラゲ Lv.19（みず・どく） / メノクラゲ Lv.19（みず・どく）</td>
            <td>152円</td>
          </tr>
          <tr>
            <td><strong>ビキニのおねえさん ナギサ</strong></td>
            <td>トサキント Lv.18（みず） / トサキント Lv.20（みず） / アズマオウ Lv.20（みず）</td>
            <td>400円</td>
          </tr>
          <tr>
            <td><strong>ビキニのおねえさん ナツミ</strong></td>
            <td>コダック Lv.20（みず） / トサキント Lv.22（みず）</td>
            <td>440円</td>
          </tr>
          <tr>
            <td><strong>かいパンやろう ヨウヘイ</strong></td>
            <td>ハリーセン Lv.23（みず・どく）</td>
            <td>184円</td>
          </tr>
          <tr>
            <td><strong>かいパンやろう セイジ</strong></td>
            <td>ギャラドス Lv.20（みず・ひこう） / ギャラドス Lv.20（みず・ひこう）</td>
            <td>160円</td>
          </tr>
          <tr>
            <td><strong>ビキニのおねえさん シホ</strong></td>
            <td>ヒトデマン Lv.20（みず） / スターミー Lv.20（みず・エスパー）</td>
            <td>400円</td>
          </tr>
          <tr>
            <td><strong>ビキニのおねえさん カナエ</strong></td>
            <td>パウワウ Lv.22（みず）</td>
            <td>440円</td>
          </tr>
          <tr>
            <td><strong>かいパンやろう シゲキ</strong></td>
            <td>クラブ Lv.23（みず）</td>
            <td>184円</td>
          </tr>
          <tr>
            <td><strong>ビキニのおねえさん ヨウコ</strong></td>
            <td>タッツー Lv.21（みず） / タッツー Lv.21（みず）</td>
            <td>420円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ふしぎなアメ</strong></td><td>水道や島周辺のアイテム・条件で入手</td></tr>
          <tr><td><strong>マックスアップ</strong></td><td>水道や周辺イベントで入手</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ うずまきじまへの入り口:</strong><br>
      41番道路にはうずまきじまにつながる島々の入り口があるよ。<br>
      うずまきじまの奥へ進むには「うずしお」が必要になるため、準備が整ってから探索してみよう！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 広い海上での迷子に注意しよう:</strong><br>
      41番道路はルートが入り組んでいるので、タンバシティへ向かうときは南東方面を意識しながら進もう。<br>
      回復手段も確保しつつ安全に突破しよう！</p>
      <p><strong>◉ ルギアゲット:</strong><br>
      41番道路にはうずまきじまの入口があるが、ロケット団アジトで秘伝マシン06「うずしお」を入手し、さらにチョウジタウンジムでアイスバッジを入手していないと入れない。<br>
      また、渦巻き島に入っても、殿堂入り後にカントー地方のニビシティで入手できる「ぎんいろのはね」を持っていないとルギアが出現しないので注意。<br></p>
    `
  },

  {
    id: "route_42",
    name: "42番道路",
    category: "道路・水道",
    desc: "エンジュシティの東からチョウジタウンへと東西に延びる道路。3つの山に分かれた地形が特徴で、途中にはスリバチやまの入り口がある。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 途中にある2つの池をポケモンの技「なみのり」で渡って道路東側に行く。<br>スリバチやまの洞窟を通って道路東側に行くこともできるが、現時点ではスリバチやまの全エリアを探索することはできない。<br>
              <span class="step-badge">2</span> 東に進み<a href="#" onclick="jumpToMapSpot('johto', 'choji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>に向かう。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>021</td>
            <td><a href="#" onclick="jumpToPokemonByName('オニスズメ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニスズメ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>023</td>
            <td><a href="#" onclick="jumpToPokemonByName('アーボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>022</td>
            <td><a href="#" onclick="jumpToPokemonByName('オニドリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニドリル</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>024</td>
            <td><a href="#" onclick="jumpToPokemonByName('アーボック'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボック</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>183</td>
            <td><a href="#" onclick="jumpToPokemonByName('マリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">マリル</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="4">118</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('トサキント'); return false;" style="color:#2b6cb0; text-decoration:underline;">トサキント</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">119</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('アズマオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アズマオウ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="3">129</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>つりびと ミノル</strong></td>
            <td>ハリーセン Lv.18（みず・どく）</td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア トシノブ</strong></td>
            <td>ニドリーナ Lv.16（どく） / ニドリーノ Lv.16（どく）</td>
            <td>960円</td>
          </tr>
          <tr>
            <td><strong>やまおとこ テツジ</strong></td>
            <td>ディグダ Lv.14（じめん） / イシツブテ Lv.14（いわ・じめん） / ダグトリオ Lv.16（じめん）</td>
            <td>512円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ハイパーボール</strong></td><td>道路西側で拾う</td></tr>
          <tr><td><strong>ももぼんぐり</strong></td><td>[要なみのり・いあいぎり] 道路中央付近にあるぼんぐりの木（左）から入手</td></tr>
          <tr><td><strong>みどぼんぐり</strong></td><td>[要なみのり・いあいぎり] 道路中央付近にあるぼんぐりの木（中央）から入手</td></tr>
          <tr><td><strong>きぼんぐり</strong></td><td>[要なみのり・いあいぎり] 道路中央付近にあるぼんぐりの木（右）から入手</td></tr>
          <tr><td><strong>いいキズぐすり</strong></td><td>[要なみのり] 道路中央付近で拾う</td></tr>
          <tr>
            <td><strong>みずのいし</strong></td>
            <td>道路東側にいるつりびとのミノルとバトルした後、ポケギアにミノルの電話番号を登録しておくと、ミノルから電話がかかってきて「みずのいし」をもらえることがある</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ スリバチやまへの立ち寄り:</strong><br>
      42番道路の中央の山にはスリバチやまの入り口があるよ。<br>
      「なみのり」などの秘伝技が整ったら、奥の探索にも挑戦してみよう！</p>
      <p><strong>◉ 釣り人のミノル:</strong><br>
      42番道路の東岸にいるつりびとのミノルは、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      ミノルは日曜日の昼に電話すると再戦できるほか、<strong>みずのいし</strong>をくれることがある。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 3つの山を越えてチョウジタウンへ:</strong><br>
      42番道路は草むらが分かれているので、必要なポケモンがいるエリアを効率よく回ろう。<br>
      夜にはニューラと出会えるチャンスもあるよ！</p>
      <p><strong>◉ ぼんぐりの木:</strong><br>
      道路中央の小島にある細い木をいあいぎりで切って手前側に進むと、ぼんぐりの木が3本生えていて、左からそれぞれ<strong>ももぼんぐり</strong>、<strong>みどぼんぐり</strong>、<strong>きぼんぐり</strong>が取れる。<br></p>
    `
  },

  {
    id: "route_43",
    name: "43番道路",
    category: "道路・水道",
    desc: "チョウジタウンの北からいかりのみずうみへと南北に延びる道路。途中にゲート（関所）があり、ロケット団が通行料を徴収している。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 道路を北に進み、<a href="#" onclick="jumpToMapSpot('johto', 'lake_of_rage', 'いかりのみずうみ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">いかりのみずうみ</a>へ向かう。<br>途中にあるゲートを通ろうとするとロケット団員から通行料として1000円徴収されるが、ゲートを迂回して進むこともできる。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>△ △ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>017</td>
            <td><a href="#" onclick="jumpToPokemonByName('ピジョン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ピジョン</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>083</td>
            <td><a href="#" onclick="jumpToPokemonByName('カモネギ'); return false;" style="color:#2b6cb0; text-decoration:underline;">カモネギ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>161</td>
            <td><a href="#" onclick="jumpToPokemonByName('オタチ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オタチ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>162</td>
            <td><a href="#" onclick="jumpToPokemonByName('オオタチ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オオタチ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>048</td>
            <td><a href="#" onclick="jumpToPokemonByName('コンパン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コンパン</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>164</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヨルノズク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヨルノズク</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>049</td>
            <td><a href="#" onclick="jumpToPokemonByName('モルフォン'); return false;" style="color:#2b6cb0; text-decoration:underline;">モルフォン</a></td>
            <td>× × △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="4">129</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="3">060</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>キャンプボーイ タイチ</strong></td>
            <td>サンド Lv.17（じめん） / サンドパン Lv.17（じめん） / ズバット Lv.19（どく・ひこう）</td>
            <td>380円</td>
          </tr>
          <tr>
            <td><strong>ピクニックガール チサト</strong></td>
            <td>ピッピ Lv.20（ノーマル）</td>
            <td>400円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア マコト</strong></td>
            <td>ベロリンガ Lv.19（ノーマル）</td>
            <td>1140円</td>
          </tr>
          <tr>
            <td><strong>つりびと ヨシヒト</strong></td>
            <td>コイキング Lv.10（みず） / ギャラドス Lv.10（みず・ひこう） / ギャラドス Lv.15（みず・ひこう） / コイキング Lv.15（みず）</td>
            <td>600円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア カズシ</strong></td>
            <td>ニドキング Lv.19（どく・じめん）</td>
            <td>1140円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア スグル</strong></td>
            <td>ヤドラン Lv.19（みず・エスパー）</td>
            <td>1140円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>にがきのみ</strong></td><td>[要なみのり・いあいぎり] 道路西側にあるきのみの木から入手</td></tr>
          <tr><td><strong>ピーピーリカバー</strong></td><td>道路途中のゲート左側の段差の上で拾う</td></tr>
          <tr><td><strong>わざマシン36「ヘドロばくだん」</strong></td><td>[ロケットだんアジト制圧後] 道路途中のゲートにいる警備員からもらう</td></tr>
          <tr>
            <td><strong>ピッピにんぎょう</strong></td>
            <td>道路中央付近にいるピクニックガールのチサトとバトルした後、手持ちにピッピがいる状態でチサトに話しかけると電話番号を登録できる。チサトから電話がかかってきて「ピッピにんぎょう」をもらえることがある</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ ロケット団の通行料イベント:</strong><br>
      43番道路の関所ではロケット団が通行料を求めてくることがあるよ。<br>
      イベントを進めながらいかりのみずうみへ向かおう！</p>
      <p><strong>◉ ピクニックガールのチサト:</strong><br>
      43番道路途中の長い池の右側にピクニックガールのチサトがいる。<br>
      チサトとバトル後、手持ちにピッピを入れた状態で話しかけるとポケギアに電話番号を登録できる。<br>
      チサトは火曜日の昼に電話すると再戦できるほか、<strong>ピッピにんぎょう</strong>をくれることがある。<br></p>
      <p><strong>◉ 怪獣マニアのマコト:</strong><br>
      43番道路途中の長い池の右の森にかいじゅうマニアのマコトがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      マコトは月曜日の朝に電話すると再戦できる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ いかりのみずうみへ向けてレベル上げ:</strong><br>
      43番道路は草むらが点在しており、時間帯によって出現するポケモンが変わるよ。<br>
      この先のロケット団戦やジム戦に備えて、主力ポケモンの育成も進めておこう！</p>
      <p><strong>◉ 有料ゲート:</strong><br>
      初めて来たとき、マップ東にあるゲートに入ると強制的にロケット団に千円取られる。<br>
      お金を取られたくないときは西側から進もう。<br></p>
    `
  },

  {
    id: "route_44",
    name: "44番道路",
    category: "道路・水道",
    desc: "チョウジタウンの東からこおりのぬけみちへと東西に延びる道路。池を挟んだ地形や草むらが広がり、多くのトレーナーとバトルしながら進む。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 44番道路は、ロケット団解散後に<a href="#" onclick="jumpToMapSpot('johto', 'choji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>から東に進むと来ることができる。<br>道路を東に進み、洞窟入口から<a href="#" onclick="jumpToMapSpot('johto', 'ice_path', 'こおりのぬけみち'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">こおりのぬけみち</a>へ行く。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>069</td>
            <td><a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>070</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウツドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウツドン</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>114</td>
            <td><a href="#" onclick="jumpToPokemonByName('モンジャラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">モンジャラ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>108</td>
            <td><a href="#" onclick="jumpToPokemonByName('ベロリンガ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベロリンガ</a></td>
            <td>◎ ◎ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="4">060</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>060</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">061</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td rowspan="3">129</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>サイキッカー シュンジ</strong></td>
            <td>ネイティ Lv.24（エスパー・ひこう） / ユンゲラー Lv.26（エスパー）</td>
            <td>832円</td>
          </tr>
          <tr>
            <td><strong>つりびと シュウヘイ</strong></td>
            <td>テッポウオ Lv.25（みず） / テッポウオ Lv.25（みず）</td>
            <td>1000円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー ノゾミ</strong></td>
            <td>バタフリー Lv.25（むし・ひこう） / キレイハナ Lv.25（くさ）</td>
            <td>1200円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー ゴウ</strong></td>
            <td>リザード Lv.27（ほのお）</td>
            <td>1296円</td>
          </tr>
          <tr>
            <td><strong>つりびと ヒデノリ</strong></td>
            <td>トサキント Lv.23（みず） / アズマオウ Lv.25（みず） / トサキント Lv.23（みず）</td>
            <td>1000円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア モトフミ</strong></td>
            <td>サイホーン Lv.27（じめん・いわ）</td>
            <td>1620円</td>
          </tr>
          <tr>
            <td><strong>とりつかい モトヒロ</strong></td>
            <td>ピジョン Lv.25（ノーマル・ひこう） / ピジョン Lv.25（ノーマル・ひこう）</td>
            <td>600円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>やけたきのみ</strong></td><td>道路西側にあるきのみの木から入手</td></tr>
          <tr><td><strong>ゴールドスプレー</strong></td><td>道路西側で拾う</td></tr>
          <tr><td><strong>げんきのかたまり</strong></td><td>[要なみのり] 道路中央付近の草むらで拾う</td></tr>
          <tr><td><strong>ハイパーボール</strong></td><td>道路東の池の右奥で拾う</td></tr>
          <tr>
            <td><strong>モンスターボール<br>スーパーボール<br>ハイパーボール</strong></td>
            <td>道路北側にいるつりびとのヒデノリとバトルした後、ポケギアにヒデノリの電話番号を登録しておくと、ヒデノリから電話がかかってきて「モンスターボール」「スーパーボール」「ハイパーボール」の中からランダムでどれか1つをもらえることがある</td>
          </tr>
          <tr>
            <td><strong>インドメタシン</strong></td>
            <td>道路北東にいるとりつかいのモトヒロとバトルした後、ポケギアにモトヒロの電話番号を登録しておくと、モトヒロから電話がかかってきて再戦できる。再々戦後（3度目のバトル後）、モトヒロから「インドメタシン」をもらえる</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ こおりのぬけみちへの備え:</strong><br>
      44番道路を抜けるとこおりのぬけみちに入るよ。<br>
      氷の滑るギミックやいわくだき・かいりきが必要になるため、準備を整えてから進もう！</p>
      <p><strong>◉ 釣り人のヒデノリ:</strong><br>
      44番道路右側の池の北側につりびとのヒデノリがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      ヒデノリは木曜日の朝に電話すると再戦できるほか、<strong>モンスターボール</strong>、<strong>スーパーボール</strong>、<strong>ハイパーボール</strong>のどれかをくれることがある。<br></p>
      <p><strong>◉ 鳥使いのモトヒロ:</strong><br>
      氷の抜け道入口の左の方にとりつかいのモトヒロがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      モトヒロは水曜日の夜に電話すると再戦でき、3回目のバトル後に<strong>インドメタシン</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ほのお・ひこうタイプが活躍しやすい:</strong><br>
      草むらにはモンジャラやマダツボミ・ウツドンなどのくさタイプが多いよ。<br>
      ほのおタイプやひこうタイプがいるとテンポよく進めるよ！</p>
    `
  },

  {
    id: "route_45",
    name: "45番道路",
    category: "道路・水道",
    desc: "こおりのぬけみちを抜けた先に広がる山岳道路。高い崖や段差が続く険しい地形で、西側へ下りていくと46番道路へとつながっている。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> ★フスベシティから45番道路に入ってすぐ左にある洞窟入口からくらやみのほらあなに行ける。<br>この入口から入ると、31番道路の入口から入った場合には探索できなかったエリアを探索できる。<br>
              <span class="step-badge">2</span> 道路を南に進み、46番道路へ。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>075</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴローン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴローン</a></td>
            <td>○ ○ ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>207</td>
            <td><a href="#" onclick="jumpToPokemonByName('グライガー'); return false;" style="color:#2b6cb0; text-decoration:underline;">グライガー</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>232</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドンファン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドンファン</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>227</td>
            <td><a href="#" onclick="jumpToPokemonByName('エアームド'); return false;" style="color:#2b6cb0; text-decoration:underline;">エアームド</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>231</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴマゾウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴマゾウ</a></td>
            <td>△ × ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td rowspan="4">129</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td rowspan="2">147</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>148</td>
            <td><a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>エリートトレーナー イサム</strong></td>
            <td>ピジョット Lv.25（ノーマル・ひこう） / エレブー Lv.27（でんき）</td>
            <td>1296円</td>
          </tr>
          <tr>
            <td><strong>やまおとこ カツヒロ</strong></td>
            <td>ワンリキー Lv.24（かくとう） / ゴローン Lv.27（いわ・じめん） / ワンリキー Lv.24（かくとう）</td>
            <td>864円</td>
          </tr>
          <tr>
            <td><strong>やまおとこ タロウ</strong></td>
            <td>イワーク Lv.29（いわ・じめん）</td>
            <td>928円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー カレン</strong></td>
            <td>マリル Lv.27（みず） / カメール Lv.24（みず） / カメール Lv.24（みず）</td>
            <td>1152円</td>
          </tr>
          <tr>
            <td><strong>カラテおう タケノリ</strong></td>
            <td>ゴーリキー Lv.28（かくとう）</td>
            <td>672円</td>
          </tr>
          <tr>
            <td><strong>やまおとこ アキオ</strong></td>
            <td>イシツブテ Lv.25（いわ・じめん） / ゴローン Lv.25（いわ・じめん） / ゴローニャ Lv.25（いわ・じめん）</td>
            <td>800円</td>
          </tr>
          <tr>
            <td><strong>やまおとこ マサヒコ</strong></td>
            <td>ディグダ Lv.27（じめん） / ダグトリオ Lv.27（じめん）</td>
            <td>864円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ピーピーエイダー</strong></td><td>道路北西にある段差の上で拾う</td></tr>
          <tr><td><strong>まんたんのくすり</strong></td><td>道路中央北付近にある段差の上で拾う</td></tr>
          <tr><td><strong>きんのたま</strong></td><td>道路中央付近で拾う</td></tr>
          <tr><td><strong>げんきのかけら</strong></td><td>道路南西にある段差の上で拾う</td></tr>
          <tr><td><strong>ふしぎなきのみ</strong></td><td>道路南東の池の手前にあるきのみの木から入手</td></tr>
          <tr>
            <td><strong>ブロムヘキシン</strong></td>
            <td>道路西にいるやまおとこのタロウとバトルした後、ポケギアにタロウの電話番号を登録しておくと、タロウから電話がかかってきて再戦できる。再々戦後（3度目のバトル後）、タロウから「ブロムヘキシン」をもらえる</td>
          </tr>
          <tr>
            <td><strong>ポイントアップ</strong></td>
            <td>道路中央付近にいるからておうのタケノリとバトルした後、ポケギアにタケノリの電話番号を登録しておき、曜日不定の昼にタケノリに電話してから直接話しかけると「ポイントアップ」をもらえることがある</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 46番道路からワカバタウンへつながるルート:</strong><br>
      45番道路を西へ進んで46番道路へ出ると、南へ下ることでワカバタウン側へ戻ることができるよ。<br>
      探索や回復のルートとしても覚えておくと便利だよ！</p>
      <p><strong>◉ 山男のタロウ:</strong><br>
      45番道路の北西の段差を降りていく途中にやまおとこのタロウがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      タロウは金曜日の夜に電話すると再戦でき、3度目のバトル後に<strong>ブロムヘキシン</strong>をくれる。<br></p>
      <p><strong>◉ 空手王のタケノリ:</strong><br>
      45番道路の東の段差を降りていく途中にからておうのタケノリがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      曜日不定の昼にタケノリに電話してから直接話しかけると<strong>ポイントアップ</strong>をくれることがある。<br>
      「ポイントアップ」がもらえる日の前日に電話をすると「明日なら電話をする暇がある」と教えてもらえる。<br>
      タケノリと再戦はできない。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 一方通行の段差に注意しよう:</strong><br>
      45番道路は高い崖から飛び降りる段差が多いので、アイテムを取り逃がさないようルートを確認しながら進もう。<br>
      みず・くさ・じめんタイプの技があると、いわ・はがね・ほのおタイプの相手にも有利に戦えるよ！</p>
    `
  },

  {
    id: "route_46",
    name: "46番道路",
    category: "道路・水道",
    desc: "45番道路の南から29番道路の北へと南北に延びる山道。高い崖や段差が続く地形で、ワカバタウン・ヨシノシティ方面とフスベ・チョウジ方面をつないでいる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 45番道路の南から46番道路に入り、崖や段差を降りながら南へ進む。<br>
              <span class="step-badge">2</span> 南端まで進むと<a href="#" onclick="jumpToMapSpot('johto', 'route_29', '29番道路'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">29番道路</a>の北側へ出る。<br>
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:22%;">ポケモン</th>
            <th style="width:18%;">時間帯<br>朝 昼 夜</th>
            <th>出現場所・条件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>◎ ◎ ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>021</td>
            <td><a href="#" onclick="jumpToPokemonByName('オニスズメ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニスズメ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>231</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴマゾウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴマゾウ</a></td>
            <td>△ × ×</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>キャンプボーイ ソウイチ</strong></td>
            <td>マンキー Lv.17（かくとう）</td>
            <td>340円</td>
          </tr>
          <tr>
            <td><strong>ピクニックガール エミ</strong></td>
            <td>ポニータ Lv.16（ほのお） / ポニータ Lv.16（ほのお）</td>
            <td>320円</td>
          </tr>
          <tr>
            <td><strong>やまおとこ シュウジ</strong></td>
            <td>イシツブテ Lv.13（いわ・じめん） / イシツブテ Lv.13（いわ・じめん） / イシツブテ Lv.13（いわ・じめん） / イシツブテ Lv.13（いわ・じめん） / イシツブテ Lv.13（いわ・じめん）</td>
            <td>416円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>まひなおしのみ</strong></td><td>道路北にあるきのみの木（右下）から入手</td></tr>
          <tr><td><strong>きのみ</strong></td><td>道路北にあるきのみの木（左上）から入手</td></tr>
          <tr><td><strong>スピーダー</strong></td><td>道路西側にある段差の上で拾う</td></tr>
          <tr>
            <td><strong>リゾチウム</strong></td>
            <td>道路西側の段差の上にいるピクニックガールのエミとバトルした後、ポケギアにエミの電話番号を登録しておくと、エミから電話がかかってきて再戦できる。再々戦後（3度目のバトル後）、エミから「リゾチウム」をもらえる</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 29番道路と45番道路をつなぐショートカットルート:</strong><br>
      46番道路は南側が29番道路につながっており、ワカバタウン・ヨシノシティ方面への移動に便利だよ。<br>
      ただし一方通行の段差が多いので、北へ戻りたいときはルートに気をつけよう！</p>
      <p><strong>◉ ピクニックガールのエミ:</strong><br>
      46番道路の西にピクニックガールのエミがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      エミは土曜日の夜に電話すると再戦でき、3度目のバトル後に<strong>リゾチウム</strong>がもらえる。<br></p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 序盤〜中盤の探索にも立ち寄れるエリア:</strong><br>
      46番道路は29番道路の北側から早い段階で足を踏み入れることもでき、イシツブテやイワークなどに出会えるよ。<br>
      みず・くさ・じめん・かくとうタイプの技があると進めやすいよ！</p>
      <p><strong>◉ 最後の道路:</strong><br>
      46番道路はジョウト地方で最後の道路となるが、ゲーム開始直後から訪れることができる。<br>
      ワカバタウンから29番道路に進み、北ゲートから46番道路に来ると草むらで野生ポケモンに出会えるが、その先は段差があり進めない。<br></p>
    `
  }

];

