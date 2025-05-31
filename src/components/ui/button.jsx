import * as React from "react"

const Button = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  }

  const variantStyles = variants[variant || 'default']
  const sizeStyles = sizes[size || 'default']

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }