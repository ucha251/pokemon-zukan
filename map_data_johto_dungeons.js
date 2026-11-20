const JOHTO_DUNGEON_SPOTS = [
  {
    id: "madatsubomi_no_tou",
    name: "マダツボミのとう",
    category: "ダンジョン・施設",
    desc: "キキョウシティにある五重の塔。揺れる大きな柱が特徴で、修行僧たちが集まる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【攻略手順】</strong></td>
            <td>
              <span class="step-badge">1</span> <a href="#" onclick="jumpToMapSpot('johto', 'kikyou_city', 'キキョウシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">キキョウシティ</a>北側から塔に入り、ボウズたちを倒しながら上層へ進む。<br>
              <span class="step-badge">2</span> 3Fの最奥にいる長老に話しかけてバトルに挑む。<br>
              <span class="step-badge">3</span> 長老を倒すと、ひでんマシン05「フラッシュ」をもらえる。<br>
              <span class="step-badge">4</span> 「あなぬけのヒモ」や「テレポート」を使うと帰還がスムーズになるよ！
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
            <td>◎ ◎ ○</td>
            <td>床</td>
          </tr>
          <tr>
            <td>092</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a></td>
            <td>× × ◎</td>
            <td>床</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <p><strong>【1F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ぼうず モクネン</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)
            </td>
            <td>96円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【2F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ぼうず チンネン</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)
            </td>
            <td>96円</td>
          </tr>
          <tr>
            <td><strong>ぼうず エイソウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.3 / くさ・どく)
            </td>
            <td>96円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【3F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ぼうず ソウネン</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.6 / くさ・どく)
            </td>
            <td>192円</td>
          </tr>
          <tr>
            <td><strong>ぼうず カクネン</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.6 / くさ・どく)
            </td>
            <td>192円</td>
          </tr>
          <tr>
            <td><strong>ぼうず カイネン</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.7 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a> (Lv.7 / ノーマル・ひこう)
            </td>
            <td>224円</td>
          </tr>
          <tr>
            <td><strong>ぼうず コウセイ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.7 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マダツボミ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マダツボミ</a> (Lv.7 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a> (Lv.10 / ノーマル・ひこう)
            </td>
            <td>320円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>まひなおし</strong></td><td>[1F] 東端で拾う</td></tr>
          <tr><td><strong>ヨクアタール</strong></td><td>[2F] 北西端で拾う</td></tr>
          <tr><td><strong>キズぐすり</strong></td><td>[3F] 南西端で拾う</td></tr>
          <tr><td><strong>あなぬけのヒモ</strong></td><td>[3F] 北東端で拾う</td></tr>
          <tr><td><strong>ひでんマシン05「フラッシュ」</strong></td><td>[3F] 長老とバトルした後にもらう</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 夜のゴース出現と帰還手段:</strong><br>
      夜になると塔内でゴーストタイプのゴースが出現するよ。<br>
      最上階まで登ったあとは、「あなぬけのヒモ」や「テレポート」を使うと素早く戻れるよ！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ でんき・ひこう・エスパータイプが有利:</strong><br>
      ボウズたちの手持ちはマダツボミが中心なので、ひこう・ほのお・エスパー・むしタイプの技が活躍するよ。<br>
      マダツボミの「つるのムチ」や「ねむりごな」に注意しながら早めに突破しよう！</p>
    `
  },

{
    id: "arufu_no_iseki",
    name: "アルフのいせき",
    category: "ダンジョン・施設",
    desc: "キキョウシティ南西にある古代の遺跡。石版パズルやアンノーン、地下室でのアイテム収集が楽しめる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> アルフのいせきは32番道路に入ってすぐ左にあるゲートから行ける遺跡。<br>
              シナリオ攻略上は訪れる必要がない。<br>
              <span class="step-badge">2</span> アルフのいせきには36番道路からも行くことができるほか、一部のエリアはつながりのどうくつを通らないと行けないようになっている。<br>
              <span class="step-badge">3</span> アルフのいせきには以下の5つのエリアがある。<br>
              ・地下遺跡（中央）<br>
              ・小部屋（北東）<br>
              ・小部屋（北西）<br>
              ・小部屋（南東）<br>
              ・小部屋（南西）<br>
              各小部屋にある石版パズルを完成させると、床が開いて地下遺跡に落ちる。<br>
              地下遺跡には様々なアルファベットの形をした<a href="#" onclick="jumpToPokemonByName('アンノーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">アンノーン</a>が出現し、パズルを完成させていくごとに出現するアンノーンの種類が増えていく。<br>
              <span class="step-badge">4</span> 地下で<a href="#" onclick="jumpToPokemonByName('アンノーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">アンノーン</a>を3種類捕まえると、遺跡内の研究所にいる研究員から<strong>アンノーンずかん</strong>をもらえる。<br>
              <span class="step-badge">5</span> 各小部屋の奥の壁にはアンノーン文字が書かれている。<br>
              これをヒントに小部屋内で特定の行動をすると、奥の壁が壊れてそのさらに奥にある小部屋に行けるようになる。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【遺跡外】</strong></p>
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
            <td>177</td>
            <td><a href="#" onclick="jumpToPokemonByName('ネイティ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ネイティ</a></td>
            <td>◎ ◎ ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>235</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドーブル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドーブル</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>194</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウパー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウパー</a></td>
            <td>× × △<br>◎ ◎ ◎</td>
            <td>草むら<br>水上</td>
          </tr>
          <tr>
            <td>195</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヌオー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヌオー</a></td>
            <td>× × △<br>○ ○ ○</td>
            <td>草むら<br>水上</td>
          </tr>
          <tr>
            <td>129</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>060</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【遺跡内】（地下）</strong></p>
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
            <td>201</td>
            <td><a href="#" onclick="jumpToPokemonByName('アンノーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">アンノーン</a></td>
            <td>◎ ◎ ◎</td>
            <td>床</td>
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
          <tr>
            <td><strong>アンノーンずかん</strong></td>
            <td>[研究所] 地下で<a href="#" onclick="jumpToPokemonByName('アンノーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">アンノーン</a>を3種類以上捕まえた後、地上の研究所にいる研究員からもらえる</td>
          </tr>
          <tr>
            <td><strong>どくけしのみ / きのみ / ちからのこな / ばんのうごな / つきのいし</strong></td>
            <td>[北東の遺跡] 遺跡内で「あなぬけのヒモ」を使って奥の壁を壊し、その先にある小部屋で拾う</td>
          </tr>
          <tr>
            <td><strong>おうごんのみ / ちからのねっこ / ばんのうごな / しんぴのしずく</strong></td>
            <td>[南東の遺跡] 遺跡内で「フラッシュ」を使って奥の壁を壊し、その先にある小部屋で拾う</td>
          </tr>
          <tr>
            <td><strong>ふしぎなきのみ / ほしのかけら / ほしのすな</strong></td>
            <td>[南西の遺跡] リュックに「みずのいし」を持っている状態で遺跡に入って奥の壁を壊し、その先にある小部屋で拾う</td>
          </tr>
          <tr>
            <td><strong>ふしぎなきのみ / おうごんのみ / もくたん / ふっかつそう</strong></td>
            <td>[北西の遺跡] 手持ちの先頭を<a href="#" onclick="jumpToPokemonByName('ホウオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホウオウ</a>にした状態で遺跡に入って奥の壁を壊し、その先にある小部屋で拾う</td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    subEventHtml: `
      <p><strong>◉ 石版パズルとアンノーン図鑑:</strong><br>
      石版パズルを解いて床が抜けたあと、脱出してイベントを進めるとアンノーンが現れるようになるよ。<br>
      種類がたくさんいるので、図鑑埋めやコレクションに挑戦するのも楽しいよ！</p>
      <p><strong>◉ 小部屋のアンノーン文字:</strong><br>
      北東の小部屋：ANANUKE（アイテム「あなぬけのヒモ」を使う）</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    memoHtml: `
      <p><strong>▶ 「あなぬけのヒモ」を忘れずに用意:</strong><br>
      パズルを解いて下の部屋に落ちたあと、「あなぬけのヒモ」があるとスムーズに外へ出られるよ。<br>
      先に1つ持っておくと安心だよ！</p>
      <p><strong>▶ なぞのでんぱ:</strong><br>
      アルフのいせき内でポケギアのラジオのチャンネルを13.5にすると、「なぞのでんぱ」を受信して謎の放送が流れる。</p>
    `
  },

{
    id: "tsunagari_no_doukutsu",
    name: "つながりのどうくつ",
    category: "ダンジョン・施設",
    desc: "32番道路と33番道路をつなぐ洞窟。ひでんマシン「なみのり」や「かいりき」を覚えると奥のエリアへ進めるようになる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 32番道路から洞窟に入り、トレーナーを倒しながら33番道路側へ抜ける。<br>
              <span class="step-badge">2</span> 序盤では水場や岩に阻まれて行けない場所が多いため、まずは通り抜けを優先しよう。<br>
              <span class="step-badge">3</span> ストーリーが進んで「なみのり」や「かいりき」を使えるようになったら、再訪して奥のエリアやアイテムを回収しよう！
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【1F】</strong></p>
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
            <td>洞窟</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>095</td>
            <td><a href="#" onclick="jumpToPokemonByName('イワーク'); return false;" style="color:#2b6cb0; text-decoration:underline;">イワーク</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>027</td>
            <td><a href="#" onclick="jumpToPokemonByName('サンド'); return false;" style="color:#2b6cb0; text-decoration:underline;">サンド</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>194</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウパー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウパー</a></td>
            <td>× × ○<br>◎ ◎ ◎</td>
            <td>洞窟<br>水上</td>
          </tr>
          <tr>
            <td>195</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヌオー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヌオー</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>129</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>118</td>
            <td><a href="#" onclick="jumpToPokemonByName('トサキント'); return false;" style="color:#2b6cb0; text-decoration:underline;">トサキント</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>119</td>
            <td><a href="#" onclick="jumpToPokemonByName('アズマオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アズマオウ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B1F】</strong></p>
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
            <td>洞窟</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>095</td>
            <td><a href="#" onclick="jumpToPokemonByName('イワーク'); return false;" style="color:#2b6cb0; text-decoration:underline;">イワーク</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>194</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウパー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウパー</a></td>
            <td>× × ○<br>◎ ◎ ◎</td>
            <td>洞窟<br>水上</td>
          </tr>
          <tr>
            <td>195</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヌオー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヌオー</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>129</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>118</td>
            <td><a href="#" onclick="jumpToPokemonByName('トサキント'); return false;" style="color:#2b6cb0; text-decoration:underline;">トサキント</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>119</td>
            <td><a href="#" onclick="jumpToPokemonByName('アズマオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アズマオウ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B2F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>◎ ◎ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>095</td>
            <td><a href="#" onclick="jumpToPokemonByName('イワーク'); return false;" style="color:#2b6cb0; text-decoration:underline;">イワーク</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>195</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヌオー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヌオー</a></td>
            <td>× × ○<br>○ ○ ○</td>
            <td>洞窟<br>水上</td>
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
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）</td>
          </tr>
          <tr>
            <td>098</td>
            <td><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>099</td>
            <td><a href="#" onclick="jumpToPokemonByName('キングラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キングラー</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>222</td>
            <td><a href="#" onclick="jumpToPokemonByName('サニーゴ'); return false;" style="color:#2b6cb0; text-decoration:underline;">サニーゴ</a></td>
            <td>○ ○ ×<br>○ ○ ×</td>
            <td>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>120</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヒトデマン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒトデマン</a></td>
            <td>× × ○<br>× × ○</td>
            <td>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>やまおとこ ユウゴ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('イワーク'); return false;" style="color:#2b6cb0; text-decoration:underline;">イワーク</a> (Lv.11 / いわ・じめん)
            </td>
            <td>352円</td>
          </tr>
          <tr>
            <td><strong>やまおとこ ダイサク</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a> (Lv.4 / いわ・じめん)<br>
              <a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a> (Lv.6 / いわ・じめん)<br>
              <a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a> (Lv.8 / いわ・じめん)
            </td>
            <td>256円</td>
          </tr>
          <tr>
            <td><strong>ひふきやろう フクオ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.6 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.6 / どく)
            </td>
            <td>288円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア タダヒコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ヤドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドン</a> (Lv.10 / みず・エスパー)
            </td>
            <td>600円</td>
          </tr>
          <tr>
            <td><strong>ひふきやろう ノリヤス</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ロコン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ロコン</a> (Lv.9 / ほのお)
            </td>
            <td>432円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>プラスパワー</strong></td><td>[1F] 北西端で拾う</td></tr>
          <tr><td><strong>スーパーボール</strong></td><td>[1F] 東端で拾う</td></tr>
          <tr><td><strong>キズぐすり</strong></td><td>[1F] 西端で拾う</td></tr>
          <tr><td><strong>ねむけざまし</strong></td><td>[1F] 南端で拾う</td></tr>
          <tr><td><strong>ディフェンダー</strong></td><td>[B1F北エリア] 南東端で拾う</td></tr>
          <tr><td><strong>わざマシン39「スピードスター」</strong></td><td>[B1F北エリア] 南西の通路の先で拾う</td></tr>
          <tr><td><strong>ピーピーエイダー</strong></td><td>[B2F] 北東端で拾う（要なみのり）</td></tr>
          <tr><td><strong>すごいキズぐすり</strong></td><td>[B2F] 中央付近の足場で拾う（要なみのり）</td></tr>
        </tbody>
      </table>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:38%;">入手方法・入手場所</th>
            <th style="width:30%;">初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>131</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラプラス'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ラプラス</a></td>
            <td>毎週金曜日に<a href="#" onclick="jumpToMapSpot('johto', 'tsunagari_no_doukutsu', 'つながりのどうくつ'); return false;" style="color:#2b6cb0; text-decoration:underline;">つながりのどうくつ</a>（B2F）の地底湖にラプラスがシンボル出現。倒したり捕まえても翌週金曜日になると復活する。</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:20<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    subEventHtml: `
      <p><strong>◉ 「なみのり」後の再探索:</strong><br>
      「なみのり」を覚えたあとで訪れると、水辺を渡った先のエリアへ進めるようになるよ。<br>
      わざマシンや回復アイテムなどが手に入るから、中盤以降に立ち寄ってみよう！</p>
      <p><strong>◉ ラプラス出現:</strong><br>
      金曜日に繋がりの洞窟B2Fに行く。<br>
      水上を波乗りして手前に進んでいき、一番手前まで進むとラプラスがいて、バトルしてゲットできる。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ みず・くさ・でんき・かくとうタイプが有利:</strong><br>
      イシツブテやイワークなど、いわ・じめんタイプのポケモンが多く出現するよ。<br>
      みずタイプや草タイプの技があるとサクサク進めるよ！</p>
      <p><strong>▶ ズバットの「ちょうおんぱ」に注意:</strong><br>
      こんらん状態になると連続で攻撃できなくなることがある。<br>
      「きずぐすり」や状態異常回復アイテムを少し持っておくと安心だよ！</p>
    `
  },

  {
    id: "yadon_no_ido",
    name: "ヤドンのいど",
    category: "ダンジョン・施設",
    desc: "ヒワダタウンにある地下の井戸。ロケット団の占拠イベントの舞台であり、奥深くにはヤドンたちが暮らす空間が広がる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【ロケット団占拠イベント】</strong></td>
            <td>
              <span class="step-badge">1</span> <a href="#" onclick="jumpToMapSpot('johto', 'hiwada_town', 'ヒワダタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヒワダタウン</a>のヤドンのいどに入り、地下へ進む。<br>
              <span class="step-badge">2</span> 井戸の中でロケット団員たちとバトルしながら奥へ進む。<br>
              <span class="step-badge">3</span> 最奥にいる<strong>ロケット団幹部</strong>を倒すと、ロケット団は井戸から引き揚げる。<br>
              <span class="step-badge">4</span> イベント終了後、ガンテツから<strong>ルアーボール</strong>をもらえるよ！<br>
              <span class="step-badge">5</span> あとで「なみのり」を覚えたあとに再訪すると、B2Fの水辺の先にあるアイテムや男性からの道具も入手できるよ。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【B1F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>◎ ◎ ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>079</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヤドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドン</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎</td>
            <td>洞窟<br>水上</td>
          </tr>
          <tr>
            <td>129</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>118</td>
            <td><a href="#" onclick="jumpToPokemonByName('トサキント'); return false;" style="color:#2b6cb0; text-decoration:underline;">トサキント</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>119</td>
            <td><a href="#" onclick="jumpToPokemonByName('アズマオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アズマオウ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B2F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>◎ ◎ ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>079</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヤドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドン</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎</td>
            <td>洞窟<br>水上</td>
          </tr>
          <tr>
            <td>080</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヤドラン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドラン</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>129</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>118</td>
            <td><a href="#" onclick="jumpToPokemonByName('トサキント'); return false;" style="color:#2b6cb0; text-decoration:underline;">トサキント</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>119</td>
            <td><a href="#" onclick="jumpToPokemonByName('アズマオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アズマオウ</a></td>
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
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.9 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.9 / ノーマル)
            </td>
            <td>360円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.9 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('アーボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボ</a> (Lv.11 / どく)
            </td>
            <td>440円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.7 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.9 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.9 / どく・ひこう)
            </td>
            <td>360円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.14 / どく)
            </td>
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
          <tr><td><strong>いいキズぐすり</strong></td><td>[B1F] 北側の足場で拾う</td></tr>
          <tr><td><strong>わざマシン18「あまごい」</strong></td><td>[B2F] 北東の足場で拾う（要なみのり）</td></tr>
          <tr><td><strong>おうじゃのしるし</strong></td><td>[B2F] 北西の足場にいる男性からもらえる（要なみのり）</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 「なみのり」習得後の再探索:</strong><br>
      「なみのり」を覚えたあとでB2Fの水辺を進むと、まだ取っていないアイテムを回収できるよ。<br>
      ヒワダタウンに立ち寄ったついでにチェックしてみよう！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    memoHtml: `
      <p><strong>▶ でんき・くさ・むしタイプが有利:</strong><br>
      ロケット団のズバットやラッタ、野生のヤドン・ヤドランに対して、でんきタイプやくさタイプの技が戦いやすいよ。<br>
      回復アイテムを十分に用意してから奥へ進もう！</p>
      <p><strong>▶ ヤドンの手紙:</strong><br>
      右側のヤドンを調べるとメールを持っていて読むことができる。<br>
      内容はガンテツの息子からガンテツの孫に宛てたらしき手紙。</p>
    `
  },

