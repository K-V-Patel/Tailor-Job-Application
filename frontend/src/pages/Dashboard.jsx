import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('applications') || '[]')
    setApplications(stored)
  }, [])

  const downloadFile = (filePath, fileName) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    link.click()
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Your Applications</h1>
          <Link
            to="/upload"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            + New Application
          </Link>
        </div>

        {applications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 mb-4">No applications yet</p>
            <Link
              to="/upload"
              className="text-indigo-600 hover:text-indigo-700 font-bold"
            >
              Create your first tailored application →
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Application #{idx + 1}</h3>
                    <p className="text-gray-600">{new Date(app.timestamp).toLocaleDateString()}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Generated
                  </span>
                </div>

                {/* Resume Preview */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Tailored Resume</h4>
                  <div className="bg-gray-50 p-4 rounded mb-2 max-h-48 overflow-y-auto">
                    <p className="text-gray-700 text-sm whitespace-pre-wrap">{app.tailoredResume?.substring(0, 500)}...</p>
                  </div>
                </div>

                {/* Cover Letter Preview */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Cover Letter</h4>
                  <div className="bg-gray-50 p-4 rounded mb-2 max-h-48 overflow-y-auto">
                    <p className="text-gray-700 text-sm whitespace-pre-wrap">{app.coverLetter?.substring(0, 500)}...</p>
                  </div>
                </div>

                {/* Download Buttons */}
                {app.outputs && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {app.outputs.resume_pdf && (
                      <button
                        onClick={() => downloadFile(app.outputs.resume_pdf, 'resume.pdf')}
                        className="bg-red-100 hover:bg-red-200 text-red-800 font-bold py-2 px-3 rounded text-sm"
                      >
                        📄 Resume PDF
                      </button>
                    )}
                    {app.outputs.resume_docx && (
                      <button
                        onClick={() => downloadFile(app.outputs.resume_docx, 'resume.docx')}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-2 px-3 rounded text-sm"
                      >
                        📝 Resume DOCX
                      </button>
                    )}
                    {app.outputs.cover_letter_pdf && (
                      <button
                        onClick={() => downloadFile(app.outputs.cover_letter_pdf, 'cover-letter.pdf')}
                        className="bg-red-100 hover:bg-red-200 text-red-800 font-bold py-2 px-3 rounded text-sm"
                      >
                        📄 Letter PDF
                      </button>
                    )}
                    {app.outputs.cover_letter_docx && (
                      <button
                        onClick={() => downloadFile(app.outputs.cover_letter_docx, 'cover-letter.docx')}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-2 px-3 rounded text-sm"
                      >
                        📝 Letter DOCX
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard