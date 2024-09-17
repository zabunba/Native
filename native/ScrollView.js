const ScrollView = ({ style, children }) => {
    return (
        <div style={{ ...defaultScrollStyle, ...style }}>
            {children}
        </div>
    );
};

const defaultScrollStyle = {
    overflowY: 'auto',
    maxHeight: '100vh',
    padding: '10px',
};

export default ScrollView;
