import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        {props.name} is {props.age} years old
      </p>
      <h6>{props.children}</h6>
      <input type="text" onChange={props.changed} value={props.name} />
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};

export default Person;
