import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

const Upload = () => {
  const navigate = useNavigate()
  const [resume, setResume] = useState(null)
  const [jobUrl, setJobUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [format, setFormat] = useState('all')

  const handleResumeChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setResume(file)
    } else {
      toast.error('Please upload a PDF file')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!resume || !jobUrl) {
      toast.error('Please provide both resume and job URL')
      return
    }

    try {
      setLoading(true)
      
      // Step 1: Upload resume
      const formData = new FormData()
      formData.append('resume', resume)
      formData.append('jobUrl', jobUrl)
      
      const uploadResponse = await axios.post('/api/applications', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      const { applicationId, resumePath } = uploadResponse.data

      // Step 2: Generate tailored documents
      const generateResponse = await axios.post('/api/generate', {
        applicationId,
        jobUrl,
        resumePath,
        format
      })

      toast.success('Resume and cover letter generated successfully!')
      
      // Store in localStorage for dashboard
      const applications = JSON.parse(localStorage.getItem('applications') || '[]')
      applications.push(generateResponse.data)
      localStorage.setItem('applications', JSON.stringify(applications))
      
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.response?.data?.error || 'Error processing your request')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <Toaster />
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Tailor Your Application</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Resume Upload */}
          <div className="border-2 border-dashed border-indigo-300 rounded-lg p-6 hover:border-indigo-500 transition">
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleResumeChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {resume && <p className="mt-2 text-sm text-green-600">✓ {resume.name}</p>}
          </div>

          {/* Job URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Posting URL</label>
            <input
              type="url"
              placeholder="https://www.linkedin.com/jobs/view/..."
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Format Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Export Format</label>
            <div className="flex gap-4">
              {['pdf', 'docx', 'all'].map((fmt) => (
                <label key={fmt} className="flex items-center">
                  <input
                    type="radio"
                    value={fmt}
                    checked={format === fmt}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-4 h-4 text-indigo-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700 uppercase">{fmt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            {loading ? 'Generating...' : 'Generate Tailored Documents'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Upload