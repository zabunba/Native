const Slider = ({ min = 0, max = 100, value, onChange, style }) => {
    return (
        <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={e => onChange(e.target.value)}
            style={style}
        />
    );
};

export default Slider;
