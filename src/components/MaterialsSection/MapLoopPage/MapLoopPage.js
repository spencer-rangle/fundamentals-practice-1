import '../../Common.css'

const MapLoopPage = () => {
  return (
    <div className="p-10">
      <h1>Map Loop Page</h1>
      <p>
        Used to iterate over each element of an array, apply a provided function
        to each element, <br />
        and return a new array containing the results of the function applied to
        each element. <br />
        Essentially, .map() transforms each element of an array based on a
        specified mapping function.
      </p>

      <div className="code-container">
        <pre>
          <code>
            const somethingArr = [4, 6, 90, 134, 22, 90, 14];
            <br />
            const myStr = 'Hello';
            <br />
            <br />
            const myArr = [4, 7, 2, 9];
            <br />
            <br />
            {`const myNewArr = myArr.map(item => {
                const newNumber = item * 2;
                return newNumber;
            })`}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default MapLoopPage
