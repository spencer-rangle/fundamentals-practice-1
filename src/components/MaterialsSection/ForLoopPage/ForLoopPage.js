import '../../Common.css'

const ForLoopPage = () => {
  return (
    <div className="p-10">
      <h1>For Loop Page</h1>
      <div>
        <p>
          A for loop is a control flow statement that allows you to repeatedly
          execute a block of code a specific number of times. It consists of
          three parts: initialization, condition, and iteration statement. The
          loop initializes a variable, checks a condition before each iteration,
          and increments or updates the variable after each iteration.
        </p>

        <div className="code-container">
          <pre>{`
const somethingArr = [4, 6, 90, 134, 22, 90, 14];

for (let i = 0; i < somethingArr.length; i ++)
  { somethingArr[i] ++; }

[5, 7, 91, 135, 23, 91, 15];
          `}
          </pre>
        </div>
      </div>
      <div className="challenge-section">
        {/* TODO: Add solutions */}
        {/* TODO: Separate out Challenges into own component */}
        {/* TODO: Solution button to unhide / hide solution */}

        <h2 className="pt-10">Challenges</h2>
        <h3>Challenge 1</h3>
        <p>Update the last 5 items in this array to be doubled.</p>
        <pre>{`
let arr1 = [4, 6, 3, 76, 2, 98, 2, 0, 12, 41];

Goal Output
[4, 6, 3, 76, 2, 98, 2, 0, 12, 41]
          `}
        </pre>
        <h3 className="pt-10">Challenge 2</h3>
        <p>Add previous number in the array to each number in the array, not cumulative</p>
        <pre>{`
let arr2 = [4, 6, 3, 76, 2, 98, 2, 0, 12, 41];

Goal Output
[4, 10, 9, 79, 78, 100, 100, 2, 12, 53];
          `}
        </pre>
        <h3 className="pt-10">Challenge 3</h3>
        <p>Update each item in this array, adding ' Dog' to each name and multiplying dogAge by 7</p>
        <pre>
          {`
let arr3 = [
  {name: 'Scruffy', dogAge: 4},
  {name: 'Bubbles', dogAge: 15},
  {name: 'Polly', dogAge: 2},
];

Goal Output
[
  {name: 'Scruffy Dog', dogAge: 28},
  {name: 'Bubbles Dog', dogAge: 105},
  {name: 'Polly Dog', dogAge: 14},
];
          `}
        </pre>
      </div>
{/* 
- Update the last 4 items in this array to be double
- Update each item in this array    name: (name), dogAge: (*7)
- Add previous number to current, (but not cumulative)

*/}

    </div>
  )
}

export default ForLoopPage
