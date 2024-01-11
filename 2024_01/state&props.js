function Parent() {
    return (
    
    <div className="parent">
      <h1>I'm the parent</h1>
      <Child text={"I'm the eldest child"} />
      <Child />
    </div>
    );
}
function Child(props) {
    console.log("props : ", props);
    return (
    
    <div className="child">
      <p>{props.text}</p>
    </div>
    );
}
export default Parent;

function CheckboxExample() {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleChecked = (event) => {
      setIsChecked(event.target.checked);
    };
  
    return (
      <div className="App">
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
        <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
      </div>
    );
}