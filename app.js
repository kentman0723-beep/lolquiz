/**
 * LoL Quiz - Main Application Logic
 * ゲームの状態管理とインタラクション
 */

/**
 * サウンドマネージャー - BGMと効果音の管理
 */
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.bgmAudio = null;
        this.isMuted = false;
        this.bgmVolume = 0.1;
        this.sfxVolume = 0.2;

        // BGM URL (フリー音源)
        this.bgmUrl = 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3';

        this.init();
    }

    init() {
        // AudioContextの初期化はユーザー操作後に行う
        document.addEventListener('click', () => this.initAudioContext(), { once: true });
    }

    initAudioContext() {
        if (this.audioContext) return;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initBGM();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    initBGM() {
        // BGM無効化
    }

    // BGM再生（無効化）
    playBGM() {
        // BGM削除 - 何もしない
    }

    // BGM停止
    stopBGM() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
            this.bgmAudio.currentTime = 0;
        }
    }

    // BGM一時停止
    pauseBGM() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
        }
    }

    // 効果音を生成して再生（Web Audio API使用）
    playSFX(type) {
        if (!this.audioContext || this.isMuted) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(this.sfxVolume, now);

        switch (type) {
            case 'correct':
                // 正解音：上昇する明るい音
                oscillator.frequency.setValueAtTime(523.25, now); // C5
                oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
                oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                oscillator.start(now);
                oscillator.stop(now + 0.4);
                break;

            case 'incorrect':
                // 不正解音：下降する暗い音
                oscillator.frequency.setValueAtTime(293.66, now); // D4
                oscillator.frequency.setValueAtTime(220, now + 0.15); // A3
                oscillator.type = 'sawtooth';
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                oscillator.start(now);
                oscillator.stop(now + 0.3);
                break;

            case 'click':
                // クリック音
                oscillator.frequency.setValueAtTime(800, now);
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.2, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                oscillator.start(now);
                oscillator.stop(now + 0.05);
                break;

            case 'hover':
                // ホバー音
                oscillator.frequency.setValueAtTime(600, now);
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.1, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.03);
                oscillator.start(now);
                oscillator.stop(now + 0.03);
                break;

            case 'gameOver':
                // ゲームオーバー音
                oscillator.frequency.setValueAtTime(440, now);
                oscillator.frequency.exponentialRampToValueAtTime(110, now + 0.5);
                oscillator.type = 'sawtooth';
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
                oscillator.start(now);
                oscillator.stop(now + 0.6);
                break;

            case 'victory':
                // 勝利ファンファーレ
                this.playVictoryFanfare();
                return;

            case 'timer':
                // タイマー警告音
                oscillator.frequency.setValueAtTime(880, now);
                oscillator.type = 'square';
                gainNode.gain.setValueAtTime(0.15, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                oscillator.start(now);
                oscillator.stop(now + 0.1);
                break;
        }
    }

    // 勝利ファンファーレ（複数音）
    playVictoryFanfare() {
        if (!this.audioContext || this.isMuted) return;

        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        const now = this.audioContext.currentTime;

        notes.forEach((freq, i) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            osc.connect(gain);
            gain.connect(this.audioContext.destination);

            osc.frequency.setValueAtTime(freq, now + i * 0.15);
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.3, now + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.3);

            osc.start(now + i * 0.15);
            osc.stop(now + i * 0.15 + 0.3);
        });
    }

    // ミュート切り替え
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.bgmAudio) {
            this.bgmAudio.volume = this.isMuted ? 0 : this.bgmVolume;
        }
        return this.isMuted;
    }

    // BGM音量設定
    setBGMVolume(volume) {
        this.bgmVolume = volume;
        if (this.bgmAudio && !this.isMuted) {
            this.bgmAudio.volume = volume;
        }
    }

    // 効果音音量設定
    setSFXVolume(volume) {
        this.sfxVolume = volume;
    }
}

// グローバルサウンドマネージャー
const soundManager = new SoundManager();

class LoLQuizGame {
    constructor() {
        // ゲーム状態
        this.currentScreen = 'title';
        this.difficulty = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctCount = 0;
        this.lives = 3;
        this.maxLives = 3;
        this.timeLeft = 0;
        this.timerInterval = null;
        this.isAnswered = false;

        // DOM要素のキャッシュ
        this.screens = {
            title: document.getElementById('title-screen'),
            difficulty: document.getElementById('difficulty-screen'),
            quiz: document.getElementById('quiz-screen'),
            result: document.getElementById('result-screen')
        };

        this.elements = {
            timer: document.getElementById('timer'),
            progressCircle: document.getElementById('progress-circle'),
            progressText: document.getElementById('progress-text'),
            lives: document.getElementById('lives'),
            questionCategory: document.getElementById('question-category'),
            questionImageContainer: document.getElementById('question-image-container'),
            questionText: document.getElementById('question-text'),
            answersGrid: document.getElementById('answers-grid'),
            correctCount: document.getElementById('correct-count'),
            finalScore: document.getElementById('final-score'),
            totalQuestions: document.getElementById('total-questions'),
            resultTitle: document.getElementById('result-title'),
            resultMessage: document.getElementById('result-message'),
            resultDifficulty: document.getElementById('result-difficulty'),
            resultAccuracy: document.getElementById('result-accuracy'),
            nicknameInput: document.getElementById('nickname-input')
        };

        // イベントリスナーの設定
        this.initEventListeners();

        // パーティクル生成
        this.createParticles();

        // サウンドマネージャー参照
        this.sound = soundManager;
    }

