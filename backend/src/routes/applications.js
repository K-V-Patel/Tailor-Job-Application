const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOAD_DIR || './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10485760 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Upload resume and job link
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { jobUrl, jobDescription } = req.body;
    
    if (!jobUrl && !jobDescription) {
      return res.status(400).json({ error: 'Job URL or description required' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Resume PDF file required' });
    }

    // TODO: Save to database
    res.json({
      applicationId: Date.now().toString(),
      resumePath: req.file.path,
      jobUrl,
      status: 'uploaded',
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get application
router.get('/:id', async (req, res) => {
  try {
    // TODO: Fetch from database
    res.json({ id: req.params.id, message: 'Application data' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;