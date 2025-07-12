export default function Loading() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-3 text-muted">Loading recipes...</p>
      </div>
    </div>
  )
}