const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');
const pdfService = require('../services/pdfService');
const documentService = require('../services/documentService');
const jobScraperService = require('../services/jobScraperService');

// Generate tailored resume and cover letter
router.post('/', async (req, res) => {
  try {
    const { applicationId, jobUrl, resumePath, format } = req.body;

    if (!resumePath) {
      return res.status(400).json({ error: 'Resume path required' });
    }

    if (!jobUrl) {
      return res.status(400).json({ error: 'Job URL required' });
    }

    // Extract job description from URL
    const jobDescription = await jobScraperService.extractJobDescription(jobUrl);
    
    // Extract resume text from PDF
    const resumeText = await pdfService.extractTextFromPDF(resumePath);

    // Generate tailored resume
    const tailoredResume = await aiService.generateTailoredResume(
      resumeText,
      jobDescription,
      'Job Position'
    );

    // Generate cover letter
    const coverLetter = await aiService.generateCoverLetter(
      resumeText,
      jobDescription,
      'Job Position',
      'Company Name'
    );

    const outputs = {};

    if (format === 'pdf' || format === 'all') {
      outputs.resume_pdf = await pdfService.generatePDF(
        tailoredResume,
        `tailored-resume-${applicationId}.pdf`
      );
      outputs.cover_letter_pdf = await pdfService.generatePDF(
        coverLetter,
        `cover-letter-${applicationId}.pdf`
      );
    }

    if (format === 'docx' || format === 'all') {
      outputs.resume_docx = await documentService.generateDocxFile(
        tailoredResume,
        `tailored-resume-${applicationId}.docx`
      );
      outputs.cover_letter_docx = await documentService.generateDocxFile(
        coverLetter,
        `cover-letter-${applicationId}.docx`
      );
    }

    res.json({
      applicationId,
      tailoredResume,
      coverLetter,
      outputs,
      status: 'generated',
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;