/**
 * =====================================================
 *  DESIGN REPOSITORY — DATA FILE
 *  Edit this file (via Claude Cowork) to add features,
 *  iterations, Figma links, and notes.
 * =====================================================
 *
 *  HOW TO ADD A NEW FEATURE TAB:
 *  - Add a new object to the `features` array below.
 *
 *  HOW TO ADD AN ITERATION:
 *  - Find the feature by name, add a new object to its `iterations` array.
 *
 *  FIGMA LINKS:
 *  - Paste any figma.com/design/... or figma.com/proto/... URL.
 *  - Leave as "" if not available yet — a placeholder will show.
 *
 *  VOTING / STARS:
 *  - Votes and stars are saved in the browser (localStorage) per user.
 */

const APP_DATA = {

  // Site header
  title: "Swadesh design repository",

  // ─────────────────────────────────────────────
  //  TASKS
  //  Shown on the Home dashboard.
  //  status: "in-progress" | "under-review" | "yet-to-start" | "blocked" | "rejected" | "completed"
  //  type: "prd" | "adhoc"
  // ─────────────────────────────────────────────
  tasks: [
    { id: "search-zero-state",  name: "Search — Zero state",                  status: "handover-complete", featureId: "search"          },
    { id: "cash-collection",    name: "Doorstep Cash Collection",             status: "paused",            featureId: "cash-collection" },
    { id: "pdp-last-item-atc", name: "PDP — Last Item ATC",                  status: "handover-complete", featureId: "pdp-last-item-atc" },
    { id: "pod-failed-payment-nudge", name: "Pay on Delivery — Failed Payment Nudge", status: "shared-for-review", featureId: "pod-failed-payment-nudge" },
    { id: "corporate-po",       name: "Corporate Purchase Order",              status: "yet-to-start",      featureId: "corporate-po"    },
    { id: "ops-pay-link",       name: "Ops Assisted pay-link",                status: "yet-to-start",      featureId: "ops-pay-link"    },
    { id: "partial-payment",    name: "Partial Payment for Bespoke orders",   status: "yet-to-start",      featureId: "partial-payment" },
    { id: "tcs",                name: "Tax collection at source",             status: "yet-to-start",      featureId: "tcs"             },
  ],

  // ─────────────────────────────────────────────
  //  FEATURES
  //  Each feature becomes a tab in the navigation.
  // ─────────────────────────────────────────────
  features: [

    // ── Feature 1 ──────────────────────────────
    {
      id: "search",
      name: "Search",
      intro: {
        requirement: "Design the zero state for search — the screen users land on when they open search before typing anything.",
        rationale: "Search is one of the highest-traffic entry points on the platform. The zero state has historically been blank — a missed opportunity when users are in discovery mode rather than query mode. The brief was to make this surface genuinely useful: surfacing editorial curation, recent search history, curated suggestions, and crafts content to bridge browsing intent with the depth of the catalogue."
      },
      iterationsDescription: "A full record of every direction explored before the design was locked — from early wireframes testing layout and hierarchy to high-fidelity compositions evaluating editorial themes, card formats, chip patterns, and column structures. Each entry notes what was tried, what held up, and what was left behind.",

      references: [
        {
          id: "ref-gucci",
          source: "Gucci",
          caption: "Search zero state — desktop",
          screenshotUrl: "ref-gucci.png",
          notes: "Two-column layout: contextual nav (New In, Suggestions) on the left; 'Most Coveted' product grid on the right. Search bar anchored at top with trending terms as underlined text links. Product-first approach — no editorial imagery at zero state."
        },
        {
          id: "ref-lv-desktop",
          source: "Louis Vuitton",
          caption: "Search zero state — desktop",
          screenshotUrl: "ref-lv-desktop.png",
          notes: "Full-width search bar with rounded pill style, prominently centred. Trending searches shown as plain text chips below. Below the fold: curated product rows labelled by collection (LV Resort, New Men's Pre-Fall). Heavy product density with no editorial framing at zero state."
        },
        {
          id: "ref-goodearth",
          source: "Good Earth",
          caption: "Search zero state — desktop",
          screenshotUrl: "ref-goodearth.png",
          notes: "Closest benchmark to the Swadesh approach. 'Popular Searches' as pill chips, 'You Might Like' product grid below. Clean, minimal layout. Search field with 'View All Results' CTA inline. Products shown with real photography in a 5-col grid."
        },
        {
          id: "ref-cartier-desktop",
          source: "Cartier",
          caption: "Search zero state — desktop",
          screenshotUrl: "ref-cartier-desktop.png",
          notes: "Three-column zero state: 'Be Inspired' editorial cards (left), 'Articles' text links (centre), 'Customer Care' utility links (right). No product grid at zero state — purely editorial and utility. Direct inspiration for the 'Be Inspired' section naming and editorial card approach in Swadesh."
        },
        {
          id: "ref-nicobar-mobile",
          source: "Nicobar",
          caption: "Search zero state — mobile",
          screenshotUrl: "ref-nicobar-mobile.png",
          notes: "Trending searches as square pill tags with 🔥 icon. 'Popular Categories' full-bleed editorial images below (New Arrivals, Womenswear). Bold, image-led category entry points. No product grid — discovery through categories and trends only."
        },
        {
          id: "ref-lv-mobile",
          source: "Louis Vuitton",
          caption: "Search zero state — mobile",
          screenshotUrl: "ref-lv-mobile.png",
          notes: "Trending searches as plain spaced text links. Below: collection-labelled product rows in a 2-col grid. Same architecture as the desktop — search bar prominent, products below. No editorial cards or curated suggestions."
        },
        {
          id: "ref-cartier-mobile",
          source: "Cartier",
          caption: "Search zero state — mobile (lower half)",
          screenshotUrl: "ref-cartier-mobile.png",
          notes: "Lower portion of Cartier mobile zero state showing Articles (text list) and Customer Care (icon + label rows). Utility-forward approach. The mobile layout collapses the three desktop columns into a stacked single-column scroll."
        },
        {
          id: "ref-buccellati",
          source: "Buccellati",
          caption: "Search zero state — desktop",
          screenshotUrl: "ref-buccellati.png",
          notes: "Three-column layout: Icona Collections + Categories nav (left), product grid 'Our Creations' (centre), editorial image cards 'You Might Be Interested In' (right). Rich multi-section zero state. 'You Might Be Interested In' label directly referenced in Swadesh suggestion link naming."
        }
      ],

      iterations: [

        // ── Finalised iteration ──────────────
        {
          id: "search-iter-1",
          label: "Finalised iteration",
          date: "2026-06-11",
          designer: "Niharika",
          notes: "Zero state of search. All configurable sections in CMS.",
          annotations: [
            {
              section: "Search bar",
              detail: "Sticky at top edge, just below the header. When user clicks search, field becomes active with cursor. Placeholder: 'Search for products, crafts or artists'.",
              configuration: ""
            },
            {
              section: "Continue exploring",
              detail: "Dismissable pill chips showing recent search history. User can remove individual chips by clicking the × button.",
              configuration: "Presence depends on user type. Logged-in users: shows past 4 searches. Logged-out users: shows recent searches from the same browser session only. New session: no chips shown."
            },
            {
              section: "You might be interested in",
              detail: "Curated suggestion list rendered as plain text links. Sample: Mysore Rosewood Inlay, Banarasi Silk Sarees, Bronze Statues, Chikankari Kurti.",
              configuration: "CMS-driven. All links configurable. An AI recommendation engine can be plugged in to dynamically surface products."
            },
            {
              section: "Be inspired (editorial cards)",
              detail: "Full-bleed image cards with title overlay and gradient. Two cards side by side — e.g. Jewellery, Silk Selection. Section label and theme tag shown above.",
              configuration: "Set of 2 cards — each card has configurable image, title, and URL. Section title has 2 configurable fields separated by a dot (e.g. 'Be Inspired • Festive'). Fixed constraints: cards per section — 2; section title word limits — 15 & 24 chars; max sections — 2 (4 cards total); card title char count — 24 chars. An AI recommendation engine can be plugged in to dynamically surface collections."
            },
            {
              section: "Crafts • Weaves & Prints (mobile only)",
              detail: "Additional editorial card section below Be Inspired, using the same card component. Cards: Banarasi Weaves, Bandhni Tye Dye. Not present in the desktop layout.",
              configuration: "Same component and configuration rules as the Be Inspired editorial section above. An AI recommendation engine can be plugged in to dynamically surface collections."
            },
            {
              section: "Discover latest",
              detail: "Desktop: 2-column product grid. Mobile: single-column list. Each item shows thumbnail, product name, and price.",
              configuration: "Configurable product list. Min — 4 items, Max — 8 items. An AI recommendation engine can be plugged in to dynamically surface products."
            },
            {
              section: "Customer care",
              detail: "Anchor links at the bottom: Write to Us, WhatsApp our Concierge, Call Us.",
              configuration: "Always positioned at the end of the page. Static placement."
            },
            {
              section: "Layout note",
              detail: "Desktop uses a two-column layout — suggestions + customer care on the left, editorial + products on the right. Mobile is single-column with the same sections stacked in sequence.",
              configuration: ""
            }
          ],
          designFileUrl: "https://www.figma.com/design/2RDOfw58K5HptIQOtAfjWx/Search---zero-state?node-id=70853-2251&t=kF1CKdZfe5XiZd0q-4",
          sectionEmbedUrl: "https://www.figma.com/design/2RDOfw58K5HptIQOtAfjWx/Search---zero-state?node-id=70853-2251&t=kF1CKdZfe5XiZd0q-4",
          tags: ["v1", "zero-state"],
          mobile: {
            figmaUrl: "https://www.figma.com/proto/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3124-10711&viewport=8088%2C-4662%2C0.62&t=v2wR0aggjHfv4iiL-0&scaling=contain&content-scaling=fixed&starting-point-node-id=3124%3A10711&show-proto-sidebar=1",
            caption: "Mobile · Search zero state"
          },
          desktop: {
            figmaUrl: "https://www.figma.com/proto/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3107-10348&viewport=8088%2C-4662%2C0.62&t=v2wR0aggjHfv4iiL-0&scaling=contain&content-scaling=fixed&starting-point-node-id=3107%3A10348&show-proto-sidebar=1",
            caption: "Desktop · Search zero state"
          }
        },

        // ── Iteration set 2 ──────────────────
        {
          id: "search-iter-3",
          label: "Iteration set 2",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Tests a 'Home' editorial theme using a 4-card decor grid (Rugs, Lighting, Decor, Dining) vs the finalised 2-card Festive fashion editorial. The 4-card format reduces individual card scale and visual impact — the finalised design narrows to 2 full-width cards for stronger image presence. The 'You might be interested in' suggestion links and the 'Crafts • Weaves & Prints' section are both absent here; both were introduced in the final to add deeper discovery paths beyond the editorial.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3178-31625&t=v2wR0aggjHfv4iiL-4",
          tags: ["v2", "home-editorial"],
          mobile: {
            figmaUrl: "",
            screenshotUrl: "iter2-mobile.png",
            caption: "Mobile · Be Inspired • Home"
          },
          desktop: { figmaUrl: "", caption: "" }
        },

        // ── Iteration set 3 ──────────────────
        {
          id: "search-iter-4",
          label: "Iteration set 3",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Closest mobile predecessor to the finalised design. 'Be Inspired • Festive' (Jewellery, Silk Selection) and the 'Crafts • Weaves' section below both carried into the final. Key differences: Discover Latest uses placeholder product images rather than real photography, and the 'You might be interested in' curated suggestion links are absent — added in the final to give the zero state a richer content discovery layer.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3178-31625&t=v2wR0aggjHfv4iiL-4",
          tags: ["v3", "festive-editorial", "crafts"],
          mobile: {
            figmaUrl: "",
            screenshotUrl: "iter3-mobile.png",
            caption: "Mobile · Be Inspired • Festive + Crafts"
          },
          desktop: { figmaUrl: "", caption: "" }
        },

        // ── Iteration set 4 ──────────────────
        {
          id: "search-iter-5",
          label: "Iteration set 4",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Layout experiment testing a product-first hierarchy — Discover Latest appears before the editorial sections, inverting the finalised order. Explores whether surfacing products immediately increases direct engagement. The 'Be Inspired • Home' editorial (Dining, Lighting, Rugs) is pushed lower in the scroll. The finalised design keeps editorial at the top to set a brand-led tone before products, and places products in a supporting role below.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3178-31625&t=v2wR0aggjHfv4iiL-4",
          tags: ["v4", "extended-scroll"],
          mobile: {
            figmaUrl: "",
            screenshotUrl: "iter4-mobile.png",
            caption: "Mobile · Extended scroll, editorial below products"
          },
          desktop: { figmaUrl: "", caption: "" }
        },

        // ── Iteration set 5 ──────────────────
        {
          id: "search-iter-6",
          label: "Iteration set 5",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Tests a 2-column product grid with real photography and pricing against the finalised single-column list. The grid format increases density but was found to reduce scannability on mobile screen widths — the finalised design uses a single-column list for cleaner readability. Also evaluates 'Be Inspired • Weaves & Prints' as an editorial theme with 4 craft category cards (Kanchipuram, Bandhni, Banarasi, Chikankari) vs the finalised Festive theme. The 2-card format was chosen over 4 cards for stronger visual impact.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3178-31625&t=v2wR0aggjHfv4iiL-4",
          tags: ["v5", "rich-grid", "weaves-prints"],
          mobile: {
            figmaUrl: "",
            screenshotUrl: "iter5-mobile.png",
            caption: "Mobile · Rich grid + Be Inspired • Weaves & Prints"
          },
          desktop: { figmaUrl: "", caption: "" }
        },

        // ══ DESKTOP ITERATIONS (node 3190:31630) ═══════

        // ── Desktop — Wireframe A ────────────────────
        {
          id: "search-iter-7",
          label: "Desktop — Wireframe A",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Low-fidelity wireframe validating the two-column desktop layout split: search context (chips, suggestions) on the left, editorial + products on the right. Uses placeholder imagery to test column proportions and content hierarchy before committing to photography direction. The 2-column product list in the right panel was later evolved into a grid in the finalised design.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "wireframe"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-3-wireframe-chips.png",
            caption: "Desktop · Wireframe, chips + crafts layout"
          }
        },

        // ── Desktop — Wireframe B ────────────────────
        {
          id: "search-iter-8",
          label: "Desktop — Wireframe B",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Introduces a 'Most Explored' section with popular search terms as pill tags — a broader discovery surface distinct from 'Continue Exploring' (personal history). Tests whether surfacing curated popular terms at zero state adds utility. The concept was not carried forward; the finalised design uses 'You might be interested in' as plain text links, keeping the zero state lighter and more editorial in feel.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "wireframe"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-2-wireframe-mostexplored.png",
            caption: "Desktop · Wireframe, Most Explored pills"
          }
        },

        // ── Desktop — Wireframe C ────────────────────
        {
          id: "search-iter-9",
          label: "Desktop — Wireframe C",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Minimal wireframe evaluating editorial-only composition above the fold — no Discover Latest section — to test visual weight and white space when the zero state is led purely by the 'Be Inspired' editorial. The finalised design adds Discover Latest in the right column alongside editorial, increasing content density and giving users multiple entry points from the same view.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "wireframe"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-4-wireframe-crafts.png",
            caption: "Desktop · Wireframe, crafts only"
          }
        },

        // ── Desktop — Be Inspired · Home (fashion) ───
        {
          id: "search-iter-10",
          label: "Desktop — Be Inspired · Home (fashion)",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "First full-fidelity desktop composition testing a 4-card editorial grid under 'Be Inspired • Home' (Saree, Kurtas & Tunics, Shawls Scarves & Stoles, Tops). The 4-card layout reduces per-card scale and visual impact relative to the finalised 2-card approach — the final narrows to 2 full-bleed cards for stronger editorial presence. Continue Exploring chips appear at top (carried into the final), but 'You might be interested in' text links are absent. Discover Latest uses real product photography, confirming the image quality direction before the desktop layout was locked.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "home-editorial", "fashion"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-1-home-fashion.png",
            caption: "Desktop · Be Inspired • Home, fashion editorial"
          }
        },

        // ── Desktop — Be Inspired · Home (Rugs) ─────
        {
          id: "search-iter-11",
          label: "Desktop — Be Inspired · Home (Rugs & Lighting)",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Tests a 3-card decor editorial ('Rugs', 'Lighting' + one more) against the finalised 2-card fashion editorial. Odd card count breaks the even grid rhythm — the final settled on 2 to maintain symmetry and equal visual weight per card. 'You might be interested in' text links appear on the left column here, matching the finalised layout, confirming this section's placement early in the desktop iteration. The product list moves to a narrower left column, subordinating it to the editorial — opposite to the finalised priority balance.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "home-editorial", "decor"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-5-home-rugs.png",
            caption: "Desktop · Be Inspired • Home, Rugs & Lighting"
          }
        },

        // ── Desktop — Bed Linen editorial ────────────
        {
          id: "search-iter-12",
          label: "Desktop — Bed Linen editorial",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Refines the two-column desktop split with 2 editorial cards on the right — matching the finalised card count — but themed around home linen (Bed Linen, Bath Linen) rather than Festive fashion. Product list occupies the full left column, making products visually dominant over discovery content. 'You might be interested in' and 'Crafts' sections are absent. The paired editorial card format from this iteration was carried into the final; the product-left hierarchy was not.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "home-editorial", "bed-linen"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-6-bedlinen-list.png",
            caption: "Desktop · Bed Linen + Bath Linen, product list left"
          }
        },

        // ── Desktop — Home + New In chips ────────────
        {
          id: "search-iter-13",
          label: "Desktop — Home + New In chips",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Introduces a second row of filter chips labelled 'New In' (Women, Diwali Collection, Men's Kurta, Lighting) below Continue Exploring. The finalised design keeps chips strictly for search history — this iteration tests a broader chip paradigm doubling as a trending/category filter. Risk: dual chip rows create visual noise and blur the distinction between history and editorial discovery. The 2 full-width right-column editorial cards are consistent with the finalised count. Left column holds the product list.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "new-in", "filter-chips"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-7-newin-chips.png",
            caption: "Desktop · New In chips + Bed Linen editorial"
          }
        },

        // ── Desktop — Home column view ────────────────
        {
          id: "search-iter-14",
          label: "Desktop — Home column view",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Tests stacking Bed Linen and Bath Linen as two tall vertical cards in the right column instead of placing them side by side. Taller cards allow for a richer image-to-title ratio and stronger editorial presence per card — but they push Discover Latest further down the viewport. The finalised design uses side-by-side 2-card rows to keep product content visible without excessive scroll. 'New In' chips are retained from the previous iteration; the finalised design removed them in favour of history-only chips.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "bed-linen", "column-editorial"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-8-home-column.png",
            caption: "Desktop · Stacked editorial column"
          }
        },

        // ── Desktop — With suggestions ────────────────
        {
          id: "search-iter-15",
          label: "Desktop — With 'You might be interested in'",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Introduces 'You might be interested in' as plain-text links on the left column — the same section and naming that carried into the finalised design. Tests a 2×2 editorial card grid on the right (4 cards total) vs the finalised 2-card row. The expanded grid doubles editorial real estate but reduces per-card size and impact. Customer Care appears at bottom left, consistent with the finalised placement. This iteration helped confirm the 'You might be interested in' left-column pattern while the card count was still being evaluated.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "suggestions", "you-might-be-interested"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-9-suggestions.png",
            caption: "Desktop · You might be interested in + 2×2 editorial"
          }
        },

        // ── Desktop — Full layout ─────────────────────
        {
          id: "search-iter-16",
          label: "Desktop — Full layout",
          date: "2026-06-09",
          designer: "Niharika",
          notes: "Most complete desktop composition tested — the direct predecessor to the finalised layout. Left column: Continue Exploring chips, 'You might be interested in' links, Customer Care. Right column: 'Be Inspired' editorial + Discover Latest. All five sections that appear in the finalised design are present here. Key differences from the final: editorial theme is 'Home' (Bed Linen/Bath Linen) rather than 'Festive', and there is no 'Crafts' section. This iteration validated the two-column architecture and section hierarchy before the finalised iteration locked theme, content, and mobile parity.",
          designFileUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3190-31630&t=v2wR0aggjHfv4iiL-4",
          tags: ["desktop", "full-layout"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: {
            figmaUrl: "",
            screenshotUrl: "desk-10-full-layout.png",
            caption: "Desktop · Full layout — editorial + suggestions + products"
          }
        }

      ]
    },

    // ── Feature 2 ──────────────────────────────
    {
      id: "cash-collection",
      locked: true,
      name: "Doorstep Cash Collection",
      intro: {
        requirement: "Design the doorstep cash collection payment option at checkout, including slot scheduling and order status communication.",
        rationale: "Swadesh's delivery partners are only authorised to collect Cash on Delivery payments up to ₹50,000 — yet a meaningful segment of customers wants to pay cash for high-value orders between ₹50K and ₹2L. Without a supported path, these orders are abandoned, creating direct revenue loss on Swadesh's highest-value artisan pieces. Doorstep Cash Collection addresses this by engaging a CMS (Cash Management Service) team to visit the customer, collect payment, and deposit it directly into Swadesh's account. The order is placed in a locked/pending state at checkout and moves to fulfilment only after the CMS team confirms collection — keeping the transaction compliant, the inventory reserved, and the customer experience premium.",
        prdUrl: "https://rilcloud.sharepoint.com/:w:/r/sites/SwadeshProductTech/_layouts/15/Doc.aspx?sourcedoc=%7B7D4B482E-15EB-4660-9FFC-9ECCE9406B8A%7D&file=Cash-Collection-PRD.docx&action=default&mobileredirect=true"
      },
      iterationsDescription: "A record of the directions explored before the current design was established — covering earlier checkout treatments, confirmation screen states, and order status page variants.",
      iterations: [

        // ── Finalised iteration ──────────────
        {
          id: "cash-collection-iter-1",
          label: "Finalised iteration",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "",
          tags: ["v1"],
          mobile: {
            figmaUrl: "https://www.figma.com/design/BLJzYVd9thvScl9gxDeLxH/UX-definition-V3?node-id=3410-12414&t=4fqPtzlQ6gMu0kPf-4",
            caption: "Mobile · Doorstep Cash Collection"
          },
          desktop: { figmaUrl: "", caption: "" },
          designDecisions: [
            {
              title: "Pre-pay / Pay on Delivery — payment method bucketing",
              problem: "The previous 'Pay online / Pay on delivery' labels couldn't accommodate Doorstep Cash Collection — a method where payment happens before dispatch but not online.",
              decision: "Renamed buckets to 'Pre-pay' and 'Pay on Delivery' to be more logically accurate and scalable for future payment modes.",
              constraint: "Payment method label nomenclature needs to be updated across all surfaces."
            },
            {
              title: "Post-order slot selection",
              problem: "Collecting the cash collection slot time pre-order adds friction to checkout at a point where the customer is already committing to a new payment behaviour.",
              decision: "Slot selection moved to the order placed screen, after the order is confirmed. WhatsApp comms serve as the fallback if the user doesn't select a slot on the website."
            },
            {
              title: "Two-factor authentication — open item",
              problem: "The CMS agent verification process requires two-factor authentication to protect customers when handing over cash, but the process flow and technical approach depend on decisions from the third-party CMS team.",
              decision: "⚠️ Pending. Awaiting process flow and API contract from the CMS stakeholder before UI can be finalised."
            }
          ],
          annotations: [
            {
              section: "Order placed — slot booking",
              detail: "Earliest slot selected by default.",
              configuration: ""
            },
            {
              section: "Order placed — slot booking",
              detail: "The nudge copy is positioned post-selection — reinforcing the choice rather than pressuring before it.",
              configuration: ""
            }
          ]
        },

        // ── Iteration 2 ──────────────────────
        {
          id: "cash-collection-iter-2",
          label: "Iteration — Checkout",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "Explored placing Doorstep Cash Collection under 'Pay on Delivery' with an inline expandable info panel that appears on selection. The finalised design moved this to a 'Know more' bottom sheet to keep checkout cleaner and reduce visual noise for users who don't need the explanation.",
          tags: ["v2"],
          mobile: {
            figmaUrl: "",
            screenshotUrl: "cc-iter-checkout.png",
            caption: "Mobile · Checkout — earlier direction"
          },
          desktop: { figmaUrl: "", caption: "" }
        },

        // ── Iteration 3 ──────────────────────
        {
          id: "cash-collection-iter-3",
          label: "Iteration — Confirmation screen",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "Introduced an 'Order Reserved' state to distinguish a cash-pending order from a fully placed one, paired with a 'Live Artfully' interstitial post-slot-confirmation. Both were dropped — 'Order Reserved' was an unfamiliar status that created confusion, and the interstitial added friction without adding value. The finalised design uses 'Order Placed' throughout.",
          tags: ["v2"],
          mobile: {
            figmaUrl: "",
            screenshotUrl: "cc-iter-confirmation.png",
            caption: "Mobile · Confirmation screen — earlier direction"
          },
          desktop: { figmaUrl: "", caption: "" }
        },

        // ── Iteration 4 ──────────────────────
        {
          id: "cash-collection-iter-4",
          label: "Iteration — Order status",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "Tested surfacing the 'Order Reserved' status in the order tracker on the order details page. The reserved state created stakeholder concerns around customer expectations and returns handling. The finalised design uses standard 'Order Placed' terminology, with the payment status (Pending / Completed) shown separately in the payment method row.",
          tags: ["v2"],
          mobile: {
            figmaUrl: "",
            screenshotUrl: "cc-iter-order-status.png",
            caption: "Mobile · Order status — earlier direction"
          },
          desktop: { figmaUrl: "", caption: "" }
        }

      ]
    },

    // ── Feature 3 ──────────────────────────────
    {
      id: "pdp-last-item-atc",
      locked: true,
      name: "PDP — Last Item ATC",
      intro: {
        requirement: "Design the messaging and state changes on the PDP when the last available unit has been added to cart, and a user — in the same session or returning — attempts to add more.",
        rationale: "Three problems drive this work. First, when the last item in inventory is already in the user's cart and they try to add another, the current experience fires a generic 'Out of stock' toast — but the product isn't truly out of stock; it's reserved in their own bag. This is misleading for same-session users who have no visibility into why their action failed. Second, a returning user who added the last item in a previous session encounters the same opaque state with no explanation, eroding trust and risking abandonment. Third, after a successful 'Add to Bag' action, the CTA label doesn't change — leaving users uncertain whether their action registered and whether clicking again would create a duplicate. A state-based CTA (e.g. 'Go to Bag') confirms the action and creates a forward path in the purchasing journey.",
        prdUrl: "https://rilcloud.sharepoint.com/:w:/r/sites/SwadeshProductTech/_layouts/15/Doc.aspx?sourcedoc=%7BF85DEC22-67A0-47ED-BDD7-6CA04CE87997%7D&file=Incremental%20ATC%20Messaging%20on%20PDP.docx&action=default&mobileredirect=true"
      },
      iterationsDescription: "Explorations across six directions — from low-inventory indicators and quantity steppers to pop-up confirmations and CTA state changes — before landing on a modal info approach scoped to cart-aware last-item scenarios.",
      iterations: [

        // ── Finalised iteration ──────────────────
        {
          id: "pdp-last-item-atc-iter-1",
          label: "Finalised iteration",
          date: "2026-06-26",
          designer: "Niharika",
          notes: "",
          protoTip: "Click ‘Add to Shopping Bag’ → The CTA then changes state → Click ‘Go to Bag’ → Click a product card to go to PDP → Click ‘Add to Shopping Bag’ again to trigger the modal interaction for the last-item-in-cart scenario.",
          designFileUrl: "https://www.figma.com/design/IXMjg2SZy8S4S9baQzUg6R/Swadesh---Dev-Handover?node-id=71569-36311&t=skDXnugtGcE7bbAO-4",
          sectionEmbedUrl: "https://www.figma.com/design/IXMjg2SZy8S4S9baQzUg6R/Swadesh---Dev-Handover?node-id=71569-36311&t=skDXnugtGcE7bbAO-4",
          tags: ["v1"],
          mobile: {
            figmaUrl: "https://www.figma.com/proto/iUw2jErYvksbS6ch1HeJS1/PDP-cart-ATC-instances-and-handling?node-id=71576-49418&viewport=352%2C172%2C0.06&t=tFLA0jB7HiQSPBUV-0&scaling=contain&content-scaling=fixed&starting-point-node-id=71576%3A49418&show-proto-sidebar=1",
            caption: "Mobile · PDP — Last Item ATC"
          },
          desktop: {
            figmaUrl: "https://www.figma.com/proto/iUw2jErYvksbS6ch1HeJS1/PDP-cart-ATC-instances-and-handling?node-id=71576-50291&viewport=622%2C224%2C0.06&t=tFLA0jB7HiQSPBUV-0&scaling=contain&content-scaling=fixed&starting-point-node-id=71576%3A50291&show-proto-sidebar=1",
            caption: "Desktop · PDP — Last Item ATC"
          },
          designDecisions: [
            {
              title: "Modal over toast for cart-aware messaging",
              problem: "A dismissible toast reading 'Out of stock' is ambiguous when the item is actually in the user's own cart. It gives no explanation, no path forward, and is easy to miss — especially for returning users who don't have same-session context.",
              decision: "Use a modal (op1 approach) to surface a clear, persistent message that explains the item is already in their bag and prompts the next action. The modal is scoped only to this cart-aware scenario — standard out-of-stock states on PDP remain unchanged.",
              constraint: "This scenario can only occur when the product is in the cart. An otherwise out-of-stock product is inaccessible on PDP, so the modal logic must be gated on cart-presence detection."
            },
            {
              title: "CTA state change post-add",
              problem: "'Add to Bag' persisting after a successful action provides no feedback on what happened and invites repeated clicks that could create duplicate items or confusion.",
              decision: "Transition the CTA label to confirm the completed action (e.g. 'Go to Bag'), directing the user toward checkout rather than looping back to the same action. This closes the interaction and makes the forward path obvious."
            }
          ],
          annotations: [
            { section: "Out of stock modal", detail: "Triggered only when user attempts to add a product already present in their cart at max/last-item quantity.", configuration: "" },
            { section: "ATC CTA", detail: "State changes from 'Add to Bag' to 'Go to Bag' after first successful add.", configuration: "" },
            { section: "Scope", detail: "Applies across Desktop, Tablet, and Mobile. Out-of-stock products that are not in the cart remain inaccessible on PDP — this modal is cart-presence only.", configuration: "" }
          ]
        },

        // ── Exploration 1 ────────────────────────
        {
          id: "pdp-last-item-atc-iter-2",
          label: "Exploration — Low inventory indicator",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "Two variants tested: Option 1 surfaces a low-stock indicator on the PDP before the user adds (inventory < n), alerting them proactively. Option 2 shows a post-add indication when inventory reaches zero — the user completes the add and then sees a message confirming this was the last unit. Both were ruled out: the pre-add indicator adds noise for users who don't need it, and the post-add toast blends with the existing 'Added to Bag' confirmation, creating a double-message problem.",
          tags: ["v2"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: { figmaUrl: "", screenshotUrl: "pdp-atc-iter-1.png", caption: "Options 1 & 2 — Inventory indicator" }
        },

        // ── Exploration 2 ────────────────────────
        {
          id: "pdp-last-item-atc-iter-3",
          label: "Exploration — Secondary component / Quantity stepper",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "Option 3 tested restricting the repeat-add action via a secondary UI component rather than disabling the primary CTA — keeping 'Add to Bag' accessible but surfacing a warning inline. Option 4 explored replacing the ATC button entirely with a quantity stepper after first add, allowing users to manage quantity directly from PDP. The stepper was the stronger concept but introduces scope creep (decrement to zero = remove from cart) and increases backend dependency. Set aside in favour of a lighter modal approach.",
          tags: ["v2"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: { figmaUrl: "", screenshotUrl: "pdp-atc-iter-2.png", caption: "Options 3 & 4 — Secondary component / Quantity stepper" }
        },

        // ── Exploration 3 ────────────────────────
        {
          id: "pdp-last-item-atc-iter-4",
          label: "Exploration — Pop-up for assurance",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "Option 5 explored a confirmation modal that appears before the second add attempt, asking the user to confirm before the action completes. The intent was to prevent accidental duplicates by adding a deliberate gate. Ruled out because it adds friction before a failed action — the modal fires even if the user hasn't yet triggered the duplicate — making it feel like an obstacle rather than useful feedback.",
          tags: ["v2"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: { figmaUrl: "", screenshotUrl: "pdp-atc-iter-3.png", caption: "Option 5 — Pop-up for assurance" }
        },

        // ── Exploration 4 ────────────────────────
        {
          id: "pdp-last-item-atc-iter-5",
          label: "Exploration — CTA state variations",
          date: "2026-06-18",
          designer: "Niharika",
          notes: "Further explorations of Option 5 testing different CTA state labels and visual treatments after first add — cycling through 'Added', 'Go to Bag', 'View Bag', and a greyed-out disabled state. These variants tested how strongly to signal completion and how to balance confirmation with forward momentum. The 'Go to Bag' label was retained in the finalised direction as the clearest action-oriented label that confirms the add while inviting checkout.",
          tags: ["v2"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: { figmaUrl: "", screenshotUrl: "pdp-atc-iter-4.png", caption: "Option 5 — CTA state variations" }
        },

        // ── Exploration 5 ────────────────────────
        {
          id: "pdp-last-item-atc-iter-6",
          label: "Exploration — Near-final direction",
          date: "2026-06-26",
          designer: "Niharika",
          notes: "Near-final desktop explorations showing the resolved ATC state change: clean PDP with 'Add to Shopping Bag' → post-add state with confirmation toast. This iteration confirmed the minimal-intervention approach — no quantity stepper, no blocking modal pre-action — letting the CTA state change and the post-add messaging carry the communication weight.",
          tags: ["v2"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: { figmaUrl: "", screenshotUrl: "pdp-atc-iter-5.png", caption: "Near-final — Resolved ATC state" }
        }

      ]
    },

    // ── Feature 4 ──────────────────────────────
    {
      id: "corporate-po",
      name: "Corporate Purchase Order",
      emptyStateTitle: "Documentation in progress",
      emptyStateMessage: "Design documentation for Corporate Purchase Order is being prepared and will be available here shortly.",
      intro: { requirement: "Design the corporate purchase order flow.", rationale: "Documentation in progress." },
      iterations: []
    },

    // ── Feature 4 ──────────────────────────────
    {
      id: "ops-pay-link",
      name: "Ops Assisted pay-link",
      emptyStateTitle: "Documentation in progress",
      emptyStateMessage: "Design documentation for Ops Assisted pay-link is being prepared and will be available here shortly.",
      intro: { requirement: "Design the ops-assisted pay-link flow.", rationale: "Documentation in progress." },
      iterations: []
    },

    // ── Feature 5 ──────────────────────────────
    {
      id: "partial-payment",
      name: "Partial Payment for Bespoke orders",
      emptyStateTitle: "Documentation in progress",
      emptyStateMessage: "Design documentation for Partial Payment for Bespoke orders is being prepared and will be available here shortly.",
      intro: { requirement: "Design the partial payment flow for bespoke orders.", rationale: "Documentation in progress." },
      iterations: []
    },

    // ── Feature 6 ──────────────────────────────
    {
      id: "tcs",
      name: "Tax collection at source",
      emptyStateTitle: "Documentation in progress",
      emptyStateMessage: "Design documentation for Tax collection at source is being prepared and will be available here shortly.",
      intro: { requirement: "Design the tax collection at source flow.", rationale: "Documentation in progress." },
      iterations: []
    },

    // ── Feature 7 ──────────────────────────────
    {
      id: "mop",
      name: "MOP",
      emptyStateTitle: "Documentation in progress",
      emptyStateMessage: "Design documentation for MOP is being prepared and will be available here shortly.",
      intro: {
        requirement: "Design the mode of payment selection screen.",
        rationale: "Documentation in progress."
      },
      iterations: []
    },

    // ── Feature 8 ──────────────────────────────
    {
      id: "whatsapp-floater",
      name: "Whatsapp floater",
      emptyStateTitle: "Documentation in progress",
      emptyStateMessage: "Design documentation for the WhatsApp floater is being prepared and will be available here shortly.",
      intro: {
        requirement: "Design the WhatsApp floating button placement and behaviour.",
        rationale: "Documentation in progress."
      },
      iterations: []
    },

    // ── Feature 9 ──────────────────────────────
    {
      id: "pod-failed-payment-nudge",
      locked: true,
      name: "Pay on Delivery — Failed Payment Nudge",
      intro: {
        requirement: "When payment fails for an eligible order (≤ ₹1,99,990), nudge the user to place the order via Pay on Delivery instead.",
        rationale: "Payment failures frequently lead to order abandonment even when the user intends to complete the purchase. For orders within the COD-eligible limit, surfacing Pay on Delivery as an immediate fallback on the failure screen helps recover otherwise-lost conversions — particularly for users in areas where digital payment reliability is lower.",
        prdUrl: "https://rilcloud.sharepoint.com/:w:/r/sites/SwadeshProductTech/_layouts/15/Doc.aspx?sourcedoc=%7B930FCA98-C407-4E9F-99AA-2B43A1C71D2D%7D&file=PRD%20Pay%20on%20Delivery%20Nudge%20for%20Failed%20Payments.docx&action=default&mobileredirect=true"
      },
      iterationsDescription: "Two design phases are documented: V1 with a generic payment failure message (current implementation, limited by the payment gateway) and V2 with error-specific messaging (planned, subject to the gateway exposing specific error codes).",
      iterations: [

        // ── Finalised iteration ──────────────────────
        {
          id: "pod-failed-payment-nudge-iter-1",
          label: "Payment failure — Nudge to Pay on Delivery",
          date: "2026-07-08",
          designer: "Niharika",
          notes: "",
          protoTip: "Click ‘Place Order’ → On the payment gateway, click ‘Make Payment’ → Payment fails → Click ‘Pay on Delivery’ on the nudge screen to complete the order.",
          designFileUrl: "https://www.figma.com/design/gDqkWc50tPJ4fuilsJpm7W/POD-nudge?node-id=71849-52801&t=DlOErlBPyUyAsvUg-4",
          sectionEmbedUrl: "https://www.figma.com/design/gDqkWc50tPJ4fuilsJpm7W/POD-nudge?node-id=71849-52801&t=DlOErlBPyUyAsvUg-4",
          tags: ["v1"],
          mobile: {
            figmaUrl: "https://www.figma.com/proto/gDqkWc50tPJ4fuilsJpm7W/POD-nudge?node-id=71849-64764&scaling=contain&content-scaling=fixed&starting-point-node-id=71849%3A64764&show-proto-sidebar=1",
            caption: "Mobile · Pay on Delivery Nudge"
          },
          desktop: {
            figmaUrl: "https://www.figma.com/proto/gDqkWc50tPJ4fuilsJpm7W/POD-nudge?node-id=71849-67477&scaling=contain&content-scaling=fixed&starting-point-node-id=71849%3A67477&show-proto-sidebar=1",
            caption: "Desktop · Pay on Delivery Nudge"
          },
          designDecisions: [
            {
              title: "Online retry as primary, POD as fallback",
              problem: "Business prioritises recovering the failed online payment, not switching users to COD by default.",
              decision: "The failure screen keeps ‘Try again’ as the dominant CTA. The POD nudge sits below it as a secondary option — visually de-emphasised to signal it’s a fallback, not the recommended path."
            },
            {
              title: "Two-phase implementation — generic error first",
              problem: "Fynd’s payment gateway cannot surface specific error codes at this stage, preventing error-contextual messaging.",
              decision: "V1 launches with a generic failure message and a uniform POD nudge across all failure types. V2 — with error-specific copy and targeted nudges — is planned only if the technical limitation is resolved and feature adoption justifies the additional investment.",
              constraint: "Fynd payment gateway does not expose specific error codes in the current integration."
            }
          ],
          annotations: []
        },

        // ── V1 Exploration ────────────────────────
        {
          id: "pod-failed-payment-nudge-iter-2",
          label: "V1 — Generic payment failure",
          date: "2026-07-08",
          designer: "Niharika",
          notes: "Shows the full flow for a generic ‘Payment not processed’ failure — the nudge surfaces with a ‘Place order & Pay on Delivery’ option as a secondary fallback below the primary retry CTA.",
          tags: ["v1"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: { figmaUrl: "", screenshotUrl: "pod-iter-section1.png", caption: "V1 — Payment not processed → Pay on Delivery nudge" }
        },

        // ── V2 Exploration ────────────────────────
        {
          id: "pod-failed-payment-nudge-iter-3",
          label: "V2 — Error-specific nudge",
          date: "2026-07-08",
          designer: "Niharika",
          notes: "Shows how the experience evolves when the payment gateway can surface the exact failure reason (e.g. ‘Transaction limit exceeded’). The nudge copy is contextually adapted to the error type.",
          tags: ["v2"],
          mobile: { figmaUrl: "", caption: "" },
          desktop: { figmaUrl: "", screenshotUrl: "pod-iter-section2.png", caption: "V2 — Transaction limit exceeded → Pay on Delivery nudge" }
        }

      ]
    }

    // ── Add more features below this line ──────
    // {
    //   id: "your-feature-id",
    //   name: "Feature Name",
    //   iterations: [
    //     {
    //       id: "your-feature-iter-1",
    //       label: "Iteration set 1",
    //       date: "YYYY-MM-DD",
    //       designer: "Name",
    //       notes: "What changed and why.",
    //       tags: ["v1"],
    //       mobile:  { figmaUrl: "", caption: "" },
    //       desktop: { figmaUrl: "", caption: "" }
    //     }
    //   ]
    // },

  ]

};
