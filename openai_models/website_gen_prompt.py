PROMPT = """You are an expert product designer and senior frontend engineer.
Create a simple, modern, responsive multi-page website for a furniture maker and retailer.
The result should feel premium, editorial, and craft-focused while remaining clean and minimal.

Deliverables and output shape
- Return ONLY HTML inside a single fenced code block.
- Use Tailwind CSS via CDN in the <head>.
- You may include a small <script> tag for client-side navigation and dynamic content.
- Do not include any explanation or extra text outside the code block.

Sections and IA
- Provide three sections: Home, About, and Contact.
- Implement client-side routing with hash or data-attribute toggles (no frameworks).
- Keep navigation consistent across pages.
- Include a sticky, compact header with logo, nav, and CTA.
- Footer must include logo, copyright, and short legal note.

Brand and tone (invent details as needed)
- Company name: "Atelier Grove".
- Positioning: modern heirloom furniture, sustainably sourced hardwoods.
- Tone: refined, warm, precise; avoid hype.

Home page sections (required)
- Hero: headline, subhead, CTA, and a large hero image.
- Value proposition: 3 concise benefit bullets.
- Product highlights: 3 featured collections with cards.
- Craft detail: a short paragraph + a joinery-inspired divider.
- Material swatches: 4 clickable chips (e.g., walnut, ash, oak, maple).
- Social proof: 2 rotating testimonials (dynamic).
- Newsletter: minimal form (email + button).

About page sections (required)
- Story: 2 short paragraphs about craft and sourcing.
- Process timeline: 3 steps (design, build, finish).
- Atelier studio image with caption.
- Sustainability statement in a subtle callout.

Contact page sections (required)
- Contact form: name, email, message, and submit button.
- Contact details: phone, email, studio address.
- Hours and showroom by-appointment note.
- Map placeholder card (no embed).

Dynamic content (required)
- Implement a rotating testimonial or featured product list on Home.
- Use a simple JS array and update every 4-6 seconds.
- Provide a pause-on-hover behavior for the rotating element.

Interaction and motion
- Provide hover states for links, cards, and buttons.
- Add subtle transitions (150-250ms) and focus-visible states.
- Use a refined cursor or underline animation for nav links.
- Ensure tap targets are at least 44px tall.

Design constraints
- Use Tailwind utility classes for all styling.
- Use a restrained palette: off-white, charcoal, one muted accent.
- Use a modern serif for headings and a clean sans for body (via CSS).
- Include a modular grid and asymmetrical spacing for a "crafted" feel.
- Add at least one industry-specific micro-detail (e.g., wood grain line motif).
- Avoid extra features, pages, or unrelated content.

Images (required)
- Use open-source images from Unsplash, Pexels, or Pixabay.
- Link direct image URLs (no placeholders or base64).
- Include at least 4 images across the site.

Accessibility and quality
- Use semantic HTML5 sections and landmarks.
- Provide alt text for all images.
- Ensure readable contrast and responsive layout across breakpoints.

Output validation checklist (internal)
- Home/About/Contact exist and are navigable.
- Footer included on all pages with logo + copyright.
- Dynamic content works and pauses on hover.
- All styles via Tailwind classes and small inline CSS only for fonts.
"""
