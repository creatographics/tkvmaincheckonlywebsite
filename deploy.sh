#!/bin/bash

# TKVCREATO VPS Deployment Script
# Run this script on your VPS after uploading the code

echo "🚀 Starting TKVCREATO deployment..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 18 (if not installed)
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install PM2 globally
echo "📦 Installing PM2..."
npm install -g pm2

# Navigate to app directory
cd /var/www/tkvcreato

# Install production dependencies
echo "📦 Installing dependencies..."
npm install --production

# Generate Prisma client
echo "🗄️ Setting up database..."
npm run db:generate

# Push database schema (if using SQLite for now)
npm run db:push

# Build the application
echo "🏗️ Building application..."
npm run build

# Start application with PM2
echo "🚀 Starting application..."
pm2 delete tkvcreato 2>/dev/null || true
pm2 start npm --name "tkvcreato" -- start

# Configure PM2 to start on boot
pm2 startup
pm2 save

# Setup Nginx (optional)
echo "🌐 Setting up Nginx..."
apt install -y nginx

# Create Nginx config
cat > /etc/nginx/sites-available/tkvcreato << 'EOF'
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/tkvcreato /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Your app should be running on http://your-server-ip:3000"
echo "📊 Check status with: pm2 status"
echo "📝 View logs with: pm2 logs tkvcreato"
