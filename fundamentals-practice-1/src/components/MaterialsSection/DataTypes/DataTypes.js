
const DataTypesPage = () => {
  return (
    <div>
      <h1>Data Types Page</h1>
      <div>
        <div>
          JavaScript has several common data types, which can be categorized into two main groups: primitive types and object types. Here are the common data types in JavaScript:
        </div>
        <div>

          <h2>Primitive Types</h2>

          <h3>Number</h3>
          <p>
            let age = 25;
            let temperature = 98.6;
          </p>
          <h3>String</h3>
          <p>Text values.</p>
          <p>
            let name = 'John';
            let message = "Hello, World!";
          </p>
          <h3>Boolean</h3>
          <p>Can either be true or false.</p>
          <p>
            let isTrue = true;
            let isFalse = false;
          </p>
          <h3>Null</h3>
          <p>Absence of a value.</p>
          <p>
            let myVar = null;
          </p>
          <h3>Undefined</h3>
          <p>Uninitialized or undefined value.</p>
          <p>
            let undefinedVar;
            let anotherUndefined = undefined;
          </p>
          <div>
            Also BigInt and Symbol.
          </div>
        </div>

        <div>
          <h2>Non-Primative Data Types</h2>
          <h3>Objects</h3>
          <p>Represents a collection of key-value pairs.</p>
          <p>
            let person = {`{ name: 'Alice', age: 30 }`};
          </p>
          <h3>Array</h3>
          <p>An ordered list of values.</p>
          <p>
            let numbers = [1, 2, 3, 4, 5];
          </p>
        </div>

      </div>

    </div>
  )
}

export default DataTypesPage
