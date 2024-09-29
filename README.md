# Nischal's Portfolio

This is a personal project to showcase my work and skills.

## Project Guidelines

### Tailwind Configuration, Fonts, and Global Styles

- **TailwindCSS Configuration (tailwind.config.js):**

  - **Theme Settings:**

    - **Screen Sizes:**
      - `sm`: 640px
      - `md`: 768px
      - `lg`: 960px
      - `xl`: 1020px
      - `2xl`: 1200px
    - **Font Family:**
      - `primary`: `var(--font-jetbrainsMono)`

  - **Extended Theme Colors:**
    - `primary`: `#1c1c22`
    - `accent`:
      - `DEFAULT`: `#0f9`
      - `hover`: `#00e187`

- **Layout.js:**

  - Integrated `JetBrains Mono` font using `next/font/google`.

- **global.css:**
  - applied the required styles for the body: <i>check out the code</i>

### Dependencies:

- **framer-motion**: Animation
- **react-icon**: Icons
- **react-countup**: Count the number to given point

### UI Designs

- Array[ ] of nav items to map links in header bar and colors
- **PageTransition** to **Rootlayout**
- **StairTransition** in layout but after <header> as header need to be shown
- **Desktop** navbar with modified `shadcn` button
- **Mobile** navbar with `shadcd` components: sheet; sheettrigger, sheetcontent and few modification on it

### HomePage -- Hero Section

-
