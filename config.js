// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Belli",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Gehst Du am Valentinstag mit mir aus? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Magst du mich?",                                    // First interaction
            yesBtn: "Es geht...",                                             // Text for "Yes" button
            noBtn: "Habs mir besser vorgestellt...",                                               // Text for "No" button
            secretAnswer: "Wir sind Kommilitonen"           // Secret hover message
        },
        second: {
            text: "Wie sehr freust du dich auf die Losteria in 09111 Chemnitz",                          // For the love meter
            startText: "So sehr",                                   // Text before the percentage
            nextBtn: "weiter ❤️"                                         // Text for the next button
        },
        third: {
            text: "Willst du mit mir am 14.02.2026 um 19:15 dahin gehen? 🌹", // The big question!
            yesBtn: "Na gut.... Wenns sein muss",                                             // Text for "Yes" button
            noBtn: "Nein, ich muss um 19:30 mit jemand anderem im Moli Modo sein"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Ich würde leiber um 19:00 Uhr im Karl Mags Süß sein 🍷💝",  // Shows when they go past 5000%
        high: "Immerhin schemckt die Pizza 👨",              // Shows when they go past 1000%
        normal: "gar nicht, bist eh hässlich"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Schade",
        message: "Schön das du da warst",
        emojis: "..."  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/db8z1uiut/video/upload/v1770932160/Rihanna_-_Don_t_Stop_the_Music_Lyrics_pvecbi.mp3", // Music streaming URL
        startText: "🎵 Musik an",        // Button text to start music
        stopText: "🔇 Musik aus",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
