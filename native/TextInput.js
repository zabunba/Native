const TextInput = ({ id, name, value, style}) => {
    return (
        <input 
            type="text"
            id={id}
            name={name}
            value={value}
            style={style}
        />
    );
}

export default TextInput;