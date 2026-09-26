# Dashboard

## Run

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Vite prints the local URL when the development server starts.

To use a real reports API, set `VITE_REPORTS_API_URL` in `.env`. If unset, report requests use JSONPlaceholder, which does not persist data.
