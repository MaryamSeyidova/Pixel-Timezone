document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const dialogueText = document.getElementById("dialogue-text");
    const typingSound = new Audio("assets/typing.mp3");

    const questions = [
        "What is your favorite memory together? :)",
        "If we had a superpower, what would it be? hehe",
        "What is our dream adventure? ✨",
        "What is something funny that happened to us? 😂",
        "What is yours favorite karaoke song? 🎤"
    ];

    function typeText(text) {
        dialogueText.innerHTML = "";
        let i = 0;

        // Play typing sound continuously
        typingSound.loop = true;
        typingSound.play();

        const interval = setInterval(() => {
            dialogueText.innerHTML += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                typingSound.pause();
                typingSound.currentTime = 0; // Reset the sound to the beginning
            }
        }, 150); // Adjust interval for better readability

        dialogueText.style.wordWrap = "break-word"; // Ensure proper word wrapping
        dialogueText.style.whiteSpace = "normal"; // Prevent single-line overflow
        dialogueText.style.overflowWrap = "break-word"; // Avoid breaking words mid-way
    }

    document.getElementById("maryam").addEventListener("click", function () {
        typeText(questions[Math.floor(Math.random() * questions.length)]);
    });

    document.getElementById("chaim").addEventListener("click", function () {
        typeText(questions[Math.floor(Math.random() * questions.length)]);
    });

    musicToggle.addEventListener("click", function () {
        music.paused ? music.play() : music.pause();
    });
});