{
    id: "ubame_no_mori",
    name: "ウバメのもり",
    category: "ダンジョン・施設",
    desc: "ヒワダタウンから34番道路へ抜ける深い森。カモねぎイベントやひでんマシン「いあいぎり」の入手など、ストーリー進行に重要なスポット。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【通り抜け・イベント】</strong></td>
            <td>
              <span class="step-badge">1</span> <a href="#" onclick="jumpToMapSpot('johto', 'hiwada_town', 'ヒワダタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ヒワダタウン</a>西側からウバメのもりに入る。<br>
              <span class="step-badge">2</span> 森の中でカモねぎを探し、カモねぎのいる方から話しかけて追いやることで元のトレーナーのもとへ戻す。<br>
              <span class="step-badge">3</span> 逃げたカモねぎを元のトレーナーへ戻すと、お礼として<strong>ひでんマシン01「いあいぎり」</strong>をもらえる。<br>
              <span class="step-badge">4</span> 「いあいぎり」を使えるようになったら森の中の細い木を切り、34番道路側へ抜けてコガネシティ方面へ進もう！
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
            <td>046</td>
            <td><a href="#" onclick="jumpToPokemonByName('パラス'); return false;" style="color:#2b6cb0; text-decoration:underline;">パラス</a></td>
            <td>△ △ △</td>
            <td>森</td>
          </tr>
          <tr>
            <td>010</td>
            <td><a href="#" onclick="jumpToPokemonByName('キャタピー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キャタピー</a></td>
            <td>○ ○ ×</td>
            <td>森</td>
          </tr>
          <tr>
            <td>011</td>
            <td><a href="#" onclick="jumpToPokemonByName('トランセル'); return false;" style="color:#2b6cb0; text-decoration:underline;">トランセル</a></td>
            <td>○ ○ ×</td>
            <td>森</td>
          </tr>
          <tr>
            <td>013</td>
            <td><a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a></td>
            <td>○ ○ ×</td>
            <td>森</td>
          </tr>
          <tr>
            <td>014</td>
            <td><a href="#" onclick="jumpToPokemonByName('コクーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コクーン</a></td>
            <td>○ ○ ×</td>
            <td>森</td>
          </tr>
          <tr>
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>△ △ ×</td>
            <td>森</td>
          </tr>
          <tr>
            <td>043</td>
            <td><a href="#" onclick="jumpToPokemonByName('ナゾノクサ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ナゾノクサ</a></td>
            <td>× × ◎</td>
            <td>森</td>
          </tr>
          <tr>
            <td>048</td>
            <td><a href="#" onclick="jumpToPokemonByName('コンパン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コンパン</a></td>
            <td>× × ○</td>
            <td>森</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × △</td>
            <td>森</td>
          </tr>
          <tr>
            <td>054</td>
            <td><a href="#" onclick="jumpToPokemonByName('コダック'); return false;" style="color:#2b6cb0; text-decoration:underline;">コダック</a></td>
            <td>× × ○<br>◎ ◎ ◎</td>
            <td>森<br>水上</td>
          </tr>
          <tr>
            <td>055</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルダック'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルダック</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
          </tr>
          <tr>
            <td>129</td>
            <td><a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a></td>
            <td>◎ ◎ ◎<br>○ ○ ○<br>○ ○ ○</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
          <tr>
            <td>060</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a></td>
            <td>○ ○ ○<br>◎ ◎ ◎<br>◎ ◎ ◎</td>
            <td>釣り（ボロのつりざお）<br>釣り（いいつりざお）<br>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>むしとり ケンイチ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('レディバ'); return false;" style="color:#2b6cb0; text-decoration:underline;">レディバ</a> (Lv.8 / むし・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('パラス'); return false;" style="color:#2b6cb0; text-decoration:underline;">パラス</a> (Lv.10 / むし・くさ)
            </td>
            <td>160円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ひでんマシン01「いあいぎり」</strong></td><td>森を逃げ回るスミ職人の<a href="#" onclick="jumpToPokemonByName('カモネギ'); return false;" style="color:#2b6cb0; text-decoration:underline;">カモネギ</a>を捕まえると、スミ職人の親方からお礼としてもらえる</td></tr>
          <tr><td><strong>げんきのかけら</strong></td><td>南東で拾う</td></tr>
          <tr><td><strong>プラスパワー</strong></td><td>北西の池の手前で拾う</td></tr>
          <tr><td><strong>どくけし</strong></td><td>北西の池から右に少し進んだ所で拾う</td></tr>
          <tr><td><strong>ピーピーエイド</strong></td><td>北東端で拾う</td></tr>
          <tr><td><strong>わざマシン02「ずつき」</strong></td><td>森の中央付近の段差の上にいる男性からもらう（森の北東から回り込んで来ると行ける）</td></tr>
          <tr><td><strong>わざマシン12「あまいかおり」</strong></td><td>北ゲートにいる警備員の女性からもらう</td></tr>
        </tbody>
      </table>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:38%;">入手方法・入手場所</th>
            <th style="width:30%;">初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>251</td>
            <td><a href="#" onclick="jumpToPokemonByName('セレビィ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">セレビィ</a></td>
            <td>ジーエスボール入手後、ウバメモリの祠にジーエスボールを置くとバトルになる。</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:30<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし<br>
              技:いやしのすず・しんぴのまもり・げんしのちから・みらいよち
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 祠（ほこら）のイベント:</strong><br>
      森の奥にある祠を調べるとイベントが発生するよ。<br>
      ストーリーが進行したあとに訪れると特別な展開につながるよ！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ひこう・ほのお・いわ・エスパータイプが有利:</strong><br>
      むしタイプやくさタイプのポケモンが多い森なので、ひこう・ほのお・いわタイプの技があると戦いやすいよ。<br>
      森内は入り組んでいて迷いやすいため、アイテム回収と出口へのルートを順番に確認しながら進もう！</p>
    `
  },

  {
    id: "radio_tower",
    name: "ラジオ塔",
    category: "ダンジョン・施設",
    desc: "コガネシティにある大きな放送局。ラジオカード入手のクイズイベントや、後半のロケット団占拠イベントの舞台になる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> ラジオ塔は<a href="#" onclick="jumpToMapSpot('johto', 'kogane_city', 'コガネシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">コガネシティ</a>にある施設。<br>
              ラジオ塔の1階受付でクイズに答えて<strong>ラジオカード</strong>をもらうと、ポケギアでラジオが聞けるようになる。
            </td>
          </tr>
          <tr>
            <td><strong>【ジムリーダー ヤナギ撃破後】</strong></td>
            <td>
              <span class="step-badge">1</span> タンバシティ、アサギシティ、チョウジタウンにある3つのジムを全て攻略後、ウツギ博士からロケット団について電話がかかってくる。<br>
              その後にコガネシティに来るとロケット団にラジオ塔が占拠されている。<br>
              <span class="step-badge">2</span> ラジオ塔に入り、ロケット団員を倒しながら上階へ上がる。<br>
              <span class="step-badge">3</span> ラジオ塔5F左側の小部屋でニセ局長のロケット団員幹部とバトル。<br>
              バトル後、本物の局長の居場所を聞き、<strong>ちかのカギ</strong>をもらう。<br>
              <span class="step-badge">4</span> コガネシティの<strong>地下通路</strong>へ向かう。<br>
              地下通路から右に伸びる細い廊下を進み、奥のドアを地下のカギで開いてロケット団のいるエリアへ。
            </td>
          </tr>
          <tr>
            <td><strong>【カードキー入手後】</strong></td>
            <td>
              <span class="step-badge">1</span> 地下通路を進み、コガネ百貨店B2Fにいる本物のラジオ局長から<strong>カードキー</strong>をもらったらラジオ塔に戻ってくる。<br>
              <span class="step-badge">2</span> ラジオ塔3F右側でシャッターが閉まっているので、シャッターの左奥にある装置を調べてカードキーを通す。<br>
              開いたシャッターから奥に進む。<br>
              <span class="step-badge">3</span> 階段を上がって5Fの第1スタジオまで行く。<br>
              幹部を1人倒して放送コーナーに入るとイベント。<br>
              ロケット団幹部とバトル。<br>
              <span class="step-badge">4</span> バトル後、ラジオ局長から<strong>とうめいなスズ</strong>をもらう。<br>
              ※この時点でエンジュシティにある<strong>スズのとう</strong>に入れるようになり、1Fで<strong>スイクン</strong>とバトルできる。<br>
              スズのとうでは後で<strong>ホウオウ</strong>ともバトルできるが、現時点では出現しない。<br>
              ★参考：スイクン入手方法、ホウオウ・ルギア入手方法<br>
              <span class="step-badge">5</span> チョウジタウンまで戻り、町の東出口から<strong>44番道路</strong>へ向かう。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <p><strong>【1F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a> (Lv.24 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a> (Lv.24 / ノーマル)
            </td>
            <td>960円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【2F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('アーボック'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボック</a> (Lv.26 / どく)
            </td>
            <td>1040円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.21 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.21 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.23 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.23 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.23 / ノーマル)
            </td>
            <td>920円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.26 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.26 / どく・ひこう)
            </td>
            <td>1040円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベトン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベトン</a> (Lv.25 / どく)
            </td>
            <td>1000円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【3F 左側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マタドガス'); return false;" style="color:#2b6cb0; text-decoration:underline;">マタドガス</a> (Lv.26 / どく)
            </td>
            <td>1040円</td>
          </tr>
          <tr>
            <td><strong>はぐれけんきゅういん カネオ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.27 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.27 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.27 / でんき・はがね)
            </td>
            <td>2700円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.23 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.23 / ノーマル)
            </td>
            <td>920円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【4F 左側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.22 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a> (Lv.24 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.22 / どく)
            </td>
            <td>880円</td>
          </tr>
          <tr>
            <td><strong>はぐれけんきゅういん シンタロウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ポリゴン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポリゴン</a> (Lv.30 / ノーマル)
            </td>
            <td>3000円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【5F 左側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん かんぶ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.30 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.30 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.30 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マタドガス'); return false;" style="color:#2b6cb0; text-decoration:underline;">マタドガス</a> (Lv.32 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.30 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.30 / どく)
            </td>
            <td>2160円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【3F 右側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a> (Lv.24 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.26 / どく)
            </td>
            <td>1040円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【4F 右側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん かんぶ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a> (Lv.36 / どく・ひこう)
            </td>
            <td>2592円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('アーボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボ</a> (Lv.21 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('アーボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボ</a> (Lv.21 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('クサイハナ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クサイハナ</a> (Lv.24 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ナゾノクサ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ナゾノクサ</a> (Lv.23 / くさ・どく)
            </td>
            <td>960円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【5F 右側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん かんぶ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('アーボック'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボック</a> (Lv.32 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ヤミカラス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤミカラス</a> (Lv.32 / あく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ラフレシア'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラフレシア</a> (Lv.32 / くさ・どく)
            </td>
            <td>2304円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん かんぶ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('デルビル'); return false;" style="color:#2b6cb0; text-decoration:underline;">デルビル</a> (Lv.33 / あく・ほのお)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.33 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ヘルガー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヘルガー</a> (Lv.35 / あく・ほのお)
            </td>
            <td>2520円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ラジオカード</strong></td><td>[1F] 受付にいる女性（右側）が出すクイズに5問正解するともらえる</td></tr>
          <tr><td><strong>ブルーカード</strong></td><td>[2F] ロケット団に占拠されていないときに、放送室にいる女性（DJアオイ）に話しかけるともらえる</td></tr>
          <tr><td><strong>わざマシン11「にほんばれ」</strong></td><td>[3F] ラジオ塔を占拠したロケット団を撃退後、フロア中央付近にいる女性に話しかけるともらえる</td></tr>
          <tr><td><strong>ピンクのリボン</strong></td><td>[4F] ラジオ塔を占拠したロケット団を撃退後、放送室にいる女性（DJクルミ）に話しかけるともらえる</td></tr>
          <tr><td><strong>ちかのカギ</strong></td><td>[5F] ロケット団がラジオ塔占拠後、局長室にいるニセ局長を倒すともらえる</td></tr>
          <tr><td><strong>ハイパーボール</strong></td><td>[5F] ロケット団がラジオ塔占拠後、右側の放送室の左端で拾う</td></tr>
          <tr><td><strong>とうめいなスズ</strong></td><td>[5F] ラジオ塔を占拠したロケット団を撃退後、本物の局長からもらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    subEventHtml: `
      <p><strong>◉ ラジオ番組の聴取:</strong><br>
      ラジオカードを入手すると、時間帯や場所によってさまざまな番組や音楽を楽しめるようになるよ。<br>
      一部のイベントやポケモン出現条件にも関わってくるから活用してみよう！</p>
      <p><strong>◉ IDくじ:</strong><br>
      ラジオ塔1階左側の受付ではIDくじの景品が受け取れる。<br>
      ラジオ番組「ラッキーチャンネル」では毎週金曜日にラッキーナンバーが発表されるが、ラッキーナンバーが所持ポケモンの親IDと一定桁数以上一致していると景品がもらえる。<br>
      もらえる景品と条件は以下。<br>
      （ロケット団の事件中はIDくじができないので注意）</p>
      <table class="excel-table" style="margin-top:6px; margin-bottom:10px;">
        <thead><tr><th style="width:35%;">景品アイテム</th><th>入手条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ポイントアップ</strong></td><td>ID下2桁一致</td></tr>
          <tr><td><strong>がくしゅうそうち</strong></td><td>ID下3桁一致</td></tr>
          <tr><td><strong>マスターボール</strong></td><td>ID5桁全て一致</td></tr>
        </tbody>
      </table>
      <p><strong>◉ アオイの合言葉:</strong><br>
      ラジオ塔2階の右手前の放送室にDJアオイがいて<strong>ブルーカード</strong>がもらえる。<br>
      その後、毎日18:00〜24:00に放送されるラジオ番組「アオイのあいことば」で公開される合言葉をアオイに伝えると、ポイントがもらえる。<br>
      アオイに合言葉を言えるのは1日1回まで。<br>
      1回あたり1ポイントがブルーカードに貯まる。<br>
      貯めたポイントは、放送室外にいる女性に話しかけると以下の景品アイテムと交換してもらえる。<br>
      また、30ポイント貯めてアオイに話しかけると、アオイの電話番号をポケギアに登録できる。</p>
      <table class="excel-table" style="margin-top:6px;">
        <thead><tr><th style="width:35%;">景品</th><th>ポイント</th></tr></thead>
        <tbody>
          <tr><td><strong>ハイパーボール</strong></td><td>2</td></tr>
          <tr><td><strong>かいふくのくすり</strong></td><td>2</td></tr>
          <tr><td><strong>きんのたま</strong></td><td>3</td></tr>
          <tr><td><strong>ふしぎなアメ</strong></td><td>3</td></tr>
          <tr><td><strong>タウリン</strong></td><td>5</td></tr>
          <tr><td><strong>ブロムヘキシン</strong></td><td>5</td></tr>
          <tr><td><strong>インドメタシン</strong></td><td>5</td></tr>
          <tr><td><strong>リゾチウム</strong></td><td>5</td></tr>
          <tr><td><strong>マックスアップ</strong></td><td>5</td></tr>
        </tbody>
      </table>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 回復アイテムを多めに用意:</strong><br>
      ロケット団占拠イベント中は連戦になりやすいため、キズぐすり系や状態異常回復を十分に用意しておこう。<br>
      5Fの幹部戦に備えて、主力のHPとPPもしっかり整えてから挑もう！</p>
    `
  },

{
    id: "kogane_chika_tsuro",
    name: "地下通路",
    category: "ダンジョン・施設",
    desc: "コガネシティの南北をつなぐ地下通路。通常時はトレーナー戦やショップ・床屋などが並び、ロケット団事件中は隠れアジトへのルートになる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 地下通路は<a href="#" onclick="jumpToMapSpot('johto', 'kogane_city', 'コガネシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">コガネシティ</a>の地下にある施設。<br>
              コガネシティ初訪問時は必ずしも訪れる必要はないが、<strong>ゲームコーナー</strong>で遊ぶための<strong>コインケース</strong>を拾える。
            </td>
          </tr>
          <tr>
            <td><strong>【ちかのカギ入手後】</strong></td>
            <td>
              <span class="step-badge">1</span> <a href="#" onclick="jumpToMapSpot('johto', 'radio_tower', 'ラジオ塔'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ラジオ塔</a>5Fでニセ局長を倒して<strong>ちかのカギ</strong>を入手した後、本物の局長を助けにコガネ地下通路へ向かう。<br>
              <span class="step-badge">2</span> 地下通路B1Fから右に伸びる廊下を進み、奥の扉を地下のカギで開く。<br>
              階段から降りてB2Fへ。<br>
              <span class="step-badge">3</span> 地下通路B2Fに降りて少し進むとイベント。<br>
              <strong>ライバル</strong>とバトル。<br>
              <span class="step-badge">4</span> 地下通路B2Fの奥側の壁にはスイッチが3つあり、押すとオン/オフを切り替えられて特定のシャッターが開閉する。<br>
              左から順にスイッチ3→2→1の順に押し、右手前の方向に通路を進んでいけば最奥の扉まで行ける。<br>
              扉からコガネ百貨店B2Fへ。<br>
              <span class="step-badge">5</span> したっぱを倒しながら百貨店B2Fを最奥まで進むと本物の局長が捕らえられている。<br>
              局長から<strong>カードキー</strong>をもらう。<br>
              <span class="step-badge">6</span> 近くの階段から百貨店B1Fへ。<br>
              エレベーターで1Fに上がって百貨店の外に出る。<br>
              コガネシティの<a href="#" onclick="jumpToMapSpot('johto', 'radio_tower', 'ラジオ塔'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラジオ塔</a>の3階へ。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <p><strong>【地下通路 B1F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>りかけいのおとこ カズヒト</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.11 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.11 / どく)
            </td>
            <td>352円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア マサシ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ベロリンガ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベロリンガ</a> (Lv.12 / ノーマル)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>りかけいのおとこ テルキ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.7 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('ビリリダマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビリリダマ</a> (Lv.11 / でんき)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.7 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.9 / でんき・はがね)
            </td>
            <td>288円</td>
          </tr>
          <tr>
            <td><strong>かいじゅうマニア ヒロアキ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ヤドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドン</a> (Lv.10 / みず・エスパー)<br>
              <a href="#" onclick="jumpToPokemonByName('ヤドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドン</a> (Lv.10 / みず・エスパー)
            </td>
            <td>600円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【地下通路 B2F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ライバル</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a> (Lv.30 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.28 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.30 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ニューラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニューラ</a> (Lv.32 / あく・こおり)<br>
              <a href="#" onclick="jumpToPokemonByName('バクフーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">バクフーン</a> (Lv.32 / ほのお)<br>
              <a href="#" onclick="jumpToPokemonByName('オーダイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">オーダイル</a> (Lv.32 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('メガニウム'); return false;" style="color:#2b6cb0; text-decoration:underline;">メガニウム</a> (Lv.32 / くさ)
            </td>
            <td>1920円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.27 / ノーマル)
            </td>
            <td>1080円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ベトベトン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベトン</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.25 / ノーマル)
            </td>
            <td>1000円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.24 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベトン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベトン</a> (Lv.24 / どく)
            </td>
            <td>960円</td>
          </tr>
          <tr>
            <td><strong>かじばドロボウ ノリオ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ガーディ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ガーディ</a> (Lv.26 / ほのお)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.24 / どく)
            </td>
            <td>2112円</td>
          </tr>
          <tr>
            <td><strong>かじばドロボウ ヤスジ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ブーバー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ブーバー</a> (Lv.25 / ほのお)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.23 / どく)
            </td>
            <td>2024円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('クサイハナ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クサイハナ</a> (Lv.25 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('クサイハナ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クサイハナ</a> (Lv.25 / くさ・どく)
            </td>
            <td>1000円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【コガネ百貨店 B2F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a> (Lv.24 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a> (Lv.24 / どく・ひこう)
            </td>
            <td>960円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.26 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('マタドガス'); return false;" style="color:#2b6cb0; text-decoration:underline;">マタドガス</a> (Lv.23 / どく)
            </td>
            <td>920円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.25 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.25 / どく)
            </td>
            <td>1000円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <p><strong>【地下通路】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>コインケース</strong></td><td>[B1F] 通路の途中で拾う。漢方屋が来るカウンターの手前の方</td></tr>
          <tr><td><strong>けむりだま</strong></td><td>[B2F] ちかのカギ入手後、南西で拾う</td></tr>
          <tr><td><strong>なんでもなおし</strong></td><td>[B2F] ちかのカギ入手後、中央付近で拾う</td></tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【コガネ百貨店地下】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ピーピーエイド / やけどなおし / ハイパーボール</strong></td><td>[B1F] それぞれ南/北西/南東で拾う（通路を塞ぐ荷物の配置はエレベーターで別の階に行き来すると変わるので、何度か往復すると全てのアイテムを拾い集めることができる）</td></tr>
          <tr><td><strong>おまもりこばん</strong></td><td>[B1F] ちかのカギ入手後、北東で拾う（B2Fの階段から来られる）</td></tr>
          <tr><td><strong>ハイパーボール</strong></td><td>[B2F] ちかのカギ入手後、北西で拾う</td></tr>
          <tr><td><strong>ピーピーリカバー</strong></td><td>[B2F] ちかのカギ入手後、南東で拾う</td></tr>
          <tr><td><strong>わざマシン35「ねごと」</strong></td><td>[B2F] ちかのカギ入手後、捕らえられたラジオ局長の横で拾う</td></tr>
          <tr><td><strong>カードキー</strong></td><td>[B2F] ちかのカギ入手後、本物のラジオ塔局長からもらう</td></tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【カンポー屋】</strong>（土・日曜日のみ営業）</p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ちからのこな</strong></td><td>500円</td></tr>
          <tr><td><strong>ちからのねっこ</strong></td><td>800円</td></tr>
          <tr><td><strong>ばんのうごな</strong></td><td>450円</td></tr>
          <tr><td><strong>ふっかつそう</strong></td><td>2800円</td></tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【安売り道具屋】</strong>（月曜日の朝 04:00〜09:00 のみ営業）</p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>きんのたま</strong></td><td>4500円</td></tr>
          <tr><td><strong>しんじゅ</strong></td><td>650円</td></tr>
          <tr><td><strong>おおきなしんじゅ</strong></td><td>3500円</td></tr>
          <tr><td><strong>ほしのすな</strong></td><td>900円</td></tr>
          <tr><td><strong>ほしのかけら</strong></td><td>4600円</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    subEventHtml: `
      <p><strong>◉ 地下の施設利用:</strong><br>
      地下通路周辺には、おくりものや・床屋（ポケモンを毛づくろいしてもらえる）などの施設があるよ。<br>
      なつき度を上げたいポケモンがいるときや、気分転換に立ち寄ってみよう！</p>
      <p><strong>◉ ポケモン美容室:</strong><br>
      散髪兄弟のポケモン美容室では、手持ちの先頭のポケモン1匹を散髪してなつき度を上げることができる。<br>
      兄は火・木・土曜日に出現し、500円で散髪してポケモンのなつき度を上げてくれる。<br>
      弟は日・水・金曜日に現れるがあまり腕が良くない。<br>
      300円で散髪してもらうと、ランダムで成功すればなつき度が上がるが、失敗すると下がってしまう。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    memoHtml: `
      <p><strong>▶ ロケット団アジト突入前は回復を万全に:</strong><br>
      「ちかのカギ」で扉を開けた先は連戦になりやすいよ。<br>
      キズぐすり系やPP回復アイテムをしっかり用意してから進もう！</p>
      <p><strong>▶ 漢方屋:</strong><br>
      カンポー屋は土曜日と日曜日に営業し、漢方薬のアイテムを販売する。<br>
      漢方薬ではポケモンを回復できるが、苦いのでなつき度が下がってしまう。</p>
      <p><strong>▶ 安売り道具屋:</strong><br>
      やすうりどうぐやは月曜日の朝（04:00〜09:00）のみ営業で、フレンドリィショップに高値で売れるアイテムを販売する。<br>
      ここで道具を買ってフレンドリィショップで売れればお金稼ぎになる。</p>
      <p><strong>▶ コガネ百貨店:</strong><br>
      地下通路の地下2階を進んでいくと、コガネシティの百貨店地下2階に出る。</p>
      <p><strong>▶ ドアのカギ:</strong><br>
      地下通路B1Fの右端のドアは初めカギがかかっていて通れない。<br>
      ロケット団のラジオ塔占拠事件以降に通れるようになる。</p>
    `
  },

