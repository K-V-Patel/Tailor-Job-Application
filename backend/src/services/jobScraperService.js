const axios = require('axios');
const cheerio = require('cheerio');

class JobScraperService {
  async extractJobDescription(url) {
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      const $ = cheerio.load(response.data);
      
      // Extract common job posting elements
      let jobDescription = '';
      
      // Try multiple selectors commonly used by job sites
      const selectors = [
        '[data-testid="job-description"]',
        '.job-description',
        '.jobDescriptionText',
        '[role="main"]',
        'article',
        '.description'
      ];

      for (const selector of selectors) {
        const content = $(selector).text();
        if (content.length > 100) {
          jobDescription = content;
          break;
        }
      }

      if (!jobDescription) {
        jobDescription = $('body').text();
      }

      return this.cleanText(jobDescription);
    } catch (error) {
      throw new Error(`Failed to scrape job description: ${error.message}`);
    }
  }

  cleanText(text) {
    return text
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s.,;:!?()\-\']/g, '')
      .trim()
      .substring(0, 10000);
  }
}

module.exports = new JobScraperService();