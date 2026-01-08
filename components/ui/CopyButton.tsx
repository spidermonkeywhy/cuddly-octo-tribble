'use client'

import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { CopyIcon, CheckIcon } from './icons'
import { useToast } from './Toast'

interface CopyButtonProps {
  text: string
  className?: string
  showToast?: boolean
  toastMessage?: string
}

export function CopyButton({
  text,
  className,
  showToast = true,
  toastMessage = 'Copied to clipboard!',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const { addToast } = useToast()

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      if (showToast) {
        addToast(toastMessage, 'success')
      }
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
      addToast('Failed to copy', 'error')
    }
  }, [text, showToast, toastMessage, addToast])

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'p-1.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors',
        className
      )}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
    >
      {copied ? (
        <CheckIcon className="w-4 h-4 text-green-600" />
      ) : (
        <CopyIcon className="w-4 h-4 text-gray-500" />
      )}
    </button>
  )
}
