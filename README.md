# HealthConnect AI

A modern, production-ready AI-powered telehealth platform with real-time AI health assistance, verified doctor directory, appointment scheduling, and audio consultations.

## Features

✅ **AI Health Assistant** - 24/7 chatbot for health guidance  
✅ **Symptom Checker** - AI-powered symptom analysis  
✅ **Doctor Directory** - Find and connect with verified doctors  
✅ **Appointment Booking** - Schedule consultations easily  
✅ **Audio Consultations** - WebRTC-based audio calls  
✅ **Health Education** - Comprehensive health articles  
✅ **Emergency Detection** - Alerts for serious symptoms  
✅ **Admin Dashboard** - Complete platform management  
✅ **Dark Mode** - Beautiful dark theme support  
✅ **Responsive Design** - Mobile-first approach  

## Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **JWT** - Authentication
- **OpenAI API** - AI integration
- **Socket.io** - Real-time communication
- **WebRTC** - Audio/video calls

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/clovisangwa/healthconnect-ai.git
cd healthconnect-ai

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Fill in your environment variables
# Edit .env.local with your API keys and database URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   ├── pages/
│   ├── lib/
│   ├── types/
│   └── utils/
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select this repository
4. Add environment variables
5. Click "Deploy"

### Deploy Backend

Use Railway, Render, or Heroku for the Node.js backend.

## Important Notes

⚠️ **Medical Disclaimer**
- This platform is for **educational purposes only**
- AI responses are **NOT medical diagnoses**
- Users should always consult qualified healthcare professionals
- In case of emergencies, call emergency services immediately

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- CSRF protection
- XSS prevention
- Secure environment variables
- HTTPS only in production

## Contributing

Contributions are welcome! Please follow our coding standards and submit pull requests.

## License

MIT License - see LICENSE file for details

## Support

For support, email: support@healthconnect.com
