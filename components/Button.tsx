import Image from 'next/image'

type ButtonProps = {
  type: 'button' | 'submit'
  title: string
  icon?: string
  variant: string
  full?: boolean
  className?: string // Added className prop
}

const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full ? 'w-full' : ''
      } ${className}`} // Apply the passed className
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  )
}

export default Button
