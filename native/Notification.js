const Notification = ({ message, type = 'info', onClose }) => {
    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return '#4caf50';
            case 'error':
                return '#f44336';
            case 'warning':
                return '#ff9800';
            default:
                return '#2196f3';
        }
    };

    return (
        <div
            style={{
                backgroundColor: getBackgroundColor(),
                color: '#fff',
                padding: '10px',
                borderRadius: '5px',
                position: 'relative',
            }}
        >
            {message}
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                }}
            >
                &times;
            </button>
        </div>
    );
};

export default Notification;
