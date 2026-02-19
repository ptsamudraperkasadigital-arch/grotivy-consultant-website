# 📋 PANDUAN LENGKAP UPLOAD KE GITHUB & DEPLOY KE VERCEL

## 🚨 ROOT CAUSE ERROR
Error `Failed to resolve /src/main.tsx` terjadi karena file-file di folder `src/` 
**BELUM diupload** ke GitHub repository Anda.

---

## ✅ DAFTAR FILE YANG WAJIB ADA DI GITHUB

Pastikan semua file berikut ter-upload ke GitHub:

### Root Level
```
/index.html          ← WAJIB
/package.json        ← WAJIB
/vite.config.ts      ← WAJIB
/vercel.json         ← WAJIB
/netlify.toml        ← WAJIB
/.gitignore          ← WAJIB (baru ditambahkan)
/postcss.config.mjs  ← WAJIB
```

### Folder src/ (SEMUA WAJIB)
```
/src/main.tsx                           ← PENYEBAB ERROR UTAMA!
/src/app/App.tsx
/src/app/routes.tsx
/src/app/components/Root.tsx
/src/app/components/Navbar.tsx
/src/app/components/Footer.tsx
/src/app/components/WhatsAppButton.tsx
/src/app/components/SEO.tsx
/src/app/components/FuturisticHero.tsx
/src/app/components/FuturisticServices.tsx
/src/app/components/GlassCards.tsx
/src/app/components/Certifications.tsx
/src/app/components/ClientLogos.tsx
/src/app/components/GuaranteeSection.tsx
/src/app/components/MediaCoverage.tsx
/src/app/components/PainPoints.tsx
/src/app/components/Partners.tsx
/src/app/components/Testimonials.tsx
/src/app/components/TrackingUSP.tsx
/src/app/components/TrustBadges.tsx
/src/app/components/figma/ImageWithFallback.tsx
/src/app/data/servicesData.tsx
/src/app/pages/Home.tsx
/src/app/pages/About.tsx
/src/app/pages/AllServices.tsx
/src/app/pages/Services.tsx
/src/app/pages/ServiceDetail.tsx
/src/app/pages/Contact.tsx
/src/app/pages/ProjectTracking.tsx
/src/app/pages/AdminTracking.tsx
/src/app/pages/Partnership.tsx
/src/app/pages/MediaPublication.tsx
/src/app/pages/Career.tsx
/src/app/pages/Team.tsx
/src/app/pages/PendirianPerusahaan.tsx
/src/app/pages/NotFound.tsx
/src/app/services/googleSheetsService.ts
/src/app/types/tracking.ts
/src/styles/index.css
/src/styles/fonts.css
/src/styles/tailwind.css
/src/styles/theme.css
```

### Folder public/
```
/public/favicon.svg
/public/robots.txt
/public/sitemap.xml
/public/google-site-verification.html
```

---

## 🔧 CARA UPLOAD KE GITHUB (2 Metode)

### METODE 1: Upload Manual via GitHub Web (Mudah)

1. **Buka repository GitHub Anda**
2. **Download project dari Figma Make** (klik tombol Download/Export)
3. **Extract file ZIP** yang didownload
4. **Di GitHub**, klik tombol `Add file` → `Upload files`
5. **Drag & drop SEMUA file** dari folder yang diekstrak
6. **PENTING**: Pastikan struktur folder tetap sama (`src/`, `public/`, dll.)
7. Klik `Commit changes`

### METODE 2: Git Command Line (Recommended)

```bash
# Clone repository Anda (jika belum)
git clone https://github.com/USERNAME/REPO_NAME.git
cd REPO_NAME

# Copy semua file dari Figma Make ke folder ini
# (Overwrite jika ada file yang sama)

# Tambahkan semua file
git add .

# Commit
git commit -m "feat: add all source files for deployment"

# Push ke GitHub
git push origin main
```

---

## 🚀 KONFIGURASI VERCEL (Sudah Diupdate!)

File `vercel.json` sudah dikonfigurasi dengan benar:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Setting di Vercel Dashboard:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Root Directory**: `.` (root, bukan subfolder)

---

## ✔️ CHECKLIST SEBELUM REDEPLOY

- [ ] File `src/main.tsx` sudah ada di GitHub
- [ ] Folder `src/app/` lengkap dengan semua subfoldernya
- [ ] File `index.html` di root sudah ter-upload
- [ ] File `package.json` sudah ter-upload (versi terbaru)
- [ ] File `vercel.json` sudah ter-upload (versi terbaru)
- [ ] File `.gitignore` sudah ada (mencegah `node_modules` terupload)
- [ ] Folder `node_modules/` TIDAK ikut terupload

---

## ❓ FAQ

**Q: Kenapa error "0 modules transformed"?**
A: Artinya Vite menemukan `index.html` tapi tidak bisa menemukan `src/main.tsx`. File source code belum ada di repository.

**Q: Apakah `node_modules` perlu diupload?**
A: TIDAK! Vercel akan otomatis install dependencies dari `package.json`. Upload `node_modules` justru akan menyebabkan error dan memperlambat proses.

**Q: Kenapa package.json namanya diubah?**
A: Nama `@figma/my-make-file` adalah nama internal Figma Make. Untuk deployment, harus menggunakan nama yang valid tanpa prefix `@figma/`.

---

## 📞 Support
WhatsApp: +62 838-6153-7366
Website: grotivyconsultant.com
