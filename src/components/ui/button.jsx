import React from "react"
import "../../styles/components.css"

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Children.only(props.children).type : "button"
    const buttonClass = `button ${variant} ${size} ${className || ""}`
    const buttonProps = asChild ? { ...props, className: buttonClass } : props

    return <Comp className={buttonClass} ref={ref} {...buttonProps} />
  },
)
Button.displayName = "Button"

const Badge = ({ className, variant, ...props }) => {
  const badgeClass = `badge ${variant === "secondary" ? "secondary" : "primary"} ${className || ""}`

  return <div className={badgeClass} {...props} />
}
Badge.displayName = "Badge"

export { Button, Badge }

