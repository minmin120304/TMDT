import React from 'react'

export function UIButton({ children = 'UI Lib Button' }) {
  return (
    <button style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}>
      {children}ddd
    </button>
  )
}

