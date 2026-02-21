# Prabhu Engineering Hardware

A basic marketing website for **Prabhu Engineering Hardware**, Chakia Bazaar, Hospital Rd, near Petrol Pump, Chakia, Bihar 845412.

- **Frontend:** React (Vite)
- **Backend:** Node (Express) – serves the built React app

## Setup

Install dependencies for root, client, and server:

```bash
npm run install:all
```

Or manually:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

## Development

Run the React dev server (hot reload):

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Production build and run

1. Build the client:

```bash
npm run build
```

2. Start the server (serves the built app from `client/dist`):

```bash
npm run start
```

Then open [http://localhost:3000](http://localhost:3000). Use the `PORT` environment variable to change the port.

## Deploy to the web (free, global)

The site is static (React build), so you can host it for free on **Vercel** or **Netlify**. Both give you a global URL (e.g. `https://your-project.vercel.app`).

### Option A: Vercel (recommended)

1. Push this project to a **GitHub** repository (create repo, then `git init`, `git add .`, `git commit -m "Initial"`, `git remote add origin <url>`, `git push -u origin main`).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New** → **Project**, import your repository.
4. Leave **Build Command** and **Output Directory** as-is (they use `vercel.json`).
5. Click **Deploy**. Your site will be live at `https://<project-name>.vercel.app`.

From the terminal you can also use the Vercel CLI: `npx vercel` (follow prompts, then `npx vercel --prod` for production).

### Option B: Netlify

1. Push the project to **GitHub** (as above).
2. Go to [netlify.com](https://netlify.com), sign in with GitHub.
3. **Add new site** → **Import an existing project** → choose your repo.
4. Netlify will read `netlify.toml` (build command and publish directory are set).
5. Click **Deploy**. Your site will be at `https://<random-name>.netlify.app`.

You can change the site name in Netlify **Site settings** → **Domain management**.

---

## Project structure

- `client/` – React app (Vite): components, placeholder product data, styles
- `server/` – Express app: serves `client/dist` and SPA fallback (optional; use for local run only)
- Root `package.json` – scripts for build, start, and postinstall (for hosting)
- `vercel.json` / `netlify.toml` – config for free static hosting
