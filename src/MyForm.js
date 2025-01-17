import { useState } from "react";


/* 
Multiple Input Fields - 
You can control the values of more than one input field by adding a name attribute to each element.
We will initialize our state with an empty object.
To access the fields in the event handler use the event.target.name and event.target.value syntax
To update the state, use square brackets [bracket notation] around the property name.

TextArea -
The textarea element in React is slightly different from ordinary HTML.
In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>
In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage the value of the textarea

Select - A drop down list, or a select box, in React is also a bit different from HTML.
In React, the selected value is defined with a value attribute on the select tag
*/

function MyForm(){
    // const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});
    const [myCar, setMyCar] = useState("volvo");

    const handleSelect = (event) => {
        setMyCar(event.target.value);
    }

    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute"
    );

    const handleTextArea = (event) => {
      setTextarea(event.target.value);
      console.log(textarea);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${name}`)
        alert(inputs);
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          {/* <h1>{name}</h1> */}
          <label>
            Enter your name:
            <input
              type="text"
              name="username"
              // value={name}
              value={inputs.username || ""}
              // onChange={(e)=>setName(e.target.value)}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Enter your Age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit"></input>
        </form>

        <form>
            <textarea value={textarea} onChange={handleTextArea}></textarea>
        </form>

        <form>
            <select value={myCar} onChange={handleSelect}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
      </>
    );
}

export default MyForm;