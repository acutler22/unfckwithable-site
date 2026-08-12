# SEO + GEO notes (from your Search Console data, last 3 months)

## What the data showed
- **You're climbing.** Average position went from ~12 in May to ~7 now, with impressions roughly doubling. The site is working.
- **Your top page is competing with itself.** Google indexed your About page at two addresses: `unfckwithable.co/about` (124 clicks) and `www.unfckwithable.co/about` (23 clicks). Same for the homepage. That split holds your best pages down.
- **Your name is your biggest demand.** "ali tate cutler" had ~4,002 impressions but you sit around position 8. Variants ("ali tate", "ali cutler", "ali tate cutler instagram") add hundreds more.
- **Your modeling past pulls real searches.** A whole cluster around "first plus-size Victoria's Secret model", "victoria's secret plus size model", "ali tate cutler model", and reputation queries like "ali tate cutler cancelled".
- **The Program page underperforms.** "authority accelerator" / "authority income accelerator" sit around position 15–25.
- **Mobile is the majority** of impressions. US is the top country, then Canada, Australia, UK.

## What I changed in the rebuild
1. **Canonical consolidation.** Every page now points to one address (`https://unfckwithable.co`, no www) in its canonical tag, sitemap, Open Graph, and schema. Paired with the domain step in DEPLOY-GUIDE (make non-www primary, redirect www to it), this merges your split About-page authority into one stronger page. Biggest single win.
2. **Entity signals for your name.** Strengthened the Person schema (added name variants and topics) and added a plain-language "Ali Tate Cutler, in short" FAQ to the About page. This helps you own your own name in search and in AI answers (GEO).
3. **Captured the modeling searches.** The new About FAQ directly answers "Who is Ali Tate Cutler?", "Was Ali Tate Cutler a Victoria's Secret model?", "What happened to her modeling career?" (covers the "cancelled" searches in your own words), and "What does she do now?" — all with FAQ schema so they can win featured snippets and AI answers.
4. **Program page.** Tightened the meta description to include "Authority Accelerator" and "coaching program" for the exact-match queries; the page carries Service + FAQ schema.
5. **Cleaned up old URLs.** Added redirects for stale indexed paths (`/home`, `/work-with-me`, `/upcoming-events`).
6. **AI search (GEO).** `llms.txt`, FAQ schema, VideoObject schema on /wins, and a clean sitemap/robots that explicitly welcome AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended).

## What to watch after deploy
- In Search Console, the two About-page rows should merge into one over a few weeks, and that page should climb.
- Re-export in ~4–6 weeks and we can do another pass on whatever is sitting at positions 5–15 (the fastest wins to nudge onto page one).
