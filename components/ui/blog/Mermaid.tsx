'use client'
import { useEffect } from 'react'
import mermaid from 'mermaid'

export default function Mermaid({ chart }: { chart: string }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: 'neutral' })
    mermaid.run()
  }, [])

  return <div className="mermaid">{chart}</div>
}
