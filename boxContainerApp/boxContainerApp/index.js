const Box = (props) => {
    //  Write your code here.
    const { name, size } = props;
    const boxClassName = `box ${size}`;
    return (
      <div className={boxClassName}>
        <p className="name">{name}</p>
      </div>
    );
  };
  
  const element = (
    //  Write your code here.
    <div className="bg-container">
      <h1 className="heading">Boxes</h1>
      <div className="box-container">
        <Box size="box1" name="Small" />
        <Box size="box2" name="Medium" />
        <Box size="box3" name="Big" />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  