
const ForEachPage = () => {
  return (
    <div>
      <h1>forEach Loop</h1>
      <p>
        The forEach loop is an array method to iterate over and perform a specified operation for each element.
      </p>
      <div>
        array.forEach(function(currentValue, index, array) {
        // Code to be executed for each element
        }, thisArg);
      </div>
      <ul>
        <li>currentValue: The current element being processed in the array.</li>
        <li>index: The index of the current element being processed.</li>
        <li>array: The array on which forEach was called.</li>
        <li>thisArg (optional): Value to use as this when executing the callback function.</li>
      </ul>
      <div>
        <h2>Examples</h2>
        <div>
          // Example 1: Logging each element in an array
          const numbers = [1, 2, 3, 4, 5];

          numbers.forEach(function(num) {`{
            console.log(num);
          }`});
          // Output:
          // 1
          // 2
          // 3
          // 4
          // 5

          // Example 2: Doubling each element in an array
          const originalArray = [1, 2, 3];
          const doubledArray = [];

          originalArray.forEach(function(num) {`{ doubledArray.push(num * 2); }`});

          console.log(doubledArray); // Output: [2, 4, 6]

          // Example 3: Using arrow function with forEach
          const fruits = ['apple', 'banana', 'orange'];

          fruits.forEach(fruit => console.log(fruit));
          // Output:
          // apple
          // banana
          // orange

          // Example 4: Modifying array in-place using index
          const names = ['Alice', 'Bob', 'Charlie'];

          names.forEach((name, index, array) => {"{ array[index] = `Hello, ${name}`; }"});

          console.log(names);
          // Output: ['Hello, Alice', 'Hello, Bob', 'Hello, Charlie']
        </div>
      </div>
    </div>
  )
}

export default ForEachPage
