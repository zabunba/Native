import React, { useState, useRef } from 'react';

const Pressable = ({ id, name, style, text, onPressAction, onLongPressAction, longPressDuration = 500 }) => {
  const [isLongPress, setIsLongPress] = useState(false);
  const longPressTimer = useRef(null); 

  const handleMouseDown = () => {
    setIsLongPress(false); 

    longPressTimer.current = setTimeout(() => {
      setIsLongPress(true);
      if (onLongPressAction) onLongPressAction(); 
    }, longPressDuration);
  };

  const handleMouseUp = () => {
    clearTimeout(longPressTimer.current);

    if (!isLongPress && onPressAction) {
      onPressAction();
    }
  };

  return (
    <div
      id={id}
      name={name}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {text}
    </div>
  );
};

export default Pressable;
