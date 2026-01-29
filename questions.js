/**
 * LoL Quiz - Questions Database
 * ゲームメカニクス・オブジェクト・ゲームフロー重視
 * 総問題数: 100問（各難易度約33問）
 */

const QUESTIONS_DATABASE = {
    // ビギナー向け問題（基本的な知識）- 33問
    beginner: [
        // === ゲームの基本 ===
        {
            category: "ゲーム基本",
            question: "試合に勝つための最終目標は何？",
            image: null,
            answers: ["バロンを倒す", "敵を100回キルする", "敵のネクサスを破壊する", "全タワーを破壊する"],
            correct: 2
        },
        {
            category: "ゲーム基本",
            question: "ゲーム開始時に自動でもらえるゴールドは何G？",
            image: null,
            answers: ["400G", "450G", "500G", "550G"],
            correct: 2
        },
        {
            category: "ゲーム基本",
            question: "ミニオンを倒してゴールドを得ることを何という？",
            image: null,
            answers: ["キル", "ファーム", "CS", "プッシュ"],
            correct: 2
        },
        {
            category: "ゲーム基本",
            question: "サモナーズリフトにあるレーンは全部で何本？",
            image: null,
            answers: ["2本", "3本", "4本", "5本"],
            correct: 1
        },
        {
            category: "ゲーム基本",
            question: "1チームは何人で構成される？",
            image: null,
            answers: ["3人", "4人", "5人", "6人"],
            correct: 2
        },
        // === ロール ===
        {
            category: "ロール",
            question: "ボットレーンでADCをサポートする役割は何と呼ばれる？",
            image: null,
            answers: ["ジャングラー", "ミッド", "サポート", "トップ"],
            correct: 2
        },
        {
            category: "ロール",
            question: "サモナースペル「スマイト」を持つことが必須なポジションは？",
            image: null,
            answers: ["トップ", "ミッド", "ジャングル", "サポート"],
            correct: 2
        },
        {
            category: "ロール",
            question: "ADCは何の略？",
            image: null,
            answers: ["Attack Damage Carry", "Ability Damage Champion", "Attack Defense Carry", "All Damage Champion"],
            correct: 0
        },
        {
            category: "ロール",
            question: "マップの上側のレーンは何と呼ばれる？",
            image: null,
            answers: ["ボットレーン", "ミッドレーン", "トップレーン", "サイドレーン"],
            correct: 2
        },
        // === オブジェクト基本 ===
        {
            category: "オブジェクト",
            question: "倒すとチーム全員に強力なバフを与える、川にいる大きな紫色のモンスターは？",
            image: null,
            answers: ["ドラゴン", "リフトヘラルド", "バロンナッシャー", "スカトル"],
            correct: 2
        },
        {
            category: "オブジェクト",
            question: "ドラゴンが出現するのはマップのどこ？",
            image: null,
            answers: ["トップ側の川", "ボット側の川", "ミッドレーン", "ジャングル内"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "インヒビターを破壊すると何が出現する？",
            image: null,
            answers: ["砲台ミニオン", "スーパーミニオン", "バロン", "リフトヘラルド"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "ネクサスを守っているタワーは何本？",
            image: null,
            answers: ["1本", "2本", "3本", "4本"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "各レーンにあるタワーは全部で何本？",
            image: null,
            answers: ["2本", "3本", "4本", "5本"],
            correct: 1
        },
        // === アイテム基本 ===
        {
            category: "アイテム",
            question: "体力を回復する赤いポーションの名前は？",
            image: null,
            answers: ["マナポーション", "体力ポーション", "回復薬", "エリクサー"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "ワードを置くための無料トリンケットの色は？",
            image: null,
            answers: ["赤", "青", "黄色", "緑"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "コントロールワードの特徴は？",
            image: null,
            answers: ["時間で消える", "敵ワードを見つけられる", "移動できる", "無料で買える"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "攻撃力（AD）を上げる基本アイテムの名前は？",
            image: null,
            answers: ["増魔の書", "ロングソード", "ルビークリスタル", "ダガー"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "魔力（AP）を上げる基本アイテムの名前は？",
            image: null,
            answers: ["増魔の書", "ロングソード", "ルビークリスタル", "ダガー"],
            correct: 0
        },
        // === サモナースペル ===
        {
            category: "サモナースペル",
            question: "短距離をテレポートするサモナースペルは？",
            image: null,
            answers: ["テレポート", "フラッシュ", "ゴースト", "クレンズ"],
            correct: 1
        },
        {
            category: "サモナースペル",
            question: "モンスターに大ダメージを与えるジャングラー必須のスペルは？",
            image: null,
            answers: ["イグナイト", "エキゾースト", "スマイト", "バリア"],
            correct: 2
        },
        {
            category: "サモナースペル",
            question: "敵に継続ダメージを与え、回復を減少させるスペルは？",
            image: null,
            answers: ["イグナイト", "エキゾースト", "スマイト", "バリア"],
            correct: 0
        },
        // === 基本メカニクス ===
        {
            category: "メカニクス",
            question: "「エース！」のアナウンスが流れるのはどういう時？",
            image: null,
            answers: ["一人が5連続キルした時", "敵チーム全員がデス状態の時", "タワーを全て破壊した時", "バロンを倒した時"],
            correct: 1
        },
        {
            category: "メカニクス",
            question: "敵をキルした後、自分もデスすることを何という？",
            image: null,
            answers: ["ダブルキル", "トレード", "1:1交換", "フィード"],
            correct: 2
        },
        {
            category: "メカニクス",
            question: "敵を倒さずに死に続けることを何という？",
            image: null,
            answers: ["キャリー", "フィード", "ロームGive", "プッシュ"],
            correct: 1
        },
        {
            category: "メカニクス",
            question: "自分のレーンを離れて他のレーンを助けに行くことを何という？",
            image: null,
            answers: ["プッシュ", "ローム", "リコール", "ガンク"],
            correct: 1
        },
        {
            category: "メカニクス",
            question: "ジャングラーがレーンに来て敵を攻撃することを何という？",
            image: null,
            answers: ["プッシュ", "ローム", "リコール", "ガンク"],
            correct: 3
        },
        {
            category: "メカニクス",
            question: "ベースに戻るためのキー（デフォルト）は？",
            image: null,
            answers: ["Q", "E", "B", "R"],
            correct: 2
        },
        // === ジャングル基本 ===
        {
            category: "ジャングル",
            question: "青バフ（ブルーセンチネル）を倒すと得られる主な効果は？",
            image: null,
            answers: ["攻撃力上昇", "マナ/エナジー回復", "移動速度上昇", "体力回復"],
            correct: 1
        },
        {
            category: "ジャングル",
            question: "赤バフ（レッドブランブルバック）を倒すと得られる主な効果は？",
            image: null,
            answers: ["攻撃力上昇", "マナ回復", "スロー付与と体力回復", "移動速度上昇"],
            correct: 2
        },
        {
            category: "ジャングル",
            question: "川にいるカニ（スカトルクラブ）を倒すと何ができる？",
            image: null,
            answers: ["バフ獲得", "視界確保と移動速度上昇ゾーン", "ゴールドボーナス", "経験値2倍"],
            correct: 1
        },
        // === その他基本 ===
        {
            category: "その他",
            question: "味方のキルに貢献したときに得られるのは？",
            image: null,
            answers: ["キル", "アシスト", "CS", "オブジェクト"],
            correct: 1
        },
        {
            category: "その他",
            question: "レベルが上がると使えるようになるウルトスキルのキー（デフォルト）は？",
            image: null,
            answers: ["Q", "W", "E", "R"],
            correct: 3
        }
    ],

    // スタンダード向け問題（中級知識）- 34問
    standard: [
        // === オブジェクト詳細 ===
        {
            category: "オブジェクト",
            question: "ドラゴンソウルを獲得するために必要なドラゴンの討伐数は？",
            image: null,
            answers: ["3体", "4体", "5体", "6体"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "バロンナッシャーが出現するのはゲーム開始から何分後？",
            image: null,
            answers: ["15分", "20分", "25分", "30分"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "リフトヘラルドが出現するのはゲーム開始から何分後？",
            image: null,
            answers: ["6分", "8分", "10分", "14分"],
            correct: 3
        },
        {
            category: "オブジェクト",
            question: "エルダードラゴンが出現する条件は？",
            image: null,
            answers: ["30分経過", "どちらかがドラゴンソウルを取得", "バロンが倒された後", "6体目のドラゴン"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "バロンバフ（ハンド・オブ・バロン）の継続時間は？",
            image: null,
            answers: ["2分", "3分", "4分", "5分"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "リフトヘラルドは最大で何回出現する？",
            image: null,
            answers: ["1回", "2回", "3回", "無制限"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "インヒビターが復活するまでの時間は？",
            image: null,
            answers: ["3分", "4分", "5分", "6分"],
            correct: 2
        },
        {
            category: "オブジェクト",
            question: "タワープレートが消滅するのはゲーム開始から何分後？",
            image: null,
            answers: ["10分", "12分", "14分", "16分"],
            correct: 2
        },
        {
            category: "オブジェクト",
            question: "タワープレートは全部で何枚ある？",
            image: null,
            answers: ["3枚", "4枚", "5枚", "6枚"],
            correct: 2
        },
        {
            category: "オブジェクト",
            question: "タワープレート1枚を壊すともらえるゴールドは？",
            image: null,
            answers: ["120G", "160G", "175G", "200G"],
            correct: 1
        },
        // === ドラゴンの種類 ===
        {
            category: "ドラゴン",
            question: "インファーナルドラゴンのソウル効果は？",
            image: null,
            answers: ["移動速度上昇", "HP/マナ回復", "周期的な爆発ダメージ", "シールド獲得"],
            correct: 2
        },
        {
            category: "ドラゴン",
            question: "マウンテンドラゴンのソウル効果は？",
            image: null,
            answers: ["攻撃力上昇", "シールド獲得", "回復力上昇", "移動速度上昇"],
            correct: 1
        },
        {
            category: "ドラゴン",
            question: "オーシャンドラゴンのソウル効果は？",
            image: null,
            answers: ["ダメージ上昇", "回復効果", "移動速度上昇", "クールダウン短縮"],
            correct: 1
        },
        {
            category: "ドラゴン",
            question: "クラウドドラゴンのソウル効果は？",
            image: null,
            answers: ["ダメージ上昇", "回復効果", "ウルト後の移動速度上昇", "シールド獲得"],
            correct: 2
        },
        // === ゲームメカニクス詳細 ===
        {
            category: "メカニクス",
            question: "テナシティで軽減できないCCはどれ？",
            image: null,
            answers: ["スタン", "スロー", "サプレッション", "ルート"],
            correct: 2
        },
        {
            category: "メカニクス",
            question: "「グリーヴァスウーンド」の効果は？",
            image: null,
            answers: ["アーマー低下", "回復効果減少", "移動速度低下", "攻撃速度低下"],
            correct: 1
        },
        {
            category: "メカニクス",
            question: "「テナシティ」の効果は？",
            image: null,
            answers: ["ダメージ軽減", "CC時間短縮", "移動速度上昇", "クールダウン短縮"],
            correct: 1
        },
        {
            category: "メカニクス",
            question: "敵の「アーマー」を無視してダメージを与えるステータスは？",
            image: null,
            answers: ["魔法貫通", "物理貫通/脅威", "攻撃力", "クリティカル"],
            correct: 1
        },
        {
            category: "メカニクス",
            question: "敵の「魔法防御」を無視してダメージを与えるステータスは？",
            image: null,
            answers: ["魔法貫通", "物理貫通", "攻撃力", "魔力"],
            correct: 0
        },
        {
            category: "メカニクス",
            question: "「確定ダメージ（True Damage）」の特徴は？",
            image: null,
            answers: ["クリティカルする", "アーマー/魔法防御を無視する", "回復効果がある", "範囲攻撃になる"],
            correct: 1
        },
        // === アイテム詳細 ===
        {
            category: "アイテム",
            question: "「ゾーニャの砂時計」のアクティブ効果は何秒間続く？",
            image: null,
            answers: ["1.5秒", "2秒", "2.5秒", "3秒"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "「ガーディアンエンジェル」の復活効果のクールダウンは？",
            image: null,
            answers: ["3分", "4分", "5分", "6分"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "「エリクサー」を使用できるようになるレベルは？",
            image: null,
            answers: ["レベル6", "レベル9", "レベル11", "レベル13"],
            correct: 1
        },
        // === ワーディング ===
        {
            category: "ワード",
            question: "ステルスワード（黄トリ）の持続時間は？",
            image: null,
            answers: ["60-120秒", "90-120秒", "90-180秒", "120-180秒"],
            correct: 1
        },
        {
            category: "ワード",
            question: "コントロールワードは同時に何個まで置ける？",
            image: null,
            answers: ["1個", "2個", "3個", "無制限"],
            correct: 0
        },
        {
            category: "ワード",
            question: "オラクルレンズ（赤トリ）の効果は？",
            image: null,
            answers: ["ワードを置く", "敵ワードを発見・無効化", "広範囲を見る", "テレポートできる"],
            correct: 1
        },
        // === 経験値・ゴールド ===
        {
            category: "経験値",
            question: "ウルトスキル（R）が最初に使えるようになるレベルは？",
            image: null,
            answers: ["レベル4", "レベル5", "レベル6", "レベル7"],
            correct: 2
        },
        {
            category: "経験値",
            question: "最高レベルは？",
            image: null,
            answers: ["15", "16", "17", "18"],
            correct: 3
        },
        {
            category: "ゴールド",
            question: "敵チャンピオンをキルすると最低でももらえるゴールドは？",
            image: null,
            answers: ["150G", "200G", "300G", "400G"],
            correct: 2
        },
        {
            category: "ゴールド",
            question: "ファーストブラッド（最初のキル）のボーナスゴールドは？",
            image: null,
            answers: ["50G", "100G", "150G", "200G"],
            correct: 1
        },
        // === スマイトとジャングル ===
        {
            category: "ジャングル",
            question: "スマイトのベースダメージはいくつ？",
            image: null,
            answers: ["450", "600", "720", "900"],
            correct: 3
        },
        {
            category: "ジャングル",
            question: "赤スマイト（挑発のスマイト）の効果は？",
            image: null,
            answers: ["回復", "敵チャンピオンにダメージ", "移動速度上昇", "アーマー上昇"],
            correct: 1
        },
        {
            category: "ジャングル",
            question: "青スマイト（冷静のスマイト）の効果は？",
            image: null,
            answers: ["ダメージとスロー", "回復", "シールド獲得", "クールダウン短縮"],
            correct: 0
        },
        // === その他中級 ===
        {
            category: "その他",
            question: "リコールにかかる時間（デフォルト）は？",
            image: null,
            answers: ["6秒", "7秒", "8秒", "10秒"],
            correct: 2
        }
    ],

    // プロ向け問題（上級知識）- 33問
    pro: [
        // === 詳細な数値・タイミング ===
        {
            category: "タイミング",
            question: "最初のミニオンウェーブが衝突するのはゲーム開始から何秒後？",
            image: null,
            answers: ["1分5秒", "1分15秒", "1分25秒", "1分35秒"],
            correct: 2
        },
        {
            category: "タイミング",
            question: "キャノンミニオンが出現し始めるのは何分から？",
            image: null,
            answers: ["すぐ", "2分10秒", "3分15秒", "5分"],
            correct: 1
        },
        {
            category: "タイミング",
            question: "バロンを倒すと得られるゴールドは？",
            image: null,
            answers: ["200G", "300G", "400G", "500G"],
            correct: 1
        },
        {
            category: "タイミング",
            question: "ドラゴンが倒された後、次のドラゴンが出現するまでの時間は？",
            image: null,
            answers: ["4分", "5分", "6分", "7分"],
            correct: 1
        },
        // === 高度なメカニクス ===
        {
            category: "メカニクス",
            question: "「エアボーン」状態の敵にのみ発動できるのは何のスキル？",
            image: null,
            answers: ["ゼドのR", "ヤスオのR", "リー・シンのR", "マルファイトのR"],
            correct: 1
        },
        {
            category: "メカニクス",
            question: "「サプレッション」を解除できるアイテムは？",
            image: null,
            answers: ["水銀のサッシュ", "ゾーニャの砂時計", "クイックシルバーサッシュ", "ミカエルの祝福"],
            correct: 2
        },
        {
            category: "メカニクス",
            question: "シールドを貫通できるダメージの種類は？",
            image: null,
            answers: ["確定ダメージ", "物理ダメージ", "魔法ダメージ", "どれも貫通しない"],
            correct: 3
        },
        {
            category: "メカニクス",
            question: "「エグゼキューション」（処刑）効果を持つアイテムは？",
            image: null,
            answers: ["インフィニティエッジ", "コレクター", "ドミニクリガード", "モータルリマインダー"],
            correct: 1
        },
        // === バフ・デバフ詳細 ===
        {
            category: "バフ",
            question: "エルダードラゴンバフで敵を処刑できるのはHPが何%以下のとき？",
            image: null,
            answers: ["10%", "15%", "20%", "25%"],
            correct: 2
        },
        {
            category: "バフ",
            question: "バロンバフで強化されるのは？",
            image: null,
            answers: ["チャンピオンのステータス", "近くのミニオン", "タワーへのダメージ", "全て"],
            correct: 1
        },
        {
            category: "バフ",
            question: "リフトヘラルドの「目」（弱点）を攻撃すると与えるダメージは？",
            image: null,
            answers: ["固定500ダメージ", "現在HPの12%確定ダメージ", "最大HPの10%", "通常の2倍"],
            correct: 1
        },
        // === ワーディング詳細 ===
        {
            category: "ワード",
            question: "サポートアイテムがワードを置けるようになるのは何ゴールド獲得後？",
            image: null,
            answers: ["400G", "500G", "1000G", "1500G"],
            correct: 1
        },
        {
            category: "ワード",
            question: "完成したサポートアイテムで同時に置けるワードの数は？",
            image: null,
            answers: ["2個", "3個", "4個", "5個"],
            correct: 2
        },
        {
            category: "ワード",
            question: "ゾンビワードを発生させるルーンは？",
            image: null,
            answers: ["ゴーストポロ", "ゾンビワード", "アイボールコレクション", "至高の狩人"],
            correct: 1
        },
        // === タワー詳細 ===
        {
            category: "タワー",
            question: "タワーダイブ時、タワーのダメージは攻撃ごとに何%増加する？",
            image: null,
            answers: ["20%", "25%", "30%", "40%"],
            correct: 3
        },
        {
            category: "タワー",
            question: "Tier1タワー（最初のタワー）を壊すと得られるファーストブリックボーナスは？",
            image: null,
            answers: ["100G", "150G", "200G", "250G"],
            correct: 1
        },
        // === オブジェクト詳細 ===
        {
            category: "オブジェクト",
            question: "ヴォイドグラブ（Voidgrub）は最大で何体倒せる？",
            image: null,
            answers: ["3体", "4体", "5体", "6体"],
            correct: 3
        },
        {
            category: "オブジェクト",
            question: "ヴォイドグラブを3体以上倒すと得られる効果は？",
            image: null,
            answers: ["ゴールドボーナス", "経験値ボーナス", "ヴォイドマイトが敵構造物を攻撃", "全員にシールド"],
            correct: 2
        },
        {
            category: "オブジェクト",
            question: "アトゥクハン（Atakhan）が出現するのは何分後？",
            image: null,
            answers: ["15分", "20分", "25分", "30分"],
            correct: 1
        },
        // === アイテム詳細 ===
        {
            category: "アイテム",
            question: "「ブラッククリーバー」のアーマー減少効果は最大何%まで累積する？",
            image: null,
            answers: ["18%", "24%", "30%", "36%"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "クリティカル率が100%を超えた分はどうなる？",
            image: null,
            answers: ["無駄になる", "攻撃力に変換", "攻撃速度に変換", "ライフスティールに変換"],
            correct: 0
        },
        {
            category: "アイテム",
            question: "「ナッシャートゥース」の追加オンヒットダメージの種類は？",
            image: null,
            answers: ["物理ダメージ", "魔法ダメージ", "確定ダメージ", "混合ダメージ"],
            correct: 1
        },
        // === ルーン詳細 ===
        {
            category: "ルーン",
            question: "「征服者」が最大スタックになるとどうなる？",
            image: null,
            answers: ["攻撃力上昇", "回復効果を得る", "移動速度上昇", "クールダウン短縮"],
            correct: 1
        },
        {
            category: "ルーン",
            question: "「電撃」が発動する条件は？",
            image: null,
            answers: ["3回攻撃", "スキル命中", "3回の異なる攻撃/スキル", "クリティカル"],
            correct: 2
        },
        {
            category: "ルーン",
            question: "「フリートフットワーク」の効果は？",
            image: null,
            answers: ["ダメージ上昇", "回復と移動速度上昇", "シールド獲得", "攻撃速度上昇"],
            correct: 1
        },
        // === 高度なゲーム知識 ===
        {
            category: "知識",
            question: "「ブーツ」を購入できないチャンピオンは？",
            image: null,
            answers: ["ヘカリム", "リリア", "カシオペア", "ケイン"],
            correct: 2
        },
        {
            category: "知識",
            question: "味方タワーの範囲内で敵チャンピオンにダメージを与えると何が起こる？",
            image: null,
            answers: ["何も起こらない", "タワーがその敵を攻撃する", "自分がタワーに攻撃される", "ミニオンが集まる"],
            correct: 1
        },
        {
            category: "知識",
            question: "シャットダウンゴールドが発生するのはキルストリークが何以上の時？",
            image: null,
            answers: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            category: "知識",
            question: "「アダプティブフォース」はADとAPのどちらに変換されるかを何で決定する？",
            image: null,
            answers: ["チャンピオンのベースステータス", "購入したアイテムのステータス比率", "スキルのスケーリング", "ルーン設定"],
            correct: 1
        },
        // === 特殊メカニクス ===
        {
            category: "特殊",
            question: "「ミニオンデマテリアライザー」の効果は？",
            image: null,
            answers: ["ミニオンを即死させ、そのタイプへのダメージ増加", "ミニオンを味方にする", "ミニオンの移動速度上昇", "ミニオンから追加ゴールド"],
            correct: 0
        },
        {
            category: "特殊",
            question: "タワーが「フォーティファイ」状態になるとどうなる？",
            image: null,
            answers: ["破壊不可", "ダメージ軽減", "攻撃速度上昇", "回復開始"],
            correct: 1
        },
        {
            category: "特殊",
            question: "「パッシブ」スキルの特徴は？",
            image: null,
            answers: ["キーを押して発動", "常に効果が発揮される", "ウルトと同じ", "味方にのみ効果"],
            correct: 1
        },
        {
            category: "特殊",
            question: "「オムニヴァンプ」と「ライフスティール」の違いは？",
            image: null,
            answers: ["同じ効果", "オムニヴァンプは全ダメージから回復", "ライフスティールの方が回復量が多い", "オムニヴァンプはスキルのみ"],
            correct: 1
        }
    ]
};

// クイズ設定
const QUIZ_CONFIG = {
    beginner: {
        name: "ビギナー",
        timeLimit: 100,
        questionCount: 10,
        theme: "beginner"
    },
    standard: {
        name: "スタンダード",
        timeLimit: 70,
        questionCount: 15,
        theme: "standard"
    },
    pro: {
        name: "プロ",
        timeLimit: 40,
        questionCount: 20,
        theme: "pro"
    }
};

// 結果メッセージ
const RESULT_MESSAGES = {
    perfect: "完璧！あなたは真のチャレンジャー！",
    excellent: "素晴らしい！プロレベルの知識です！",
    good: "よくできました！さらに上を目指そう！",
    average: "まずまずの結果です。もう少し勉強しよう！",
    poor: "もっと練習が必要です。頑張って！"
};
