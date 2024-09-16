const TouchableHighlight = ({ id, name, style, text, onPressAction}) => {

  const handleMouseUp = () => {

    if (onPressAction) {
      onPressAction();
    }
  };

  return (
    <div
      id={id}
      name={name}
      style={style}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {text}
    </div>
  );
};

export default TouchableHighlight;
