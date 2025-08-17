# Kalbaco

Sistem register/login user menggunakan address BNB, backend Node.js + MongoDB, frontend HTML sederhana.

## Instalasi

1. Clone repo, jalankan `npm install` di folder backend
2. Copy .env.example ke .env dan isi MONGO_URI (default: lokal)
3. Jalankan backend: `node backend/app.js`
4. Buka `frontend/index.html` di browser

## API
- POST `/api/auth/register` { username, address }
- POST `/api/auth/login` { address }

## Catatan
- Endpoint aman (tanpa signature wallet), bisa dikembangkan.
- Frontend hanya untuk tes sederhana.
