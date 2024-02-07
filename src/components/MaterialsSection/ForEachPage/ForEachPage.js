import '../../Common.css'

const ForEachPage = () => {
  return (
    <div>
      <h1>forEach Loop</h1>
      <p>
        The forEach loop is an array method to iterate over and perform a
        specified operation for each element.
      </p>

      <div className="code-container">
        <pre>
          <code>
            array.forEach(function(currentValue, index, array){' '}
            {
              // Code to be executed for each element
            }
            , thisArg);
          </code>
        </pre>
      </div>

      <ul>
        <li>currentValue: The current element being processed in the array.</li>
        <li>index: The index of the current element being processed.</li>
        <li>array: The array on which forEach was called.</li>
        <li>
          thisArg (optional): Value to use as this when executing the callback
          function.
        </li>
      </ul>
      <div>
        <h2>Examples</h2>

        <div
          style={{
            listStyleType: 'none',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Courier New, monospace',
          }}
        >
          <p>Example 1: Logging each element in an array</p>

          <div className="code-container">
            <pre>
              <code>
                const numbers = [1, 2, 3, 4, 5]; numbers.forEach(function(num){' '}
                {`{
                  console.log(num);
                }`}
                );
                <li>// Output:</li>
                <li>// 1</li>
                <li>// 2</li>
                <li>// 3</li>
                <li>// 4</li>
                <li>// 5</li>
              </code>
            </pre>
          </div>
          <li>// Example 2: Doubling each element in an array</li>
          <div className="code-container">
            <pre>
              <code>
                <li>const originalArray = [1, 2, 3];</li>
                <li>const doubledArray = [];</li>
                <li>
                  originalArray.forEach(function(num){' '}
                  {`{ doubledArray.push(num * 2); }`});
                </li>
                <li>console.log(doubledArray); // Output: [2, 4, 6]</li>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForEachPage
