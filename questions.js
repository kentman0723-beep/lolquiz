/**
 * LoL Quiz - Questions Database
 * チャンピオン、スキル、アイテムに関するクイズ問題
 * 総問題数: 150問
 */

const QUESTIONS_DATABASE = {
    // ビギナー向け問題（基本的な知識）- 50問
    beginner: [
        {
            category: "チャンピオン",
            question: "「デマーシアの力」と呼ばれる、光の剣を振るう騎士チャンピオンは誰？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Garen.png",
            answers: ["ガレン", "ダリウス", "ジャーヴァンⅣ", "フィオラ"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "9本の尻尾を持つ、魅惑の力を使う女性チャンピオンは誰？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png",
            answers: ["ラックス", "アーリ", "ソナ", "イレリア"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "「ヨードルガンナー」とも呼ばれ、巨大な大砲「ブーマー」を持つヨードルチャンピオンは誰？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Tristana.png",
            answers: ["ティーモ", "ルル", "トリスターナ", "ポッピー"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "攻撃力+10を提供する、350ゴールドで購入できる最も基本的な剣アイテムは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/1036.png",
            answers: ["ロングソード", "ダガー", "ドランブレード", "ショートソード"],
            correct: 0
        },
        {
            category: "ゲーム知識",
            question: "サモナーズリフトで、チームのネクサスを守る最後の防衛施設は何？",
            image: null,
            answers: ["インヒビター", "タワー", "ネクサスタワー", "バロン"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "虚空から来た目玉のような姿をした、ビームを撃つチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Velkoz.png",
            answers: ["コグマウ", "マルザハール", "ヴェルコズ", "カサディン"],
            correct: 2
        },
        {
            category: "ロール",
            question: "ボットレーンでADCをサポートする役割は何と呼ばれる？",
            image: null,
            answers: ["ジャングラー", "ミッド", "サポート", "トップ"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "巨大な盾を持ち、味方を守る口ひげのサポートチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Braum.png",
            answers: ["タリック", "ブラウム", "レオナ", "アリスター"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "倒すとチーム全員にバフを与える、川にいる大きな紫色のモンスターは？",
            image: null,
            answers: ["ドラゴン", "リフトヘラルド", "バロンナッシャー", "スカトル"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "舌で敵を飲み込むことができる、巨大なナマズのようなチャンピオンは誰？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TahmKench.png",
            answers: ["チョガス", "タム・ケンチ", "コグマウ", "レクサイ"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "「疾風の剣士」と呼ばれ、風を操る剣士チャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
            answers: ["ヤスオ", "ゼド", "タロン", "マスター・イー"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "2丁の拳銃を持つ、ビルジウォーター出身の女賞金稼ぎは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MissFortune.png",
            answers: ["ジンクス", "ミス・フォーチュン", "ケイトリン", "ヴェイン"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "体力を回復するポーションの名前は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/2003.png",
            answers: ["マナポーション", "体力ポーション", "回復薬", "エリクサー"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "「盲目の僧」と呼ばれ、飛び蹴りが特徴的なチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png",
            answers: ["シェン", "リー・シン", "アカリ", "ザック"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "モルガナと双子の姉妹である、翼を持つサポートチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kayle.png",
            answers: ["ケイル", "ラカン", "ナミ", "ソラカ"],
            correct: 0
        },
        {
            category: "ゲーム知識",
            question: "ゲーム開始時に自動でもらえるゴールドは何G？",
            image: null,
            answers: ["400G", "450G", "500G", "550G"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "ピルトーヴァーの保安官で、ライフルを使う女性チャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Caitlyn.png",
            answers: ["ヴァイ", "ケイトリン", "ジンクス", "カミール"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "氷の矢を放つフレヨルドの女王は誰？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ashe.png",
            answers: ["リサンドラ", "アッシュ", "セジュアニ", "アニビア"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "ワードを置くための基本的な黄色いアイテムは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3340.png",
            answers: ["コントロールワード", "ステルスワード", "トリンケット", "オラクルレンズ"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "巨大なハンマーを振り回すノクサスの処刑人は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Darius.png",
            answers: ["ダリウス", "ドレイヴン", "サイオン", "スウェイン"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "かわいい見た目で毒キノコを設置するヨードルチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Teemo.png",
            answers: ["ティーモ", "ルル", "ハイマーディンガー", "コーキ"],
            correct: 0
        },
        {
            category: "ゲーム知識",
            question: "ミニオンを倒してゴールドを得ることを何という？",
            image: null,
            answers: ["キル", "ファーム", "CS", "プッシュ"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "「野生の怒り」と呼ばれ、斧を投げる戦士チャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Olaf.png",
            answers: ["オラフ", "トランドル", "ボリベア", "ウディア"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "魔法陣で敵をスタンさせるメイジサポートは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lux.png",
            answers: ["ゼラス", "ラックス", "モルガナ", "ブランド"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "5分ごとに出現する、倒すとゴールドと経験値をくれるエレメンタルモンスターは？",
            image: null,
            answers: ["バロン", "ドラゴン", "リフトヘラルド", "グロンプ"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "クモに変身できるシャドウアイルのチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Elise.png",
            answers: ["エリス", "イブリン", "エコー", "イライ"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "「星を鍛えし者」と呼ばれ、宇宙のドラゴンチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/AurelionSol.png",
            answers: ["シヴァーナ", "オレリオン・ソル", "シンドラ", "ベルベス"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "靴をアップグレードした、移動速度が最も上がるブーツは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3009.png",
            answers: ["マーキュリーブーツ", "プレートスチールブーツ", "スイフトネスブーツ", "アイオニアブーツ"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "影を操り、手裏剣を投げる忍者チャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png",
            answers: ["シェン", "アカリ", "ゼド", "ケネン"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "「不滅の義勇」と呼ばれ、盾を使うノクサスを憎む戦士は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Pantheon.png",
            answers: ["パンテオン", "アトレウス", "レオナ", "ターゴン"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "ぬいぐるみの「ティバーズ」を召喚するチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Annie.png",
            answers: ["ゾーイ", "アニー", "ルル", "ポッピー"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "ガレンの妹である、光の魔法使いは誰？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lux.png",
            answers: ["ラックス", "フィオラ", "ケイル", "モルガナ"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "ナサスの弟で、復讐に燃えるワニの姿をしたチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Renekton.png",
            answers: ["アジール", "ゼラス", "レネクトン", "スカーナー"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "ティーモの所属する部隊の役割は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Teemo.png",
            answers: ["タンク", "スカウト", "メディック", "コマンダー"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "琴のような楽器「エトワール」を奏でるサポートチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sona.png",
            answers: ["セラフィーン", "ソナ", "ナミ", "ジャンナ"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "試合に勝つための最終目標は？",
            image: null,
            answers: ["バロンを倒す", "全敵チャンピオンを倒す", "敵のネクサスを破壊する", "100キルする"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "魔法攻撃力（AP）を上げる基本アイテム「増魔の書」の値段は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/1052.png",
            answers: ["350G", "400G", "435G", "500G"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "カードを投げて戦うイカサマ師のチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TwistedFate.png",
            answers: ["グレイブス", "ツイステッド・フェイト", "ジン", "シャコ"],
            correct: 1
        },
        {
            category: "ロール",
            question: "サモナースペル「スマイト」を持つことが必須なポジションは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerSmite.png",
            answers: ["トップ", "ミッド", "ジャングル", "サポート"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "熊のぬいぐるみのような姿だが、実は恐ろしい影の熊であるチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Volibear.png",
            answers: ["ボリベア", "ワーウィック", "ナー", "ケネン"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "時を操る老人チャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zilean.png",
            answers: ["ライズ", "ジリアン", "ハイマーディンガー", "コーキ"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "「ブルーセンチネル」を倒すと回復するのは？",
            image: null,
            answers: ["体力", "マナ", "シールド", "ウルトのCD"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "「レッドブランブルバック」を倒すと付与されるバフの効果は？",
            image: null,
            answers: ["マナ回復とCDR", "HP回復と通常攻撃へのスロー/TrueDmg付与", "移動速度増加", "タワーへのダメージ増加"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "カサディンの娘であるヴォイドの射手は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
            answers: ["カリスタ", "カイ=サ", "ヴェイン", "アッシュ"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "デマーシアの翼と呼ばれる、クインの相棒の鳥の名前は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Quinn.png",
            answers: ["ヴァラー", "スカイ", "ビート", "ウィング"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "自爆して敵にダメージを与えることができるケミテックの怪物は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/KogMaw.png",
            answers: ["トゥイッチ", "コグマウ", "ザック", "ドクター・ムンド"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "物理攻撃を防ぐのに適した「アーマー」を上げる基本アイテムは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/1029.png",
            answers: ["ヌルマジックマント", "クロスアーマー", "チェインベスト", "ルビークリスタル"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "ランタンを持ち魂を集めるシャドウアイルの看守は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png",
            answers: ["カーサス", "スレッシュ", "ヨリック", "ヘカリム"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "四本の腕で踊るように戦うアイオニアの刃の舞い手は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Irelia.png",
            answers: ["カルマ", "イレリア", "カミール", "リヴェン"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "「エース！」のアナウンスが流れるのはどういう時？",
            image: null,
            answers: ["一人が5連続キルした時", "敵チーム全員がデス状態になった時", "タワーを全て破壊した時", "バロンを倒した時"],
            correct: 1
        }
    ],

    // スタンダード向け問題（中級知識）- 50問
    standard: [
        {
            category: "スキル",
            question: "ヤスオのウルト「ラストブレス」を発動するために必要な条件は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png",
            answers: ["敵がスタン状態", "敵がエアボーン状態", "自分のHPが50%以下", "風の壁が展開中"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "「ゾーニャの砂時計」のアクティブ効果は何秒間続く？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3157.png",
            answers: ["1.5秒", "2秒", "2.5秒", "3秒"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "イレリアのパッシブスキルでスタックが最大になるのは何スタック？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Irelia.png",
            answers: ["3スタック", "4スタック", "5スタック", "6スタック"],
            correct: 2
        },
        {
            category: "ゲーム知識",
            question: "ドラゴンソウルを獲得するために必要なドラゴンの討伐数は？",
            image: null,
            answers: ["3体", "4体", "5体", "6体"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "「イモータルシールドボウ」はどのようなときにシールドが発動する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/6673.png",
            answers: ["5秒ごと", "HPが30%以下になったとき", "クリティカルヒット時", "敵をキルしたとき"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "セトのWスキル「ヘイメイカー」のダメージは何を基準に計算される？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sett.png",
            answers: ["攻撃力", "最大HP", "蓄積されたグリットの量", "防御力"],
            correct: 2
        },
        {
            category: "スキル",
            question: "カ=ジックスが孤立した敵へのダメージを増加させるのはどのスキル？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Khazix.png",
            answers: ["パッシブ", "Q", "W", "E"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "バロンナッシャーが出現するのはゲーム開始から何分後？",
            image: null,
            answers: ["15分", "20分", "25分", "30分"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "リヴェンが「ブレードオブザエグザイル」を発動すると何が変わる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Riven.png",
            answers: ["移動速度が上がる", "剣が大きくなり攻撃範囲とADが増加", "HPが回復する", "スキルのクールダウンが短縮"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "「ガーディアンエンジェル」の復活効果のクールダウンは何秒？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3026.png",
            answers: ["180秒", "240秒", "300秒", "360秒"],
            correct: 2
        },
        {
            category: "スキル",
            question: "シンドラのウルト「アンリーシュドパワー」のダメージは何に依存する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Syndra.png",
            answers: ["敵の失ったHP", "自分のマナ量", "フィールド上の球体の数", "スタックしたパッシブ"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "アカリのパッシブ「暗殺の極意」発動のために必要なことは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Akali.png",
            answers: ["スキルを当てた後リングの外に出る", "ブッシュに隠れる", "敵の背後から攻撃", "3回連続で通常攻撃"],
            correct: 0
        },
        {
            category: "ゲーム知識",
            question: "タワープレートは1つ壊すといくらのゴールドがもらえる？",
            image: null,
            answers: ["120G", "160G", "175G", "200G"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "ベイガーのパッシブで魔力を獲得する条件は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Veigar.png",
            answers: ["敵をキルした時", "スキルを敵に当てた時", "CSを取った時", "ミニオンが死んだ時"],
            correct: 1
        },
        {
            category: "スキル",
            question: "フィズのEスキル「トリックスター」中は何が起こる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fizz.png",
            answers: ["敵を挑発する", "ターゲット不可状態になる", "移動速度が200%増加", "次の攻撃がクリティカル"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "スレッシュのQスキル「デスセンテンス」の最大射程は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png",
            answers: ["900", "1000", "1100", "1200"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "「トリニティフォース」を構成する3つのアイテムに含まれないものは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3078.png",
            answers: ["ヒールザ", "シーン", "ゼファー", "スティンガー"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "キンドレッドのマークを集めるとどのような効果がある？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kindred.png",
            answers: ["攻撃力が上がる", "スキルの射程と追加ダメージが増加", "移動速度が上がる", "クールダウンが短縮される"],
            correct: 1
        },
        {
            category: "スキル",
            question: "ルブランのRスキル「ミミック」は何をコピーできる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Leblanc.png",
            answers: ["敵のスキル", "直前に使った自分のスキル", "味方のスキル", "サモナースペル"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "リフトヘラルドが出現するのは何分から？",
            image: null,
            answers: ["6分", "8分", "10分", "12分"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "エズリアルのQスキル「ミスティックショット」が当たるとどうなる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png",
            answers: ["マナが回復する", "全スキルのCDが1.5秒短縮", "攻撃速度が上がる", "移動速度が上がる"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "「ナッシャー・トゥース」が与える追加オンヒットダメージの種類は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3115.png",
            answers: ["物理ダメージ", "魔法ダメージ", "確定ダメージ", "混合ダメージ"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "ケイン（シャドウアサシン）の特徴は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kayn.png",
            answers: ["CCが強い", "壁を通り抜けられる", "回復力が高い", "シールドが厚い"],
            correct: 1
        },
        {
            category: "スキル",
            question: "ビクターのEスキル「デスレイ」のアップグレード効果は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Viktor.png",
            answers: ["射程が伸びる", "爆発が起こる", "スローを付与する", "クールダウンが短縮"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "スマイトのベースダメージはいくつ？",
            image: null,
            answers: ["450", "600", "750", "900"],
            correct: 3
        },
        {
            category: "チャンピオン",
            question: "ウーコンのパッシブ「石の肌」の効果は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MonkeyKing.png",
            answers: ["近くの敵チャンピオンごとにアーマーが増加", "ダメージを受けると回復", "攻撃速度が上がる", "クリティカル率が上がる"],
            correct: 0
        },
        {
            category: "アイテム",
            question: "「デッドマンプレート」のパッシブで貯まるスタックの名前は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3742.png",
            answers: ["フューリー", "モーメンタム", "チャージ", "スタックス"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "カシオペアがブーツを購入できない理由は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Cassiopeia.png",
            answers: ["魔女の呪い", "足がない（蛇の尾）", "特殊なパッシブ", "バグ"],
            correct: 1
        },
        {
            category: "スキル",
            question: "カイ=サのスキルがアップグレードされる条件は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
            answers: ["レベルアップ", "特定のステータスが一定値に達する", "キル/アシストを取る", "時間経過"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "タワープレートが消滅するのは何分？",
            image: null,
            answers: ["12分", "14分", "16分", "18分"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "アフェリオスが使える武器の種類は何種類？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Aphelios.png",
            answers: ["3種類", "4種類", "5種類", "6種類"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "「メジャイの殺戮剣」の最大スタック数は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3041.png",
            answers: ["15", "20", "25", "30"],
            correct: 2
        },
        {
            category: "スキル",
            question: "オーンは何ができる固有のパッシブを持っている？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ornn.png",
            answers: ["どこでもアイテムを購入・製作できる", "タワーを回復できる", "味方のステータスを上げる", "敵のアイテムを破壊する"],
            correct: 0
        },
        {
            category: "チャンピオン",
            question: "パイクのウルトで敵をキルすると何が起こる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Pyke.png",
            answers: ["HPが回復する", "アシストした味方もフルゴールドを得る", "移動速度が上がる", "ウルトがリセットされる"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "エルダードラゴンが出現する条件は？",
            image: null,
            answers: ["30分経過", "どちらかがドラゴンソウルを取得", "バロンが倒された", "6体目のドラゴン"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "バロンバフ（ハンド・オブ・バロン）の継続時間は？",
            image: null,
            answers: ["120秒", "180秒", "210秒", "240秒"],
            correct: 1
        },
        {
            category: "オブジェクト",
            question: "リフトヘラルドの背中の目（弱点）を攻撃すると与えるダメージの種類は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/3588.png",
            answers: ["物理ダメージ", "魔法ダメージ", "確定ダメージ（True Damage）", "割合ダメージ"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "アーケイン設定で、ジンクスの姉妹とされるチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png",
            answers: ["ケイトリン", "ヴァイ", "エコー", "エズリアル"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "ヴェルコズのパッシブ、3スタック溜まると与えるダメージの種類は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Velkoz.png",
            answers: ["物理ダメージ", "魔法ダメージ", "確定ダメージ", "混合ダメージ"],
            correct: 2
        },
        {
            category: "アイテム",
            question: "「ドランリング」が提供するステータスに含まれないものは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/1056.png",
            answers: ["魔力", "体力", "モンスターへの追加ダメージ", "オムニヴァンプ"],
            correct: 3
        },
        {
            category: "スキル",
            question: "ティーモのキノコ（R）を無効化して見えるようにするアイテム/トリンケットは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Teemo.png",
            answers: ["ファーサイトオルタレーション", "オラクルレンズ", "ワードトーテム", "スクライヤーブルーム"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "カニ（リフトスカトル）を倒すと出現する「スピードシュライン」の効果は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/3509.png",
            answers: ["近くの味方のHP回復", "視界確保と通過する味方の移動速度アップ", "敵の移動速度ダウン", "ゴールドをばら撒く"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "「ヨードルの主将」と呼ばれ、シールドやノックバックを使う小柄な戦士は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Poppy.png",
            answers: ["トリスターナ", "ポッピー", "ルル", "ベックス"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "「死を歌う者」と呼ばれ、グローバルウルトを持つチャンピオンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Karthus.png",
            answers: ["スレッシュ", "サイオン", "カーサス", "ヨリック"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "自身を「美」の具現化と信じているナルシストな射手は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jhin.png",
            answers: ["ドレイヴン", "ジン", "ヴァルス", "アフェリオス"],
            correct: 1
        },
        {
            category: "アイテム",
            question: "「マナムネ」が最大スタック（360マナ）に達すると進化するアイテム名は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3004.png",
            answers: ["セラフ・エンブレイス", "ウィンター・アプローチ", "ムラマナ", "フィンブルウィンター"],
            correct: 2
        },
        {
            category: "チャンピオン",
            question: "「嵐の怒り」ジャンナのEスキルは味方やタワーに何を付与する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Janna.png",
            answers: ["移動速度増加", "攻撃速度増加", "シールドと攻撃力増加", "HP回復"],
            correct: 2
        },
        {
            category: "スキル",
            question: "ブリッツクランクのQスキル「ロケットグラブ」が当たるとどうなる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Blitzcrank.png",
            answers: ["敵をスローにする", "敵を自分の位置まで引き寄せる", "敵を空中に打ち上げる", "敵をスタンさせる"],
            correct: 1
        },
        {
            category: "ゲーム知識",
            question: "インヒビターを破壊すると何が出現するようになる？",
            image: null,
            answers: ["砲台ミニオン", "スーパーミニオン", "バロンナッシャー", "強化タワー"],
            correct: 1
        },
        {
            category: "チャンピオン",
            question: "ルーンテラの雷神とも呼ばれる、巨大な白熊の半神は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Volibear.png",
            answers: ["オーン", "アニビア", "ボリベア", "ウディア"],
            correct: 2
        }
    ],

    // プロ向け問題（上級知識）- 50問
    pro: [
        {
            category: "スキル詳細",
            question: "ゼドの「死の刻印」で追加ダメージとして計算されるのはデスマーク中の総ダメージの何%？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png",
            answers: ["25%", "35%", "45%", "55%"],
            correct: 3
        },
        {
            category: "ゲームメカニクス",
            question: "テナシティで軽減できないCCはどれ？",
            image: null,
            answers: ["スタン", "スロー", "サプレッション", "ルート"],
            correct: 2
        },
        {
            category: "アイテム詳細",
            question: "「ランデュイン・オーメン」のアクティブ効果で敵の攻撃速度を何%低下させる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3143.png",
            answers: ["10%", "15%", "20%", "25%"],
            correct: 2
        },
        {
            category: "チャンピオン詳細",
            question: "アジールの兵士の攻撃は何に基づいてダメージを与える？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Azir.png",
            answers: ["通常攻撃として計算", "スキルダメージとして計算", "魔法ダメージだがオンヒット効果は適用", "全て確定ダメージ"],
            correct: 2
        },
        {
            category: "ゲームメカニクス",
            question: "シールドを貫通してダメージを与えることができる効果は？",
            image: null,
            answers: ["アーマー貫通", "確定ダメージ", "脅威", "どれも貫通しない"],
            correct: 3
        },
        {
            category: "スキル詳細",
            question: "ケイトリンのヘッドショットは基本攻撃に何%の追加ダメージを与える（レベル1時）？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Caitlyn.png",
            answers: ["50%", "60%", "75%", "100%"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "「適応型フォース」はADとAPのどちらに変換されるかを何で決定する？",
            image: null,
            answers: ["チャンピオンのベースステータス", "購入したアイテムのステータス比率", "スキルのADレシオとAPレシオの高い方", "プレイヤーが選択"],
            correct: 1
        },
        {
            category: "チャンピオン詳細",
            question: "ヴェインのシルバーボルトは3発目の攻撃で敵最大HPの何%（最大レベル時）の確定ダメージを与える？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vayne.png",
            answers: ["8%", "10%", "12%", "14%"],
            correct: 3
        },
        {
            category: "アイテム詳細",
            question: "「ブラッククリーバー」のアーマー減少効果は最大何%まで累積する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3071.png",
            answers: ["18%", "24%", "30%", "36%"],
            correct: 2
        },
        {
            category: "スキル詳細",
            question: "カタリナのショアポ（E）のクールダウンがリセットされる条件は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Katarina.png",
            answers: ["敵チャンピオンをキル", "ダガーを拾う", "キルまたはアシスト", "短剣に触れるか、キル/アシストを取る"],
            correct: 3
        },
        {
            category: "ゲームメカニクス",
            question: "エルダードラゴンのバフ効果で敵を処刑できるのはHPが何%以下のとき？",
            image: null,
            answers: ["10%", "15%", "20%", "25%"],
            correct: 2
        },
        {
            category: "チャンピオン詳細",
            question: "カミールのQスキル「プレシジョンプロトコル」の2段目が確定ダメージになるのは1段目から何秒後？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Camille.png",
            answers: ["1秒", "1.5秒", "2秒", "2.5秒"],
            correct: 1
        },
        {
            category: "アイテム詳細",
            question: "「ナイトエッジ」のスペルシールドはチャネリングを開始してから何秒後に発動する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3814.png",
            answers: ["0.5秒", "1秒", "1.5秒", "2秒"],
            correct: 2
        },
        {
            category: "スキル詳細",
            question: "タロンのパッシブ「ブレードエンド」は何スタックで発動する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Talon.png",
            answers: ["2スタック", "3スタック", "4スタック", "5スタック"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "ワードのクールダウン時間を短縮できるステータスは？",
            image: null,
            answers: ["スキルヘイスト", "アイテムヘイスト", "どちらでも短縮可能", "どちらでも短縮不可"],
            correct: 3
        },
        {
            category: "チャンピオン詳細",
            question: "キンドレッドのパッシブマークは敵チャンピオンにつくのはゲーム開始から何秒後？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kindred.png",
            answers: ["15秒", "25秒", "30秒", "45秒"],
            correct: 1
        },
        {
            category: "アイテム詳細",
            question: "「マルモティウス・メイ」のシールドはどのくらいの時間持続する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3156.png",
            answers: ["3秒", "5秒", "8秒", "シールドが破壊されるまで"],
            correct: 1
        },
        {
            category: "スキル詳細",
            question: "リー・シンの「共鳴撃」（Q）の2段目のダメージボーナスは敵の失ったHPの何%？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png",
            answers: ["4%", "6%", "8%", "10%"],
            correct: 2
        },
        {
            category: "ゲームメカニクス",
            question: "アルカナエネルギー（ブルーバフ）のマナ回復量は失ったマナの何%/秒？",
            image: null,
            answers: ["1%", "1.5%", "2%", "2.5%"],
            correct: 0
        },
        {
            category: "チャンピオン詳細",
            question: "ジャックスのウルト「グランドマスター・アット・アームズ」のパッシブで3回目のAAが与える追加ダメージの種類は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jax.png",
            answers: ["物理ダメージ", "魔法ダメージ", "確定ダメージ", "混合ダメージ"],
            correct: 1
        },
        {
            category: "スキル詳細",
            question: "グレイブスのAAには何発のペレットが含まれる？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Graves.png",
            answers: ["2発", "4発", "6発", "8発"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "トリンケットが使用可能になるのは何秒後？",
            image: null,
            answers: ["60秒", "90秒", "120秒", "180秒"],
            correct: 1
        },
        {
            category: "アイテム詳細",
            question: "「サンファイアイージス」の燃焼ダメージはどのような計算？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3068.png",
            answers: ["固定値", "最大HP基準", "敵最大HP基準", "レベル基準"],
            correct: 3
        },
        {
            category: "チャンピオン詳細",
            question: "フィオラのウルト「グランドチャレンジ」で全ての急所を攻撃すると何が出現する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Fiora.png",
            answers: ["バリア", "回復エリア", "移動速度増加エリア", "攻撃力増加"],
            correct: 1
        },
        {
            category: "スキル詳細",
            question: "アーリのチャームのCC時間は（ランク1で）何秒？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png",
            answers: ["1秒", "1.2秒", "1.4秒", "1.6秒"],
            correct: 2
        },
        {
            category: "ゲームメカニクス",
            question: "クリティカルダメージの基本倍率は何%？",
            image: null,
            answers: ["150%", "175%", "200%", "225%"],
            correct: 1
        },
        {
            category: "アイテム詳細",
            question: "「ソーンメイル」の棘の反射ダメージが増加する条件は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3075.png",
            answers: ["HPが低いとき", "CC中の敵から攻撃を受けた時", "自分がCCを与えた時", "敵のクリティカル攻撃を受けた時"],
            correct: 2
        },
        {
            category: "チャンピオン詳細",
            question: "レンガーのパッシブ「ウンサーノフ」のジャンプ距離は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Rengar.png",
            answers: ["600", "725", "800", "900"],
            correct: 1
        },
        {
            category: "スキル詳細",
            question: "ヴェインのEスキル「コンデム」で壁に押し付けた時のスタン時間は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vayne.png",
            answers: ["1秒", "1.25秒", "1.5秒", "1.75秒"],
            correct: 2
        },
        {
            category: "ゲームメカニクス",
            question: "イグナイトの確定ダメージは5秒間で合計いくら（レベル1）？",
            image: null,
            answers: ["50", "70", "90", "110"],
            correct: 1
        },
        {
            category: "アイテム詳細",
            question: "「ルーデンテンペスト」のパッシブクールダウンは？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3100.png",
            answers: ["6秒", "8秒", "10秒", "12秒"],
            correct: 2
        },
        {
            category: "チャンピオン詳細",
            question: "エコーのパッシブ「Zドライブ共鳴」は3スタックで敵に何を与える？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ekko.png",
            answers: ["スロー", "スタン", "追加ダメージと移動速度増加", "サイレンス"],
            correct: 2
        },
        {
            category: "スキル詳細",
            question: "ドレイヴンのスタンディングアサイドのノックアサイド距離は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Draven.png",
            answers: ["100", "150", "200", "250"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "クールダウン短縮（CDR）の上限は何%？",
            image: null,
            answers: ["30%", "35%", "40%", "上限なし（ヘイストに変換）"],
            correct: 3
        },
        {
            category: "アイテム詳細",
            question: "「リーライ・クリスタルセプター」のスロー効果は何%？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3116.png",
            answers: ["20%", "25%", "30%", "35%"],
            correct: 2
        },
        {
            category: "チャンピオン詳細",
            question: "サイラスのウルト「ハイジャック」のベースクールダウン（ランク1）は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Sylas.png",
            answers: ["80秒", "90秒", "100秒", "120秒"],
            correct: 2
        },
        {
            category: "スキル詳細",
            question: "オリアナのQスキル「コマンド：アタック」でボールが移動する速度は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Orianna.png",
            answers: ["1000", "1200", "1400", "1600"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "最初のドラゴンが出現するのは何分？",
            image: null,
            answers: ["3分", "4分", "5分", "6分"],
            correct: 2
        },
        {
            category: "アイテム詳細",
            question: "「ストームレイダー」のパッシブが発動するダメージ閾値は？",
            image: null,
            answers: ["2秒以内に最大HP25%", "2秒以内に最大HP30%", "3秒以内に最大HP25%", "3秒以内に最大HP30%"],
            correct: 1
        },
        {
            category: "チャンピオン詳細",
            question: "クレッドの「スカール」が逃げるのはHPが何以下になった時？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kled.png",
            answers: ["0", "スカールの体力ゲージを使い果たした", "クレッドのHP50%以下", "CC連続で受けた"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "脅威（Lethality）と物理防御貫通の違いは？",
            image: null,
            answers: ["違いはない", "脅威はレベル比例の実数値貫通、物理防御貫通は割合", "脅威は割合、物理防御貫通は実数値", "脅威はクリティカルにも適用される"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "ゲーム内で設定できる攻撃速度（Attack Speed）の通常の上限は？",
            image: null,
            answers: ["2.0", "2.25", "2.5", "3.0"],
            correct: 2
        },
        {
            category: "スキル詳細",
            question: "サモナースペル「クレンズ」で解除できない状態異常は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerBoost.png",
            answers: ["スタンとスネア", "サイレンスとスロー", "ノックアップとサプレッション", "ブラインドとチャーム"],
            correct: 2
        },
        {
            category: "ゲームメカニクス",
            question: "タワーがゲーム開始から5分間持つ「要塞化」バフの効果で、受けるダメージは何%減少する？",
            image: null,
            answers: ["30%", "40%", "50%", "60%"],
            correct: 2
        },
        {
            category: "アイテム詳細",
            question: "「ラバドン・デスキャップ」のパッシブ効果で増加する魔力は何%？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3089.png",
            answers: ["30%", "35%", "40%", "45%"],
            correct: 1
        },
        {
            category: "スキル詳細",
            question: "モルデカイザーのR「死の国」で奪うステータスの割合は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Mordekaiser.png",
            answers: ["5%", "8%", "10%", "15%"],
            correct: 2
        },
        {
            category: "チャンピオン詳細",
            question: "アニビアが卵状態（パッシブ）になる際の卵の耐久力（AR/MR）はレベルによってどう変化する？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Anivia.png",
            answers: ["固定値", "変化しない", "レベルに応じて増加する", "レベルに応じて減少する"],
            correct: 3
        },
        {
            category: "スキル詳細",
            question: "カサディンのR「リフトウォーク」のスタック最大数は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kassadin.png",
            answers: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            category: "ゲームメカニクス",
            question: "ミニオンへのテレポート詠唱時間は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/spell/SummonerTeleport.png",
            answers: ["3秒", "3.5秒", "4秒", "4.5秒"],
            correct: 2
        },
        {
            category: "アイテム詳細",
            question: "サポートアイテム「ウォッチフル・ワードストーン」が格納できるコントロールワードの最大数は？",
            image: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/3158.png",
            answers: ["2個", "3個", "4個", "5個"],
            correct: 1
        }
    ]
};

// クイズ設定
const QUIZ_CONFIG = {
    beginner: {
        name: "ビギナー",
        timeLimit: 90,
        questionCount: 10,
        theme: "beginner"
    },
    standard: {
        name: "スタンダード",
        timeLimit: 60,
        questionCount: 15,
        theme: "standard"
    },
    pro: {
        name: "プロ",
        timeLimit: 30,
        questionCount: 20,
        theme: "pro"
    }
};

// 結果メッセージ
const RESULT_MESSAGES = {
    perfect: "完璧！あなたは真のチャレンジャー！",
    excellent: "素晴らしい！上位ランクの実力です！",
    good: "よくできました！もう少しで上級者！",
    average: "まずまずです。もっと勉強しよう！",
    poor: "頑張りましょう！練習あるのみ！"
};
