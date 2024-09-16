const Button = ({id, name, value, style, onclick}) => {
    return (
        <input
            type="button"
            id={id}
            name={name}
            value={value}
            style={style}
            onClick={onclick} 
        />
    );
}

export default Button;