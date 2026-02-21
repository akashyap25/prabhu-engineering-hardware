# Finish GitHub + Vercel (one-time)

Your project is already committed locally. Do these two steps to put it on GitHub and go live on Vercel.

---

## 1. Add the repo to GitHub

1. Open **https://github.com/new**
2. **Repository name:** `prabhu-engineering-hardware` (or any name you like)
3. Leave **Public** selected. Do **not** check "Add a README" (you already have one).
4. Click **Create repository**.
5. On the new repo page, copy the **HTTPS** URL (e.g. `https://github.com/YOUR_USERNAME/prabhu-engineering-hardware.git`).
6. In a terminal, from the project folder run (replace with your URL):

```bash
cd /home/anurag/Desktop/Prabhu
git remote add origin https://github.com/YOUR_USERNAME/prabhu-engineering-hardware.git
git push -u origin main
```

If GitHub asks for credentials, use a **Personal Access Token** as the password (Settings → Developer settings → Personal access tokens).

---

## 2. Deploy to Vercel

1. In a terminal, from the project folder run:

```bash
cd /home/anurag/Desktop/Prabhu
npx vercel login
```

Log in with your Vercel account (browser or email).

2. Then deploy to production:

```bash
npx vercel --prod
```

When prompted, accept the default project settings (just press Enter). You’ll get a live URL like `https://prabhu-engineering-hardware-xxx.vercel.app`.

3. **(Optional)** To get automatic deploys when you push to GitHub:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Import your GitHub repo **prabhu-engineering-hardware**
   - Vercel will use the existing `vercel.json`; click Deploy. Future pushes to `main` will deploy automatically.
