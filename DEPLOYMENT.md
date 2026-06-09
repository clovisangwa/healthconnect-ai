# Deployment Guide

## Frontend Deployment (Vercel)

### Option 1: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your `healthconnect-ai` repository
5. Configure environment variables:
   - `NEXT_PUBLIC_API_URL` - Your backend API URL
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

## Backend Deployment (Railway)

### Step 1: Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign in with GitHub

### Step 2: Create New Project
1. Click "New Project"
2. Select "GitHub Repo"
3. Select `healthconnect-ai`

### Step 3: Add PostgreSQL
1. Click "Add Service"
2. Select "PostgreSQL"
3. Database will be automatically created

### Step 4: Configure Environment Variables
In Railway dashboard, add:
```
PORT=3000
NODE_ENV=production
DATABASE_URL=<Railway provided>
JWT_SECRET=<your-secret>
OPENAI_API_KEY=<your-key>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<your-email>
SMTP_PASSWORD=<your-app-password>
```

### Step 5: Deploy
Railway will automatically deploy on each GitHub push.

## Running Locally

### Prerequisites
- Node.js 18+
- PostgreSQL
- Git

### Setup Frontend
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your configuration
nano .env.local

# Run development server
npm run dev
```

### Setup Backend
```bash
# Install dependencies
npm install express cors dotenv jsonwebtoken

# Create database
createdb healthconnect_db
psql healthconnect_db < database.sql

# Start server
node server.js
```

## Production Checklist

- [ ] Change JWT_SECRET to a strong value
- [ ] Set NODE_ENV=production
- [ ] Configure real database (PostgreSQL)
- [ ] Set up OpenAI API key
- [ ] Configure SMTP for email notifications
- [ ] Enable HTTPS
- [ ] Set up rate limiting
- [ ] Configure CORS properly
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy

## Environment Variables

See `.env.example` for all required variables.

## Troubleshooting

### Cannot connect to database
- Ensure PostgreSQL is running
- Check DATABASE_URL format
- Verify credentials

### API not connecting
- Check NEXT_PUBLIC_API_URL
- Ensure backend is running
- Check CORS configuration

### OpenAI errors
- Verify API key is correct
- Check API key has credits
- Review API limits

## Support

For issues, create a GitHub issue or contact support@healthconnect.com
