# Setup & Usage Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Docker & Docker Compose (optional, for containerized setup)
- OpenAI API key (get it from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys))

---

## **Option 1: Docker Setup (Recommended)**

### 1. Clone & Setup
```bash
git clone https://github.com/K-V-Patel/Tailor-Job-Application.git
cd Tailor-Job-Application
```

### 2. Configure Environment
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and add your OpenAI API key:
```env
OPENAI_API_KEY=sk-your_key_here
JWT_SECRET=your_secret_key
```

### 3. Run with Docker Compose
```bash
docker-compose up
```

This will start:
- ✅ Frontend on **http://localhost:3000**
- ✅ Backend API on **http://localhost:5000**
- ✅ MongoDB on **localhost:27017**
- ✅ Redis on **localhost:6379**

### 4. Open in Browser
**[👉 Click here to open the application](http://localhost:3000)**

---

## **Option 2: Manual Setup (Local Development)**

### Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your OpenAI API key to .env
# OPENAI_API_KEY=sk-your_key_here

# Start the backend server
npm run dev
```

Backend will run on **http://localhost:5000**

### Frontend Setup (in a new terminal)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Frontend will run on **http://localhost:3000**

### 5. Open in Browser
**[👉 Click here to open the application](http://localhost:3000)**

---

## 📖 How to Use the Platform

### Step 1: Home Page
Visit **[http://localhost:3000](http://localhost:3000)** to see the landing page with features.

### Step 2: Upload Your Documents
1. Click **"Get Started"** or navigate to **Upload** page
2. **Upload your resume** (PDF format only)
3. **Paste the job posting URL** (LinkedIn, Indeed, Glassdoor, etc.)
4. **Select export format:**
   - PDF only
   - DOCX only
   - Both PDF & DOCX
5. Click **"Generate Tailored Documents"**

### Step 3: View Results
1. Navigate to **Dashboard**
2. View your generated:
   - ✅ Tailored Resume
   - ✅ Cover Letter
3. Download in your preferred format:
   - 📄 PDF files
   - 📝 DOCX files

### Step 4: Download & Use
Download the generated documents and submit your application!

---

## 🔄 API Endpoints

### Authentication
```bash
POST /api/auth/register
POST /api/auth/login
```

### Applications
```bash
POST /api/applications          # Upload resume & job URL
GET /api/applications/:id       # Get application details
```

### Generate Documents
```bash
POST /api/generate              # Generate tailored resume & cover letter
```

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "applicationId": "1234567890",
    "jobUrl": "https://linkedin.com/jobs/view/...",
    "resumePath": "./uploads/resume.pdf",
    "format": "all"
  }'
```

---

## 📁 Project Structure

```
Tailor-Job-Application/
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Landing page
│   │   │   ├── Upload.jsx     # Upload interface
│   │   │   └── Dashboard.jsx  # View results
│   │   ├── components/
│   │   │   └── Navbar.jsx     # Navigation
│   │   └── App.jsx            # Main app
│   ├── vite.config.js
│   └── package.json
│
├── backend/                    # Express backend
│   ├── src/
│   │   ├── services/
│   │   │   ├── aiService.js           # OpenAI integration
│   │   │   ├── pdfService.js          # PDF handling
│   │   │   ├── jobScraperService.js   # URL scraping
│   │   │   └── documentService.js     # DOCX generation
│   │   ├── routes/
│   │   │   ├── auth.js       # Authentication
│   │   │   ├── applications.js # Upload handling
│   │   │   └── generate.js   # Document generation
│   │   └── index.js          # Express server
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml         # Docker orchestration
├── README.md                  # Project overview
├── SETUP.md                   # This file
└── LICENSE                    # MIT License
```

---

## 🔑 Environment Variables

### Backend (.env)
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://admin:password@mongodb:27017/tailor-job-app?authSource=admin

# AI
OPENAI_API_KEY=sk-your_api_key_here

# Authentication
JWT_SECRET=your_super_secret_key_here

# Files
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760

# CORS
CORS_ORIGIN=http://localhost:3000

# Redis (optional)
REDIS_URL=redis://redis:6379
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Tailor Job Application
```

---

## 🛠 Troubleshooting

### Problem: "Cannot connect to localhost:3000"
**Solution:** Ensure frontend is running with `npm run dev`

### Problem: "OPENAI_API_KEY is not set"
**Solution:** Add your OpenAI key to `backend/.env`

### Problem: "Port already in use"
**Solution:** Change ports in `docker-compose.yml` or kill existing processes

### Problem: "PDF upload fails"
**Solution:** Ensure file is PDF format and under 10MB

### Problem: "Job URL scraping fails"
**Solution:** The site may have different HTML structure. Try a different job posting.

---

## 📦 Build for Production

### Build Frontend
```bash
cd frontend
npm run build
```

### Deploy Backend
```bash
cd backend
npm install --production
NODE_ENV=production npm start
```

---

## 📞 Support & Contributing

- **Issues:** [Open an issue on GitHub](https://github.com/K-V-Patel/Tailor-Job-Application/issues)
- **Contributing:** See [CONTRIBUTING.md](CONTRIBUTING.md)
- **License:** [MIT](LICENSE)

---

## 🎯 Key Features

✨ **Smart Tailoring** - AI analyzes job descriptions and tailors resumes  
🤖 **Anti-AI Detection** - Uses natural language patterns to avoid detection  
📄 **Multi-Format Export** - Get PDF, DOCX, or both  
⚡ **Fast Generation** - Results in seconds, not hours  
🔒 **Secure** - JWT authentication & encrypted uploads  
🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS  

---

**Ready to land your dream job? [Start here! 👉](http://localhost:3000)**
