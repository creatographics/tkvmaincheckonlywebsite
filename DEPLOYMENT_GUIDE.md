# 🚀 TKVCREATO VPS Deployment Guide

## 📋 Pre-Deployment Checklist

- [x] Project optimized (7.1GB → 2.5GB for production)
- [x] Unused packages removed
- [x] Icons optimized (lucide-react → @iconify/react)
- [x] Build tested locally ✅
- [x] Deployment scripts created

## 🖥️ VPS Information
- **IP**: 157.173.219.108
- **User**: root
- **OS**: Ubuntu/Debian (assumed)

## 📁 Files to Upload

Upload these files/folders to `/var/www/tkvcreato/`:

### Required Files:
```
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utilities
├── public/                 # Static assets
├── prisma/                 # Database schema
├── package.production.json # Production dependencies
├── .env.production        # Environment variables template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── deploy.sh              # Deployment script
```

### DO NOT Upload:
```
❌ node_modules/          # Will be installed on VPS
❌ .next/                 # Will be built on VPS
❌ .env.local             # Contains local secrets
❌ pnpm-lock.yaml         # Using npm on VPS
❌ *.log                  # Log files
```

## 🚀 Deployment Steps

### Step 1: Connect to VPS
```bash
ssh root@157.173.219.108
```

### Step 2: Create Directory
```bash
mkdir -p /var/www/tkvcreato
cd /var/www/tkvcreato
```

### Step 3: Upload Files
Use one of these methods:

**Option A: SCP (from your local machine)**
```bash
scp -r /Volumes/Graphics/TKVCREATO/{app,components,lib,public,prisma,*.js,*.ts,*.json,*.md} root@157.173.219.108:/var/www/tkvcreato/
```

**Option B: Git Clone**
```bash
# If you have a Git repository
git clone your-repo-url .
```

### Step 4: Setup Environment
```bash
# Copy production package.json
cp package.production.json package.json

# Setup environment variables
cp .env.production .env.local
# Edit .env.local with your production values
nano .env.local
```

### Step 5: Run Deployment Script
```bash
chmod +x deploy.sh
./deploy.sh
```

## 🔧 Manual Deployment (Alternative)

If the script doesn't work, run these commands manually:

```bash
# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install PM2
npm install -g pm2

# Install dependencies
npm install --production

# Setup database
npm run db:generate
npm run db:push

# Build application
npm run build

# Start with PM2
pm2 start npm --name "tkvcreato" -- start
pm2 startup
pm2 save
```

## 🌐 Access Your Site

- **Direct**: http://157.173.219.108:3000
- **With Nginx**: http://157.173.219.108

## 📊 Monitoring Commands

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs tkvcreato

# Restart app
pm2 restart tkvcreato

# Stop app
pm2 stop tkvcreato
```

## 🔒 Security Recommendations

1. **Setup Firewall**
```bash
ufw allow ssh
ufw allow 80
ufw allow 443
ufw enable
```

2. **SSL Certificate** (after domain setup)
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com
```

3. **Database Security**
- Use PostgreSQL instead of SQLite for production
- Create dedicated database user
- Use strong passwords

## 🐛 Troubleshooting

### Common Issues:

**Port 3000 in use:**
```bash
pm2 delete all
pm2 start npm --name "tkvcreato" -- start
```

**Build fails:**
```bash
rm -rf .next node_modules
npm install --production
npm run build
```

**Database issues:**
```bash
npm run db:generate
npm run db:push
```

## 📈 Production Optimizations

1. **Enable Gzip** in Nginx
2. **Setup CDN** for static assets
3. **Database optimization** (PostgreSQL)
4. **Monitoring** (PM2 monitoring, logs)
5. **Backup strategy** for database

---

**Your optimized TKVCREATO website is ready for deployment! 🎉**

Production bundle size: **87.3 KB** (vs 7.1GB development)
