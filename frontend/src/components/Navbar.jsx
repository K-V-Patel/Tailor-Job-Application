import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl">📝</span>
          <h1 className="text-xl font-bold text-indigo-600">Tailor Job Application</h1>
        </Link>

        <div className="flex gap-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/upload"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Upload
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar