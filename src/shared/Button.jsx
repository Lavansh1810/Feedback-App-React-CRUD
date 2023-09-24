import PropTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type : 'submit',
    isDisabled : true,
    version : 'primary'
}

Button.propTypes = 
{
    children : PropTypes.node.isRequired,
    version : PropTypes.string,
    tpye : PropTypes.string,
    isDisabled : PropTypes.bool
}


export default Button
