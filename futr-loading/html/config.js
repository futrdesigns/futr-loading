const CONFIG = {
    branding: {
        serverName: "FUTR",
        logoPath: "Logo.png"
    },

    colors: {
        // Primary accent color (used for highlights, borders, glows)
        accentColor: "#2057f0ff",
        accentHover: "#cc1717ff",
        
        // Background colors
        backgroundDark: "rgba(0,0,0,0.7)",
        backgroundCard: "rgba(40,44,52,0.85)",
        backgroundHover: "rgba(60,64,72,0.95)",
        
        // Text colors
        textLight: "#ffffff",
        textMuted: "#b0b0b0",
        
        // Gradient background (when video fails to load)
        gradientStart: "#1a1a1a",
        gradientEnd: "#2a2a3a"
    },

    staff: {
        enabled: true,
        title: "Staff Team",
        showCount: true,
        members: [
            {
                name: "Placeholder1",
                role: "Owner",
                image: ""
            },
            {
                name: "Placeholder2",
                role: "Dev",
                image: "" // Leave empty for letter avatar
            }
        ]
    },

    media: {
        // Background video
        video: {
            enabled: true,
            sources: [
                { src: "background.mp4", type: "video/mp4" },
                { src: "background.webm", type: "video/webm" },
                { src: "background.ogv", type: "video/ogg" }
            ],
            opacity: 0.5
        },

        audio: {
            enabled: true,
            sources: [
                { src: "audio.mp3", type: "audio/mpeg" },
                { src: "audio.ogg", type: "audio/ogg" }
            ],
            defaultVolume: 100, // 0-100
            autoplay: true
        }
    },

    particles: {
        enabled: true,
        count: 150,
        speed: 0.2,
        sizeMin: 1,
        sizeMax: 3,
        colors: [
            'rgba(255,255,255,0.3)',
            'rgba(32, 226, 240, 0.3)'
        ]
    },

    animations: {
        logoRevealDuration: 1.2, // seconds
        fadeTransition: 0.5 // seconds
    }
};
