// ジョウト地方の町マップ
window.JOHTO_MAP_DATA = window.JOHTO_MAP_DATA || {
  title: "ジョウト地方",
  spots: []
};

window.JOHTO_MAP_DATA.spots.push(
    // ==========================================
    // 【街】の詳細データ
    // ==========================================
    {
      id: "wakaba_town",
      name: "ワカバタウン",
      category: "町",
      desc: "はじまりの町。主人公の家やウツギポケモン研究所がある。",
      
  // 1. シナリオ攻略チャート（完全網羅版）
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
                ◉ 時計の設定をした後、自室からスタート。自宅1階に降りて母親から<strong>ポケギア</strong>をもらう（使い方が分からなければ母親から教わることもできる）。<br>
                ◉ 自宅を出て左に進みポケモン研究所に行く。<br>
                ◉ 研究所でイベント。ウツギ博士から最初のポケモンをもらう（チコリータ、ヒノアラシ、ワニノコから1匹選択）。<br>
                ◉ ウツギ博士の電話番号がポケギアに登録される。外に出る前に研究員から<strong>キズぐすり</strong>をもらう。<br>
                ◉ 町の西出口から29番道路に向かう。
              </td>
            </tr>
            <tr>
              <td><strong>【ふしぎなタマゴ入手後】</strong></td>
              <td>
                ◉ ポケモン研究所の奥に行き、ライバルの名前を決める。ウツギ博士にふしぎなタマゴを渡す。<br>
                ◉ 研究員から<strong>モンスターボール5個</strong>をもらい、29番道路へ行く。
              </td>
            </tr>
            <tr>
              <td><strong>【ジムリーダー イブキ撃破後】</strong></td>
              <td>
                ◉ ★ポケモン研究所に行くとウツギ博士から<strong>マスターボール</strong>がもらえる。<br>
                ◉ 町の東側の池をポケモンの技「なみのり」で進み、27番道路へ行く。
              </td>
            </tr>
            <tr>
              <td><strong>【初回殿堂入り後】</strong></td>
              <td>
                ◉ ポケモンリーグ殿堂入り後、自宅前から再スタート。自宅に入るとウツギ博士から電話。<br>
                ◉ ポケモン研究所でウツギ博士から<strong>ふねのチケット</strong>をもらう。<br>
                ◉ アサギシティへ向かう。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設
      facilities: "主人公の家 / ウツギポケモン研究所 / プレイヤーの母親の家",

      // 3. 出現ポケモン（画像9に基づく修正版 ＆ 図鑑リンク対応）
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>072</td>
              <td><a href="#" onclick="jumpToPokemonByName('メノクラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">メノクラゲ</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
              <td>水上<br>釣り (ボロのつりざお)<br>釣り (いいつりざお)</td>
            </tr>
            <tr>
              <td>073</td>
              <td><a href="#" onclick="jumpToPokemonByName('ドククラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドククラゲ</a></td>
              <td>○ ○ ○<br>○ ○ ○</td>
              <td>水上<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)</td>
            </tr>
            <tr>
              <td>090</td>
              <td><a href="#" onclick="jumpToPokemonByName('シェルダー'); return false;" style="color:#2b6cb0; text-decoration:underline;">シェルダー</a></td>
              <td>○ ○ ○<br>○ ○ ○</td>
              <td>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>170</td>
              <td><a href="#" onclick="jumpToPokemonByName('チョンチー'); return false;" style="color:#2b6cb0; text-decoration:underline;">チョンチー</a></td>
              <td>○ ○ ○<br>◎ ◎ ◎</td>
              <td>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>171</td>
              <td><a href="#" onclick="jumpToPokemonByName('ランターン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ランターン</a></td>
              <td>○ ○ ○</td>
              <td>釣り (すごいつりざお)</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 4. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">トレーナー名</th><th>使用ポケモン</th></tr></thead>
          <tbody>
            <tr><td colspan="2" style="text-align: center; color: #718096;">ワカバタウン内に出現するトレーナーはいません</td></tr>
          </tbody>
        </table>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>キズぐすり</strong></td><td>ポケモン研究所で最初のポケモンをもらった後、ウツギ博士の助手からもらえる</td></tr>
            <tr><td><strong>モンスターボール (5個)</strong></td><td>ポケモン研究所にいるウツギ博士にふしぎなタマゴを渡した後、ウツギ博士の助手からもらえる</td></tr>
            <tr><td><strong>かわらずのいし</strong></td><td>キキョウシティでウツギ博士の助手から受け取ったタマゴを孵した後、生まれたトゲピーをポケモン研究所にいるウツギ博士に見せに行くと もらえる</td></tr>
            <tr><td><strong>マスターボール</strong></td><td>ジョウトジムバッジ全てを集めた後、ポケモン研究所にいるウツギ博士からもらえる</td></tr>
            <tr><td><strong>ふねのチケット</strong></td><td>ポケモンリーグ殿堂入り後、ポケモン研究所にいるウツギ博士からもらえる</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン
      getPokemon: "最初のポケモン（チコリータ、ヒノアラシ、ワニノコのいずれか1匹をウツギ博士から受け取る）",

      // 7. サブイベント
      subEventHtml: `
        <p><strong>▶ トゲピーとかわらずのいし:</strong><br>
        キキョウシティジムでジムリーダー・ハヤトを倒した後、キキョウシティのポケモンセンターにいるウツギ博士の助手からポケモンのタマゴをもらえる。<br>
        このタマゴを孵すとトゲピーが産まれ、トゲピーをワカバタウンのポケモン研究所にいるウツギ博士に見せに行くと<strong>かわらずのいし</strong>がもらえる。</p>
      `,

      // 8. 攻略メモ
      memoHtml: `
        <p><strong>▶ おかあさんの貯金システム:</strong><br>
        ワカバタウンの自宅にいるお母さんにお金を預けることで貯金ができる。<br>
        冒険の途中でポケモンバトルに負けて手持ちのお金が半分になってしまっても、お母さんに預けたお金は減らない。<br>
        また、貯まったお金でお母さんが勝手に「れいせいなみす」や「いいめのいし」などの家具やアイテムを買ってきて部屋に飾ってくれたり、電話で教えてくれることがある。</p>
        <p><strong>▶ ポケモン回復マシン:</strong><br>
        ウツギ博士の研究所の奥に回復マシンがあり、いつでも手持ちのポケモンを無料で全回復できる。</p>
        <p><strong>▶ ライバルの覗きイベント:</strong><br>
        ゲーム開始直後、研究所の窓を覗いている赤い髪の少年に話しかけると、後日ライバルとなる彼との最初のイベントが発生する。</p>
      `
    },
 {
      id: "yoshino_city",
      name: "ヨシノシティ",
      category: "町",
      desc: "白く美しい砂浜が広がる静かな町。",
      
      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
                ◉ ヨシノシティの入口にいる案内じいさんに町を案内してもらうと<strong>マップカード</strong>がもらえて、ポケギアでジョウト地方のタウンマップが見られるようになる。<br>
                ◉ 町の北出口から30番道路に向かう。
              </td>
            </tr>
            <tr>
              <td><strong>【ふしぎなタマゴ入手後】</strong></td>
              <td>
                ◉ 町の東出口付近でイベント。<strong>ライバル</strong>とバトル。<br>
                ◉ バトル後、29番道路を通ってワカバタウンまで戻る。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設
      facilities: "ポケモンセンター / フレンドリィショップ / 案内じいさんの家",

      // 3. 出現ポケモン（図鑑リンク対応版）
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr><td>072</td><td><a href="#" onclick="jumpToPokemonByName('メノクラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">メノクラゲ</a></td><td>◎ ◎ ◎</td><td>水上</td></tr>
            <tr><td>073</td><td><a href="#" onclick="jumpToPokemonByName('ドククラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドククラゲ</a></td><td>○ ○ ○</td><td>水上</td></tr>
            <tr>
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)</td>
            </tr>
            <tr>
              <td>098</td>
              <td><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
              <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
            <tr><td>099</td><td><a href="#" onclick="jumpToPokemonByName('キングラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キングラー</a></td><td>○ ○ ○</td><td>釣り (すごいつりざお)</td></tr>
            <tr>
              <td>222</td>
              <td><a href="#" onclick="jumpToPokemonByName('サニーゴ'); return false;" style="color:#2b6cb0; text-decoration:underline;">サニーゴ</a></td>
              <td>○ ○ ×<br>○ ○ ×</td>
              <td>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>120</td>
              <td><a href="#" onclick="jumpToPokemonByName('ヒトデマン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒトデマン</a></td>
              <td>× × ○<br>× × ○</td>
              <td>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 4. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">名前</th><th>手持ちポケモン</th><th style="width:15%;">賞金</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>ライバル</strong></td>
              <td>
                <a href="#" onclick="jumpToPokemonByName('ヒノアラシ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒノアラシ</a> (Lv.5 / ほのお) [※主人公の選び方で変化]<br>
                <a href="#" onclick="jumpToPokemonByName('ワニノコ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワニノコ</a> (Lv.5 / みず) [※主人公の選び方で変化]<br>
                <a href="#" onclick="jumpToPokemonByName('チコリータ'); return false;" style="color:#2b6cb0; text-decoration:underline;">チコリータ</a> (Lv.5 / くさ) [※主人公の選び方で変化]
              </td>
              <td>300円</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:12px; color:#718096; margin-top:6px;">※ライバルはヒノアラシ、ワニノコ、チコリータの中から主人公が最初に選んだポケモンに有利なタイプのポケモンを使用する。</p>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>マップカード</strong></td><td>おじいさんに町を案内してもらった後にもらえる</td></tr>
            <tr><td><strong>しんぴのしずく</strong></td><td>[要なみのり] 町の西側の小島にいる男性から もらえる</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン
      getPokemon: "なし",

      // 7. サブイベント
      subEventHtml: "",

      // 8. 攻略メモ
      memoHtml: `
        <p><strong>▶ ポケセン2階:</strong><br>
        ポケモンセンター2階にある通信施設は、初めて来たときは使えない。<br>
        シナリオでポケモン爺さんからもらったふしぎなタマゴをウツギ博士に届けた後に使えるようになる。</p>
        <p><strong>▶ モンスターボール販売開始:</strong><br>
        フレンドリィショップでモンスターボールの販売が開始される것도、ウツギ博士にふしぎなタマゴを届けた後。</p>
      `
    },

