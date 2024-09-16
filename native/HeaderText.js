const HeaderText = ({id, name, className, text, style, type}) => {

    switch(type){
        case 'h1':
            return <h1 id={id} name={name} className={className} style={style}>{text}</h1>
        case 'h2':
            return <h2 id={id} name={name} className={className} style={style}>{text}</h2>
        case 'h3':
            return <h3 id={id} name={name} className={className} style={style}>{text}</h3>
        case 'h4':
            return <h4 id={id} name={name} className={className} style={style}>{text}</h4>
        case 'h5':
            return <h5 id={id} name={name} className={className} style={style}>{text}</h5>
        case 'h6':
            return <h6 id={id} name={name} className={className} style={style}>{text}</h6>
        default:
            return new SyntaxError("Invalid HeaderText type! Check the manual for more information.");
    }

}


export default HeaderText;