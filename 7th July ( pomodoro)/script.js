
        let timeLeft = 25 * 60;
        let isRunning = false;
        let currentSession = 'work';
        let currentPomodoro = 1;
        let completedPomodoros = 0;
        let totalSessions = 0;
        let timer = null;

        const timerEl = document.getElementById('timer');
        const sessionTypeEl = document.getElementById('sessionType');
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const resetBtn = document.getElementById('resetBtn');
        const progressEl = document.getElementById('progress');
        const workTimeEl = document.getElementById('workTime');
        const shortBreakEl = document.getElementById('shortBreak');
        const longBreakEl = document.getElementById('longBreak');
        const pomodoroCountEl = document.getElementById('pomodoroCount');
        const completedCountEl = document.getElementById('completedCount');
        const totalSessionsEl = document.getElementById('totalSessions');

        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        function updateSessionType() {
            if (currentSession === 'work') {
                sessionTypeEl.textContent = 'Work Session';
                sessionTypeEl.className = 'session-type session-work';
            } else if (currentSession === 'shortBreak') {
                sessionTypeEl.textContent = 'Short Break';
                sessionTypeEl.className = 'session-type session-break';
            } else {
                sessionTypeEl.textContent = 'Long Break';
                sessionTypeEl.className = 'session-type session-long';
            }
        }

        function updateProgress() {
            const totalCircles = parseInt(pomodoroCountEl.value);
            progressEl.innerHTML = '';
            
            for (let i = 1; i <= totalCircles; i++) {
                const circle = document.createElement('span');
                circle.className = 'circle';
                
                if (i < currentPomodoro) {
                    circle.classList.add('completed');
                } else if (i === currentPomodoro && currentSession === 'work') {
                    circle.classList.add('current');
                }
                
                progressEl.appendChild(circle);
            }
        }

        function start() {
            if (!isRunning) {
                isRunning = true;
                startBtn.textContent = 'Running';
                startBtn.disabled = true;
                
                timer = setInterval(() => {
                    timeLeft--;
                    updateDisplay();
                    
                    if (timeLeft <= 0) {
                        completeSession();
                    }
                }, 1000);
            }
        }

        function pause() {
            isRunning = false;
            startBtn.textContent = 'Start';
            startBtn.disabled = false;
            clearInterval(timer);
        }

        function reset() {
            isRunning = false;
            currentSession = 'work';
            currentPomodoro = 1;
            timeLeft = parseInt(workTimeEl.value) * 60;
            startBtn.textContent = 'Start';
            startBtn.disabled = false;
            clearInterval(timer);
            updateDisplay();
            updateSessionType();
            updateProgress();
        }

        function completeSession() {
            isRunning = false;
            clearInterval(timer);
            totalSessions++;
            
            if (currentSession === 'work') {
                completedPomodoros++;
                
                if (currentPomodoro >= parseInt(pomodoroCountEl.value)) {
                    currentSession = 'longBreak';
                    timeLeft = parseInt(longBreakEl.value) * 60;
                    currentPomodoro = 1;
                } else {
                    currentSession = 'shortBreak';
                    timeLeft = parseInt(shortBreakEl.value) * 60;
                    currentPomodoro++;
                }
            } else {
                currentSession = 'work';
                timeLeft = parseInt(workTimeEl.value) * 60;
            }
            
            startBtn.textContent = 'Start';
            startBtn.disabled = false;
            updateDisplay();
            updateSessionType();
            updateProgress();
            updateStats();
        }

        function updateStats() {
            completedCountEl.textContent = completedPomodoros;
            totalSessionsEl.textContent = totalSessions;
        }

        startBtn.addEventListener('click', start);
        pauseBtn.addEventListener('click', pause);
        resetBtn.addEventListener('click', reset);

        [workTimeEl, shortBreakEl, longBreakEl, pomodoroCountEl].forEach(input => {
            input.addEventListener('change', () => {
                if (!isRunning) {
                    reset();
                }
            });
        });

        // Initialize
        updateDisplay();
        updateSessionType();
        updateProgress();
