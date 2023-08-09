import Image from 'next/image'

import SignupForm from './SignupForm'

function Signup() {
  return (
    <div className="flex flex-col items-center py-16 px-8">
      <Image 
        src="/images/pattern.jpg"
        width={316}
        height={64}
        alt="Drawing of a living room chair with a lamp on the side"
      />
      <h3 className="title mt-11 mb-8 uppercase">Welcome back</h3>
      <div className="card w-full">
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup