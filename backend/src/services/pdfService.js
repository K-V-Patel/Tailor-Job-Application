const pdf = require('pdf-parse');
const fs = require('fs').promises;

class PDFService {
  async extractTextFromPDF(filePath) {
    try {
      const dataBuffer = await fs.readFile(filePath);
      const data = await pdf(dataBuffer);
      return data.text;
    } catch (error) {
      throw new Error(`Failed to extract PDF text: ${error.message}`);
    }
  }

  async generatePDF(content, fileName) {
    const PDFDocument = require('pdfkit');
    const path = require('path');
    const outputPath = path.join(process.env.UPLOAD_DIR || './uploads', fileName);
    
    return new Promise((resolve, reject) => {
      const doc = new PDFDocument();
      const stream = require('fs').createWriteStream(outputPath);
      
      doc.pipe(stream);
      doc.fontSize(12).text(content, {
        align: 'left',
        width: 500
      });
      doc.end();
      
      stream.on('finish', () => resolve(outputPath));
      stream.on('error', reject);
    });
  }
}

module.exports = new PDFService();