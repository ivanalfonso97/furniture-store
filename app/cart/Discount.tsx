"use client"
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { 
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import styles from "./Cart.module.css"
import { type } from 'os';

interface FormValues {
  discountCode: string
}

type Props = {
  setDiscount: (discount: number) => void
}

function Discount({ setDiscount }: Props) {
  let initialFormValues = {
    discountCode: '',
  }

  let validationSchema = Yup.object({
    discountCode: Yup.string().matches(/^DISCOUNT\d{2}$/, 'Invalid discount code')
  })

  function handleSubmit(values: FormValues, { resetForm }: FormikHelpers<FormValues>) {
    const discountString = values.discountCode.match(/\d{2}/)
    if (discountString !== null) { // Accounts for DISCOUNT00
      const discount = parseFloat(discountString[0]) / 100
      setDiscount(discount)
    }
    resetForm()
  }

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col">
        <div className={`${styles.discountCode} width-full`}>
          <Field 
            type="text"
            id="discountCode"
            name="discountCode"
            className="flex-1 pl-5 outline-0"
            placeholder="Enter your promo code"
          />
          <button 
            type="submit" 
            className="button w-11 h-11 rounded-[10px]"
          >
            <ChevronRightIcon className="w-5 h-5"/>
          </button>
        </div>

        <ErrorMessage name="discountCode" component="div" className="mt-1 text-xs text-danger"/>
      </Form>
    </Formik>
  )
}

export default Discount