# BoardBench

**A field guide to the tiny computers that power makers — from the classic Arduino Uno to the mighty Raspberry Pi.**

BoardBench is a zero-dependency, single-page website for exploring and comparing development boards. Hand-written HTML, CSS and vanilla JavaScript — no frameworks, no build step, no bundler. Open `index.html` and it just works.

> Designed with a printed-circuit-board aesthetic: solder-mask green, copper traces, silkscreen typography and a power LED that actually blinks.

---

## ✨ Features

- **9 documented boards** across 5 classes — microcontrollers, single-board computers, IoT, AI/edge and education
- **Interactive filtering** — narrow the grid by board class with one tap
- **Board detail modal** — full spec sheet per board (CPU, memory, I/O, wireless, size, price), closable via `Esc`, backdrop or ✕
- **Head-to-head comparison** — pick any two boards and compare 7 spec rows, with cheaper prices highlighted
- **Starter kits & Pinout 101** — what to buy for your first build, and the three rules that save magic-smoke moments
- **Animated hero** — flowing PCB traces, pulsing vias and staggered reveals, all pure CSS
- **Fully responsive** — desktop down to mobile
- **Accessible** — keyboard-operable cards (`Enter`/`Space`), visible focus states, ARIA-labelled dialog

## 🛠 Tech stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Modern CSS (custom properties, grid, clamp(), animations) |
| Logic | Vanilla ES6+ JavaScript (no dependencies) |
| Fonts | [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch) + [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (Google Fonts) |

## 📁 Project structure

```
boardbench/
├── index.html          # Page structure: hero, boards, compare, kits, pinout
├── css/
│   └── style.css       # Design system, layout, animations, responsive rules
├── js/
│   ├── boards-data.js  # Board dataset (specs for all 9 boards)
│   └── main.js         # Rendering, filtering, modal, comparison logic
└── README.md
```

## 🚀 Getting started

No build step required. Any of these works:

**Option 1 — open directly**

```bash
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

**Option 2 — serve locally (recommended, matches production)**

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Adding a new board

Append one object to `BOARDS` in `js/boards-data.js`:

```js
{
  id: "my-board",
  name: "My Board",
  maker: "Maker Co.",
  cls: "microcontroller",        // microcontroller | sbc | iot | education | ai
  tag: "short badge",
  short: "One-line elevator pitch.",
  desc: "Longer description shown in the detail modal.",
  specs: {
    "Processor": "…", "Flash / RAM": "…", "Voltage": "…",
    "Digital / Analog": "…", "Connectivity": "…", "Wireless": "…",
    "Size": "…", "Price": "…"
  },
  quick: { clock: "…", io: "…", net: "…" }
}
```

The grid, filter chips, comparison dropdowns and hero counters all update automatically.

## ✅ Verification

The project was verified with:

- `node --check` on both JavaScript files (syntax)
- Headless Chrome render test — zero console/JS errors, all sections present in the live DOM
- Interaction test suite (jsdom, 10 assertions): modal open/close, keyboard access, filtering, comparison updates — **all passing**
- Data integrity check: unique IDs, all required spec fields present on every board
- HTTP probe: all assets return `200`

## ⚠️ Disclaimer

Specifications and prices are indicative and assembled from public sources. Always confirm against the official datasheet and product page before designing hardware around a board.

## 📄 License

Free to use, adapt and share for personal or commercial projects. Attribution appreciated but not required.
