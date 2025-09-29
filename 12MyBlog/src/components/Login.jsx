import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// we need to import login from authSlice, we can use name alias to log as below
import { login as authLogin } from '../store/authSlice'

import { Button, Input, Logo } from './index'

// we need useDispatch and authService as well, 
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'

// we need to import useForm from react hook form 
import { useForm } from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useForm() → the main hook to manage the form.
    // Gives you:
        // register → to connect inputs.
        // handleSubmit → to handle form submission.
        // formState.errors → to access validation errors.
    // register() → links your <input> fields to React Hook Form.
    // handleSubmit() → validates inputs, then calls your submit function.
    const { register, handleSubmit } = useForm();

    // we use useState to show errors 
    const [error, setError] = useState("")

    // we will create a method for submitting which has to be passed to handleSubmit of useForm() hook 

    const login = async(data) => {
        // clean all the errors 
        setError("")

        try {
            // login method in authService give us a session which we store in session variable 
            const session = await authService.login(data)
            // if we get the session the user is login otherwise he is not login 
            if(session){
                // we have to get user data from authService using getCurrentUser 
                const userData = await authService.getCurrentUser()
                // if we get the userData we have to dispatch it 
                // as we have use name alias for login as authLogin, we can use it storeLogin
                if(userData) dispatch(authLogin(userData))
                // when we get userData, it means he is login, we have to redirect him programatically to "/"
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }

    }

  return (
    <div
        className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}            
        >
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your Account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have an account?&nbsp;
                <Link
                    to='/signup'
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            {/* handleSubmit is an event from useForm hook which validate form input and call submit function */}
            <form onSubmit={handleSubmit(login)}
            className='mt-8'
            >
                <div className='space-y-5'>
                    <Input 
                    label='Email: '
                    placeholder='Enter your Email'
                    type='email'
                    // we need to spread the register every time if we don't do it, on next input using the register again without spreading it will override the previous input value 
                    // we have to register each input with a unique value such as email below
                    // then we can add options as required, validation as below
                    {...register('email', {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email id should be a valid address",
                        }
                    })}
                    />

                    <Input 
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register('password', {
                        required: true,
                    })}
                    />
                    <Button
                    type='submit'
                    className='w-full'
                    >Sign in</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login