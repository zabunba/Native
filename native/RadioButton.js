const RadioButtonGroup = ({ name, data, selectedValue, onChange }) => {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={`radio-${index}`}
                        name={name}
                        value={item.value}
                        checked={selectedValue === item.value}
                        onChange={() => onChange(item.value)}
                    />
                    <label htmlFor={`radio-${index}`}>{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default RadioButtonGroup;
