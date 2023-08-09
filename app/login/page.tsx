import Image from 'next/image'
import LoginForm from './LoginForm'

function Login() {
  return (
    <div className="flex flex-col items-center py-16 px-8">
      <Image 
        src="/images/pattern.jpg"
        width={316}
        height={64}
        alt="Drawing of a living room chair with a lamp on the side"
      />
      <h3 className="title mt-6">Hello!</h3>
      <h3 className="title mb-8 uppercase">Welcome back</h3>
      <div className="card w-full">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login