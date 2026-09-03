const { Document, Packer, Paragraph, TextRun } = require('docx');
const fs = require('fs').promises;
const path = require('path');

class DocumentService {
  async generateDocxFile(content, fileName) {
    try {
      const doc = new Document({
        sections: [{
          children: content.split('\n').map(line => 
            new Paragraph({
              text: line || '',
              spacing: { line: 360, lineRule: 'auto' },
              children: [
                new TextRun({
                  text: line || '',
                  font: 'Calibri',
                  size: 24
                })
              ]
            })
          )
        }]
      });

      const outputPath = path.join(process.env.UPLOAD_DIR || './uploads', fileName);
      const bytes = await Packer.toBuffer(doc);
      await fs.writeFile(outputPath, bytes);
      return outputPath;
    } catch (error) {
      throw new Error(`Failed to generate DOCX: ${error.message}`);
    }
  }

  async generateHTMLFile(content, fileName) {
    try {
      const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Calibri, Arial, sans-serif; line-height: 1.5; }
    p { margin: 10px 0; }
  </style>
</head>
<body>
${content.split('\n').map(line => `<p>${line}</p>`).join('\n')}
</body>
</html>
      `;

      const outputPath = path.join(process.env.UPLOAD_DIR || './uploads', fileName);
      await fs.writeFile(outputPath, html);
      return outputPath;
    } catch (error) {
      throw new Error(`Failed to generate HTML: ${error.message}`);
    }
  }
}

module.exports = new DocumentService();