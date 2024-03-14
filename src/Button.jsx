function Button ({children, ...rest}) {

   const buttonClass = rest.className + " " + rest.variant + " " + rest.size
    
    return (
        <div>
        <button className={buttonClass} onClick={rest.onClick}>{children}</button>
        {/* <button {...rest}>{children}</button> */}
        </div>
    )
}

export default Button