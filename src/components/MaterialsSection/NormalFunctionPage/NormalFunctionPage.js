const NormalFunctionPage = () => {
  return (
    <div className="p-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-black pt-5">
        Normal Function Page
      </h1>
      <p>
        A JavaScript function is a reusable block of code that performs a
        specific task or set of tasks.
      </p>
      <div className="code-container">
        <pre>
          <code>
            function addUpNumbers(num1, num2){' '}
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

export default NormalFunctionPage
