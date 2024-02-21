import '../../Common.css'

const ArrowFunctionPage = () => {
  return (
    <div className="p-10">
      <h1>Arrow Function Page</h1>

      <p>
        A JavaScript arrow function is a concise way to write anonymous
        functions.
        <br />
        Introduced in ECMAScript 6 (ES6), arrow functions have a shorter syntax
        compared to traditional function expressions.
        <br />
        They are often used for inline functions or when a more concise syntax
        is preferred. <br />
        Arrow functions inherit the this value from the enclosing scope, which
        can be advantageous in certain situations.
      </p>

      <div className="code-container">
        <pre>
          <code>
            {`const addUpNumbers = (num1, num2) =>`}{' '}
            {`{
                return num1 + num2;
            }`}{' '}
            <br />
            addNumbers(4, 8) // 12
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ArrowFunctionPage