    /**
     * イベントリスナーの初期化
     */
    initEventListeners() {
        // タイトル画面
        document.getElementById('start-btn').addEventListener('click', () => {
            this.sound.playSFX('click');
            this.showScreen('difficulty');
        });

        // 難易度選択
        document.querySelectorAll('.difficulty-card').forEach(card => {
            card.addEventListener('click', () => {
                this.sound.playSFX('click');
                const difficulty = card.dataset.difficulty;
                this.startGame(difficulty);
            });
        });

        document.getElementById('back-to-title').addEventListener('click', () => {
            this.sound.playSFX('click');
            this.showScreen('title');
        });

        // 回答ボタン
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!this.isAnswered) {
                    this.checkAnswer(parseInt(btn.dataset.index));
                }
            });
        });

        // 結果画面
        document.getElementById('tweet-btn').addEventListener('click', () => {
            this.shareToTwitter();
        });

        document.getElementById('retry-btn').addEventListener('click', () => {
            this.showScreen('difficulty');
        });

        document.getElementById('home-btn').addEventListener('click', () => {
            this.showScreen('title');
            document.body.className = '';
        });
    }

    /**
     * パーティクルを生成
     */
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${6 + Math.random() * 4}s`;
            particlesContainer.appendChild(particle);
        }
    }

    /**
     * 画面遷移
     */
    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        this.screens[screenName].classList.add('active');
        this.currentScreen = screenName;
    }

    /**
     * ゲーム開始
     */
    startGame(difficulty) {
        this.difficulty = difficulty;
        const config = QUIZ_CONFIG[difficulty];

        // テーマ適用
        document.body.className = `theme-${config.theme}`;

        // 状態をリセット
        this.currentQuestionIndex = 0;
        this.correctCount = 0;
        this.lives = this.maxLives;
        this.timeLeft = config.timeLimit;
        this.isAnswered = false;

        // 問題をシャッフルして選択
        this.questions = this.shuffleArray([...QUESTIONS_DATABASE[difficulty]])
            .slice(0, config.questionCount);

        // UI更新
        this.updateLivesDisplay();
        this.updateProgressDisplay();
        this.elements.correctCount.textContent = '0';

        // 画面遷移してクイズ開始
        this.showScreen('quiz');
        this.sound.playBGM();
        this.showQuestion();
        this.startTimer();
    }

    /**
     * 配列をシャッフル
     */
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * 問題を表示
     */
    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.isAnswered = false;

        // カテゴリー
        this.elements.questionCategory.textContent = question.category;

        // 画像
        if (question.image) {
            this.elements.questionImageContainer.innerHTML =
                `<img src="${question.image}" alt="Question Image" onerror="this.style.display='none'">`;
            this.elements.questionImageContainer.style.display = 'block';
        } else {
            this.elements.questionImageContainer.style.display = 'none';
        }

        // 問題文
        this.elements.questionText.textContent = question.question;

        // 選択肢
        const answerBtns = this.elements.answersGrid.querySelectorAll('.answer-btn');
        question.answers.forEach((answer, index) => {
            const btn = answerBtns[index];
            btn.querySelector('.answer-text').textContent = answer;
            btn.classList.remove('correct', 'incorrect');
            btn.disabled = false;
        });

        // 進捗更新
        this.updateProgressDisplay();

        // アニメーション
        this.elements.questionText.classList.add('fade-in');
        setTimeout(() => {
            this.elements.questionText.classList.remove('fade-in');
        }, 500);
    }

    /**
     * 回答をチェック
     */
    checkAnswer(selectedIndex) {
        if (this.isAnswered) return;
        this.isAnswered = true;

        const question = this.questions[this.currentQuestionIndex];
        const answerBtns = this.elements.answersGrid.querySelectorAll('.answer-btn');

        // 全てのボタンを無効化
        answerBtns.forEach(btn => btn.disabled = true);

        // 正解を表示
        answerBtns[question.correct].classList.add('correct');

        if (selectedIndex === question.correct) {
            // 正解
            this.sound.playSFX('correct');
            this.correctCount++;
            this.elements.correctCount.textContent = this.correctCount;
        } else {
            // 不正解
            this.sound.playSFX('incorrect');
            answerBtns[selectedIndex].classList.add('incorrect');
            this.loseLife();
        }

        // 次の問題または結果画面へ
        setTimeout(() => {
            if (this.lives <= 0) {
                this.endGame(false); // ゲームオーバー
            } else if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.showQuestion();
            } else {
                this.endGame(true); // クリア
            }
        }, 1500);
    }

    /**
     * ライフを減らす
     */
    loseLife() {
        this.lives--;
        this.updateLivesDisplay();

        // シェイクアニメーション
        this.elements.lives.classList.add('shake');
        setTimeout(() => {
            this.elements.lives.classList.remove('shake');
        }, 500);
    }

    /**
     * ライフ表示を更新
     */
    updateLivesDisplay() {
        const lifeElements = this.elements.lives.querySelectorAll('.life');
        lifeElements.forEach((life, index) => {
            if (index < this.lives) {
                life.classList.remove('lost');
                life.classList.add('active');
            } else {
                life.classList.remove('active');
                life.classList.add('lost');
            }
        });
    }

    /**
     * 進捗表示を更新
     */
    updateProgressDisplay() {
        const total = this.questions.length;
        const current = this.currentQuestionIndex + 1;

        // テキスト
        this.elements.progressText.textContent = `${current}/${total}`;

        // 円グラフ
        const circumference = 2 * Math.PI * 45; // r=45
        const offset = circumference * (1 - current / total);
        this.elements.progressCircle.style.strokeDashoffset = offset;
    }

    /**
     * タイマー開始
     */
    startTimer() {
        this.stopTimer();
        this.updateTimerDisplay();

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 10) {
                this.elements.timer.classList.add('warning');
                if (this.timeLeft > 0) this.sound.playSFX('timer');
            }

            if (this.timeLeft <= 0) {
                this.endGame(false);
            }
        }, 1000);
    }

    /**
     * タイマー停止
     */
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.elements.timer.classList.remove('warning');
    }

    /**
     * タイマー表示を更新
     */
    updateTimerDisplay() {
        this.elements.timer.textContent = this.timeLeft;
    }

    /**
     * ゲーム終了
     */
    endGame(completed) {
        this.stopTimer();
        this.sound.stopBGM();

        const config = QUIZ_CONFIG[this.difficulty];
        const total = this.questions.length;
        const accuracy = Math.round((this.correctCount / total) * 100);

        // 結果画面を更新
        this.elements.finalScore.textContent = this.correctCount;
        this.elements.totalQuestions.textContent = total;
        this.elements.resultDifficulty.textContent = config.name;
        this.elements.resultAccuracy.textContent = `${accuracy}%`;

        // タイトルとメッセージ
        if (!completed && this.lives <= 0) {
            this.elements.resultTitle.textContent = 'ゲームオーバー';
            this.sound.playSFX('gameOver');
        } else if (!completed) {
            this.elements.resultTitle.textContent = '時間切れ！';
        } else {
            this.elements.resultTitle.textContent = 'クイズ完了！';
            this.sound.playSFX('victory');
        }

        this.elements.resultMessage.textContent = this.getResultMessage(accuracy);

        // 結果画面を表示
        this.showScreen('result');
    }

    /**
     * 結果メッセージを取得
     */
    getResultMessage(accuracy) {
        if (accuracy === 100) return RESULT_MESSAGES.perfect;
        if (accuracy >= 80) return RESULT_MESSAGES.excellent;
        if (accuracy >= 60) return RESULT_MESSAGES.good;
        if (accuracy >= 40) return RESULT_MESSAGES.average;
        return RESULT_MESSAGES.poor;
    }

    /**
     * Twitterに共有
     */
    shareToTwitter() {
        const nickname = this.elements.nicknameInput.value.trim() || '名無しのサモナー';
        const config = QUIZ_CONFIG[this.difficulty];
        const total = this.questions.length;
        const accuracy = Math.round((this.correctCount / total) * 100);

        const text = `【LoL Quiz】
${nickname}さんの結果
🎮 難易度: ${config.name}
✅ 正解数: ${this.correctCount}/${total}
📊 正解率: ${accuracy}%
${this.getResultEmoji(accuracy)}

あなたもLoLクイズに挑戦しよう！
#LoLQuiz #LeagueOfLegends`;

        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(twitterUrl, '_blank', 'width=550,height=420');
    }

    /**
     * 結果に応じた絵文字を取得
     */
    getResultEmoji(accuracy) {
        if (accuracy === 100) return '🏆 チャレンジャー！';
        if (accuracy >= 80) return '💎 ダイヤモンド！';
        if (accuracy >= 60) return '🥇 ゴールド！';
        if (accuracy >= 40) return '🥈 シルバー！';
        return '🥉 ブロンズ！';
    }
}

// ゲーム初期化
document.addEventListener('DOMContentLoaded', () => {
    window.lolQuiz = new LoLQuizGame();
});
