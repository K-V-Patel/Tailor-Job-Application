# Tailor Job Application

A comprehensive platform that automatically tailors your resume and cover letter to specific job positions with anti-AI detection techniques built-in.

## Features

✨ **Core Features**
- Upload job links and initial resume PDFs
- Intelligent job description parsing
- AI-powered resume and cover letter tailoring
- Anti-AI elimination techniques for natural language
- Export to both .DOC and PDF formats
- Real-time preview

🔒 **Anti-AI Detection**
- Variable sentence structure and length
- Natural language patterns
- Varied vocabulary and phrasing
- Human-like grammar imperfections
- Dynamic content generation

📊 **Key Capabilities**
- Extract skills and requirements from job postings
- Match candidate experience with job requirements
- Generate targeted cover letters
- Maintain professional tone while appearing human-written
- Track application history

## Tech Stack

### Frontend
- React 18+
- TypeScript
- Tailwind CSS
- React Query
- Axios

### Backend
- Node.js/Express or Python/FastAPI
- PDF processing (pdf2json, pypdf)
- Web scraping (Cheerio, BeautifulSoup)
- AI Integration (OpenAI API / Anthropic Claude)
- Document generation (docx, python-docx)

### Database
- MongoDB or PostgreSQL for application history
- Redis for caching

### Deployment
- Docker containerization
- AWS/Heroku/Railway deployment ready

## Project Structure

```
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API integration
│   │   └── utils/           # Helper functions
│   └── package.json
│
├── backend/                 # Node.js/Python backend API
│   ├── routes/              # API endpoints
│   ├── controllers/         # Business logic
│   ├── services/            # External integrations
│   ├── middleware/          # Auth & validation
│   └── package.json or requirements.txt
│
├── docker-compose.yml       # Local development setup
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 18+ / Python 3.9+
- npm or yarn
- Docker (optional)
- API Key (OpenAI or Anthropic)

### Quick Start

1. **Clone & Install**
```bash
git clone https://github.com/K-V-Patel/Tailor-Job-Application.git
cd Tailor-Job-Application
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

3. **Backend Setup**
```bash
cd backend
npm install
# or: pip install -r requirements.txt
npm run dev
```

4. **Configure Environment**
Create `.env` files with:
```
OPENAI_API_KEY=your_key
DATABASE_URL=your_db_url
```

## API Documentation

### Endpoints

**Upload Resume & Job Link**
```
POST /api/applications
Content-Type: multipart/form-data
- resume: File (PDF)
- jobUrl: string
- jobDescription: string (optional)
```

**Generate Tailored Resume & Cover Letter**
```
POST /api/generate
Content-Type: application/json
{
  "applicationId": "string",
  "preferences": {
    "tone": "professional",
    "length": "standard"
  }
}
```

**Download Documents**
```
GET /api/applications/:id/download?format=pdf|docx&type=resume|cover-letter
```

## Contributing

Contributions welcome! Please read CONTRIBUTING.md before submitting PRs.

## License

MIT License - see LICENSE file

## Support

For issues, feature requests, or questions, open an GitHub issue.

---

**Built with ❤️ to help you land your dream job**
