const { OpenAI } = require('openai');

class AIService {
  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateTailoredResume(userResume, jobDescription, jobTitle) {
    try {
      const prompt = `You are an expert resume writer. Tailor the following resume to match the job description. 
      
Job Title: ${jobTitle}

Job Description:
${jobDescription}

Current Resume:
${userResume}

Please create a tailored resume that:
1. Highlights relevant skills and experiences
2. Uses keywords from the job description
3. Maintains a professional tone
4. Appears human-written (avoid AI detection)
5. Is concise and impactful

Provide ONLY the resume content without any explanations.`;

      const response = await this.client.chat.completions.create({
        model: 'gpt-4',
        messages: [{
          role: 'user',
          content: prompt
        }],
        temperature: 0.7,
        max_tokens: 2000
      });

      return response.choices[0].message.content;
    } catch (error) {
      throw new Error(`AI Service Error: ${error.message}`);
    }
  }

  async generateCoverLetter(userResume, jobDescription, jobTitle, companyName) {
    try {
      const prompt = `You are an expert cover letter writer. Create a compelling cover letter based on:
      
Job Title: ${jobTitle}
Company: ${companyName}

Job Description:
${jobDescription}

Candidate Resume:
${userResume}

Write a cover letter that:
1. Addresses the specific job requirements
2. Highlights relevant achievements
3. Shows genuine interest in the company
4. Maintains professional and conversational tone
5. Appears human-written (anti-AI detection)
6. Is approximately 250-300 words

Provide ONLY the cover letter without any explanations.`;

      const response = await this.client.chat.completions.create({
        model: 'gpt-4',
        messages: [{
          role: 'user',
          content: prompt
        }],
        temperature: 0.7,
        max_tokens: 1500
      });

      return response.choices[0].message.content;
    } catch (error) {
      throw new Error(`AI Service Error: ${error.message}`);
    }
  }

  async humanizeContent(aiGeneratedText) {
    try {
      const prompt = `Rewrite the following text to make it sound more human and natural while preserving all key information. Remove any AI-like patterns:

${aiGeneratedText}

Provide ONLY the rewritten text.`;

      const response = await this.client.chat.completions.create({
        model: 'gpt-4',
        messages: [{
          role: 'user',
          content: prompt
        }],
        temperature: 0.8,
        max_tokens: 2000
      });

      return response.choices[0].message.content;
    } catch (error) {
      throw new Error(`AI Service Error: ${error.message}`);
    }
  }
}

module.exports = new AIService();