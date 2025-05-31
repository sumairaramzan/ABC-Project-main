import * as React from "react"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-xl bg-white text-gray-900  ${className || ''}`}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }