import '../../Common.css'

const IfStatementPage = () => {
  return (
    <div className="p-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-black pt-5">
        If Statement Page
      </h1>
      <p>
        The if, else if, and else statements are used to control the flow of a
        program based on conditional logic. These statements allow you to
        execute different blocks of code depending on whether a specified
        condition or set of conditions evaluates to true or false.
      </p>

      <div className="code-container">
        <pre>
          <code>
            const apple = 8; <br />
            let corn = 3; <br />
            if {`(apple < corn)`}{' '}
            {`{
  eagle = 10;
}`}
            <br /> else{' '}
            {`{
  eagle = 5;
}`}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default IfStatementPage
