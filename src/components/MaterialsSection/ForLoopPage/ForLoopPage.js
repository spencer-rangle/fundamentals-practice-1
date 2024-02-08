import '../../Common.css'

const ForLoopPage = () => {
  return (
    <div className="p-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-black pt-5">
        For Loop Page
      </h1>
      <div>
        <p>
          A for loop is a control flow statement that allows you to repeatedly
          execute a block of code a specific number of times. It consists of
          three parts: initialization, condition, and iteration statement. The
          loop initializes a variable, checks a condition before each iteration,
          and increments or updates the variable after each iteration.
        </p>

        <div className="code-container">
          <pre>
            <code>
              const somethingArr = [4, 6, 90, 134, 22, 90, 14];
              <br />
              <br />
              {`for (let i = 0; i < somethingArr.length; i ++)`}{' '}
              {`{ somethingArr[i] ++; }`}
              <br />
              [5, 7, 91, 135, 23, 91, 15];
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default ForLoopPage
