// Lib
import { ButtonHTMLAttributes, ReactNode } from 'react'

// Constants
import { stylesButton } from '@constants'

// Enum
import { SIZES, VARIANTS } from '@enums'

export type ButtonProps = {
  onClick?: () => void
  children: ReactNode
  variant?: VARIANTS
  size?: SIZES
  className?: string
  testId?: string
  typeButton?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
}

const Button = ({
  variant = VARIANTS.PRIMARY,
  onClick,
  children,
  size = SIZES.MEDIUM,
  className = '',
  testId,
  typeButton = 'button',
  disabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled}
      data-testid={testId}
      type={typeButton}
      onClick={onClick}
      className={`${stylesButton[variant]} btn-${size} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
