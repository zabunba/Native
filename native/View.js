const View = ({id, name, className, style, children }) => {
    return (
        <div
            id={id}
            name={name}
            className={className}
            style={style}
        >
            {children}
        </div>
    );
}


export default View;
