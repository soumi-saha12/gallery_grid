# Captured Moments — Minimalist Image Gallery

A modern, clean editorial-style visual showcase built using pure vanilla HTML, CSS, and JavaScript. Designed with mobile responsiveness, cinematic animations, and keyboard navigation.

---

## ✨ Features

- **Minimalist Grid Layout**: Flat, clean grid displaying images in a consistent `3:2` aspect ratio with no drop shadows or colorful accents.
- **Cinematic Hover Interactions**: Image cards scale gently, blur, and darken on hover (`blur(3px) brightness(0.45)`) to display a centered, bold, uppercase title reveal.
- **Immersive Fullscreen Lightbox**: 
  - Displays a high-contrast central showcase card.
  - Generates a dynamic blurred grid in the background using the other photos in the collection.
  - Features an active cell filter to prevent duplicated imagery in the blurred background.
- **Clickable Thumbnail Strip**: A bottom-aligned mini thumbnail bar allowing users to see the entire collection and jump between images instantly.
- **Fluid Keyboard Support**: Full keydown triggers for navigation (`ArrowRight`, `ArrowLeft`) and dismissals (`Escape`).
- **Mobile Usability**: Custom viewport-optimized grids and tap-friendly controls (`touch-action: manipulation`) with hidden controls on smaller mobile screens in favor of standard swipes/arrows.
- **Zero Libraries**: Pure vanilla stack with no frameworks or third-party libraries.

---

## 📂 Project Structure

```
/image-gallery
  ├── index.html        # HTML layout, header section, and lightbox markup
  ├── style.css         # Styling system, typography, responsive media queries, and animations
  ├── script.js         # DOM actions, blurred background generation, and keyboard listeners
  └── /images           # Collection images directory (1.jpg, 2.jpg, etc.)
```

---

## 🚀 Getting Started

Simply open the `index.html` file in any modern web browser to view the gallery:

```bash
# Mac Terminal
open index.html
```

---

## 🎨 Customize

To add your own images:
1. Place your images in the `/images` folder.
2. Rename them to `1.jpg`, `2.jpg`, etc., to override the starter photos directly.
3. Open `index.html` and update the titles within the `<p class="item-label">` tags to match your new image moods!
