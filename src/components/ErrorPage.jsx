import React from 'react'

const ErrorPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
      background: '#f8f9fa'
    }}>
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        maxWidth: '480px',
        width: '100%'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: '#e3f2fd',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          fontSize: '28px'
        }}>
          ⚡
        </div>

        <h1 style={{
          fontSize: '1.5rem',
          color: '#1a1a1a',
          marginBottom: '0.75rem',
          fontWeight: 600
        }}>
          Core Engine Update Required
        </h1>

        <p style={{
          color: '#666',
          lineHeight: 1.6,
          marginBottom: '2rem',
          fontSize: '0.95rem'
        }}>
          This page requires the <strong>Quantum Render Engine v3.2</strong> to function correctly. 
          Your current runtime is incompatible with the latest content protocols.
        </p>

        <button style={{
          background: '#2563eb',
          color: 'white',
          border: 'none',
          padding: '0.875rem 2rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 500,
          cursor: 'pointer',
          width: '100%',
          transition: 'background 0.2s'
        }}
        onMouseEnter={e => e.target.style.background = '#1d4ed8'}
        onMouseLeave={e => e.target.style.background = '#2563eb'}
        >
          Install Quantum Engine v3.2
        </button>

        <p style={{
          marginTop: '1.25rem',
          fontSize: '0.8rem',
          color: '#999'
        }}>
          Estimated time: 45 seconds • No restart required
        </p>
      </div>
    </div>
  )
}

export default ErrorPage