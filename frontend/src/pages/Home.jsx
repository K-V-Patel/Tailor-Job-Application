import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Tailor Your Job Application</h1>
        <p className="text-xl text-gray-600 mb-8">
          Upload your resume and job link to get AI-powered, anti-AI-detection tailored resume and cover letter in both PDF and DOCX formats.
        </p>
        <button
          onClick={() => navigate('/upload')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-200"
        >
          Get Started
        </button>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-3xl mb-4">📄</div>
          <h3 className="text-xl font-bold mb-2">Smart Resume Tailoring</h3>
          <p className="text-gray-600">Automatically tailor your resume to match job requirements and keywords.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-3xl mb-4">✍️</div>
          <h3 className="text-xl font-bold mb-2">AI-Generated Cover Letters</h3>
          <p className="text-gray-600">Create compelling cover letters that showcase your unique value.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-2">Anti-AI Detection</h3>
          <p className="text-gray-600">Human-like content that passes AI detection tools and ATS systems.</p>
        </div>
      </div>

      {/* More Features */}
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-3xl mb-4">📥</div>
          <h3 className="text-xl font-bold mb-2">Multiple Export Formats</h3>
          <p className="text-gray-600">Download your documents in PDF, DOCX, or both formats instantly.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">Instant Generation</h3>
          <p className="text-gray-600">Get your tailored documents in seconds, not hours.</p>
        </div>
      </div>
    </div>
  )
}

export default Home