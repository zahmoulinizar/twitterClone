'use client';

import React, { useCallback, useState } from 'react'

import useLoginModal from '@/app/hooks/useLoginModal'
import Input from '../share/Input';
import Modal from '../share/Modal';


const LoginModal = () => {
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false)

  const onSubmit = useCallback(async() => {
    try{
        setLoading(true);

        // TODO

        loginModal.onClose();
    }catch(error) {
        console.log(error);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
        <Input 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
        />
        <Input 
            placeholder='Password'
            onChange={(e) => setEmail(e.target.value)}
            value={password}
            disabled={isLoading}
        />
    </div>
  )
  return (
    <Modal 
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title='Login'
        actionLabel='Sign in'
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
    />
  )
}

export default LoginModal