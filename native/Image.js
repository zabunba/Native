const Image = ({id, name, style, source}) => {

    return(

        <img 
            id={id}
            accessibilityLabel={name} 
            style={style}
            src={source}
        />

    )

}


export default Image;