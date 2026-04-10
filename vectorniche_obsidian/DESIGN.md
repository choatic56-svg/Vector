# Design System Strategy: High-Performance Vector Generation

## 1. Overview & Creative North Star
**Creative North Star: "The Synthetic Architect"**

This design system is built to bridge the gap between raw AI power and professional precision. We are moving away from the "chat-bot" aesthetic and toward a high-end, editorial workstation. The system avoids the cluttered "SaaS-dashboard" look by utilizing intentional asymmetry, expansive negative space, and a layering philosophy that mimics physical depth. 

We break the "template" look by treating the UI as a digital canvas—where high-performance generation tools feel less like software and more like a premium hardware interface.

---

## 2. Colors & Surface Philosophy

The palette leverages high-contrast deep slates to allow the "Electric Blue" to function as a light source, rather than just a color.

### Core Tokens
- **Primary (Electric Blue):** `#b4c5ff` (Base) / `#2563eb` (Container)
- **Surface (Deep Slate):** `#0b1326`
- **Tertiary (Amber Accents):** `#ffb95f` (Used for "Trending," "New," or "High-Performance" statuses).

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. By placing a `surface_container_low` section against a `surface` background, we create a sophisticated edge that feels architectural rather than "outlined."

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, frosted layers.
*   **Base:** `surface` (`#0b1326`)
*   **Navigation/Sidebar:** `surface_container_low` (`#131b2e`)
*   **Main Workspace:** `surface_container` (`#171f33`)
*   **Active Cards/Overlays:** `surface_container_high` (`#222a3d`)

### The Glass & Gradient Rule
To achieve a "high-tech" finish, floating panels (modals, popovers) must use **Glassmorphism**. Use `surface_variant` with a 60% opacity and a `20px` backdrop-blur. Apply a subtle linear gradient to main CTAs transitioning from `primary_container` (#2563eb) to a slightly deeper shift to give buttons a tactile, "lit from within" quality.

---

## 3. Typography

The typographic voice is authoritative and editorial. We use **Inter** with aggressive weight scaling to create a clear information hierarchy.

*   **Display (Lg/Md):** 3.5rem / 2.75rem. Set to **Black (900) weight**. Use these for asset counts or "Generation Complete" hero states.
*   **Headlines:** 2rem down to 1.5rem. **Bold (700)**. Headlines should feel like labels on a blueprint—functional but bold.
*   **Body:** 0.875rem (`body-md`). **Regular (400)**. Use `on_surface_variant` (#c3c6d7) for long-form text to reduce eye strain against the dark background.
*   **Labels:** 0.75rem. **Medium (500)**. All-caps for secondary metadata to lean into the "technical workstation" aesthetic.

---

## 4. Elevation & Depth

### The Layering Principle
Hierarchy is achieved through **Tonal Layering**. Instead of using shadows to lift an object, use the `surface_container` tiers. An inner card should always be one step "Higher" or "Lower" than its parent container.

### Ambient Shadows
When a component must float (e.g., a dragged vector asset), use an **Ambient Shadow**:
*   **Blur:** 40px
*   **Opacity:** 8%
*   **Color:** `primary` (#b4c5ff). 
This creates a subtle "glow" rather than a dirty grey shadow, reinforcing the high-tech identity.

### The "Ghost Border" Fallback
If contrast ratios require a boundary (e.g., on-hover states), use a **Ghost Border**: `outline_variant` (#434655) at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### The "Signature" Corner
All containers (cards, modals, main panels) must use the **`xl` (3rem/48px)** or **`lg` (2rem/32px)** roundedness. This extreme softness contrasts against the "hard" AI tech, making the experience feel premium and approachable.

*   **Buttons:**
    *   *Primary:* `primary_container` background, no border, `xl` rounding.
    *   *Secondary:* Glassmorphic background (semi-transparent `surface_variant`), `xl` rounding.
*   **Cards:** Forbid divider lines. Separate metadata using `body-sm` typography and `1.5rem` (md) vertical spacing. On hover, shift the background from `surface_container` to `surface_container_high`.
*   **Dashed Empty States:** Use `outline` (#8d90a0) with a 2px dash array for drag-and-drop zones. This is the only place where "lines" are encouraged.
*   **Progress Indicators:** Use the `tertiary` (Amber) token for active generation. The glow effect (radial gradient) should follow the progress bar to imply energy.
*   **Vector Workstation Sidebar:** Use `surface_container_lowest` to create a "recessed" feel for the tool settings, making the main canvas appear to sit "above" the controls.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical padding (e.g., more padding at the top of a card than the bottom) to create an editorial flow.
*   **Do** use `on_tertiary_container` for high-priority alerts; the Amber against the Slate is our primary "attention" trigger.
*   **Do** rely on the Spacing Scale (1.5rem default) to let elements breathe. High-performance tools should never feel "cramped."

### Don’t:
*   **Don't** use 1px solid borders to separate the sidebar from the main content. Use a background color shift.
*   **Don't** use pure black (#000) or pure white (#fff). Always use the themed slate tones to maintain the "Sleek Tech" atmosphere.
*   **Don't** use standard "drop shadows." If it doesn't have a colored ambient glow, it doesn't belong in the system.
*   **Don't** use sharp corners. If it's not a `full` pill or at least `md` (1.5rem), it’s too aggressive for this identity.