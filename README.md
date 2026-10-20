# Adam Acovski - Portfolio

Personal portfolio website showcasing professional experience in hydrogeological engineering and software development.

🔗 **Live Site:** [adacovsk.github.io](https://adacovsk.github.io)

## Tech Stack

- React 19 + Vite
- GitHub Pages deployment
- GitHub Actions for CI/CD

## Editing Content

All portfolio content is stored in `src/content.json`. To update the portfolio:

1. Open `src/content.json`
2. Edit the text directly - it's organized into sections:
   - `home` - Landing page content
   - `resume` - Experience, education, skills, certifications
   - `projects` - Professional and personal projects
3. Commit and push - GitHub Actions will automatically build and deploy

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Open http://localhost:5173

# Build for production
npm run build
```
