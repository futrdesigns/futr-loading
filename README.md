# futr Loading Screen

A modern, customizable loading screen for FiveM servers featuring dynamic staff lists, particle effects, background video/audio support, and real-time game loading progress tracking.

## Features

- Modern glassmorphism design with smooth animations
- Customizable staff team display with avatar support
- Background video with automatic fallback
- Background music with volume controls
- Animated particle system
- Real-time loading bar synced with game loading
- Fully configurable through config.js
- Responsive design for all screen sizes
- Discord avatar support (animated GIFs supported)

## Installation

### Step 1: Download and Extract

1. Download the loading screen files
2. Extract the folder to your FiveM server's `resources` directory and place it where you like e.g. [standalone]

### Step 2: File Structure

Your resource folder should look like this:

```
lxfs-loadingscreen/
├── fxmanifest.lua
└── html/
    ├── index.html
    ├── config.js
    ├── Logo.png          (your logo goes here)
    ├── background.mp4    (optional - your background video)
    ├── background.webm   (optional - fallback format)
    ├── background.ogv    (optional - fallback format)
    ├── audio.mp3         (optional - your background music)
    └── audio.ogg         (optional - fallback format)
```

### Step 3: Add Your Logo

1. Prepare your logo image (PNG format recommended)
2. Name it `Logo.png` (case-sensitive)
3. Place it in the `html/` folder
4. Recommended size: 240px width or larger for best quality

### Step 4: Configure Server

Add this line to your `server.cfg`:

```cfg
ensure lxfs-loadingscreen
```

Or if you renamed the folder:

```cfg
ensure your-folder-name
```

Make sure this line is placed **before** any other resources that might affect the loading screen.

### Step 5: Restart Server

Restart your FiveM server or use the command:

```
restart lxfs-loadingscreen
```

## Configuration

All customization is done through the `config.js` file located in the `html/` folder.

### Changing Colors

Edit the `colors` section in `config.js`:

```javascript
colors: {
    accentColor: "#f020e6",        // Main accent color
    accentHover: "#bd17cc",        // Hover state color
    backgroundDark: "rgba(0,0,0,0.7)",
    backgroundCard: "rgba(40,44,52,0.85)",
    backgroundHover: "rgba(60,64,72,0.95)",
    textLight: "#ffffff",
    textMuted: "#b0b0b0",
    gradientStart: "#1a1a1a",
    gradientEnd: "#2a2a3a"
}
```

### Adding Staff Members

Edit the `staff.members` array in `config.js`:

```javascript
staff: {
    enabled: true,
    title: "Staff Team",
    showCount: true,
    members: [
        {
            name: "placeholder1",
            role: "Owner",
            image: "https://cdn.discordapp.com/avatars/YOUR_ID/YOUR_AVATAR.png"
        },
        {
            name: "placeholder2",
            role: "Dev",
            image: ""  // Leave empty for letter avatar
        }
        // Add more staff members here
    ]
}
```

**Getting Discord Avatar URLs:**

1. Enable Developer Mode in Discord (User Settings > Advanced)
2. Right-click on a user's profile picture
3. Select "Copy Image Address"
4. Paste the URL in the `image` field

**Note:** Discord avatar URLs follow this format:
- Static: `https://cdn.discordapp.com/avatars/USER_ID/AVATAR_HASH.png`
- Animated: `https://cdn.discordapp.com/avatars/USER_ID/AVATAR_HASH.gif` (add `?size=1024` for higher quality)

### Particle Settings

Adjust particle effects in `config.js`:

```javascript
particles: {
    enabled: true,
    count: 150,           // Number of particles
    speed: 0.2,           // Movement speed
    sizeMin: 1,           // Minimum particle size
    sizeMax: 3,           // Maximum particle size
    colors: [
        'rgba(255,255,255,0.3)',
        'rgba(32, 226, 240, 0.3)'
    ]
}
```

### Media Configuration

Configure background video and audio in `config.js`:

```javascript
media: {
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
        defaultVolume: 100,
        autoplay: true
    }
}
```

## Adding Background Video

1. Convert your video to MP4 format (recommended: 1920x1080, H.264 codec)
2. Name it `background.mp4`
3. Place it in the `html/` folder
4. Optional: Create WebM and OGV versions for better browser compatibility

**Video Requirements:**
- Format: MP4 (H.264), WebM, or OGV
- Recommended resolution: 1920x1080 or 1280x720
- Keep file size under 50MB for faster loading
- No audio track needed (will be ignored)

## Adding Background Music

1. Convert your audio to MP3 format
2. Name it `audio.mp3`
3. Place it in the `html/` folder
4. Optional: Create an OGG version for better browser compatibility

**Audio Requirements:**
- Format: MP3 or OGG
- Recommended bitrate: 128-192 kbps
- Keep file size under 10MB
- Will loop automatically

## Troubleshooting

### Logo Not Showing

- Verify the file is named exactly `Logo.png` (case-sensitive)
- Check that the file is in the `html/` folder
- Try using a different image format or re-exporting the PNG
- Check browser console for errors (F12 in-game)

### Video Not Playing

- Ensure video file is in the `html/` folder
- Try converting to MP4 with H.264 codec
- Check file size (keep under 50MB)
- Verify `video.enabled` is set to `true` in config.js
- If video fails, the gradient fallback will display automatically

### Staff Avatars Not Loading

- Verify Discord avatar URLs are correct and accessible
- Check that URLs start with `https://`
- Ensure Discord CDN links haven't expired
- Try re-copying the avatar URL from Discord

### Loading Bar Not Moving

- The loading bar syncs with actual game loading
- In browser testing, it will show simulated progress
- In FiveM, it will track real game loading events

### Audio Not Playing

- Some browsers block autoplay - users may need to click to start audio
- Verify audio file is in the `html/` folder and named correctly
- Check `audio.enabled` is set to `true` in config.js
- Ensure audio file format is supported (MP3 recommended)

## Support

For issues, suggestions, or questions:

1. Check the troubleshooting section above
2. Verify all file paths and names are correct
3. Check the browser console (F12) for error messages
4. Review the config.js file for syntax errors

## Credits

- Author: futrdesigns
- Description: Custom loading screen built for FiveM servers
- Version: 1.0.0

## License

This loading screen is provided as-is for use in FiveM servers. Feel free to customize and modify as needed for your server.
