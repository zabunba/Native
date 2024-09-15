

const Image = ({id, name, style, source}) => {

    return(

        <img 
            id={id}
            accessibilityLabel={name} 
            style={style}
            source={source}
        />

    )

}


export default Image;