{
      id: "kikyou_city",
      name: "キキョウシティ",
      category: "町",
      desc: "歴史あるお寺とマダツボミのとうがある、なつかしいかおりのする町。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
◉ 町の北東にある<strong>マダツボミのとう</strong>を攻略し、最上階で長老に勝って<strong>秘伝マシン05 (フラッシュ)</strong> をもらう。<br>
◉ キキョウシティジムでジムリーダーの<strong>ハヤト</strong>を倒し、<strong>ウイングバッジ</strong>と<strong>わざマシン31 (どろかけ)</strong> を入手する。<br>
◉ ジムから出るとウツギ博士から電話がかかってくる。キキョウシティのポケモンセンターにいるウツギ博士の助手から<strong>ふしぎなタマゴ</strong>を受け取る。<br>
◉ 町の南出口から32番道路へ向かう。
              </td>
            </tr>
            <tr>
              <td><strong>【ポケモンのタマゴ孵化後】</strong></td>
              <td>
◉ 受け取ったふしぎなタマゴを手持ちに入れて歩き、タマゴから<strong>トゲピー</strong>を孵化させる。<br>
◉ ワカバタウンのウツギポケモン研究所へ行き、ウツギ博士にトゲピーを見せると<strong>かわらずのいし</strong>がもらえる。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ マダツボミのとうリンク対応）
      facilitiesList: [
        "キキョウシティジム",
        "ポケモンセンター",
        "フレンドリィショップ",
        `<a href="#" onclick="jumpToMapSpot('johto', 'madatsubomi_tower', 'マダツボミのとう'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">マダツボミのとう</a>`,
        "ジョバンニ先生のポケモン塾"
      ],

      // 3. ジム（あとで追加するキキョウジムのマップ詳細へ遷移）
      gym: `<a href="#" onclick="jumpToGymSpot('johto', 'kikyou_gym', 'キキョウジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">キキョウジム</a>（ジムリーダー：ハヤト / ひこうタイプ）`,

      // 4. 出現ポケモン（水上・釣り・ずつき ＆ 図鑑リンク対応）
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>060</td>
              <td><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○<br>◎ ◎ ◎</td>
              <td>水上<br>釣り (ボロのつりざお)<br>釣り (いいつりざお・すごいつりざお)</td>
            </tr>
            <tr>
              <td>061</td>
              <td><a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a></td>
              <td>○ ○ ○<br>○ ○ ○</td>
              <td>水上<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)</td>
            </tr>
            <tr>
              <td>010</td>
              <td><a href="#" onclick="jumpToPokemonByName('キャタピー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キャタピー</a></td>
              <td>○ ○ ×</td>
              <td>ずつき (金・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>011</td>
              <td><a href="#" onclick="jumpToPokemonByName('トランセル'); return false;" style="color:#2b6cb0; text-decoration:underline;">トランセル</a></td>
              <td>○ ○ ×</td>
              <td>ずつき (金・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>012</td>
              <td><a href="#" onclick="jumpToPokemonByName('バタフリー'); return false;" style="color:#2b6cb0; text-decoration:underline;">バタフリー</a></td>
              <td>△ △ ×</td>
              <td>ずつき (金・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>013</td>
              <td><a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a></td>
              <td>○ ○ ×</td>
              <td>ずつき (銀・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>014</td>
              <td><a href="#" onclick="jumpToPokemonByName('コクーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コクーン</a></td>
              <td>○ ○ ×</td>
              <td>ずつき (銀・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>015</td>
              <td><a href="#" onclick="jumpToPokemonByName('スピアー'); return false;" style="color:#2b6cb0; text-decoration:underline;">スピアー</a></td>
              <td>△ △ ×</td>
              <td>ずつき (銀・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>163</td>
              <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
              <td>○ ○ ◎</td>
              <td>ずつき</td>
            </tr>
            <tr>
              <td>165</td>
              <td><a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a></td>
              <td>○ × ×</td>
              <td>ずつき (銀・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>167</td>
              <td><a href="#" onclick="jumpToPokemonByName('イトマル'); return false;" style="color:#2b6cb0; text-decoration:underline;">イトマル</a></td>
              <td>× × ○</td>
              <td>ずつき (金・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>204</td>
              <td><a href="#" onclick="jumpToPokemonByName('クヌギダマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クヌギダマ</a></td>
              <td>○ ○ ○</td>
              <td>ずつき</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 5. 入手アイテム（画像準拠）
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>ウイングバッジ</strong></td><td>ジムリーダー ハヤトを倒すともらえる</td></tr>
            <tr><td><strong>わざマシン31「どろかけ」</strong></td><td>ジムリーダー ハヤトを倒すともらえる</td></tr>
            <tr><td><strong>まひなおしのみ</strong></td><td>町の南出口前にあるきのみの木から入手</td></tr>
            <tr><td><strong>にがいきのみ</strong></td><td>町の南の民家にいる少年にマダツボミを渡すと、にがいきのみを持ったイワークと交換してもらえる</td></tr>
            <tr><td><strong>ふしぎなアメ</strong></td><td>[要なみのり] 町の北東端で拾う</td></tr>
            <tr><td><strong>ポイントアップ</strong></td><td>[要なみのり] 町の北西端で拾う</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン（画像準拠の表形式 ＋ 図鑑リンク対応）
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>095</td>
              <td><a href="#" onclick="jumpToPokemonByName('イワーク'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">イワーク</a></td>
              <td>キキョウシティ南の民家にいる少年から<a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a>と交換でイワークをもらえる。</td>
              <td>
                名前:ブルブル<br>
                親:コンタ<br>
                ID:48926<br>
                レベル:交換ポケモンと同レベル<br>
                性別:♂<br>
                個体値:8/9/6/6/6<br>
                持ち物:にがいきのみ
              </td>
            </tr>
            <tr>
              <td>175</td>
              <td><a href="#" onclick="jumpToPokemonByName('トゲピー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">トゲピー</a></td>
              <td>キキョウシティジムでジムリーダー ハヤトを倒した後、ポケモンセンターにいるウツギ博士の助手からトゲピーのタマゴをもらえる。</td>
              <td>
                名前:任意<br>
                親:トレーナー名<br>
                ID:トレーナーID<br>
                レベル:5<br>
                性別:ランダム (♂or♀)<br>
                個体値:ランダム<br>
                持ち物:なし
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">トレーナー名</th><th>使用ポケモン</th></tr></thead>
          <tbody>
            <tr><td colspan="2" style="text-align: center; color: #718096;">キキョウシティの町中に出現するトレーナーはいません（※ジム内・マダツボミのとう内を除く）</td></tr>
          </tbody>
        </table>
      `,

      // 8. サブイベント
      subEventHtml: `
        <p><strong>▶ マダツボミとイワークのポケモン交換:</strong><br>
        キキョウシティ南の民家にいる少年から<strong>マダツボミ</strong>と交換で<strong>イワーク</strong>（名前：ブルブル / 持ち物：にがいきのみ）をもらえる。<br>
        最初のジム（ひこうタイプ使いのハヤト）に対して非常に有利に戦える。</p>
        <p><strong>▶ ふしぎなタマゴの受け取り:</strong><br>
        ハヤト撃破後にジムを出るとウツギ博士から電話があり、ポケモンセンター内に博士の助手が現れる。<br>
        手持ちに1つ以上の空きがある状態で話しかけると、トゲピーが孵化するタマゴをもらえる。</p>
        <p><strong>▶ ハヤブサのポケモン塾:</strong><br>
        町の中央付近にあるポケモン塾では、黒板を調べることで状態異常の基礎知識や回復方法を確認できる。</p>
      `,

      // 9. 攻略メモ
      memoHtml: `
        <p><strong>▶ ジム挑戦前の準備:</strong><br>
        キキョウシティジムに挑戦する前に、先に町の北東にある<strong>マダツボミのとう</strong>を攻略しておくのが基本ルート（ジム内のトレーナー戦やレベル上げにもなる）。<br>
        また、チコリータを選んだ場合は、民家でマダツボミと<strong>イワーク</strong>を交換しておくとハヤト戦がぐっと楽になる。</p>
        <p><strong>▶ ひでんマシンとバッジの対応:</strong><br>
        マダツボミのとうで入手する<strong>ひでんマシン05（フラッシュ）</strong>は、キキョウジムの<strong>ウイングバッジ</strong>を入手することでフィールド上でも使用可能になる。</p>
        <p><strong>▶ 水上エリアの回収:</strong><br>
        町の北東端や北西端には<strong>ふしぎなアメ</strong>や<strong>ポイントアップ</strong>が落ちているため、秘伝技「なみのり」を覚えたら回収しておこう。</p>
      `
    },

{
      id: "hiwada_town",
      name: "ヒワダタウン",
      category: "町",
      desc: "ヤドンのいどがある、木々に囲まれた小さな町。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
◉ 町の北西の民家に行き、ガンテツと話す。<br>
◉ ガンテツを追って町の東側にある<a href="#" onclick="jumpToMapSpot('johto', 'yadon_well', 'ヤドンのいど'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヤドンのいど</a>に入る。
              </td>
            </tr>
            <tr>
              <td><strong>【ヤドンのいどクリア後】</strong></td>
              <td>
◉ ガンテツから<strong>ルアーボール</strong>をもらう。<br>
◉ ヒワダタウンジムで<a href="#" onclick="jumpToMapSpot('johto', 'hiwada_gym', 'ジムリーダー ツクシ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー ツクシ</a>を倒し、<strong>インセクトバッジ</strong>、<strong>わざマシン49「れんぞくぎり」</strong>をもらう。<br>
◉ 町の西出口付近で<strong>ライバル</strong>とバトル。<br>
◉ 西ゲートを通って<a href="#" onclick="jumpToMapSpot('johto', 'ubame_forest', 'ウバメのもり'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ウバメのもり</a>へ向かう。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ 関連スポットリンク対応）
      facilitiesList: [
        "ポケモンセンター",
        "フレンドリィショップ",
        "ヒワダタウンジム",
        `<a href="#" onclick="jumpToMapSpot('johto', 'yadon_well', 'ヤドンのいど'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヤドンのいど</a>`,
        "ガンテツの家",
        "スミ職人の家",
        `<a href="#" onclick="jumpToMapSpot('johto', 'ubame_forest', 'ウバメのもり'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ウバメのもり</a>`
      ],

      // 3. ジム
      gym: `<a href="#" onclick="jumpToMapSpot('johto', 'hiwada_gym', 'ヒワダジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヒワダジム</a>（ジムリーダー：ツクシ / むしタイプ）`,

      // 4. 出現ポケモン
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>079</td>
              <td><a href="#" onclick="jumpToPokemonByName('ヤドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドン</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○<br>◎ ◎ ◎</td>
              <td>水上（ヤドンのいど）<br>釣り (ボロのつりざお・いいつりざお・すごいつりざお)</td>
            </tr>
            <tr>
              <td>080</td>
              <td><a href="#" onclick="jumpToPokemonByName('ヤドラン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドラン</a></td>
              <td>○ ○ ○</td>
              <td>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)</td>
            </tr>
            <tr>
              <td>163</td>
              <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
              <td>○ ○ ◎</td>
              <td>ずつき</td>
            </tr>
            <tr>
              <td>165</td>
              <td><a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a></td>
              <td>○ × ×</td>
              <td>ずつき (銀・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>167</td>
              <td><a href="#" onclick="jumpToPokemonByName('イトマル'); return false;" style="color:#2b6cb0; text-decoration:underline;">イトマル</a></td>
              <td>× × ○</td>
              <td>ずつき (金・クリスタルのみ)</td>
            </tr>
            <tr>
              <td>204</td>
              <td><a href="#" onclick="jumpToPokemonByName('クヌギダマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クヌギダマ</a></td>
              <td>○ ○ ○</td>
              <td>ずつき</td>
            </tr>
            <tr>
              <td>214</td>
              <td><a href="#" onclick="jumpToPokemonByName('ヘラクロス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヘラクロス</a></td>
              <td>△ △ △</td>
              <td>ずつき</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>インセクトバッジ</strong></td><td>ヒワダジムでジムリーダー ツクシを倒すともらえる</td></tr>
            <tr><td><strong>わざマシン49「れんぞくぎり」</strong></td><td>ヒワダジムでジムリーダー ツクシを倒すともらえる</td></tr>
            <tr><td><strong>ルアーボール</strong></td><td>ヤドンのいどクリア後、ガンテツからもらえる</td></tr>
            <tr><td><strong>もくたん</strong></td><td>町の中央付近にあるスミ職人の家で、カモネギイベント後に話しかけるともらえる</td></tr>
            <tr><td><strong>各種ぼんぐりボール</strong></td><td>ガンテツにぼんぐり（あか・あお・き・みどり・しろ・くろ・もも）を渡して作ってもらう</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン（表形式 ＋ 図鑑リンク対応）
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="text-align:center; color:#718096;">ヒワダタウン内で直接入手・交換できる固定ポケモンはありません（※ヤドンのいど・ずつきでの野生捕獲を除く）</td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー（レベル・賞金修正版）
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:22%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>ライバル</strong></td>
              <td>
                <a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a> (Lv.12 / ゴースト・どく)<br>
                <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.14 / どく・ひこう)<br>
                <a href="#" onclick="jumpToPokemonByName('マグマラシ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マグマラシ</a> (Lv.16 / ほのお) / <a href="#" onclick="jumpToPokemonByName('アリゲイツ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アリゲイツ</a> (Lv.16 / みず) / <a href="#" onclick="jumpToPokemonByName('ベイリーフ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベイリーフ</a> (Lv.16 / くさ) [※最初の選択で変化]
              </td>
              <td>960円</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:12px; color:#718096; margin-top:6px;">※ライバルはマグマラシ、アリゲイツ、ベイリーフの中から主人公が最初に選んだポケモンに有利なタイプのポケモンを使う。</p>
      `,

      // 8. サブイベント（ガンテツボール表付き）
      subEventHtml: `
        <p><strong>【ガンテツボール】</strong></p>
        <p><strong>◉ ガンテツボールとぼんぐり:</strong><br>
        ヤドンの井戸でボール職人のガンテツを助けた後、ヒワダタウン北西にあるガンテツの家に行くと、変わった効果を持つボールを作ってもらえる。<br>
        ガンテツボールを作ってもらうにはぼんぐりが必要で、ガンテツに渡したぼんぐりの色ごとに異なる種類のボールができる。</p>
        <p><strong>◉ ガンテツボールの種類:</strong><br>
        ガンテツに作ってもらえるボールの種類は以下。</p>
        <table class="excel-table" style="max-width:420px;">
          <thead>
            <tr><th style="width:45%;">ボール</th><th style="width:55%;">必要なぼんぐり</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>スピードボール</strong></td><td>しろぼんぐり</td></tr>
            <tr><td><strong>フレンドボール</strong></td><td>みどぼんぐり</td></tr>
            <tr><td><strong>ヘビーボール</strong></td><td>くろぼんぐり</td></tr>
            <tr><td><strong>ムーンボール</strong></td><td>きぼんぐり</td></tr>
            <tr><td><strong>ラブラブボール</strong></td><td>ももぼんぐり</td></tr>
            <tr><td><strong>ルアーボール</strong></td><td>あおぼんぐり</td></tr>
            <tr><td><strong>レベルボール</strong></td><td>あかぼんぐり</td></tr>
          </tbody>
        </table>
      `,

      // 9. 攻略メモ
      memoHtml: `
        <p><strong>▶ ヤドンのいどイベントが先決:</strong><br>
        ヒワダタウンに着いたら、まずは北西のガンテツと話してから東側の<strong>ヤドンのいど</strong>へ向かおう。</p>
        <p><strong>▶ ヘラクロス厳選のスポット:</strong><br>
        ヒワダタウンや周辺の木に「ずつき」をすると、序盤から強力な<strong>ヘラクロス</strong>を狙うことができる（出現率は低め）。</p>
      `
    },

    {
      id: "kogane_city",
      name: "コガネシティ",
      category: "町",
      desc: "ラジオ塔や巨大な百貨店がある、ジョウト地方随一の大都会。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
◉ ★町の南東にある自転車屋で<strong>じてんしゃ</strong>をもらう。<br>
◉ ★<a href="#" onclick="jumpToMapSpot('johto', 'kogane_underground', '地下通路(コガネシティ)'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">地下通路</a>で<strong>コインケース</strong>を拾う。<br>
◉ 町の西にある<a href="#" onclick="jumpToMapSpot('johto', 'kogane_radio_tower', 'ラジオ塔(コガネシティ)'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ラジオ塔</a>の1階受付でクイズに答えて<strong>ラジオカード</strong>をもらうと、ポケギアでラジオが聞けるようになる。<br>
クイズの答えは「はい」「はい」「いいえ」「はい」「いいえ」。<br>
◉ コガネシティジムで<a href="#" onclick="jumpToMapSpot('johto', 'kogane_gym', 'ジムリーダー アカネ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー アカネ</a>を倒す。帰ろうとすると近くのミニスカートに呼び止められる。アカネに再度話しかけると<strong>レギュラーバッジ</strong>、<strong>わざマシン45「メロメロ」</strong>をもらう。<br>
◉ コガネジムの右にあるフラワーショップに行き、店主の女性に話しかける。<br>
36番道路に生えた動く木と店主の妹の話を聞く。<br>
◉ 町の北出口から<a href="#" onclick="jumpToMapSpot('johto', 'route_35', '35番道路'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">35番道路</a>へ向かう。
              </td>
            </tr>
            <tr>
              <td><strong>【ジムリーダー ヤナギ撃破後】</strong></td>
              <td>
◉ ウツギ博士からロケット団についての電話がかかってきた後、コガネシティに来ると街にロケット団員が発生している。<a href="#" onclick="jumpToMapSpot('johto', 'kogane_radio_tower', 'ラジオ塔(コガネシティ)'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ラジオ塔</a>に向かう。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ 指定3施設はマップ詳細へ遷移）
      facilitiesList: [
        "コガネシティジム",
        "ポケモンセンター",
        "コガネ百貨店",
        `<a href="#" onclick="jumpToMapSpot('johto', 'radio_tower', 'ラジオ塔'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ラジオ塔</a>`,
        `<a href="#" onclick="jumpToMapSpot('johto', 'kogane_game_corner', 'コガネゲームコーナー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">コガネゲームコーナー</a>`,
        "自転車屋 ミラクルサイクル",
        "花屋",
        "マサキの家",
        "姓名判断師の家",
        "リニア乗り場 コガネ駅",
        `<a href="#" onclick="jumpToMapSpot('johto', 'kogane_chika_tsuro', '地下通路'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">地下通路</a>`
      ],

      // 3. ジム
      gym: `<a href="#" onclick="jumpToMapSpot('johto', 'kogane_gym', 'コガネジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">コガネジム</a>（ジムリーダー：アカネ / ノーマルタイプ）`,

      // 4. 出現ポケモン
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="text-align:center; color:#718096;">コガネシティの町中に野生ポケモンが出現する草むら・水上はありません（※イベント・交換・ゲームコーナーを除く）</td>
            </tr>
          </tbody>
        </table>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>レギュラーバッジ</strong></td><td>コガネジムでジムリーダー アカネを倒した後、再度話しかけるともらえる</td></tr>
            <tr><td><strong>わざマシン45「メロメロ」</strong></td><td>コガネジムでジムリーダー アカネを倒した後、再度話しかけるともらえる</td></tr>
            <tr><td><strong>じてんしゃ</strong></td><td>町の南東にある自転車屋でもらえる</td></tr>
            <tr><td><strong>コインケース</strong></td><td>地下通路で拾う</td></tr>
            <tr><td><strong>ラジオカード</strong></td><td>ラジオ塔1階の受付クイズに答えるともらえる</td></tr>
            <tr><td><strong>ゼニガメじょうろ</strong></td><td>コガネジムの右にあるフラワーショップで受け取る</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン（表形式 ＋ 図鑑リンク対応）
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>133</td>
              <td><a href="#" onclick="jumpToPokemonByName('イーブイ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">イーブイ</a></td>
              <td><a href="#" onclick="jumpToMapSpot('johto', 'enju_city', 'エンジュシティ'); return false;" style="color:#2b6cb0; text-decoration:underline;">エンジュシティ</a>のポケモンセンターでマサキと会った後、コガネシティ南西の民家にいるマサキからもらえる。</td>
              <td>
                名前:任意<br>
                親:トレーナー名<br>
                ID:トレーナーID<br>
                レベル:20<br>
                性別:ランダム (♂or♀)<br>
                個体値:ランダム<br>
                持ち物:なし
              </td>
            </tr>
            <tr>
              <td>066</td>
              <td><a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ワンリキー</a></td>
              <td>コガネシティ百貨店5Fにいる少年から<a href="#" onclick="jumpToPokemonByName('ケーシィ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ケーシィ</a>と交換でワンリキーをもらえる。</td>
              <td>
                名前:きんにく<br>
                親:ナオキ<br>
                ID:37460<br>
                レベル:交換ポケモンと同レベル<br>
                性別:♀<br>
                個体値:12/3/7/6/6<br>
                持ち物:おうごんのみ
              </td>
            </tr>
            <tr>
              <td>063</td>
              <td><a href="#" onclick="jumpToPokemonByName('ケーシィ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ケーシィ</a></td>
              <td>コガネシティの<a href="#" onclick="jumpToMapSpot('johto', 'kogane_game_corner', 'コガネゲームコーナー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ゲームコーナー</a>景品。（コイン100枚）</td>
              <td>
                名前:任意<br>
                親:トレーナー名<br>
                ID:トレーナーID<br>
                レベル:5<br>
                性別:ランダム (♂or♀)<br>
                個体値:ランダム<br>
                持ち物:なし
              </td>
            </tr>
            <tr>
              <td>104</td>
              <td><a href="#" onclick="jumpToPokemonByName('カラカラ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">カラカラ</a></td>
              <td>コガネシティの<a href="#" onclick="jumpToMapSpot('johto', 'kogane_game_corner', 'コガネゲームコーナー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ゲームコーナー</a>景品。（コイン800枚）</td>
              <td>
                名前:任意<br>
                親:トレーナー名<br>
                ID:トレーナーID<br>
                レベル:15<br>
                性別:ランダム (♂or♀)<br>
                個体値:ランダム<br>
                持ち物:なし
              </td>
            </tr>
            <tr>
              <td>202</td>
              <td><a href="#" onclick="jumpToPokemonByName('ソーナンス'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ソーナンス</a></td>
              <td>コガネシティの<a href="#" onclick="jumpToMapSpot('johto', 'kogane_game_corner', 'コガネゲームコーナー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ゲームコーナー</a>景品。（コイン1500枚）</td>
              <td>
                名前:任意<br>
                親:トレーナー名<br>
                ID:トレーナーID<br>
                レベル:15<br>
                性別:ランダム (♂or♀)<br>
                個体値:ランダム<br>
                持ち物:なし
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">トレーナー名</th><th>使用ポケモン</th></tr></thead>
          <tbody>
            <tr><td colspan="2" style="text-align: center; color: #718096;">コガネシティの町中に出現するトレーナーはいません（※ジム内・地下通路・ラジオ塔内を除く）</td></tr>
          </tbody>
        </table>
      `,

      // 8. サブイベント
      subEventHtml: `
        <p><strong>◉ ゲームコーナー:</strong><br>
        <a href="#" onclick="jumpToMapSpot('johto', 'kogane_game_corner', 'ゲームコーナー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ゲームコーナー</a>ではスロットとカードめくりで遊べる。コインを増やしたら景品交換所に行けば珍しいポケモンや技マシンと交換してもらえる。ただしコインケースがないとコインを買えず、ゲームコーナーで遊べない。コインケースはコガネシティの<a href="#" onclick="jumpToMapSpot('johto', 'kogane_underground', '地下通路'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">地下通路</a>に落ちているので拾ってから来よう。</p>
        <p><strong>◉ マサキの電話番号:</strong><br>
        ポケモンセンターの左の方にある民家はマサキの実家。少女に話しかけるとポケギアにマサキの電話番号を登録でき、パソコンの預かりシステムで現在使用中のボックスの空き具合を電話で聞けるようになる。</p>
        <p><strong>◉ イーブイゲット:</strong><br>
        エンジュシティのポケモンセンターでマサキと話した後、コガネシティのマサキの実家に行くと、マサキから<a href="#" onclick="jumpToPokemonByName('イーブイ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イーブイ</a>をもらえる。</p>
        <p><strong>◉ ポケモン交換:</strong><br>
        コガネ百貨店の5階にいる少年とポケモン交換ができる。少年の<a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a>とこちらの<a href="#" onclick="jumpToPokemonByName('ケーシィ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ケーシィ</a>を交換してもらえる。</p>
      `,

      // 9. 攻略メモ
      memoHtml: `
        <p><strong>◉ デパートのバーゲン:</strong><br>
        コガネ百貨店の屋上ではアイテムが安売りされていることがある。<br>
        34番道路にいるキャンプボーイのヨウイチの電話番号を登録しておくと、コガネ百貨店で安売りがあったとき電話で教えてくれる。</p>
        <p><strong>◉ 姓名判断師:</strong><br>
        コガネジム左の民家は姓名判断師の家。ポケモンの名前を占ってもらうとニックネームを変えられる。<br>
        ただし交換でもらったポケモンのニックネームは変えられない。</p>
        <p><strong>◉ なつき度判定人:</strong><br>
        コガネ百貨店の右にある建物にいる女性は、手持ちの先頭ポケモンがどれだけ主人公になついているか教えてくれる。</p>
        <p><strong>◉ 百貨店の荷物:</strong><br>
        コガネ百貨店の地下はコガネシティの地下通路に繋がっている。百貨店の地下は倉庫になっていてアイテムが拾えるが、荷物に塞がれてアイテムが取れないことがある。<br>
        そのときは一旦別の階に移動してから戻ってくると荷物の場所が変わっているので、アイテムへの道が開けるまで何度も別の階に移動してみよう。</p>
        <p><strong>◉ 技教え:</strong><br>
        ポケモンリーグ殿堂入り後の水・土曜日、<a href="#" onclick="jumpToMapSpot('johto', 'kogane_game_corner', 'ゲームコーナー'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ゲームコーナー</a>前（入口の左横）に技教え人（わざおしえオヤジ）が出現し、コイン4000枚を渡すことで1日1回だけポケモンに「10まんボルト」「れいとうビーム」「かえんほうしゃ」の中から習得可能な技1つを教えてくれる。</p>
        <p><strong>◉ リニア:</strong><br>
        コガネシティにはリニア乗り場があり、リニアでカントー地方のヤマブキシティまで行ける。<br>
        初めて来たときはリニアに乗れないが、殿堂入り後にカントー地方に行き、10番道路にある発電所の機械の部品を取り戻して修理するとリニアに乗れるようになる。</p>
        <p><strong>◉ ゼニガメじょうろ:</strong><br>
        ジムリーダーのアカネを倒していなくても36番道路に行くとフラワーショップのサキがいてじょうろの話が聞けるが、アカネを倒していないとフラワーショップ店主からゼニガメじょうろがもらえないので36番道路のウソッキーをどかすことができない。</p>
        <p><strong>◉ ラジオ塔占拠事件:</strong><br>
        ラジオ塔がロケット団に占拠されるイベントが起こる条件は、ジムリーダーシジマ、ミカン、ヤナギを全て倒していること。<br>
        この3人のジムリーダーを倒していないとコガネシティに戻ってきてもラジオ塔がロケット団に占拠されず、シナリオが進まない。</p>
      `
    },

{
      id: "enju_city",
      name: "エンジュシティ",
      category: "町",
      desc: "歴史ある2つの塔と歌舞練場が佇む、古都の面影を残す町。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
◉ ★ポケモンセンターでマサキと会話。次の日になるとポケモンセンターでタイムカプセルが使えるようになる。<br>
また、ここでマサキと会っておくと<a href="#" onclick="jumpToMapSpot('johto', 'kogane_city', 'コガネシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">コガネシティ</a>のマサキの家でマサキから<a href="#" onclick="jumpToPokemonByName('イーブイ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イーブイ</a>をもらえる。<br>
◉ 町の中央付近の歌舞練場にいる舞子5人とバトルした後、観客のジェントルマンに話しかけて<strong>ひでんマシン03「なみのり」</strong>をもらう。<br>
◉ ★町の南出口付近の民家にいる男性の質問に答え、<strong>ダウジングマシン</strong>をもらう。<br>
◉ 町の北西にある<a href="#" onclick="jumpToMapSpot('johto', 'yakeda_tower', 'やけたとう'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">やけたとう</a>に向かう。
              </td>
            </tr>
            <tr>
              <td><strong>【やけたとうから3匹のポケモンが逃げ出した後】</strong></td>
              <td>
◉ エンジュシティジムに入る。ジム内では見えない床を進んでいくが、ジムトレーナーの坊主やイタコが向いている方向に床が伸びているので道が分かる。<br>
最奥にいる<a href="#" onclick="jumpToMapSpot('johto', 'enju_gym', 'ジムリーダー マツバ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー マツバ</a>を倒し、<strong>ファントムバッジ</strong>、<strong>わざマシン30「シャドーボール」</strong>をもらう。<br>
◉ 町の西出口から<a href="#" onclick="jumpToMapSpot('johto', 'route_38', '38番道路'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">38番道路</a>へ向かう。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ 関連スポットリンク対応）
      facilitiesList: [
        "エンジュシティジム",
        "ポケモンセンター",
        "フレンドリィショップ",
        "エンジュ歌舞練場",
        `<a href="#" onclick="jumpToMapSpot('johto', 'yakeda_tower', 'やけたとう'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">やけたとう</a>`,
        `<a href="#" onclick="jumpToMapSpot('johto', 'suzu_tower', 'スズのとう'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">スズのとう</a>`,
        "ダウジングマシン民家"
      ],

      // 3. ジム
      gym: `<a href="#" onclick="jumpToMapSpot('johto', 'enju_gym', 'エンジュジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">エンジュジム</a>（ジムリーダー：マツバ / ゴーストタイプ）`,

      // 4. 出現ポケモン
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>060</td>
              <td><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>水上<br>釣り (ボロのつりざお・いいつりざお・すごいつりざお)</td>
            </tr>
            <tr>
              <td>061</td>
              <td><a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a></td>
              <td>○ ○ ○<br>◎ ◎ ◎</td>
              <td>水上<br>釣り (いいつりざお・すごいつりざお)</td>
            </tr>
            <tr>
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>ひでんマシン03「なみのり」</strong></td><td>町の中央付近にある歌舞練場で舞子5人を倒した後、観客からもらえる</td></tr>
            <tr><td><strong>ファントムバッジ</strong><br><strong>わざマシン30「シャドーボール」</strong></td><td><a href="#" onclick="jumpToMapSpot('johto', 'enju_gym', 'ジムリーダー マツバ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー マツバ</a>を倒すともらえる</td></tr>
            <tr><td><strong>ダウジングマシン</strong></td><td>町の南出口近くの民家にいる男性の質問に「はい」と答えるともらえる</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="text-align:center; color:#718096;">エンジュシティ内で直接入手・交換できる固定ポケモンはありません（※水上・釣り・やけたとう・スズのとうでの出現を除く）</td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>まいこはん コウメ</strong></td>
              <td><a href="#" onclick="jumpToPokemonByName('ブースター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ブースター</a> (Lv.17 / ほのお)</td>
              <td>1224円</td>
            </tr>
            <tr>
              <td><strong>まいこはん サクラ</strong></td>
              <td><a href="#" onclick="jumpToPokemonByName('エーフィ'); return false;" style="color:#2b6cb0; text-decoration:underline;">エーフィ</a> (Lv.17 / エスパー)</td>
              <td>1224円</td>
            </tr>
            <tr>
              <td><strong>まいこはん タマオ</strong></td>
              <td><a href="#" onclick="jumpToPokemonByName('ブラッキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ブラッキー</a> (Lv.17 / あく)</td>
              <td>1224円</td>
            </tr>
            <tr>
              <td><strong>まいこはん スモモ</strong></td>
              <td><a href="#" onclick="jumpToPokemonByName('シャワーズ'); return false;" style="color:#2b6cb0; text-decoration:underline;">シャワーズ</a> (Lv.17 / みず)</td>
              <td>1224円</td>
            </tr>
            <tr>
              <td><strong>まいこはん サツキ</strong></td>
              <td><a href="#" onclick="jumpToPokemonByName('サンダース'); return false;" style="color:#2b6cb0; text-decoration:underline;">サンダース</a> (Lv.17 / でんき)</td>
              <td>1224円</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:12px; color:#718096; margin-top:6px;">※【歌舞練場】</p>
      `,

      // 8. サブイベント
      subEventHtml: `
        <p><strong>◉ 伝説ポケモンゲット:</strong><br>
        エンジュシティ北東にあるスズの塔では伝説ポケモンのスイクンとホウオウを捕まえられるが、初めて来たときはスズの塔にまだ行けない。</p>
      `,

      // 9. 攻略メモ
      memoHtml: `
        <p><strong>◉ スズのとう:</strong><br>
        エンジュシティ北東にスズの塔があるが、シナリオ終盤で入手できるとうめいなスズを持っていないと入れない。<br>
        (詳細) 塔に入るには町の北にある建物に入り、裏口から出て街の北東に行く必要があるが、建物を通らせてもらうにはエンジュのジムバッジ、ファントムバッジが必要。<br>
        またエンジュのジムバッジ入手後に行くと、地下の廊下を通らせてもらえるが、スズの塔があるエリアに出ようとするとエンテイ・ライコウ・スイクンが目覚めたので行ってはいけないと言われる。<br>
        スズの塔に行けるのは透明なスズ入手後。</p>
        <p><strong>◉ エンジュの歴史:</strong><br>
        街の南出口付近の民家のテーブルに本があり、調べると「エンジュのれきし」が読める。</p>
        <p><strong>◉ ジムリーダー不在:</strong><br>
        エンジュジムには初めから入れるが、ジムリーダーのマツバが不在で追い出されてしまいジム戦ができない。<br>
        焼けた塔でエンテイ・ライコウ・スイクンを目撃した後にジム戦ができるようになる。</p>
      `
    },

{
      id: "asagi_city",
      name: "アサギシティ",
      category: "町",
      desc: "海の向こうを照らすアサギのとうだいと、カントー行きの船が発着する港町。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
◉ アサギシティジムに入ると<strong>ライバル</strong>が出てくる（バトルにはならない）。ジムリーダーのミカンは灯台にいるため不在。<br>
◉ ★ポケモンセンターの北西にある民家で<strong>ひでんマシン04「かいりき」</strong>をもらう。<br>
◉ ★港近くの民家で<strong>いいつりざお</strong>をもらう。<br>
◉ 町の南東にある<a href="#" onclick="jumpToMapSpot('johto', 'asagi_lighthouse', 'アサギのとうだい'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギのとうだい</a>の最上階へ行き、ジムリーダーの<strong>ミカン</strong>と話す。<br>
病気のデンリュウ（アカリちゃん）を治す薬を求めて、南西の海（<a href="#" onclick="jumpToMapSpot('johto', 'route_40', '40番水道'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">40番水道</a>・<a href="#" onclick="jumpToMapSpot('johto', 'route_41', '41番水道'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">41番水道</a>）を渡って<strong>タンバシティ</strong>へ向かう。
              </td>
            </tr>
            <tr>
              <td><strong>【タンバシティで「ひでんのくすり」入手後】</strong></td>
              <td>
◉ <a href="#" onclick="jumpToMapSpot('johto', 'asagi_lighthouse', 'アサギのとうだい'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギのとうだい</a>の最上階に戻り、<strong>ミカン</strong>に<strong>ひでんのくすり</strong>を渡す。<br>
◉ アサギシティジムへ行き、<a href="#" onclick="jumpToMapSpot('johto', 'asagi_gym', 'アサギジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー ミカン</a>を倒して<strong>スチールバッジ</strong>と<strong>わざマシン23「アイアンテール」</strong>をもらう。
              </td>
            </tr>
            <tr>
              <td><strong>【殿堂入り後】</strong></td>
              <td>
◉ ウツギ博士から<strong>ふねのチケット</strong>をもらった後、町の南にある<strong>高速船乗り場 アサギ港</strong>から高速船アクア号に乗り、カントー地方（クチバシティ）へ行けるようになる。(月・金に出港)
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ 関連スポットリンク対応）
      facilitiesList: [
        "アサギシティジム",
        "ポケモンセンター",
        "フレンドリィショップ",
        `<a href="#" onclick="jumpToMapSpot('johto', 'asagi_lighthouse', 'アサギのとうだい'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギのとうだい</a>`,
        "アサギ食堂",
        "高速船乗り場 アサギ港"
      ],

      // 3. ジム
      gym: `<a href="#" onclick="jumpToMapSpot('johto', 'asagi_gym', 'アサギジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギジム</a>（ジムリーダー：ミカン / はがねタイプ）`,

      // 4. 出現ポケモン（水上・釣り ＋ 図鑑リンク対応）
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>072</td>
              <td><a href="#" onclick="jumpToPokemonByName('メノクラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">メノクラゲ</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>水上<br>釣り (ボロのつりざお・いいつりざお)</td>
            </tr>
            <tr>
              <td>073</td>
              <td><a href="#" onclick="jumpToPokemonByName('ドククラゲ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドククラゲ</a></td>
              <td>△ △ △</td>
              <td>水上</td>
            </tr>
            <tr>
              <td>090</td>
              <td><a href="#" onclick="jumpToPokemonByName('シェルダー'); return false;" style="color:#2b6cb0; text-decoration:underline;">シェルダー</a></td>
              <td>○ ○ ○</td>
              <td>釣り (いいつりざお・すごいつりざお)</td>
            </tr>
            <tr>
              <td>098</td>
              <td><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
              <td>○ ○ ○<br>◎ ◎ ◎</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお・すごいつりざお)</td>
            </tr>
            <tr>
              <td>099</td>
              <td><a href="#" onclick="jumpToPokemonByName('キングラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キングラー</a></td>
              <td>○ ○ ○</td>
              <td>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>120</td>
              <td><a href="#" onclick="jumpToPokemonByName('ヒトデマン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒトデマン</a></td>
              <td>× × ○</td>
              <td>釣り (いいつりざお・すごいつりざお / 夜のみ)</td>
            </tr>
            <tr>
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎</td>
              <td>釣り (ボロのつりざお)</td>
            </tr>
            <tr>
              <td>170</td>
              <td><a href="#" onclick="jumpToPokemonByName('チョンチー'); return false;" style="color:#2b6cb0; text-decoration:underline;">チョンチー</a></td>
              <td>○ ○ ○<br>◎ ◎ ◎</td>
              <td>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>171</td>
              <td><a href="#" onclick="jumpToPokemonByName('ランターン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ランターン</a></td>
              <td>△ △ △</td>
              <td>釣り (すごいつりざお)</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>スチールバッジ</strong><br><strong>わざマシン23「アイアンテール」</strong></td><td><a href="#" onclick="jumpToMapSpot('johto', 'asagi_gym', 'ジムリーダー ミカン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー ミカン</a>を倒すともらえる</td></tr>
            <tr><td><strong>ひでんマシン04「かいりき」</strong></td><td>ポケモンセンター北西にある民家（アサギカフェ）の船乗りに話しかけるともらえる</td></tr>
            <tr><td><strong>いいつりざお</strong></td><td>町の西側にある釣り人の民家で、質問に「はい」と答えるともらえる</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン（表形式 ＋ 図鑑リンク対応）
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100</td>
              <td><a href="#" onclick="jumpToPokemonByName('ビリリダマ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ビリリダマ</a></td>
              <td>ポケモンセンター北側の民家にいる少年から<a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a>と交換でもらえる。</td>
              <td>
                名前:ビリー<br>
                親:ハジメ<br>
                ID:29189<br>
                レベル:交換ポケモンと同レベル<br>
                性別:なし<br>
                個体値:9/8/8/8/8<br>
                持ち物:なし
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">トレーナー名</th><th>使用ポケモン</th></tr></thead>
          <tbody>
            <tr><td colspan="2" style="text-align: center; color: #718096;">アサギシティの町中に出現するトレーナーはいません（※アサギのとうだい内・アサギジム内を除く）</td></tr>
          </tbody>
        </table>
      `,

      // 8. サブイベント
      subEventHtml: `
        <p><strong>◉ ポケモン交換（ビリリダマ）:</strong><br>
        ポケモンセンターの北にある民家にいる少年に<a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a>を渡すと、<a href="#" onclick="jumpToPokemonByName('ビリリダマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビリリダマ</a>と交換してもらえる。<br>
        クラブはアサギシティの海で釣ることができるので、すぐその場で用意できる。</p>
        <p><strong>◉ バトルタワー（クリスタル版のみ）:</strong><br>
        クリスタル版では、町の西側（40番水道側ゲート付近）から<strong>バトルタワー</strong>へ挑戦できる。</p>
      `,

      // 9. 攻略メモ
      memoHtml: `
        <p><strong>◉ まずは灯台最上階でミカンに会う:</strong><br>
        アサギシティ到着直後はアサギジムに入ってもミカンが不在で戦えない。<br>
        先に<a href="#" onclick="jumpToMapSpot('johto', 'asagi_lighthouse', 'アサギのとうだい'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギのとうだい</a>を登ってミカンと話し、タンバシティへ薬を取りに行くフラグを立てよう。</p>
        <p><strong>◉ 必須級の秘伝マシン2つを回収:</strong><br>
        アサギカフェで<strong>ひでんマシン04「かいりき」</strong>、釣り人の家で<strong>いいつりざお</strong>を忘れずにもらっておこう。<br>
        どちらもこの先の冒険で重要になる。</p>
      `
    },

{
      id: "tanba_city",
      name: "タンバシティ",
      category: "町",
      desc: "荒波に囲まれた西の離れ島にある、漢方薬局と格闘道場が有名な港町。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
◉ ★町の南西にある<strong>タンバ薬局（漢方屋）</strong>へ行き、店主から<strong>ひでんのくすり</strong>をもらう。<br>
◉ タンバシティジムで<a href="#" onclick="jumpToMapSpot('johto', 'tanba_gym', 'タンバジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー シジマ</a>を倒し、<strong>ショックバッジ</strong>と<strong>わざマシン01「ばくれつパンチ」</strong>をもらう。<br>
◉ ジムの外にいるシジマの奥さんに話しかけ、<strong>ひでんマシン02「そらをとぶ」</strong>をもらう。<br>
◉ 「そらをとぶ」または<a href="#" onclick="jumpToMapSpot('johto', 'route_41', '41番水道'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">41番水道</a>経由で<strong>アサギシティ</strong>へ戻り、灯台のミカンに<strong>ひでんのくすり</strong>を渡す。
              </td>
            </tr>
            <tr>
              <td><strong>【クリスタル版のみ（スイクンイベント）】</strong></td>
              <td>
◉ 町の北端の砂浜へ行くと<strong>スイクン</strong>が走り去り、追いかけた<strong>ミナキ</strong>とバトルになる。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ 関連スポットリンク対応）
      facilitiesList: [
        "タンバシティジム",
        "ポケモンセンター",
        "タンバ薬局（漢方屋）",
        "ネッシーの民家（ツボツボ預かり）",
        "しゃしんや（ポケモン写真館）"
      ],

      // 3. ジム
      gym: `<a href="#" onclick="jumpToMapSpot('johto', 'tanba_gym', 'タンバジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">タンバジム</a>（ジムリーダー：シジマ / かくとうタイプ）`,

      // 4. 出現ポケモン（画像準拠 ＋ 図鑑リンク対応）
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>213</td>
              <td><a href="#" onclick="jumpToPokemonByName('ツボツボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ツボツボ</a></td>
              <td>△ △ ×</td>
              <td>いわくだき</td>
            </tr>
            <tr>
              <td>098</td>
              <td><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
              <td>○ ○ ◎<br>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
              <td>いわくだき<br>釣り (ボロのつりざお)<br>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
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
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎<br>○ ○ ○</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)</td>
            </tr>
            <tr>
              <td>099</td>
              <td><a href="#" onclick="jumpToPokemonByName('キングラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キングラー</a></td>
              <td>○ ○ ○</td>
              <td>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>222</td>
              <td><a href="#" onclick="jumpToPokemonByName('サニーゴ'); return false;" style="color:#2b6cb0; text-decoration:underline;">サニーゴ</a></td>
              <td>○ ○ ×<br>○ ○ ×</td>
              <td>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>120</td>
              <td><a href="#" onclick="jumpToPokemonByName('ヒトデマン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒトデマン</a></td>
              <td>× × ○<br>× × ○</td>
              <td>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>ひでんのくすり</strong></td><td>町の南西にあるタンバ薬局で店主からもらう</td></tr>
            <tr><td><strong>ショックバッジ</strong><br><strong>わざマシン01「ばくれつパンチ」</strong></td><td><a href="#" onclick="jumpToMapSpot('johto', 'tanba_gym', 'タンバジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー シジマ</a>を倒すともらえる</td></tr>
            <tr><td><strong>ひでんマシン02「そらをとぶ」</strong></td><td>シジマを倒した後、ジムの外にいるシジマの奥さんに話しかけるともらえる</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン（表形式 ＋ 図鑑リンク対応）
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>213</td>
              <td><a href="#" onclick="jumpToPokemonByName('ツボツボ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ツボツボ</a></td>
              <td>ポケモンセンター北側の民家（ネッシーの家）で青年から預かる。なつき度を上げて返すとそのまま譲ってもらえる（クリスタル版はそのままもらえる）。</td>
              <td>
                名前:ネッシー<br>
                親:マニア<br>
                ID:00518<br>
                レベル:15<br>
                性別:♂<br>
                個体値:15/10/10/10/10<br>
                持ち物:きのみ
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー（クリスタル版のミナキ戦）
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>なぞのせいねん ミナキ</strong><br><span style="font-size:11px; color:#718096;">(クリスタル版のみ)</span></td>
              <td>
                <a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a> (Lv.23 / エスパー)<br>
                <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.23 / ゴースト・どく)<br>
                <a href="#" onclick="jumpToPokemonByName('マルマイン'); return false;" style="color:#2b6cb0; text-decoration:underline;">マルマイン</a> (Lv.25 / でんき)
              </td>
              <td>2500円</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:12px; color:#718096; margin-top:6px;">※金・銀では町中にトレーナーは出現しません。</p>
      `,

      // 8. サブイベント（画像準拠）
      subEventHtml: `
        <p><strong>◉ ツボツボ入手:</strong><br>
        ポケモンセンター左の民家にいる少年と話すと、ライバルにポケモンを盗まれたと言われ、ネッシーという名前の<a href="#" onclick="jumpToPokemonByName('ツボツボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ツボツボ</a>を預かることができる。<br>
        ネッシーのなつき度を十分に上げてから少年に話しかけると、ネッシーを返してと言われる。ここで一度返すと、主人公に懐いているからあげると言われ、ネッシーをもらうことができる。</p>
      `,

      // 9. 攻略メモ（画像準拠）
      memoHtml: `
        <p><strong>◉ 写真撮影:</strong><br>
        タンバシティの中央付近にある民家は写真オヤジの家。<br>
        ポケモンクリスタル版ではポケモンの写真を撮ってもらえたが、バーチャルコンソール版ではポケットプリンタが接続できないため写真撮影ができない。</p>
        <p><strong>◉ なんでもお見通し:</strong><br>
        タンバシティ北の民家にいるなんでもお見通しのお婆さんに任意の手持ちポケモンを見せると、そのポケモンと出会ったときの情報を教えてくれる。<br>
        教えてもらえる情報は、出会った場所、時間帯、捕獲時のレベル。</p>
        <p><strong>◉ タンバ薬屋:</strong><br>
        タンバシティ南端にある薬屋でアカリちゃんにあげる秘伝の薬をもらった後、普通の回復アイテムが買える。</p>
      `
    },

{
      id: "chouji_town",
      name: "チョウジタウン",
      category: "町",
      desc: "怪しいおみやげやとロケット団の地下アジトが隠された、山あいの静かな町。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
◉ 町の東出口は男にふさがれていて進めない（いかりのみずうみでの事件解決まで通れない）。<br>
◉ 町の北出口から<a href="#" onclick="jumpToMapSpot('johto', 'route_43', '43番道路'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">43番道路</a>を通って<strong>いかりのみずうみ</strong>へ向かい、赤いギャラドス戦のあと岸辺にいる<strong>ワタル</strong>と話す。<br>
◉ チョウジタウンに戻り、町の中央北側にある怪しい民家（おみやげや）に入るとイベントが発生し、ワタルと一緒に<a href="#" onclick="jumpToMapSpot('johto', 'rocket_hideout', 'ロケット団アジト'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ロケット団アジト</a>へ突入する。
              </td>
            </tr>
            <tr>
              <td><strong>【ロケット団アジト攻略後】</strong></td>
              <td>
◉ ジム前の男がいなくなり、チョウジタウンジムに挑戦できるようになる。<br>
◉ チョウジタウンジムで<a href="#" onclick="jumpToMapSpot('johto', 'chouji_gym', 'チョウジジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー ヤナギ</a>を倒し、<strong>アイスバッジ</strong>と<strong>わざマシン16「こごえるかぜ」</strong>をもらう。<br>
◉ ジムを出ると<strong>ウツギ博士</strong>からコガネシティのラジオ塔に関する電話がかかってくる。<br>
※タンバ、アサギ、チョウジの3つのジム戦を全て終えると、3つ目のジムを出たところでウツギ博士から電話がかかってくる。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ 関連スポットリンク対応）
      facilitiesList: [
        "チョウジタウンジム",
        "ポケモンセンター",
        "怪しいおみやげや（ロケット団アジト入口）",
        `<a href="#" onclick="jumpToMapSpot('johto', 'rocket_hideout', 'ロケット団アジト'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ロケット団アジト</a>`
      ],

      // 3. ジム
      gym: `<a href="#" onclick="jumpToMapSpot('johto', 'chouji_gym', 'チョウジジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジジム</a>（ジムリーダー：ヤナギ / こおりタイプ）`,

      // 4. 出現ポケモン
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="text-align:center; color:#718096;">チョウジタウンの町中に野生ポケモンが出現する草むら・水上はありません（※ロケット団アジト内を除く）</td>
            </tr>
          </tbody>
        </table>
      `,

      // 5. 入手アイテム
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>アイスバッジ</strong><br><strong>わざマシン16「こごえるかぜ」</strong></td><td><a href="#" onclick="jumpToMapSpot('johto', 'chouji_gym', 'ジムリーダー ヤナギ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー ヤナギ</a>を倒すともらえる</td></tr>
            <tr><td><strong>いかりまんじゅう</strong></td><td>いかりのみずうみでのロケット団イベント解決後、町の東側（44番道路入口付近）にいる男性から300円で買える</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="text-align:center; color:#718096;">チョウジタウン内で直接入手・交換できる固定ポケモンはありません（※ロケット団アジト内のマルマイン等を除く）</td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">トレーナー名</th><th>使用ポケモン</th></tr></thead>
          <tbody>
            <tr><td colspan="2" style="text-align: center; color: #718096;">チョウジタウンの町中に出現するトレーナーはいません（※ロケット団アジト内・チョウジジム内を除く）</td></tr>
          </tbody>
        </table>
      `,

      // 8. サブイベント
      subEventHtml: `
        <p><strong>◉ 怪しいおみやげや（フレンドリィショップ代わり）:</strong><br>
        チョウジタウンには通常のフレンドリィショップがなく、ロケット団アジト攻略後におみやげやのカウンターに話しかけるとモンスターボールやいいキズぐすりなどの道具を買えるようになる。</p>
        <p><strong>◉ いかりまんじゅうの販売:</strong><br>
        ロケット団のイベント解決後、町の東出口をふさいでいた男性がいなくなり、近くの男性からジョウト名物の<strong>いかりまんじゅう</strong>を300円で買えるようになる（効果は「きずぐすり」と同じHP20回復）。</p>
      `,

      // 9. 攻略メモ
      memoHtml: `
        <p><strong>▶ 先に北の「いかりのみずうみ」へ向かおう:</strong><br>
        チョウジタウン到着直後は東の44番道路にもチョウジジムにも入れない。<br>
        まずは北の43番道路を抜けて<strong>いかりのみずうみ</strong>へ行き、赤いギャラドスとワタルのイベントを進めよう。</p>
        <p><strong>▶ ヤナギ撃破後はコガネシティへ:</strong><br>
        シジマ・ミカン・ヤナギの3人を倒すと、ウツギ博士から電話がかかってきてコガネシティのラジオ塔占拠イベントが発生する。空を飛ぶでコガネシティへ向かおう。</p>
      `
    },

{
      id: "fusube_city",
      name: "フスベシティ",
      category: "町",
      desc: "ドラゴン使いの里として知られる、山奥の神秘的な町。",

      // 1. シナリオ攻略チャート
      chart: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>【初めて来たとき】</strong></td>
              <td>
1. ★ポケモンセンターの北西にある民家で、<strong>わざわすれじいさん</strong>にポケモンの技を忘れさせてもらうことができる。<br>
2. フスベシティジムで<a href="#" onclick="jumpToMapSpot('johto', 'fusube_gym', 'フスベジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー イブキ</a>を倒す（倒したあと、ジム奥にある<a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>へ行くよう促される）。<br>
3. <a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>の奥にある祠（ほこら）で長老の質問に答え、<strong>ライジングバッジ</strong>と<strong>わざマシン24「りゅうのいぶき」</strong>をもらう。
              </td>
            </tr>
            <tr>
              <td><strong>【ライジングバッジ入手後】</strong></td>
              <td>
1. フスベシティジムに戻るとイブキから<strong>わざマシン24「りゅうのいぶき」</strong>（祠でもらっていない場合）やバッジに関するイベントが発生する。<br>
2. ★<a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>の祠で長老から<strong>ひでんマシン07「たきのぼり」</strong>をもらう（クリスタル版では「うずしお」を覚えたポケモンが必要になる場合あり）。<br>
3. ワカバタウンへ戻り、ポケモン研究所で<strong>ウツギ博士</strong>から<strong>マスターボール</strong>をもらったあと、27番道路経由で<strong>ポケモンリーグ</strong>へ向かう。
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 2. 施設（縦並びリスト ＋ 関連スポットリンク対応）
      facilitiesList: [
        "フスベシティジム",
        "ポケモンセンター",
        "フレンドリィショップ",
        `<a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>`,
        "わざわすれじいさんの家",
        "技おしえの家（クリスタル版のみ）"
      ],

      // 3. ジム
      gym: `<a href="#" onclick="jumpToMapSpot('johto', 'fusube_gym', 'フスベジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">フスベジム</a>（ジムリーダー：イブキ / ドラゴンタイプ）`,

      // 4. 出現ポケモン（画像準拠 ＋ 図鑑リンク対応）
      wildTable: `
        <table class="excel-table">
          <thead>
            <tr><th style="width:8%;">No.</th><th style="width:18%;">ポケモン</th><th style="width:18%;">時間帯<br>(朝 昼 夜)</th><th>出現場所・条件</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>129</td>
              <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
              <td>◎ ◎ ◎<br>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
              <td>水上<br>釣り (ボロのつりざお)<br>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
            <tr>
              <td>060</td>
              <td><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
              <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
              <td>釣り (ボロのつりざお)<br>釣り (いいつりざお)<br>釣り (すごいつりざお)</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:11px; color:#718096; margin-top:4px;">◎：高 ○：普通 △：低 ×：出ない</div>
      `,

      // 5. 入手アイテム（画像準拠・追加分反映）
      itemsTable: `
        <table class="excel-table">
          <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
          <tbody>
            <tr><td><strong>ライジングバッジ</strong><br><strong>わざマシン24「りゅうのいぶき」</strong></td><td>フスベジムでイブキを倒した後、<a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>の祠でのイベントクリア時にもらえる</td></tr>
            <tr><td><strong>ひでんマシン07「たきのぼり」</strong></td><td>ライジングバッジ入手後、<a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>の祠にいる長老に話しかけるともらえる</td></tr>
            <tr><td><strong>のろいのおふだ</strong></td><td>[土曜日] フスベシティジム右手前の段差を降りた所にいる曜日兄弟のツチオからもらう</td></tr>
            <tr><td><strong>けむりだま</strong></td><td>町の東の民家にいる女性に<a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a>♀を渡すと、けむりだまを持った<a href="#" onclick="jumpToPokemonByName('ドードリオ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドードリオ</a>と交換してもらえる</td></tr>
          </tbody>
        </table>
      `,

      // 6. 入手ポケモン（表形式 ＋ 図鑑リンク対応）
      getPokemonTable: `
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:8%;">No.</th>
              <th style="width:16%;">ポケモン</th>
              <th style="width:42%;">入手方法・入手場所</th>
              <th style="width:34%;">初期データ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>085</td>
              <td><a href="#" onclick="jumpToPokemonByName('ドードリオ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ドードリオ</a>[cite: 5]</td>
              <td>フスベシティ東の民家にいる女性から<a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a>♀と交換でドードリオをもらえる。</td>
              <td>
                名前:ドリス<br>
                親:ミサコ<br>
                ID:00283<br>
                レベル:交換ポケモンと同レベル<br>
                性別:♀<br>
                個体値:12/7/7/6/6<br>
                持ち物:けむりだま
              </td>
            </tr>
            <tr>
              <td>147</td>
              <td><a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ミニリュウ</a><br><span style="font-size:11px; color:#2b6cb0; font-weight:bold;">(クリスタル版のみ)</span></td>
              <td>りゅうのあなの祠で長老の質問に正しく答えると特別に譲ってもらえる（特殊な技「しんぴのまもり」や「げきりん」などを覚えていることがある）。</td>
              <td>
                入手場所:りゅうのあな（祠）<br>
                レベル:Lv.15<br>
                性別:♂/♀<br>
                技:しんぴのまもり等（個体により異なる）
              </td>
            </tr>
          </tbody>
        </table>
      `,

      // 7. 出現トレーナー
      trainerTable: `
        <table class="excel-table">
          <thead><tr><th style="width:25%;">トレーナー名</th><th>使用ポケモン</th></tr></thead>
          <tbody>
            <tr><td colspan="2" style="text-align: center; color: #718096;">フスベシティの町中に出現するトレーナーはいません（※フスベジム内・りゅうのあな内を除く）</td></tr>
          </tbody>
        </table>
      `,

      // 8. サブイベント
      subEventHtml: `
        <p><strong>◉ わざわすれじいさん:</strong><br>
        ポケモンセンター北西の民家にいるおじいさんに話しかけると、手持ちポケモンが覚えている技を1つ忘れさせてくれる。<br>
        ひでん技も忘れさせられるため、パーティ編成や技構成の見直しに役立つ。</p>
        クリスタル版では、町にある民家で強力な技を教えてもらうことができる。</p>
        <p><strong>◉ 曜日兄弟:</strong><br>
        土曜日にフスベジムの右手前にある段差の途中に曜日兄弟のツチオが出現する。<br>
        ツチオに話しかけると<strong>のろいのおふだ</strong>がもらえる。</p>
        <p><strong>◉ ポケモン交換:</strong><br>
        フスベシティ東の民家にいる女性はポケモン交換をしてくれる。<br>
        女性の<a href="#" onclick="jumpToPokemonByName('ドードリオ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドードリオ</a>とこちらの<a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a>を交換できるが、ハクリューが♀でないと交換してくれない。</p>
      `,

      // 9. 攻略メモ
      memoHtml: `
        <p><strong>▶ イブキ撃破後は「りゅうのあな」へ行くのを忘れずに:</strong><br>
        フスベジムでイブキに勝った直後はまだライジングバッジをもらえない。ジム奥から行ける<strong>りゅうのあな</strong>の祠で長老と話すことでバッジと「りゅうのいぶき」が手に入るよ。</p>
        <p><strong>▶ ポケモンリーグ挑戦前の準備を整えよう:</strong><br>
        ライジングバッジ入手後は「たきのぼり」も手に入り、ジョウトの8つのジムバッジがすべて揃う。<br>
        ワカバタウンへ戻ってマスターボールを受け取ったら、回復アイテムや技構成を整えてポケモンリーグに挑もう！</p>
      `
    }

);