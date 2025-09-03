'use client'

import { Turnstile } from '@marsidev/react-turnstile'

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void
  onError?: () => void
  onExpire?: () => void
}

export default function TurnstileWidget({ onSuccess, onError, onExpire }: TurnstileWidgetProps) {
  return (
    <div className="flex justify-center my-4">
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAABynCzpZdn8YiBc6"}
        onSuccess={onSuccess}
        onError={onError}
        onExpire={onExpire}
        options={{
          theme: 'auto',
          size: 'normal',
        }}
      />
    </div>
  )
}