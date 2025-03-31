document.getElementById("start-singing").addEventListener("click", function () {
    document.body.classList.replace("matcha-room", "karaoke-room");
    document.getElementById("lyrics-text").classList.add("typing");

    // Hide smiling scene and show singing scene
    document.getElementById("smiling-scene").classList.add("hidden");
    document.getElementById("singing-scene").classList.remove("hidden");

    document.getElementById("karaoke-music").play();

    let lyrics = [
        { text: "🎵 Thought I found a way", time: 20000 },
        { text: "🎵 Thought I found a way out", time: 24000 },
        { text: "🎶 But you never go away <br> (never go away)", time: 28000 },
        { text: "🎵 So I guess I gotta stay now", time: 32000 },

        { text: "🎶 Oh, I hope some day <br> I'll make it out of here", time: 34000 },
        { text: "🎵 Even if it takes all night <br> or a hundred years", time: 40000 },
        { text: "🎵 Need a place to hide, <br> but I can't find one near", time: 45000 },
        { text: "🎵 Wanna feel alive, outside <br> I can't fight my fear", time: 50000 },

        { text: "🎶 Isn't it lovely, all alone?", time: 55000 },
        { text: "🎵 Heart made of glass, <br> my mind of stone", time: 56000 },
        { text: "🎵 Tear me to pieces, <br> skin to bone", time: 57000 },
        { text: "🎵 Hello, welcome home", time: 59000 },
    ];

    lyrics.forEach((lyric) => {
        setTimeout(() => {
            document.getElementById("lyrics-text").innerHTML = lyric.text;
        }, lyric.time);
    });
});
