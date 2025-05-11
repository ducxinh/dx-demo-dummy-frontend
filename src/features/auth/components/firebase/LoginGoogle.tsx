'use client'
import { auth, provider } from '@/services/firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
// useGoogleOneTapLogin
import { GoogleIcon } from '@/components/icons/GoogleIcon';
// import Cookies from 'js-cookie'
import { useGoogleLoginFirebase as useGoogleLoginHook } from '@/features/auth/hooks/useAuth';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactElement | React.ReactElement[] | string | number
}

// useOneTap: hiển thị right popup list profile để login bằng cách tap vào popup
export function FirebaseLoginGoogle(props: SectionProps) {
  const { className, ...rest } = props
  const googleLoginMutation = useGoogleLoginHook()



  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        try {
          await googleLoginMutation.mutateAsync(result)
        } catch (error) {
          console.error(error)
        }
      }).catch((error) => {
        console.error(error)
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  };

  return (
    <div {...rest} className={'block'}>
      <div className="">
        <button
          className="text-dark flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={() => signInWithGoogle()}
          type="button"
        >
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>

    </div>
  )
}
