const Text = ({id, name, style, children}) => {
    return (<p
        id={id}
        name={name}
        style={style}
    >
        {children}
    </p>
    );
}

export default Text;