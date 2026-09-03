# 🚀 QUICK START - STEP BY STEP

## ⚠️ If you're getting "npm: command not found" error, STOP and do this first:

### Install Node.js (Required!)
1. Go to: https://nodejs.org
2. Download "LTS" version (left button)
3. Run the installer
4. Click "Next" through all screens (use default settings)
5. **RESTART YOUR COMPUTER**
6. Open CMD/Terminal and run:
```bash
node --version
npm --version
```

If you see version numbers, continue below. If still "not found", try restarting again.

---

## MANUAL SETUP - START HERE

### 1️⃣ Clone Repository to Your Computer

Open CMD or Terminal and run:
```bash
git clone https://github.com/K-V-Patel/Tailor-Job-Application.git
cd Tailor-Job-Application
```

After this, you're inside the project folder. You should see files and folders like:
- `backend/`
- `frontend/`
- `docker-compose.yml`
- `README.md`
- etc.

---

### 2️⃣ Get Your OpenAI API Key

1. Go to: https://platform.openai.com/api-keys
2. Sign up or login
3. Click "Create new secret key"
4. Copy the key (looks like: `sk-xxxxxxxxxxxxxx`)
5. Keep it safe - you'll need it in 2 minutes

---

### 3️⃣ Setup Backend

**IMPORTANT:** Make sure you're in the main project folder first.

Run these commands in order:

**Step A: Go into backend folder**
```bash
cd backend
```

Your terminal should now show: `...Tailor-Job-Application\backend>`

**Step B: Install dependencies**
```bash
npm install
```

Wait for this to finish (takes 1-3 minutes). You'll see lots of text scrolling. Don't close it until it's done.

**Step C: Create .env file**

**On Windows:**
```bash
copy .env.example .env
```

**On Mac/Linux:**
```bash
cp .env.example .env
```

**Step D: Edit .env file**
- Open File Explorer / Finder
- Go to the `backend` folder
- Look for `.env` file (might be hidden)
- Right-click → Open with Notepad (or VS Code)
- Find the line: `OPENAI_API_KEY=your_openai_api_key_here`
- Replace with your actual key from Step 2
- Save the file (Ctrl+S)

Example of what it should look like:
```
OPENAI_API_KEY=sk-proj-1234567890abcdef
```

**Step E: Start backend**
```bash
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:5000
📝 API Documentation: http://localhost:5000/api/docs
```

**✅ Keep this terminal OPEN** - Don't close it!

---

### 4️⃣ Setup Frontend (Open NEW Terminal)

**IMPORTANT:** Open a NEW terminal window. Don't close the backend one!

**Step A: Go back to main project folder**
```bash
cd ..
```

or

**Start fresh in new terminal:**
```bash
cd Tailor-Job-Application
```

**Step B: Go into frontend folder**
```bash
cd frontend
```

**Step C: Install dependencies**
```bash
npm install
```

Wait for this to finish (1-3 minutes).

**Step D: Start frontend**
```bash
npm run dev
```

You should see:
```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:3000/
```

**✅ Keep this terminal OPEN too!**

---

### 5️⃣ Open Application in Browser

Open your browser and go to:
```
http://localhost:3000
```

You should see a beautiful website with "Land Your Dream Job" title.

✅ **Everything is working!**

---

## HOW TO USE

### Upload Page
1. Click "Upload" in the navigation
2. **Upload Resume:** Click box → Select a PDF file from your computer
3. **Job URL:** Paste a job posting link (LinkedIn, Indeed, Glassdoor, etc.)
4. **Format:** Choose PDF, DOCX, or ALL
5. Click **"Generate Tailored Documents"**
6. Wait 10-30 seconds

### Dashboard Page
1. Click "Dashboard" in the navigation
2. See your generated resume and cover letter
3. Click download buttons to save as PDF or DOCX

---

## ❌ ERRORS & FIXES

### Error: "npm: command not found"
**Fix:** Node.js not installed
- Install from: https://nodejs.org (LTS version)
- Restart computer
- Try again

### Error: "Cannot connect to localhost:3000"
**Fix:** 
1. Make sure backend terminal shows "Server running on http://localhost:3000"
2. Make sure frontend terminal shows "Local: http://localhost:3000"
3. Try: http://127.0.0.1:3000

### Error: "OPENAI_API_KEY is not set"
**Fix:**
1. Open `backend/.env`
2. Make sure you added your API key correctly
3. Save file
4. Close backend terminal (Ctrl+C)
5. Run `npm run dev` again

### Error: "Port 3000 is already in use"
**Fix:** 
Another app is using that port. Try:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <number> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Error: "Cannot find module"
**Fix:**
```bash
npm cache clean --force
npm install
```

---

## 📋 CHECKLIST

- [ ] Node.js installed (node --version works)
- [ ] Project cloned
- [ ] OpenAI API key obtained
- [ ] .env file created with API key
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] Can see http://localhost:3000 in browser

---

## 🎉 DONE!

You're ready to:
1. Upload your resume
2. Paste job links
3. Generate tailored documents
4. Download and submit!

**Questions?** Check GitHub Issues: https://github.com/K-V-Patel/Tailor-Job-Application/issues
