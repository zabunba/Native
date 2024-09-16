const NumberInput = ({id, name, value, style, maxValue, minValue, step}) => {
    return (

        <input
            type="number"
            id={id}
            name={name}
            value={value}
            style={style}
            max={maxValue}
            min={minValue}
            step={step}
        />

    );
}

export default NumberInput;