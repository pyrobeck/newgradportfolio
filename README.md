# Beck Braun — Portfolio

Just Dance–style "select your mode" home screen in Spider-Verse colours. React + Vite, hand-written CSS, React Three Fiber for the 3D viewer.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview   # production build at http://localhost:4173
```

## Contact form (Formspree)

1. Create a free form at https://formspree.io.
2. Copy the form ID (the part after `/f/` in the endpoint).
3. Paste it into `FORMSPREE_ID` at the top of `src/pages/contact.jsx`.

Until an ID is set, the form validates and then opens the visitor's email app pre-filled.

## Where things live

- `src/data/work.js` — every gallery piece, design series and video reel (titles, descriptions, categories).
- `src/assets/web/` — web-optimized copies of the art (WebP, H.264 MP4, a texture-compressed `witch-house.glb`). Originals stay in `src/assets/artwork/`.
- `src/pages/` — the sections: `home` (hero), `portfolio` (gallery), `3dwork`, `games` (Code & Play), `contact`.
- `src/index.css` — the whole design system (colour tokens at the top).

To add a piece: drop an optimized image in `src/assets/web/`, import it in `work.js`, and add an entry to `GALLERY` with its `cats`, `w` and `h`.
