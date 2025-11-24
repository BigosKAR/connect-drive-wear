/*
  Supabase client

  Usage:
    import { supabase } from '@/lib/supabase'

    // Example: sign in
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'you@example.com',
      password: 'secret',
    })

  Environment variables (Vite / .env):
    VITE_SUPABASE_URL=https://your-project-ref.supabase.co
    VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

  Install:
    npm install @supabase/supabase-js
    # or
    yarn add @supabase/supabase-js
    # or (if using bun)
    bun add @supabase/supabase-js

  Notes:
    - With Vite the env vars must be prefixed with VITE_.
    - Keep your anon key secret in public repos; use server-side secrets for elevated privileges.
    - For server-side usage (Node) use the service_role key securely and do NOT expose it to the browser.

*/

import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Read from Vite env variables. These will be injected at build time.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

if (!supabaseUrl || !supabaseAnonKey) {
  // Fail fast in development to make it obvious the env vars are missing.
  // In production you might prefer a more graceful handling.
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase env vars not found: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env'
  )
}

export const supabase: SupabaseClient = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')

// Optional helper: small example wrapper to get the current user session
export async function getSession() {
  const { data, error } = await supabase.auth.getSession()
  if (error) throw error
  return data.session
}

export default supabase
