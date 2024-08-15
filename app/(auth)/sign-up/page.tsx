import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import GitHubSignInButton from '@/app/components/GitHubSignInButton'
import EmailSignInButton from '@/app/components/EmailSignInButton'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import GoogleSignInButton from '@/app/components/GoogleSignInButton'

export default async function SignUp() {
    const session = await auth()

    if (session) {
        return redirect('/home')
    }

    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-3xl">Sign Up</h1>
                <div className="space-y-4 mt-5">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="bg-[#333] placeholder:text-gray-400 w-full inline-block"
                    />
                    <Button
                        type="submit"
                        variant={'destructive'}
                        className="w-full bg-[#e50914]"
                    >
                        Sign Up
                    </Button>
                </div>
            </form>
            <div className="text-gray-500 text-sm mt-2">
                Already Have a account?{' '}
                <Link href="/login" className="text-white hover:underline">
                    Log in now!
                </Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <GitHubSignInButton />
                <EmailSignInButton />
                <GoogleSignInButton />
            </div>
        </div>
    )
}
