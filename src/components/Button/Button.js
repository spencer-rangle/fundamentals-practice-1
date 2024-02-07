import PropTypes from 'prop-types'

export const ButtonTypesEnum = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  disabled: 'disabled',
}

export const ButtonShapesEnum = {
  box: 'box',
  rounded: 'rounded',
  pill: 'pill',
}

export const ButtonSizesEnum = {
  small: 'small',
  medium: 'medium',
  big: 'big',
}

// implement hover, click state (also focused?)

function Button({
  children,
  type, // enum
  // rounded, // moved to shape
  // pill, // moved to shape
  shape, // enum: box(defualt), rounded, pill
  size, // enum: small, medium, big
  border, // boolean, colour determined by type
  // colour, // covered by type
  hollow, // boolean, mix with type, can't be gradient
  gradient, // boolean, colours determined by type
  shadow, // boolean
  ...rest
}) {
  return (
    <button
      {...rest}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(ButtonTypesEnum),
  shape: PropTypes.oneOf(ButtonShapesEnum),
  size: PropTypes.oneOf(ButtonSizesEnum),
  border: PropTypes.bool,
  hollow: PropTypes.bool,
  gradient: PropTypes.bool,
  shadow: PropTypes.bool,
}

export default Button
