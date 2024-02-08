const ReducePage = () => {
  return (
    <div className="p-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-black pt-5">
        Reduce Page
      </h1>
      <div className="code-container">
        <pre>
          <code>
            const myArr = [6, 8, 2, 4, 14, 6, 32, 1, 0, 8, 26];
            <br />
            const myArr2 = myArr.reduce(
            <br />
            (acc, curr) {`=> { return acc + curr }`},<br />
            0<br />
            );
            <br />
            console.log(myArr2) // 107
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ReducePage
