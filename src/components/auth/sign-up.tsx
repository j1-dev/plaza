import { signUpAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ('message' in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <form className="flex flex-col min-w-96 max-w-96 mx-auto border rounded-md p-6 border-neutral-950 dark:border-neutral-100">
      <h1 className="text-5xl font-bold">Sign up</h1>
      <p className="text-sm text text-foreground">
        Already have an account?{' '}
        <Link className="text-primary font-medium underline" href="/log-in">
          Log in
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          minLength={6}
          required
        />
        <SubmitButton formAction={signUpAction} pendingText="Signing up...">
          Sign up
        </SubmitButton>

        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}