{
    id: "shizen_kouen",
    name: "しぜんこうえん",
    category: "ダンジョン・施設",
    desc: "35番道路と36番道路の間にある大きな公園。虫取り大会の会場にもなっており、普段とは違うポケモンに出会えることも。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【通り抜け・探索】</strong></td>
            <td>
              <span class="step-badge">1</span> 35番道路からしぜんこうえんに入り、園内の草むらや歩道を通り抜けて36番道路側へ進む。<br>
              <span class="step-badge">2</span> 園内のアイテムを回収しつつ、花壇やベンチ周辺なども忘れずにチェックしよう。<br>
              <span class="step-badge">3</span> 36番道路へ抜けると、ウソッキーイベントやエンジュシティ方面へのルートにつながるよ！
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
            <td>016</td>
            <td><a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>029</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニドラン♀'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニドラン♀</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>032</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニドラン♂'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニドラン♂</a></td>
            <td>○ ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>010</td>
            <td><a href="#" onclick="jumpToPokemonByName('キャタピー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キャタピー</a></td>
            <td>△ △ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>013</td>
            <td><a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a></td>
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
            <td>191</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヒマナッツ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒマナッツ</a></td>
            <td>× ○ ×</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>163</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホーホー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホーホー</a></td>
            <td>× × ◎</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>048</td>
            <td><a href="#" onclick="jumpToPokemonByName('コンパン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コンパン</a></td>
            <td>× × ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>054</td>
            <td><a href="#" onclick="jumpToPokemonByName('コダック'); return false;" style="color:#2b6cb0; text-decoration:underline;">コダック</a></td>
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

      <p style="margin-top:14px;"><strong>【虫取り大会】</strong></p>
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
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>011</td>
            <td><a href="#" onclick="jumpToPokemonByName('トランセル'); return false;" style="color:#2b6cb0; text-decoration:underline;">トランセル</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>013</td>
            <td><a href="#" onclick="jumpToPokemonByName('ビードル'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビードル</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>014</td>
            <td><a href="#" onclick="jumpToPokemonByName('コクーン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コクーン</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>046</td>
            <td><a href="#" onclick="jumpToPokemonByName('パラス'); return false;" style="color:#2b6cb0; text-decoration:underline;">パラス</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>048</td>
            <td><a href="#" onclick="jumpToPokemonByName('コンパン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コンパン</a></td>
            <td>○ ○ ○</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>012</td>
            <td><a href="#" onclick="jumpToPokemonByName('バタフリー'); return false;" style="color:#2b6cb0; text-decoration:underline;">バタフリー</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>015</td>
            <td><a href="#" onclick="jumpToPokemonByName('スピアー'); return false;" style="color:#2b6cb0; text-decoration:underline;">スピアー</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>123</td>
            <td><a href="#" onclick="jumpToPokemonByName('ストライク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ストライク</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
          <tr>
            <td>127</td>
            <td><a href="#" onclick="jumpToPokemonByName('カイロス'); return false;" style="color:#2b6cb0; text-decoration:underline;">カイロス</a></td>
            <td>△ △ △</td>
            <td>草むら</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>だいすきクラブ メグミ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ブルー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ブルー</a> (Lv.14 / ノーマル)
            </td>
            <td>1120円</td>
          </tr>
          <tr>
            <td><strong>じゅくがえり シュウイチ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ナゾノクサ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ナゾノクサ</a> (Lv.12 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ビリリダマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビリリダマ</a> (Lv.15 / でんき)
            </td>
            <td>480円</td>
          </tr>
          <tr>
            <td><strong>だいすきクラブ アキヒト</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ライチュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ライチュウ</a> (Lv.14 / でんき)
            </td>
            <td>1120円</td>
          </tr>
          <tr>
            <td><strong>ミニスカート ユキ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ナゾノクサ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ナゾノクサ</a> (Lv.12 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('カラカラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">カラカラ</a> (Lv.15 / じめん)
            </td>
            <td>360円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>せんせいのツメ</strong></td><td>南東のベンチにいる女性からもらう</td></tr>
          <tr><td><strong>わざマシン28「あなをほる」</strong></td><td>南西の通路の先で拾う。北東でプリンタで遊んでいる少年の右側の柵が壊れていて、そこから通路に入れる</td></tr>
          <tr><td><strong>まひなおし</strong></td><td>北東の柵と木に囲まれた通路の先で拾う。北東でプリンタで遊んでいる少年の右側の柵が壊れていて、そこから通路に入れる</td></tr>
          <tr><td><strong>きんのたま</strong></td><td>大広場の下側の草むらにいるだいすきクラブのメグミとバトルした後、手持ちに<a href="#" onclick="jumpToPokemonByName('マリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">マリル</a>がいる状態でメグミに話しかけると<strong>電話番号</strong>を登録できる。メグミから電話がかかってきて「きんのたま」をもらえることがある</td></tr>
          <tr><td><strong>たいようのいし</strong></td><td>[火・木・土曜日] 虫取り大会で1位入賞するともらえる</td></tr>
          <tr><td><strong>かわらずのいし</strong></td><td>[火・木・土曜日] 虫取り大会で2位入賞するともらえる</td></tr>
          <tr><td><strong>おうごんのみ</strong></td><td>[火・木・土曜日] 虫取り大会で3位入賞するともらえる</td></tr>
          <tr><td><strong>きのみ</strong></td><td>[火・木・土曜日] 虫取り大会で3位以内に入賞できなかったときに参加賞としてもらえる</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行・既存内容＋追加内容）
    subEventHtml: `
      <p><strong>◉ 虫取り大会:</strong><br>
      自然公園では、火・木・土曜日にむしとりたいかいが開催され、虫ポケモンをゲットできる。<br>
      大会でのランキングの順位により、1位なら<strong>たいようのいし</strong>、2位なら<strong>かわらずのいし</strong>、3位なら<strong>おうごんのみ</strong>、4位以下なら<strong>きのみ</strong>を賞品としてもらえる。<br>
      詳細は虫取り大会を参照。</p>
      <p><strong>◉ 大好きクラブのメグミ:</strong><br>
      南の草むらにだいすきクラブのメグミがいる。<br>
      メグミとバトル後、手持ちにマリルがいる状態で話しかけると<strong>電話番号</strong>を登録できる。<br>
      たまにメグミから電話がかかってきて<strong>きんのたま</strong>をもらえることがある。</p>
      <p><strong>◉ 塾帰りのシュウイチ:</strong><br>
      南の草むらの右の方にじゅくがえりのシュウイチがいて電話番号を登録できる。<br>
      シュウイチは月曜日の朝に電話すると再戦できる。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 時間帯によって出現ポケモンが変化:</strong><br>
      朝・昼と夜で出会える野生ポケモンが変わるため、図鑑埋めをするなら時間帯を変えて探索してみよう。<br>
      虫取り大会中はコンペボールを使って捕まえるルールになるから、狙いのポケモンを決めておくと効率的だよ！</p>
    `
  },

{
    id: "yaketa_to",
    name: "やけたとう",
    category: "ダンジョン・施設",
    desc: "エンジュシティの北西にある焼け落ちた塔。地下階には3匹の伝説のポケモンが眠っており、ミナキやライバルとのイベントの舞台にもなる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 焼けた塔に入るとイベント。<br>
              ミナキからスイクンの話を聞く。<br>
              1F中央で<strong>ライバル</strong>とバトル。<br>
              <span class="step-badge">2</span> バトル後、床に穴があいて地下に落ちる。<br>
              奥に進み、地下にいる3匹のポケモン（<strong>ライコウ・エンテイ・スイクン</strong>）が走り去って行く。<br>
              ※この後、ライコウ・エンテイがジョウト地方各地の草むらを徘徊し始める。<br>
              <span class="step-badge">3</span> 手前に進むとミナキがいるので会話。<br>
              <span class="step-badge">4</span> 階段から1Fへ上がり、<a href="#" onclick="jumpToMapSpot('johto', 'enju_city', 'エンジュシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">エンジュシティ</a>へ戻る。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【1F】</strong></p>
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
            <td>◎ ◎ ◎</td>
            <td>床</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>床</td>
          </tr>
          <tr>
            <td>109</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a></td>
            <td>○ ○ ○</td>
            <td>床</td>
          </tr>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>△ △ △</td>
            <td>床</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B1F】</strong></p>
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
            <td>109</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a></td>
            <td>◎ ◎ ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>019</td>
            <td><a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>110</td>
            <td><a href="#" onclick="jumpToPokemonByName('マタドガス'); return false;" style="color:#2b6cb0; text-decoration:underline;">マタドガス</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ライバル</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴースト'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴースト</a> (Lv.20 / ゴースト・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.20 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.18 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('マグマラシ'); return false;" style="color:#2b6cb0; text-decoration:underline;">マグマラシ</a> (Lv.22 / ほのお)<br>
              <a href="#" onclick="jumpToPokemonByName('アリゲイツ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アリゲイツ</a> (Lv.22 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('ベイリーフ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベイリーフ</a> (Lv.22 / くさ)
            </td>
            <td>1320円</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">※ライバルはマグマラシ、アリゲイツ、ベイリーフの中から主人公が最初に選んだポケモンに有利なタイプのポケモンを使う。</p>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>マックスアップ</strong></td><td>[要いわくだき] 1F北東で拾う</td></tr>
          <tr><td><strong>わざマシン20「こらえる」</strong></td><td>[要かいりき] 2F北東で拾う</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ ミナキとの出会い:</strong><br>
      3匹の伝説ポケモンを解放した後、スイクンを追うミナキと出会うよ。<br>
      その後のストーリーやスイクンイベントにも深く関わってくるから覚えておこう！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ かいりき・いわくだきを活用しよう:</strong><br>
      地下階には岩を押したり砕いたりして進むルートがあるよ。<br>
      ライバル戦に備えて、手持ちポケモンのHPやPPもしっかり整えてから挑もう！</p>
    `
  },

{
    id: "suzu_no_to",
    name: "スズのとう",
    category: "ダンジョン・施設",
    desc: "エンジュシティの北東にある高い塔。特定のアイテムを持つことで入れるようになり、最上階にはホウオウが待ち構えている。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> スズのとうは<a href="#" onclick="jumpToMapSpot('johto', 'enju_city', 'エンジュシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">エンジュシティ</a>の北東にある塔。<br>
              シナリオ攻略上は訪れる必要がない。<br>
              <a href="#" onclick="jumpToMapSpot('johto', 'kogane_city', 'コガネシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">コガネシティ</a>のラジオ塔占拠事件を解決後、ラジオ塔の局長から<strong>とうめいなスズ</strong>をもらった後に入れるようになる。<br>
              スズのとう1階には<strong>スイクン</strong>が出現する。
            </td>
          </tr>
          <tr>
            <td><strong>【殿堂入り後】</strong></td>
            <td>
              <span class="step-badge">1</span> <strong>ライコウ・エンテイ・スイクン</strong>を捕まえ、かつポケモンリーグを殿堂入りした後、スズのとう1階奥の階段横にいる僧侶から<strong>にじいろのはね</strong>をもらえる。<br>
              にじいろのはねをもらった後に塔の2階より上に登れるようになり、屋上まで行くと<strong>ホウオウ</strong>が出現する。
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
            <td>◎ ◎ ○</td>
            <td>床</td>
          </tr>
          <tr>
            <td>092</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴース</a></td>
            <td>× × ◎</td>
            <td>床</td>
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
          <tr><td><strong>にじいろのはね</strong></td><td>[1F] ライコウ・エンテイ・スイクンを捕まえ、かつポケモンリーグを殿堂入りした後、1F奥の階段横にいる僧侶からもらえる</td></tr>
          <tr><td><strong>なんでもなおし</strong></td><td>[3F] 南西の足場で拾う</td></tr>
          <tr><td><strong>あなぬけのヒモ</strong></td><td>[4F] 南西の足場で拾う</td></tr>
          <tr><td><strong>ハイパーボール</strong></td><td>[4F] 東の足場で拾う</td></tr>
          <tr><td><strong>ポイントアップ</strong></td><td>[4F] 南東の足場で拾う</td></tr>
          <tr><td><strong>ふしぎなアメ</strong></td><td>[5F] 中央の柱の手前で拾う</td></tr>
          <tr><td><strong>まんたんのくすり</strong></td><td>[6F] 中央の柱の左横で拾う</td></tr>
          <tr><td><strong>げんきのかたまり</strong></td><td>[7F] 北東の足場で拾う</td></tr>
          <tr><td><strong>かいふくのくすり</strong></td><td>[8F] 北西端で拾う</td></tr>
          <tr><td><strong>ピーピーマックス</strong></td><td>[8F] 中央の柱の右後ろで拾う</td></tr>
          <tr><td><strong>きんのたま</strong></td><td>[8F] 南の足場で拾う</td></tr>
          <tr><td><strong>マックスアップ</strong></td><td>[9F] 北の足場で拾う</td></tr>
          <tr><td><strong>せいなるはい</strong></td><td>[屋上] 屋上に出現する<a href="#" onclick="jumpToPokemonByName('ホウオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホウオウ</a>が持っている（要にじいろのはね）</td></tr>
        </tbody>
      </table>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:32%;">入手方法・入手場所</th>
            <th>初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>245</td>
            <td><a href="#" onclick="jumpToPokemonByName('スイクン'); return false;" style="color:#2b6cb0; text-decoration:underline;">スイクン</a></td>
            <td>とうめいなスズ入手後、スズのとう1Fでバトルして捕まえる。<br>★参考：スイクン入手方法</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:40<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし
            </td>
          </tr>
          <tr>
            <td>250</td>
            <td><a href="#" onclick="jumpToPokemonByName('ホウオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ホウオウ</a></td>
            <td>にじいろのはね入手後、スズのとう屋上でバトルして捕まえる。<br>★参考：ホウオウ・ルギア入手方法</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:60<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:せいなるはい<br>
              技:かぜおこし・じこさいせい・だいもんじ・にほんばれ
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 伝説のポケモンとの遭遇:</strong><br>
      条件を満たしてから最上階へ進むと、<strong>ホウオウ</strong>と直接バトルして捕まえることができるよ。<br>
      捕獲用のボールやHP調整用の技・状態異常技をしっかり準備しておこう！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 事前準備とセーブを忘れずに:</strong><br>
      最上階でのバトル前は必ずレポートを書いておこう。<br>
      あなぬけのヒモやそらをとぶ要員も用意しておくと帰還がスムーズだよ！</p>
    `
  },

{
    id: "asagi_no_todai",
    name: "アサギのとうだい",
    category: "ダンジョン・施設",
    desc: "アサギシティの南東にある大きな灯台。最上階にはジムリーダー・ミカンが大切にするデンリュウ（アカリ）がおり、ひでんのくすりイベントの舞台になる。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 4階まで登ったら階段から左に進み、穴から3階北の小部屋に落ちる。<br>
              そこにある階段から登っていき最上階まで進む。<br>
              <span class="step-badge">2</span> 最上階にいるミカンと話す。<br>
              <span class="step-badge">3</span> 灯台を降り、<a href="#" onclick="jumpToMapSpot('johto', 'asagi_city', 'アサギシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギシティ</a>西側出口から<strong>40番水道</strong>へ向かう。
            </td>
          </tr>
          <tr>
            <td><strong>【ひでんのくすり入手後】</strong></td>
            <td>
              <span class="step-badge">1</span> 最上階でミカンにひでんのくすりを渡す。<br>
              <span class="step-badge">2</span> 灯台を降り、<a href="#" onclick="jumpToMapSpot('johto', 'asagi_city', 'アサギシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">アサギシティ</a>のジムへ行く。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <p><strong>【2F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ジェントルマン カーネル</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ヨルノズク'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヨルノズク</a> (Lv.20 / ノーマル・ひこう)
            </td>
            <td>1440円</td>
          </tr>
          <tr>
            <td><strong>ふなのり ゲンキ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ニョロモ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロモ</a> (Lv.18 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a> (Lv.18 / みず)
            </td>
            <td>720円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【3F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>とりつかい クニヒコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.17 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.15 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.19 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.15 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ポッポ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポッポ</a> (Lv.15 / ノーマル・ひこう)
            </td>
            <td>360円</td>
          </tr>
          <tr>
            <td><strong>ジェントルマン ジョージ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ガーディ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ガーディ</a> (Lv.18 / ほのお)<br>
              <a href="#" onclick="jumpToPokemonByName('ガーディ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ガーディ</a> (Lv.18 / ほのお)
            </td>
            <td>1296円</td>
          </tr>
          <tr>
            <td><strong>ふなのり ジロウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a> (Lv.20 / みず)
            </td>
            <td>800円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【4F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ミニスカート レミ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('マリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">マリル</a> (Lv.21 / みず)
            </td>
            <td>504円</td>
          </tr>
          <tr>
            <td><strong>ふなのり ユウゾウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a> (Lv.18 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a> (Lv.20 / みず)
            </td>
            <td>800円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【5F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>とりつかい アキノリ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('オニスズメ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニスズメ</a> (Lv.18 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('オニドリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニドリル</a> (Lv.20 / ノーマル・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('オニスズメ'); return false;" style="color:#2b6cb0; text-decoration:underline;">オニスズメ</a> (Lv.18 / ノーマル・ひこう)
            </td>
            <td>432円</td>
          </tr>
          <tr>
            <td><strong>ふなのり ユキマサ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a> (Lv.18 / かくとう)<br>
              <a href="#" onclick="jumpToPokemonByName('ニョロゾ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニョロゾ</a> (Lv.18 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a> (Lv.18 / かくとう)
            </td>
            <td>720円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>タウリン</strong></td><td>[2F] 北にいるふなのりのゲンキとバトルした後、ポケギアにゲンキの電話番号を登録しておくと、ゲンキから電話がかかってきて再戦できる。再々戦後（3度目のバトル後）、ゲンキから「タウリン」をもらえる</td></tr>
          <tr><td><strong>ピーピーエイド</strong></td><td>[3F] 北の小部屋で拾う</td></tr>
          <tr><td><strong>わざマシン34「いばる」</strong></td><td>[5F] 南西で拾う</td></tr>
          <tr><td><strong>ふしぎなアメ</strong></td><td>[5F] 南東で拾う</td></tr>
          <tr><td><strong>シルバースプレー</strong></td><td>[5F] 南の小部屋で拾う</td></tr>
          <tr><td><strong>いいキズぐすり</strong></td><td>[6F] 北西で拾う</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 船乗りのゲンキ:</strong><br>
      アサギの灯台2階の北にふなのりのゲンキがいて、バトル後に話しかけるとポケギアに電話番号を登録できる。<br>
      ゲンキは水曜日の夜に電話すると再戦でき、3度目のバトル後に<strong>タウリン</strong>がもらえる。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 近道:</strong><br>
      最上階から降りるときは、マップ右側に空いた床の穴を落ちていくと早い。</p>
      <p><strong>▶ 穴や段差に注意しながら上ろう:</strong><br>
      灯台内には落ちると下の階へ戻ってしまう穴や、外側の足場へ出るルートがあるよ。<br>
      地面タイプやほのおタイプなど、はがねタイプに強いポケモンを育てておくとアサギジム戦もスムーズだよ！</p>
    `
  },

{
    id: "uzumaki_jima",
    name: "うずまきじま",
    category: "ダンジョン・施設",
    desc: "41番水道にある4つの島からなる渦潮のダンジョン。なみのりやうずしおを駆使して奥へ進むと、最深部でルギアと出会える。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> うずまきじまは<strong>41番水道</strong>から行けるダンジョン。<br>
              シナリオ攻略上は訪れる必要がない。<br>
              うずまきじまに入るには秘伝技「うずしお」が必要となる。<br>
              ひでんマシン「うずしお」は<a href="#" onclick="jumpToMapSpot('johto', 'rocket_ajito', 'ロケットだんアジト'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ロケットだんアジト</a>クリア後にワタルからもらえる。<br>
              フィールド上で使うためには、<a href="#" onclick="jumpToMapSpot('johto', 'choji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>ジムの<a href="#" onclick="jumpToMapSpot('johto', 'choji_gym', 'チョウジタウンジム'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ジムリーダー ヤナギ</a>からもらえる<strong>アイスバッジ</strong>が必要となる。<br>
              <span class="step-badge">2</span> うずまきじまの洞窟内は暗いので、秘伝技「フラッシュ」がないと探索しにくい。
            </td>
          </tr>
          <tr>
            <td><strong>【ぎんいろのはね入手後】</strong></td>
            <td>
              <span class="step-badge">1</span> エンディング後にカントー地方に行き、<a href="#" onclick="jumpToMapSpot('kanto', 'nibi_city', 'ニビシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ニビシティ</a>で<strong>ぎんいろのはね</strong>入手後、うずまきじま最深部に<a href="#" onclick="jumpToPokemonByName('ルギア'); return false;" style="color:#2b6cb0; text-decoration:underline;">ルギア</a>が出現する。<br>
              参考：ホウオウ・ルギア入手方法
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【1F/B1F/B2F/B3F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>△ △ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>086</td>
            <td><a href="#" onclick="jumpToPokemonByName('パウワウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">パウワウ</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td rowspan="4">098</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>◎ ◎ ◎</td>
            <td>洞窟</td>
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
            <td rowspan="3">116</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('タッツー'); return false;" style="color:#2b6cb0; text-decoration:underline;">タッツー</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
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
            <td>117</td>
            <td><a href="#" onclick="jumpToPokemonByName('シードラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">シードラ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B2F〜B4F:滝エリア】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>△ △ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>086</td>
            <td><a href="#" onclick="jumpToPokemonByName('パウワウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">パウワウ</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td rowspan="4">098</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>◎ ◎ ◎</td>
            <td>洞窟</td>
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
            <td rowspan="3">116</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('タッツー'); return false;" style="color:#2b6cb0; text-decoration:underline;">タッツー</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
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
            <td>117</td>
            <td><a href="#" onclick="jumpToPokemonByName('シードラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">シードラ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B4F:最深部】（ルギアの部屋）</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>△ △ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>086</td>
            <td><a href="#" onclick="jumpToPokemonByName('パウワウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">パウワウ</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td rowspan="4">098</td>
            <td rowspan="4"><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>◎ ◎ ◎</td>
            <td>洞窟</td>
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
            <td rowspan="3">116</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('タッツー'); return false;" style="color:#2b6cb0; text-decoration:underline;">タッツー</a></td>
            <td>◎ ◎ ◎</td>
            <td>水上</td>
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
            <td rowspan="2">117</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('シードラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">シードラ</a></td>
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
            <td>099</td>
            <td><a href="#" onclick="jumpToPokemonByName('キングラー'); return false;" style="color:#2b6cb0; text-decoration:underline;">キングラー</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
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
          <tr><td><strong>ハイパーボール</strong></td><td>[1F北東エリア] 高い足場で拾う</td></tr>
          <tr><td><strong>ハイパーボール</strong></td><td>[1F南西エリア] 東側で拾う（要なみのり）</td></tr>
          <tr><td><strong>あなぬけのヒモ</strong></td><td>[B1F] 南側で拾う</td></tr>
          <tr><td><strong>リゾチウム</strong></td><td>[B1F] 南東の高い足場で拾う</td></tr>
          <tr><td><strong>インドメタシン</strong></td><td>[B1F] 西側で拾う</td></tr>
          <tr><td><strong>かいふくのくすり</strong></td><td>[B1F] 西側の段差の上で拾う</td></tr>
          <tr><td><strong>きんのたま</strong></td><td>[B1F] 北側で拾う</td></tr>
          <tr><td><strong>げんきのかたまり</strong></td><td>[滝エリア] 北側の足場で拾う</td></tr>
          <tr><td><strong>ピーピーマックス</strong></td><td>[滝エリア] 滝の落ち口の左横にある足場で拾う（左側）</td></tr>
          <tr><td><strong>かいふくのくすり</strong></td><td>[滝エリア] 滝の落ち口の左横にある足場で拾う（右側）</td></tr>
        </tbody>
      </table>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:32%;">入手方法・入手場所</th>
            <th>初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>249</td>
            <td><a href="#" onclick="jumpToPokemonByName('ルギア'); return false;" style="color:#2b6cb0; text-decoration:underline;">ルギア</a></td>
            <td>ぎんいろのはね入手後、うずまきじま最深部でバトルして捕まえる。<br>★参考：ホウオウ・ルギア入手方法</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:60<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし<br>
              技:かぜおこし・じこさいせい・ハイドロポンプ・あまごい
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ ルギアゲット:</strong><br>
      殿堂入り後、カントー地方で入手できるぎんいろのはねを持っていると、渦巻き島の最深部で伝説ポケモンのルギアが出現する。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ うずしお:</strong><br>
      渦巻き島の入口は41番水道にあるが、秘伝技「うずしお」を使わないと入ることができない。</p>
    `
  },

{
    id: "suribachi_yama",
    name: "スリバチやま",
    category: "ダンジョン・施設",
    desc: "エンジュシティとチョウジタウンをつなぐ42番道路の途中にある巨大な洞窟ダンジョン。たきのぼりを使うと奥のエリアへ進め、バルキーをもらえるイベントもある。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> <a href="#" onclick="jumpToMapSpot('johto', 'enju_city', 'エンジュシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">エンジュシティ</a>東の<strong>42番道路</strong>からスリバチやまへ入る。<br>
              <span class="step-badge">2</span> 洞窟を抜けるだけであれば1Fの通路を通ってそのまま東側の42番道路（<a href="#" onclick="jumpToMapSpot('johto', 'choji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>方面）へ抜けられるよ！
            </td>
          </tr>
          <tr>
            <td><strong>【たきのぼり入手後】</strong></td>
            <td>
              <span class="step-badge">1</span> ひでんマシン07「たきのぼり」を覚えたポケモンを連れて奥の滝を登り、迷路のような深部へ進む。<br>
              <span class="step-badge">2</span> 最奥（B1F）にいる<strong>からておうのノブヒコ</strong>に勝利すると、手持ちに空きがあれば<strong>バルキー</strong>をもらえるよ！
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【滝エリア】</strong></p>
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
            <td>洞窟</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>066</td>
            <td><a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td rowspan="2">183</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('マリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">マリル</a></td>
            <td>× × ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>水上</td>
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

      <p style="margin-top:14px;"><strong>【1F奥】</strong></p>
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
            <td>洞窟</td>
          </tr>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>△ △ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>066</td>
            <td><a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>183</td>
            <td><a href="#" onclick="jumpToPokemonByName('マリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">マリル</a></td>
            <td>× × △</td>
            <td>洞窟</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【2F奥】</strong></p>
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
            <td>洞窟</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>075</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴローン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴローン</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>△ △ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>067</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴーリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴーリキー</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>066</td>
            <td><a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a></td>
            <td>△ △ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td rowspan="2">183</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('マリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">マリル</a></td>
            <td>× × △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>水上</td>
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

      <p style="margin-top:14px;"><strong>【B1F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>◎ ◎ ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>020</td>
            <td><a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>066</td>
            <td><a href="#" onclick="jumpToPokemonByName('ワンリキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ワンリキー</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td rowspan="2">183</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('マリル'); return false;" style="color:#2b6cb0; text-decoration:underline;">マリル</a></td>
            <td>× × ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>○ ○ ○</td>
            <td>水上</td>
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
      <p><strong>【1F奥】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>かいじゅうマニア ナオト</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ニドキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニドキング</a> (Lv.17 / どく・じめん)<br>
              <a href="#" onclick="jumpToPokemonByName('ニドクイン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニドクイン</a> (Lv.17 / どく・じめん)
            </td>
            <td>1020円</td>
          </tr>
          <tr>
            <td><strong>りかけいのおとこ ガクジ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ヤドン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤドン</a> (Lv.19 / みず・エスパー)
            </td>
            <td>608円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <p><strong>【滝エリア】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ピーピーエイド</strong></td><td>滝の落ち口の左横にある足場で拾う</td></tr>
          <tr><td><strong>げんきのかけら</strong></td><td>滝の落ち口の右横にある足場で拾う</td></tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【1F奥】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ブロムヘキシン</strong></td><td>北西の高い足場で拾う</td></tr>
          <tr><td><strong>げんきのかたまり</strong></td><td>北側で拾う</td></tr>
          <tr><td><strong>まんたんのくすり</strong></td><td>中央付近で拾う</td></tr>
          <tr><td><strong>きんのたま</strong></td><td>東端で拾う</td></tr>
          <tr><td><strong>あなぬけのヒモ</strong></td><td>南東端で拾う</td></tr>
          <tr><td><strong>すごいキズぐすり</strong></td><td>西側の高い足場で拾う</td></tr>
          <tr><td><strong>ハイパーボール</strong></td><td>中央北付近にある高い足場で拾う</td></tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【2F奥】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>ふしぎなアメ</strong></td><td>南西端で拾う</td></tr>
          <tr><td><strong>まんたんのくすり</strong></td><td>南東の高い足場で拾う</td></tr>
          <tr><td><strong>わざマシン40「まるくなる」</strong></td><td>中央の高い足場で拾う</td></tr>
          <tr><td><strong>あなぬけのヒモ</strong></td><td>北東の高い足場で拾う</td></tr>
          <tr><td><strong>りゅうのウロコ</strong></td><td>北側の高い足場で拾う</td></tr>
          <tr><td><strong>ピーピーエイダー</strong></td><td>北西で拾う</td></tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B1F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>かいふくのくすり</strong></td><td>南東の高い足場で拾う</td></tr>
          <tr><td><strong>すごいキズぐすり</strong></td><td>北東の高い足場で拾う</td></tr>
          <tr><td><strong>ピーピーリカバー</strong></td><td>北東端で拾う</td></tr>
          <tr><td><strong>ポイントアップ</strong></td><td>南側で拾う</td></tr>
          <tr><td><strong>インドメタシン</strong></td><td>西側で拾う</td></tr>
          <tr><td><strong>げんきのかたまり</strong></td><td>[隠] 北西にいるからておうの左横の岩を調べる</td></tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">[隠]：隠しアイテム</p>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:32%;">入手方法・入手場所</th>
            <th>初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>236</td>
            <td><a href="#" onclick="jumpToPokemonByName('バルキー'); return false;" style="color:#2b6cb0; text-decoration:underline;">バルキー</a></td>
            <td>スリバチやま (B1F) の奥にいるからておうのノブヒコとバトルして勝つともらえる。</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:10<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ バルキーゲット:</strong><br>
      秘伝技「たきのぼり」が使えるようになった後、手持ちポケモンを5匹以下にして空きを作ったら42番道路中央の入口からスリバチ山の洞窟に入って洞窟内の滝を登る。<br>
      奥に進んでいくと最深部にカラテ大王がいて、カラテおうのノブヒコとバトル。<br>
      バトル後に格闘ポケモンのバルキーがもらえる。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 必要な秘伝技を揃えてから探索しよう:</strong><br>
      42番道路の通過だけなら秘伝技なしでも通れるけれど、アイテム回収やバルキー入手には「なみのり」「たきのぼり」「かいりき」「フラッシュ」が必要になるよ。<br>
      8個目のバッジ入手後にまとめて探索するのがおすすめだよ！</p>
    `
  },

{
    id: "rocket_ajito",
    name: "ロケットだんアジト",
    category: "ダンジョン・施設",
    desc: "チョウジタウンのおみやげやの地下にあるロケット団の秘密基地。パスワードを解いて奥へ進み、怪電波の動力源を止めてひでんマシン「うずしお」を手に入れよう。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> アジトを進んでいく。<br>
              ポケモンの像の前を通るとロケット団のしたっぱ×2と連戦バトル。<br>
              中央の部屋にあるパソコンを調べるとポケモン像の監視装置を止めることができ、像の前を通ってもロケット団員が出現しなくなる。<br>
              <span class="step-badge">2</span> B2Fでワタルにポケモンの体力を回復してもらう。<br>
              <span class="step-badge">3</span> B3Fに降りるとワタルからパスワードをの話を聞く。<br>
              <span class="step-badge">4</span> B3Fにいるロケット団員たちを倒し、マップ左奥の方にあるボス部屋へ入るためのパスワード2つを教えてもらう。<br>
              合言葉を知っているのはB3F右のパソコン室の奥にいる女性団員とB3F左手前にいる男性団員（マップ画像参照）。<br>
              <span class="step-badge">5</span> B3Fボス部屋前でイベント。<br>
              ライバルと会話。<br>
              ボス部屋の扉にパスワードを入力し、ボス部屋にいるロケット団幹部を倒す。<br>
              <span class="step-badge">6</span> ボス部屋奥にいる<a href="#" onclick="jumpToPokemonByName('ヤミカラス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤミカラス</a>に話しかけ、怪電波発生装置がある部屋へ入るためのパスワードを教えてもらう。<br>
              <span class="step-badge">7</span> B2F中央の部屋の扉にパスワードを入力して部屋に入るとイベント。<br>
              ロケット団の幹部とバトル。<br>
              <span class="step-badge">8</span> ワタルと協力して怪電波の動力源となっている<a href="#" onclick="jumpToPokemonByName('マルマイン'); return false;" style="color:#2b6cb0; text-decoration:underline;">マルマイン</a>を3匹ずつ倒す。<br>
              部屋左側にいる3匹のマルマインを全滅後、ワタルから<strong>ひでんマシン06「うずしお」</strong>をもらう。<br>
              <span class="step-badge">9</span> アジトを出て<a href="#" onclick="jumpToMapSpot('johto', 'choji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>へ戻る。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 5. 出現トレーナー
    trainerTable: `
      <p><strong>【B1F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a> (Lv.17 / エスパー)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.19 / どく・ひこう)
            </td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.16 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.17 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.18 / ノーマル)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a> (Lv.17 / エスパー)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.19 / どく・ひこう)
            </td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.16 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.17 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.18 / ノーマル)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a> (Lv.17 / エスパー)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.19 / どく・ひこう)
            </td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.16 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.17 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.18 / ノーマル)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a> (Lv.17 / エスパー)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.19 / どく・ひこう)
            </td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.16 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.17 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.18 / ノーマル)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('スリープ'); return false;" style="color:#2b6cb0; text-decoration:underline;">スリープ</a> (Lv.17 / エスパー)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.19 / どく・ひこう)
            </td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.16 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ベトベター'); return false;" style="color:#2b6cb0; text-decoration:underline;">ベトベター</a> (Lv.17 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.18 / ノーマル)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.16 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.16 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.16 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.16 / ノーマル)
            </td>
            <td>640円</td>
          </tr>
          <tr>
            <td><strong>はぐれけんきゅういん フジオ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.20 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.20 / でんき・はがね)<br>
              <a href="#" onclick="jumpToPokemonByName('コイル'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイル</a> (Lv.20 / でんき・はがね)
            </td>
            <td>2000円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B2F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コンパン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コンパン</a> (Lv.18 / むし・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('コンパン'); return false;" style="color:#2b6cb0; text-decoration:underline;">コンパン</a> (Lv.18 / むし・どく)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a> (Lv.18 / どく・ひこう)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.17 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.17 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('コラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">コラッタ</a> (Lv.17 / ノーマル)
            </td>
            <td>680円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B3F】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>はぐれけんきゅういん ヤスフミ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.22 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.22 / どく)
            </td>
            <td>2200円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('アーボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボ</a> (Lv.18 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('クサイハナ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クサイハナ</a> (Lv.18 / くさ・どく)
            </td>
            <td>720円</td>
          </tr>
          <tr>
            <td><strong>はぐれけんきゅういん ノブヒロ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('メタモン'); return false;" style="color:#2b6cb0; text-decoration:underline;">メタモン</a> (Lv.24 / ノーマル)
            </td>
            <td>2400円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん したっぱ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a> (Lv.19 / ノーマル)
            </td>
            <td>760円</td>
          </tr>
          <tr>
            <td><strong>ロケットだんいん かんぶ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a> (Lv.22 / どく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('ラッタ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ラッタ</a> (Lv.24 / ノーマル)<br>
              <a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a> (Lv.22 / どく)
            </td>
            <td>1584円</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B2F 怪電波装置の部屋】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ロケットだんいん かんぶ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('アーボック'); return false;" style="color:#2b6cb0; text-decoration:underline;">アーボック</a> (Lv.23 / どく)<br>
              <a href="#" onclick="jumpToPokemonByName('ヤミカラス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヤミカラス</a> (Lv.25 / あく・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('クサイハナ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クサイハナ</a> (Lv.23 / くさ・どく)
            </td>
            <td>1800円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>すごいキズぐすり</strong></td><td>[B1F] 東側で拾う</td></tr>
          <tr><td><strong>エフェクトガード</strong></td><td>[B1F] 中央の部屋のパソコン右で拾う</td></tr>
          <tr><td><strong>きんのたま</strong></td><td>[B1F] 南側で拾う</td></tr>
          <tr><td><strong>わざマシン46「どろぼう」</strong></td><td>[B2F] 西側で拾う</td></tr>
          <tr><td><strong>ひでんマシン06「うずしお」</strong></td><td>[B2F] <a href="#" onclick="jumpToPokemonByName('マルマイン'); return false;" style="color:#2b6cb0; text-decoration:underline;">マルマイン</a>3匹を倒して電波送信器を止めた後、ワタルからもらう</td></tr>
          <tr><td><strong>なんでもなおし</strong></td><td>[B3F] 東側の細い通路の途中で拾う</td></tr>
          <tr><td><strong>こおりなおし</strong></td><td>[B3F] 北側で拾う</td></tr>
          <tr><td><strong>スペシャルアップ</strong></td><td>[B3F] 南西にある観葉植物の右横で拾う</td></tr>
          <tr><td><strong>タウリン</strong></td><td>[B3F] 南西にある観葉植物の左横で拾う</td></tr>
          <tr><td><strong>ハイパーボール</strong></td><td>[B3F] ボスの部屋の前で拾う</td></tr>
        </tbody>
      </table>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:32%;">入手方法・入手場所</th>
            <th>初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>074</td>
            <td><a href="#" onclick="jumpToPokemonByName('イシツブテ'); return false;" style="color:#2b6cb0; text-decoration:underline;">イシツブテ</a></td>
            <td rowspan="3"><a href="#" onclick="jumpToMapSpot('johto', 'rocket_ajito', 'ロケットだんアジト'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ロケットだんアジト</a> (B1F) の床トラップでランダム出現。<br>（一度ポケモンが出現した床では出現しなくなる）</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:21<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし
            </td>
          </tr>
          <tr>
            <td>109</td>
            <td><a href="#" onclick="jumpToPokemonByName('ドガース'); return false;" style="color:#2b6cb0; text-decoration:underline;">ドガース</a></td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:21<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし
            </td>
          </tr>
          <tr>
            <td>100</td>
            <td><a href="#" onclick="jumpToPokemonByName('ビリリダマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ビリリダマ</a></td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:23<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし
            </td>
          </tr>
          <tr>
            <td>101</td>
            <td><a href="#" onclick="jumpToPokemonByName('マルマイン'); return false;" style="color:#2b6cb0; text-decoration:underline;">マルマイン</a></td>
            <td><a href="#" onclick="jumpToMapSpot('johto', 'rocket_ajito', 'ロケットだんアジト'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">ロケットだんアジト</a> (B2F) でシンボル出現。（3体限定）</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:23<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ポケモン像:</strong><br>
      地下1階には5つのペルシアン像があり、像の前を通るとロケット団員のしたっぱ×2と連戦となる。<br>
      2人の手持ちは毎回同じ。<br>
      地下1階中央の部屋にはぐれ研究員がいるが、その右にパソコンがある。<br>
      パソコンを調べて秘密のスイッチを切るとポケモン像の監視システムが停止し、像の前を通ってもロケット団員が現れなくなる。<br>
      早くクリアしたいなら秘密のスイッチを切っておき、ロケット団員を倒してレベル上げや賞金稼ぎをしたいならスイッチを切らずに進もう。<br>
      一度ひみつのスイッチを切ってしまうと再び入れなおすことはできないので注意。</p>

      <p><strong>▶ ワープ:</strong><br>
      地下1階の左手前に地下2階に降りる階段があるが、その右にワープパネルがある。<br>
      踏むとロケット団アジト入口までワープで戻れる。</p>

      <p><strong>▶ 床トラップ:</strong><br>
      地下1階の左の廊下は床トラップになっている。<br>
      しま模様の床を踏むと「じばく」を覚えるポケモン（野生のイシツブテ、ドガース、ビリリダマのいずれか）が出現することがある。<br>
      一度ポケモンが出現したマスでは再度出現することはない。</p>

      <p><strong>▶ パスワード:</strong><br>
      B3Fボス部屋の扉のパスワードは「ヤドンのシッポ」と「ラッタのシッポ」。<br>
      B2F怪電波発生装置の部屋の扉のパスワードは「サカキさま ばんざい」。</p>

      <p><strong>▶ ロケット団の心得:</strong><br>
      アジト各所にある本棚を調べると「ロケットだん の こころえ」が読める。</p>
    `
  },

  {
    id: "ikari_no_mizuumi",
    name: "いかりのみずうみ",
    category: "ダンジョン・施設",
    desc: "チョウジタウンの北にある大きな湖。中央に色違いの赤いギャラドスが泳いでおり、ロケット団の怪電波事件とも深く関わっている。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> 湖にいる赤い<a href="#" onclick="jumpToPokemonByName('ギャラドス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ギャラドス</a>とバトルし、倒すか捕まえる。<br>
              <span class="step-badge">2</span> バトル後、<strong>あかいウロコ</strong>を入手。<br>
              ※あかいウロコを<strong>30番道路</strong>にいるポケモンじいさんに渡すと<strong>がくしゅうそうち</strong>をもらえる。<br>
              <span class="step-badge">3</span> 陸に上がり、湖の南側の看板前に現れた謎の男（ワタル）に話しかけて「はい」と答える。<br>
              <span class="step-badge">4</span> 謎の男を追って<a href="#" onclick="jumpToMapSpot('johto', 'choji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>まで戻る。
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
            <td rowspan="3">130</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('ギャラドス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ギャラドス</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
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
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>エリートトレーナー ユウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('フシギソウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">フシギソウ</a> (Lv.24 / くさ・どく)<br>
              <a href="#" onclick="jumpToPokemonByName('カメール'); return false;" style="color:#2b6cb0; text-decoration:underline;">カメール</a> (Lv.24 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('リザード'); return false;" style="color:#2b6cb0; text-decoration:underline;">リザード</a> (Lv.24 / ほのお)
            </td>
            <td>1152円</td>
          </tr>
          <tr>
            <td><strong>つりびと ケイゾウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a> (Lv.22 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a> (Lv.22 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a> (Lv.22 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('コイキング'); return false;" style="color:#2b6cb0; text-decoration:underline;">コイキング</a> (Lv.22 / みず)
            </td>
            <td>880円</td>
          </tr>
          <tr>
            <td><strong>つりびと ショウジ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ギャラドス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ギャラドス</a> (Lv.27 / みず・ひこう)
            </td>
            <td>1080円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー チヒロ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ポポッコ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ポポッコ</a> (Lv.25 / くさ・ひこう)<br>
              <a href="#" onclick="jumpToPokemonByName('キュウコン'); return false;" style="color:#2b6cb0; text-decoration:underline;">キュウコン</a> (Lv.25 / ほのお)
            </td>
            <td>1200円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>あかいウロコ</strong></td><td>[要なみのり] 湖にいる赤い<a href="#" onclick="jumpToPokemonByName('ギャラドス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ギャラドス</a>とバトルして倒すか捕まえると、バトル後に入手できる</td></tr>
          <tr><td><strong>くろおび</strong></td><td>[水曜日・要あいぎり] 北西端にいる曜日兄弟のミズオからもらう（43番道路の北西出口から行けるエリア）</td></tr>
          <tr><td><strong>わざマシン10「めざめるパワー」</strong></td><td>[要あいぎり] 北西の民家にいる男性からもらえる（43番道路の北西出口から行けるエリア）</td></tr>
          <tr><td><strong>ピーピーエイダー</strong></td><td>[要あいぎり] 北西で拾う（43番道路の北西出口から行けるエリア）</td></tr>
          <tr><td><strong>わざマシン43「みきり」</strong></td><td>[要あいぎり] 北東端で拾う（43番道路の北西出口から行けるエリア）</td></tr>
          <tr><td><strong>ピーピーエイダー</strong></td><td>[ロケットだんアジト制圧後] 南東にある釣り名人の家の前の看板に書かれているサイズより大きいコイキングを釣って釣り名人に見せるともらえる</td></tr>
        </tbody>
      </table>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:32%;">入手方法・入手場所</th>
            <th>初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>130</td>
            <td><a href="#" onclick="jumpToPokemonByName('ギャラドス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ギャラドス</a></td>
            <td><a href="#" onclick="jumpToMapSpot('johto', 'ikari_no_mizuumi', 'いかりのみずうみ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">いかりのみずうみ</a>で色違いの赤いギャラドスがシンボル出現。（1体限定）</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:30<br>
              性別:♂<br>
              個体値:ランダム<br>
              持ち物:なし<br>
              技:あばれる・かみつく・りゅうのいかり・にらみつける
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ コイキング釣り:</strong><br>
      怒りの湖の南にある民家は釣り名人の家。<br>
      チョウジタウンのロケット団アジト攻略後、釣りでコイキングをゲットして手持ちに入れておくと、釣り名人に大きさを測ってもらえる。<br>
      106.5センチ以上のコイキングを釣って手持ちに入れていくと<strong>ピーピーエイダー</strong>がもらえる。</p>

      <p><strong>◉ 曜日兄弟:</strong><br>
      水曜日にいかりのみずうみのマップ北西端に曜日兄弟のミズオが出現する。<br>
      ミズオに話しかけると<strong>くろおび</strong>がもらえる。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 赤いギャラドス:</strong><br>
      怒りの湖にいるギャラドスは色違いで体の色が赤い。<br>
      色違いのポケモンは通常とても低確率でしか出現しないが、このギャラドスは怪電波を浴びたため必ず色違いとなっている。</p>

      <p><strong>▶ トレーナー出現:</strong><br>
      チョウジタウンのロケット団アジト攻略後、怒りの湖にギャラドスを見にきた人々が現れる。<br>
      そのうち4人はトレーナーでバトルできる。</p>
    `
  },

{
    id: "koori_no_nukemichi",
    name: "こおりのぬけみち",
    category: "ダンジョン・施設",
    desc: "チョウジタウンとフスベシティをつなぐ44番道路の先にある氷の洞窟ダンジョン。ツルツル滑る氷の床をパズルのように進み、奥でひでんマシン07「たきのぼり」を手に入れよう。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> <a href="#" onclick="jumpToMapSpot('johto', 'choji_town', 'チョウジタウン'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">チョウジタウン</a>東の44番道路からこおりのぬけみちへ入る。<br>
              <span class="step-badge">2</span> 氷の床を滑ってルートを切り開きながら奥へ進む。<br>
              <span class="step-badge">3</span> 洞窟内で<strong>ひでんマシン07「たきのぼり」</strong>を拾う。<br>
              <span class="step-badge">4</span> 出口を抜けると45番道路へ出て、<a href="#" onclick="jumpToMapSpot('johto', 'fusube_city', 'フスベシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">フスベシティ</a>へ到着するよ！
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【1F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>220</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウリムー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウリムー</a></td>
            <td>◎ ◎ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>225</td>
            <td><a href="#" onclick="jumpToPokemonByName('デリバード'); return false;" style="color:#2b6cb0; text-decoration:underline;">デリバード</a></td>
            <td>× × ◎</td>
            <td>洞窟</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B1F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>220</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウリムー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウリムー</a></td>
            <td>◎ ◎ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>124</td>
            <td><a href="#" onclick="jumpToPokemonByName('ルージュラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ルージュラ</a></td>
            <td>△ △ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>225</td>
            <td><a href="#" onclick="jumpToPokemonByName('デリバード'); return false;" style="color:#2b6cb0; text-decoration:underline;">デリバード</a></td>
            <td>× × ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>215</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニューラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニューラ</a></td>
            <td>× × △</td>
            <td>洞窟</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B2F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>220</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウリムー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウリムー</a></td>
            <td>◎ ◎ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>124</td>
            <td><a href="#" onclick="jumpToPokemonByName('ルージュラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ルージュラ</a></td>
            <td>△ △ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>225</td>
            <td><a href="#" onclick="jumpToPokemonByName('デリバード'); return false;" style="color:#2b6cb0; text-decoration:underline;">デリバード</a></td>
            <td>× × ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>215</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニューラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニューラ</a></td>
            <td>× × △</td>
            <td>洞窟</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【B3F】</strong></p>
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
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>220</td>
            <td><a href="#" onclick="jumpToPokemonByName('ウリムー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ウリムー</a></td>
            <td>◎ ◎ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>124</td>
            <td><a href="#" onclick="jumpToPokemonByName('ルージュラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ルージュラ</a></td>
            <td>△ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>225</td>
            <td><a href="#" onclick="jumpToPokemonByName('デリバード'); return false;" style="color:#2b6cb0; text-decoration:underline;">デリバード</a></td>
            <td>× × ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>215</td>
            <td><a href="#" onclick="jumpToPokemonByName('ニューラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ニューラ</a></td>
            <td>× × ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>098</td>
            <td><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>○ ○ ◎</td>
            <td>いわくだき</td>
          </tr>
          <tr>
            <td>213</td>
            <td><a href="#" onclick="jumpToPokemonByName('ツボツボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ツボツボ</a></td>
            <td>△ △ ×</td>
            <td>いわくだき</td>
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
          <tr><td><strong>ひでんマシン07「たきのぼり」</strong></td><td>[1F] 北東で拾う</td></tr>
          <tr><td><strong>タウリン</strong></td><td>[1F] 東側の高い足場で拾う</td></tr>
          <tr><td><strong>ポイントアップ</strong></td><td>[1F] 南東で拾う</td></tr>
          <tr><td><strong>まんたんのくすり</strong></td><td>[B2F西エリア] 北西端で拾う</td></tr>
          <tr><td><strong>なんでもなおし</strong></td><td>[B2F西エリア] 中央付近で拾う</td></tr>
          <tr><td><strong>とけないこおり</strong></td><td>[B3F] 西側で拾う</td></tr>
          <tr><td><strong>わざマシン44「ねむる」</strong></td><td>[B2F東エリア] 南東端で拾う</td></tr>
          <tr><td><strong>ブロムヘキシン</strong></td><td>[B1F南エリア] 南西端で拾う</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 氷の床パズルとたきのぼり回収:</strong><br>
      氷の上に乗ると壁や岩にぶつかるまで止まれないよ。<br>
      ひでんマシン07「たきのぼり」はフスベシティジムやスリバチやま奥の探索に役立つので、取り逃がさないように回収しておこう！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ほのお・いわ・かくとうタイプが活躍:</strong><br>
      こおりタイプやひこうタイプのポケモンが多いため、ほのお・いわ・でんきタイプの技が有効だよ。<br>
      迷ったりミスしたりしたときは、あなぬけのヒモやそらをとぶで一度仕切り直すのもありだよ！</p>
    `
  },

{
    id: "ryu_no_ana",
    name: "りゅうのあな",
    category: "ダンジョン・施設",
    desc: "フスベシティの北東にある神聖な洞窟。なみのりやうずしおを使って奥の祠へ進み、長老の質問やイブキからのバッジ・わざマシン入手、特別なミニリュウのイベントを進めよう。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> フスベジムでジムリーダー イブキとバトル後、竜の穴に来る。<br>
              ハシゴを2つ降りて進むとイベント。<br>
              エリートトレーナーのリュウとバトル。<br>
              <span class="step-badge">2</span> ポケモンの技「なみのり」「うずしお」を使って南岸にある祠へ向かう。<br>
              <span class="step-badge">3</span> 祠にいる長老の質問5つに答えた後、イブキから<strong>ライジングバッジ</strong>をもらう。<br>
              ほこらから出るとイブキから<strong>わざマシン24「りゅうのいぶき」</strong>をもらう。<br>
              <span class="step-badge">4</span> ★一度祠を出て入り直してから再び長老に話しかけると<a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a>をもらえる。<br>
              もらえるミニリュウは、全ての質問に一度も間違えずに正しく答えた場合のみ「しんそく」を覚えている。<br>
              <span class="step-badge">5</span> 竜の穴から出て<a href="#" onclick="jumpToMapSpot('johto', 'fusube_city', 'フスベシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">フスベシティ</a>へ戻るとウツギ博士から電話。<br>
              町の南出口から<strong>45番道路</strong>へ向かう。
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
            <td rowspan="3">147</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a></td>
            <td>○ ○ ○</td>
            <td>水上</td>
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
        <thead><tr><th style="width:24%;">名前</th><th>手持ちポケモン</th><th style="width:14%;">賞金</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>エリートトレーナー リュウ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ハクリュー'); return false;" style="color:#2b6cb0; text-decoration:underline;">ハクリュー</a> (Lv.37 / ドラゴン)
            </td>
            <td>1776円</td>
          </tr>
          <tr>
            <td><strong>エリートトレーナー ユミコ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('タッツー'); return false;" style="color:#2b6cb0; text-decoration:underline;">タッツー</a> (Lv.33 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('タッツー'); return false;" style="color:#2b6cb0; text-decoration:underline;">タッツー</a> (Lv.33 / みず)<br>
              <a href="#" onclick="jumpToPokemonByName('シードラ'); return false;" style="color:#2b6cb0; text-decoration:underline;">シードラ</a> (Lv.35 / みず)
            </td>
            <td>1680円</td>
          </tr>
          <tr>
            <td><strong>ふたごちゃん ハナとヒナ</strong></td>
            <td>
              <a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a> (Lv.35 / ドラゴン)<br>
              <a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a> (Lv.35 / ドラゴン)
            </td>
            <td>700円</td>
          </tr>
        </tbody>
      </table>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>リゾチウム</strong></td><td>北東で拾う</td></tr>
          <tr><td><strong>ピーピーマックス</strong></td><td>[要なみのり] 西側の足場で拾う</td></tr>
          <tr><td><strong>りゅうのキバ</strong></td><td>[要なみのり・うずしお] 東側の足場で拾う</td></tr>
          <tr><td><strong>ライジングバッジ</strong></td><td rowspan="2">[要なみのり・うずしお] 南岸にある祠で長老の質問に答えた後、ジムリーダー イブキからもらえる</td></tr>
          <tr><td><strong>わざマシン24「りゅうのいぶき」</strong></td></tr>
        </tbody>
      </table>
    `,

    // 7. 入手ポケモン
    getPokemonTable: `
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:12%;">No.</th>
            <th style="width:20%;">ポケモン</th>
            <th style="width:32%;">入手方法・入手場所</th>
            <th>初期データ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>147</td>
            <td><a href="#" onclick="jumpToPokemonByName('ミニリュウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ミニリュウ</a></td>
            <td><a href="#" onclick="jumpToMapSpot('johto', 'ryu_no_ana', 'りゅうのあな'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">りゅうのあな</a>の祠にいる長老の質問に答えてイブキからライジングバッジをもらった後、一度祠を出てから入り直して再び長老に話しかけるともらえる。<br>もらえるミニリュウは、全ての質問に一度も間違えずに正しく答えた場合のみ「しんそく」を覚えている。</td>
            <td>
              名前:任意<br>
              親:トレーナー名<br>
              ID:トレーナーID<br>
              レベル:15<br>
              性別:ランダム（♂or♀）<br>
              個体値:ランダム<br>
              持ち物:なし<br>
              技:まきつく・でんじは・たつまき・しんそく
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ 神速ミニリュウ入手:</strong><br>
      竜のほこらでライジングバッジを入手した後、一旦ほこらから出て入り直すと長老からミニリュウがもらえる。<br>
      このミニリュウは強力な先制技「しんそく」を覚えていることがあるが、覚えている条件は長老から5つの質問をされたとき一度も間違った答えをしていないこと。</p>

      <p><strong>◉ ライバル:</strong><br>
      殿堂入り後にカントー地方のお月見山でライバルとバトルした後、竜の穴にライバルが出現するようになる。<br>
      出現するのは火曜日と木曜日だが、ポケモンバトルにはならない。</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ 長老の質問:</strong><br>
      ほこらにいる長老の5つの質問とその答えは以下。<br>
      1問目:ポケモンはどのような存在か？ 答:○なかま/×てした/○ともだち<br>
      2問目:ポケモン勝負に必要なことは？ 答:○さくせん/○そだてる/×インチキ<br>
      3問目:どんなトレーナーと戦いたい？ 答:×よわいひと/○つよいひと/○だれとでも<br>
      4問目:ポケモン育成に大切なことは？ 答:○あいじょう/×ぼうりょく/○ちしき<br>
      5問目:強いポケモンと弱いポケモンどちらが大事？ 答:×つよいの/○どっちも/×よわいの<br>
      全て答えた後、長老から「ポケモンを とても だいじに おもって いるようじゃな…」と言われれば全て正しい答えをしているはず。<br>
      この後に一旦ほこらから出て入り直すとミニリュウがもらえるが、全問正解しているとミニリュウが技「しんそく」を覚えている。</p>
    `
  },

{
    id: "kurayami_no_horaana",
    name: "くらやみのほらあな",
    category: "ダンジョン・施設",
    desc: "31番道路や45番道路・46番道路をつなぐ暗闇の洞窟。「フラッシュ」「いわくだき」「なみのり」を使ってエリアを探索し、アイテム回収や野生ポケモンの捕獲を進めよう。",

    // 1. シナリオ攻略チャート（「。」や「！」ごとに <br> で改行）
    chart: `
      <table class="excel-table">
        <thead><tr><th style="width:25%;">タイミング</th><th>攻略の流れ</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>【初めて来たとき】</strong></td>
            <td>
              <span class="step-badge">1</span> くらやみのほらあなは<strong>31番道路</strong>途中にある洞窟入口から行ける洞窟。<br>
              シナリオ攻略上は訪れる必要はない。<br>
              名前の通り内部は暗闇でポケモンの技「フラッシュ」がないと探索が難しい。<br>
              また、全てのエリアを探索するには「いわくだき」「なみのり」が必要であり、31番道路に初めて来た時点ではごく一部のエリアしか探索できない。
            </td>
          </tr>
          <tr>
            <td><strong>【フスベシティ訪問後】</strong></td>
            <td>
              <span class="step-badge">1</span> フスベシティ訪問時には、探索に必要な技が全て揃っている。<br>
              ひでんマシン05「フラッシュ」は<strong>マダツボミのとう</strong>、わざマシン08「いわくだき」は<strong>36番道路</strong>、ひでんマシン03「なみのり」は<strong>エンジュシティ</strong>で入手可能。<br>
              <span class="step-badge">2</span> <a href="#" onclick="jumpToMapSpot('johto', 'fusube_city', 'フスベシティ'); return false;" style="color:#2b6cb0; text-decoration:underline; font-weight:bold;">フスベシティ</a>から<strong>45番道路</strong>に入ってすぐ左にある洞窟入口からくらやみのほらあなに行く。<br>
              フスベシティ側（45番道路）の入口から入ると、キキョウシティ側（31番道路）の入口から入った場合に探索できるエリアを含め、全てのエリアを探索できる。<br>
              <span class="step-badge">3</span> キキョウシティ側エリアの南東出口から<strong>46番道路</strong>の北側に出られる。
            </td>
          </tr>
        </tbody>
      </table>
    `,

    // 4. 出現ポケモン
    wildTable: `
      <p><strong>【キキョウシティ側】</strong></p>
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
            <td>洞窟</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ◎ ◎</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>216</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヒメグマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒメグマ</a></td>
            <td>△ × ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td rowspan="2">206</td>
            <td rowspan="2"><a href="#" onclick="jumpToPokemonByName('ノコッチ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ノコッチ</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>◎ ◎ ◎</td>
            <td>洞窟（大量発生）</td>
          </tr>
          <tr>
            <td>098</td>
            <td><a href="#" onclick="jumpToPokemonByName('クラブ'); return false;" style="color:#2b6cb0; text-decoration:underline;">クラブ</a></td>
            <td>○ ○ ◎</td>
            <td>いわくだき</td>
          </tr>
          <tr>
            <td>213</td>
            <td><a href="#" onclick="jumpToPokemonByName('ツボツボ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ツボツボ</a></td>
            <td>△ △ ×</td>
            <td>いわくだき</td>
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
            <td rowspan="3">118</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('トサキント'); return false;" style="color:#2b6cb0; text-decoration:underline;">トサキント</a></td>
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
            <td>119</td>
            <td><a href="#" onclick="jumpToPokemonByName('アズマオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アズマオウ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【フスベシティ側】</strong></p>
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
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>075</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴローン'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴローン</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>041</td>
            <td><a href="#" onclick="jumpToPokemonByName('ズバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ズバット</a></td>
            <td>○ ○ ○</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>042</td>
            <td><a href="#" onclick="jumpToPokemonByName('ゴルバット'); return false;" style="color:#2b6cb0; text-decoration:underline;">ゴルバット</a></td>
            <td>△ △ △</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>217</td>
            <td><a href="#" onclick="jumpToPokemonByName('リングマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">リングマ</a></td>
            <td>○ ○ ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>216</td>
            <td><a href="#" onclick="jumpToPokemonByName('ヒメグマ'); return false;" style="color:#2b6cb0; text-decoration:underline;">ヒメグマ</a></td>
            <td>△ × ×</td>
            <td>洞窟</td>
          </tr>
          <tr>
            <td>202</td>
            <td><a href="#" onclick="jumpToPokemonByName('ソーナンス'); return false;" style="color:#2b6cb0; text-decoration:underline;">ソーナンス</a></td>
            <td>× × ○</td>
            <td>洞窟</td>
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
            <td rowspan="3">118</td>
            <td rowspan="3"><a href="#" onclick="jumpToPokemonByName('トサキント'); return false;" style="color:#2b6cb0; text-decoration:underline;">トサキント</a></td>
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
            <td>119</td>
            <td><a href="#" onclick="jumpToPokemonByName('アズマオウ'); return false;" style="color:#2b6cb0; text-decoration:underline;">アズマオウ</a></td>
            <td>○ ○ ○</td>
            <td>釣り（すごいつりざお）</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size:12px; color:#718096; margin-top:6px;">◎：高 ○：普通 △：低 ×：出ない</p>
    `,

    // 6. 入手アイテム
    itemsTable: `
      <p><strong>【キキョウシティ側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>キズぐすり</strong></td><td>北西の段差の途中で拾う</td></tr>
          <tr><td><strong>すごいキズぐすり</strong></td><td>[要いわくだき] 北東で拾う</td></tr>
          <tr><td><strong>なんでもなおし</strong></td><td>[要いわくだき] 南東で拾う</td></tr>
          <tr><td><strong>クリティカッター</strong></td><td>[要いわくだき] 南東の段差の途中で拾う</td></tr>
        </tbody>
      </table>

      <p style="margin-top:14px;"><strong>【フスベシティ側】</strong></p>
      <table class="excel-table">
        <thead><tr><th style="width:28%;">名前</th><th>入手場所・条件</th></tr></thead>
        <tbody>
          <tr><td><strong>くろいメガネ</strong></td><td>[要なみのり] 北西にいる怪しい男からもらう</td></tr>
          <tr><td><strong>げんきのかけら</strong></td><td>[要なみのり] 南東の高い足場で拾う</td></tr>
          <tr><td><strong>わざマシン13「いびき」</strong></td><td>[要なみのり] 南西の段差の上で拾う</td></tr>
        </tbody>
      </table>
    `,

    // 8. サブイベント（「。」や「！」ごとに <br> で改行）
    subEventHtml: `
      <p><strong>◉ フラッシュでの探索とアイテム回収:</strong><br>
      暗闇の中でもそのまま進めるけれど、フラッシュを使うと壁やアイテムの位置がはっきり見えて探索しやすいよ。<br>
      くろいメガネなどのアイテムも回収しておこう！</p>
    `,

    // 9. 攻略メモ（「。」や「！」ごとに <br> で改行）
    memoHtml: `
      <p><strong>▶ ノコッチ・イワークの出現スポット:</strong><br>
      序盤〜中盤の洞窟ながら、ノコッチやイワークが出現するよ。<br>
      「いわくだき」や「なみのり」を覚えたポケモンを連れてくると、後から別ルートやアイテムも回収しやすくなるよ！</p>
    `
  }

];