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
  email: string
  password: string
}

type AttemptCounts = {
  [email: string]: number;
};

function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [attempts, setAttempts] = useState<AttemptCounts>({})
  const [error, setError] = useState<string | null>(null)
  const [disableButton, setDisableButton] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()

  let initialFormValues = {
    email: '',
    password: ''
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let validationSchema = Yup.object({
    email: Yup.string()
      .matches(emailRegex, 'Invalid email address')
      .required('This field is required'),
    password: Yup.string().required('This field is required'),
  })

  function handleSubmit(values: FormValues) {
    setLoading(true)

    if (values.password === "Testpassw0rd!") {
      router.push("/home")
    } else {
      setAttempts((prevAttempts) => {
        const newAttemptCount = (prevAttempts[values.email] || 0) + 1 

        if (newAttemptCount >= 3) {
          setDisableButton(true)
          setError("Too many attempts")

          setTimeout(() => {
            setDisableButton(false)
            setError(null)
          }, 5000)
        }

        return { 
        ...prevAttempts, 
        [values.email]: newAttemptCount
        }
      });

      setError("Incorrect password")
    }

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
          fieldName="email"
          fieldType="email"
          icon={<ChevronDownIcon className="h-5 w-5" />}
        />
        <FormField 
          fieldName="password"
          fieldType={showPassword ? "text" : "password"}
          icon={showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          iconClickHandler={() => setShowPassword(!showPassword)}
        />
        {error && <div className="text-danger">{error}</div>}
        <div className="flex flex-col items-center">
          <a href="https://www.google.com/" target="_blank">
            <p className={`${inter.className} my-4`}>Forgot Password</p>
          </a>
          <button 
            type="submit" 
            className="button"
            disabled={disableButton || loading}
          >
            Submit
          </button>
          <Link href="/signup">
            <p className={`${inter.className} mt-4`}>Sign Up</p>
          </Link>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginForm