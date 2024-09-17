const ProgressBar = ({ id, name, className, progress, style }) => {
    const progressStyle = {
        width: `${progress}%`,
        height: '10px',
        backgroundColor: '#4caf50',
    };

    return (
        <div id={id} name={name} className={className} style={{ ...defaultProgressBarStyle, ...style }}>
            <div style={progressStyle}></div>
        </div>
    );
};

const defaultProgressBarStyle = {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
};

export default ProgressBar;