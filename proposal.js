    const noBtn = document.querySelector('.no');
    const message = document.getElementById('message');
    const hearts = document.getElementById('hearts');
    const title = document.getElementById('title');
    const nameInput = document.getElementById('nameInput');
    const finalName = document.getElementById('finalName');

    const noTexts = [
      'No 🙃',
      'Are you sure? 😏',
      'Try again 😂',
      'Nice try 😌',
      'Almost 😜'
    ];

    function updateName() {
      const name = nameInput.value.trim();
      title.textContent = name
        ? `💘 ${name}, will you be my Valentine?`
        : '💘 Will you be my Valentine?';
      finalName.textContent = name || 'you';
    }

    function moveNo() {
      const x = Math.random() * 220 - 110;
      const y = Math.random() * 180 - 90;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
      noBtn.innerText = noTexts[Math.floor(Math.random() * noTexts.length)];
    }

    function enableMusic() {
      const music = document.getElementById("bgMusic");
      music.volume = 0.6;
      music.play();
      music.pause(); 
    }

    function sayYes() {
      message.style.display = 'block';
      const music = document.getElementById('bgMusic');
      music.volume = 0.6;
      music.play();
      for (let i = 0; i < 28; i++) createHeart();
    }

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerText = Math.random() > 0.5 ? '❤️' : '💖';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.bottom = '-30px';
      heart.style.animationDuration = 3 + Math.random() * 2 + 's';
      hearts.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);

    }
