// serve-kasa.js FINAL - Exactement GitHub Pages
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const BASE_PATH = '/kasa';
const DIST_PATH = path.join(__dirname, 'dist');

// 1. Servir dist/ sous /kasa (index.html, assets/, logements.json)
app.use(BASE_PATH, express.static(DIST_PATH));

// 2. SPA : TOUT sous /kasa → index.html
app.get(new RegExp(`${BASE_PATH}/.*`), (req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
});

// 3. Racine → /kasa
app.get('/', (req, res) => res.redirect(301, BASE_PATH));

app.listen(3000, () => {
  console.log('✅ GitHub Pages: http://localhost:3000/kasa/');
});
