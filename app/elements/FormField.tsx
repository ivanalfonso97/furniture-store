import { ReactNode } from "react";
import { Field, ErrorMessage } from "formik";

import { inter } from "../styles/fonts";

type Props = {
  fieldName: string
  fieldLabel?: string
  fieldType?: string
  icon?: ReactNode
  iconClickHandler?: () => void
}

function FormField({ 
  fieldName,
  fieldLabel,
  fieldType, 
  icon, 
  iconClickHandler 
}: Props) {
  return (
    <div>
      <div className="form-field flex justify-between items-center">
        <div className="flex flex-col justify-between h-full">
          <label 
            htmlFor={fieldLabel ? fieldLabel : fieldName} 
            className={`${inter.className} text-xs text-sub capitalize leading-[17px]`}
          >
            {fieldName}
          </label>
          <Field 
            type={fieldType ? fieldType : "text"} 
            id={fieldName} 
            name={fieldName} 
            className={`${inter.className} leading-[22px] outline-0`}
          />
        </div>
        <button
          type="button"
          onClick={iconClickHandler}
        >
          {icon}
        </button>
      </div>
      <ErrorMessage name={fieldName} component="div" className="mt-1 text-xs text-danger"/>
    </div>
  )
}

export default FormField