const DataTypesPage = () => {
  return (
    <div className="p-10">
      <h1>Data Types Page</h1>
      JavaScript has several common data types, which can be categorized into
      two main groups: primitive and object types.
      <br />
      Common data types in JavaScript are as follows:
      <h2>Primitive Types</h2>
      <h3>Number</h3>
      <div className="code-container p-10">
        <pre>
          <code>
            let age = 25;
            <br />
            let temperature = 98.6;
          </code>
        </pre>
      </div>
      <h3>String</h3>
      <p>Text values.</p>
      <div className="code-container p-10">
        <pre>
          <code>let name = 'John'; let message = "Hello, World!";</code>
        </pre>
      </div>
      <h3>Boolean</h3>
      <p>Can either be true or false.</p>
      <div className="code-container p-10">
        <pre>
          <code>let isTrue = true; let isFalse = false;</code>
        </pre>
      </div>
      <h3>Null</h3>
      <p>Absence of a value.</p>
      <div className="code-container p-10">
        <pre>
          <code>let myVar = null;</code>
        </pre>
      </div>
      <h3>Undefined</h3>
      <p>Uninitialized or undefined value.</p>
      <div className="code-container p-10">
        <pre>
          <code>
            let undefinedVar;
            <br />
            let anotherUndefined = undefined;
          </code>
        </pre>
      </div>
      <br />
      <h3>Also BigInt and Symbol.</h3>
      <div>
        <h2>Non-Primative Data Types</h2>
        <h3>Objects</h3>
        <p>Represents a collection of key-value pairs.</p>
        <div className="code-container p-10">
          <pre>
            <code>let person = {`{ name: 'Alice', age: 30 }`};</code>
          </pre>
        </div>
        <h3>Array</h3>
        <p>An ordered list of values.</p>
        <div className="code-container p-10">
          <pre>
            <code>let numbers = [1, 2, 3, 4, 5];</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default DataTypesPage
