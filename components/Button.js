import React, {forwardRef} from 'react'
import styles from './Button.module.scss'

const Button = forwardRef((props, ref) => {
  const {className, children, ...restProps} = props
  return (
    <button ref={ref} className={"btn btn-primary " + styles.btn + " " + className} {...restProps}>
        {children}
    </button>
  )
})

export default Button