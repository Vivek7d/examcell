"use client"

import React, { useEffect, useContext, useState } from 'react';
import Left from '../../../components/Left';
import Middle from '../../../components/Middle';
import { AuthContext } from '../../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { JellyTriangle } from '@uiball/loaders'

function Page() {
  const router = useRouter();
  const { admin, setAdmin } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!admin) {
      router.push('faculty-login');
    } else {
      setLoading(false);
    }
  }, [admin])


  return (
    <div className="flex bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <JellyTriangle color="black" size={100} />
        </div>)
        : (
          <>
            <Left className="flex-none" />
            <div className="ml-10 w-[1px] h-screen bg-gray-200 drop-shadow-sm" />
            <Middle className="flex-auto" />
          </>

        )
      }

    </div>
  );
}

export default Page;
