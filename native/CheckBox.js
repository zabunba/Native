const CheckBox = ({ id, name, styles, data, renderItem }) => {
    return (
      <div id={id} className={styles}>
        {data.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              name={name}
              value={item.value}
            />
            <label htmlFor={`checkbox-${index}`}>
              {renderItem(item)}
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  export default CheckBox;
  