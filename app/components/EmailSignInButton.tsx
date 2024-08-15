'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function EmailSignInButton() {
    return (
        <Button
            onClick={() => {
                signIn('nodemailer')
            }}
            variant={'outline'}
            size="icon"
        >
            <Mail className="w-4 h-4" />
        </Button>
    )
}
