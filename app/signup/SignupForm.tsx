"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormField from '../elements/FormField';

import { inter } from "../styles/fonts";
import { 
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline"

interface FormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const router = useRouter()

  let initialFormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string()
      .matches(emailRegex, 'Invalid email address')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .test('no-asterisk', 'Password cannot contain an asterisk (*)', value => {
        return value !== undefined && !value.includes('*');
      })
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('This field is required'),
  })

  function handleSubmit(values: FormValues) {
    setLoading(true)
    router.push("/home")
    setLoading(false)
  }

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4 w-full">
        <FormField 
          fieldName="name"
          icon={<ChevronDownIcon className="h-5 w-5" />}
        />
        <FormField 
          fieldName="email"
          fieldType="email"
        />
        <FormField 
          fieldName="password"
          fieldType={showPassword ? "text" : "password"}
          icon={showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          iconClickHandler={() => setShowPassword(!showPassword)}
        />
        <FormField 
          fieldName="confirmPassword"
          fieldLabel="Confirm password"
          fieldType={showConfirmPassword ? "text" : "password"}
          icon={showConfirmPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          iconClickHandler={() => setShowConfirmPassword(!showConfirmPassword)}
        />
        <div className="flex flex-col items-center mt-4">
          <button 
            type="submit" 
            className="button"
            disabled={loading}
          >
            Sign up
          </button>
          <div className="flex mt-4">
            <p className={`${inter.className} text-sm text-sub`}>Already have an account?
              <Link href="/login">
                <span className={`${inter.className} font-bold text-main`}> Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginForm