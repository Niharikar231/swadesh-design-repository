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
    { id: "cash-collection",    name: "Cash collection",                       status: "in-progress",       featureId: "cash-collection" },
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
        rationale: "Search is one of the highest-traffic entry points on the platform. The zero state has historically been blank — a missed opportunity when users are in discovery mode rather than query mode. The brief was to make this surface genuinely useful: surfacing editorial curation, recent search history, curated suggestions, and crafts content to bridge browsing intent with the depth of the catalogue.",
        prdUrl: "https://rilcloud.sharepoint.com/:w:/r/sites/SwadeshProductTech/_layouts/15/Doc.aspx?sourcedoc=%7B446396B4-603D-41EF-A7FB-765638316995%7D&file=PRD%20_Search%20Pre%20Type%20screen%20Revamp_v2.0.docx&action=default&mobileredirect=true"
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
          date: "2026-06-22",
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
              configuration: "CMS-driven. All links configurable. An AI recommendation engine can be plugged in to dynamically surface keywords."
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
          designDecisions: [
            {
              title: "Zero state was historically blank",
              problem: "The search surface showed nothing until a user typed. Users in discovery mode (not query mode) had no entry point.",
              decision: "Structured the zero state as a multi-section discovery surface covering personal history, curated suggestions, editorial, and products, so it is useful before any intent is expressed.",
              constraint: "Sections must feel considered, not algorithmic. Swadesh's voice is unhurried and editorial; a dense product grid at zero state would undercut that."
            },
            {
              title: "Editorial vs product-first hierarchy",
              problem: "Should the zero state lead with products (highest commercial value) or editorial content (brand identity)?",
              decision: "Editorial cards (Be Inspired) sit above Discover Latest. Brand tone is set before products are surfaced.",
              constraint: "Luxury positioning. Swadesh is a craft platform, not a marketplace. Leading with a product grid at zero state reads as transactional. References like Cartier reinforced editorial-first as the right anchor."
            },
            {
              title: "Number of editorial cards",
              problem: "More cards give more editorial range, but smaller per-card visual impact.",
              decision: "2 full-width cards per section is the recommended configuration for strongest visual presence. The system supports up to 4 cards if a specific campaign or seasonal requirement calls for it.",
              constraint: "Card title is capped at 24 characters and section title at 15 + 24 characters to maintain legibility at the constrained card size."
            },
            {
              title: "CMS configurability, AI recommendation and section ordering",
              problem: "Editorial themes change seasonally. Hardcoded content would require engineering effort for every campaign.",
              decision: "Every section is CMS-driven. Editorial images, titles, suggestion links, and the product list are all configurable without a deployment. The order of the collections (Be Inspired) and product list (Discover Latest) sections can also be reordered via CMS to give prominence to either, depending on the season's requirement. The product listing (max 8 items) can additionally be powered by an AI recommendation engine to surface personalised product suggestions in place of manual curation.",
              constraint: "Card and title character limits (24 chars, 15 + 24 chars) are imposed to prevent layout breakage across the fixed card grid. These are non-negotiable regardless of what content is configured."
            }
          ],
          designFileUrl: "https://www.figma.com/design/IXMjg2SZy8S4S9baQzUg6R/Swadesh---Dev-Handover?node-id=70853-2251&t=ItIZ4SNvHztOQuL7-4",
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
      name: "Cash collection",
      emptyStateTitle: "Documentation in progress",
      emptyStateMessage: "Design documentation for Cash collection is being prepared and will be available here shortly.",
      intro: { requirement: "Design the cash collection flow.", rationale: "Documentation in progress." },
      iterations: []
    },

    // ── Feature 3 ──────────────────────────────
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

    // ── Feature 3 ──────────────────────────────
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
