import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead mb-4">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn btn-primary">
          <i className="fas fa-home me-2"></i>
          Go Home
        </Link>
      </div>
    </div>
  )
}