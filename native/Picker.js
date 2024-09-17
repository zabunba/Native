const Picker = ({ options, selectedValue, onValueChange, style }) => {
    return (
        <select value={selectedValue} onChange={e => onValueChange(e.target.value)} style={style}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Picker;
