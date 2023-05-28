'use client'
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/services/firebase';

import './style.css';

type dataUser = {
  name: string | null;
  avatar: string | null;
};

export default function Login() {
  const [user, setUser] = useState<dataUser>({ name: null, avatar: null });

  function handleLoginGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(response => {
        setUser({
          name: response.user.displayName,
          avatar: response.user.photoURL
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <main>
      <div className='conteiner-user'>
        {user.avatar && <img src={user.avatar} alt="" />}
        {user.name && <p>{user.name}</p>}
      </div>

      <div className="conteiner">
        <h1>CONNECT</h1>

        <button onClick={handleLoginGoogle}>Entrar com Google</button>
      </div>
    </main>
  );
}
