import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import content from './src/content.json' with { type: 'json' }

const SITE = 'https://adacovsk.github.io'

// The page renders in JavaScript, so a crawler that doesn't run JS sees an empty
// <div id="root">. These outputs give such crawlers the same content, generated from
// content.json at build time so they can never drift from the page.

function llmsTxt(c) {
  const r = c.resume
  const lines = [
    `# ${c.home.name}`,
    '',
    `> ${c.home.tagline}. ${c.home.intro}`,
    '',
    ...c.home.links.map(l => `- [${l.text}](${l.url})`),
    `- [Résumé (PDF)](${SITE}/resume.pdf)`,
    '',
    '## Summary',
    '',
    r.summary,
    '',
    '## Experience',
    '',
  ]
  for (const j of r.experience) {
    lines.push(`### ${j.title}, ${j.company} (${j.date})`, '', j.location, '')
    lines.push(...j.bullets.map(b => `- ${b}`), '')
  }
  lines.push('## Skills', '')
  for (const [k, v] of Object.entries(r.skills)) lines.push(`- **${k}:** ${v.join(', ')}`)
  lines.push('', '## Education', '',
    `${r.education.degree}, ${r.education.major}, ${r.education.school} (${r.education.date})`, '',
    '## Certifications', '', ...r.certifications.map(x => `- ${x}`), '')
  for (const [heading, list] of [['Professional projects', c.projects.professional], ['Personal projects', c.projects.personal]]) {
    lines.push(`## ${heading}`, '')
    for (const p of list) {
      const title = p.url ? `[${p.title}](${p.url})` : p.title
      lines.push(`### ${title}${p.private ? ' (private)' : ''} (${p.date})`, '')
      if (p.summary) lines.push(p.summary, '')
      lines.push(...p.bullets.map(b => `- ${b}`), '')
    }
  }
  return lines.join('\n')
}

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function crawlerOutputs() {
  const c = content
  const title = `${c.home.name} — ${c.home.tagline}`
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: c.home.name,
    jobTitle: c.home.tagline,
    description: c.home.intro,
    url: SITE,
    address: { '@type': 'PostalAddress', addressLocality: 'Denver', addressRegion: 'CO', addressCountry: 'US' },
    alumniOf: c.resume.education.school,
    knowsAbout: Object.values(c.resume.skills).flat(),
    sameAs: c.home.links.map(l => l.url),
  }
  return {
    name: 'crawler-outputs',
    transformIndexHtml(html) {
      return html.replace(/<title>.*<\/title>/, `<title>${esc(title)}</title>
    <meta name="description" content="${esc(c.home.intro)}" />
    <link rel="canonical" href="${SITE}/" />
    <link rel="alternate" type="text/markdown" href="/llms.txt" title="Plain-text version for AI tools" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(c.home.intro)}" />
    <meta property="og:url" content="${SITE}/" />
    <script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`)
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt(c) })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crawlerOutputs()],
  base: '/',
})
