# Adam Acovski - Portfolio

Personal portfolio website showcasing professional experience in hydrogeological engineering and software development.

🔗 **Live Site:** [adacovsk.github.io](https://adacovsk.github.io)

## Tech Stack

- React 19 + Vite
- GitHub Pages deployment
- GitHub Actions for CI/CD

## Editing Content

All portfolio content is stored in `src/content.json`. To update your portfolio:

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

## Deployment

This site deploys automatically via GitHub Actions on every push to `main`:
- Builds the React app with Vite
- Deploys to GitHub Pages
- Usually live within 1-2 minutes

## Project Structure

```
src/
  ├── content.json      # All portfolio text content (edit this!)
  ├── App.jsx           # React components
  ├── App.css           # Styling
  └── main.jsx          # Entry point
```

## Notes

- The site uses a JSON content file for easy text updates
- No need to touch React code to update content
- GitHub Pages is configured to use GitHub Actions (not branch deployment)
