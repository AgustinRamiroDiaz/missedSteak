'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h2 className="text-danger mb-4">Something went wrong!</h2>
        <p className="text-muted mb-4">
          We apologize for the inconvenience. An error occurred while loading the page.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}