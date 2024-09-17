const Carousel = ({ items, itemWidth, style }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div style={{ display: 'flex', ...style }}>
            <button onClick={prevItem}>Previous</button>
            <div
                style={{
                    overflow: 'hidden',
                    width: itemWidth,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        transition: 'transform 0.3s ease',
                        transform: `translateX(-${currentIndex * itemWidth}px)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index} style={{ minWidth: itemWidth }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextItem}>Next</button>
        </div>
    );
};

export default Carousel;
