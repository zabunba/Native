const FlatList = ({ id, name, styles, data, renderItem }) => {
    return (
      <ul id={id} className={styles}>
        {data.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    );
  };
  
export default FlatList;
  