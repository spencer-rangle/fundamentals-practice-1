// import Link from '../Link/Link';
import Linker from '../Linker/Linker'

const materialItems = [
  {
    label: 'Data Types',
    subtext: `JavaScript has several common data types, which can be categorized into
      two main groups: primitive and object types.`,
    destination: '/data-types',
  },
  {
    label: 'Function',
    subtext: `A JavaScript function is a reusable block of code that performs a specific task or set of tasks.`,
    destination: '/normal-function',
  },
  {
    label: 'arrow function =>',
    subtext: `A JavaScript arrow function is a concise way to write anonymous functions.
`,
    destination: '/arrow-fuction',
  },
  {
    label: 'if, if else, else',
    subtext: `These statements allow you to execute different blocks of code depending on whether a specified condition evaluates to true or false.`,
    destination: '/if-statement',
  },
  {
    label: 'for',
    subtext: `A for loop is a control flow statement that allows you to repeatedly execute a block of code a specific number of times.`,
    destination: '/for-loop',
  },
  {
    label: '.forEach',
    subtext: `This method in JavaScript iterates over each element in an array and executes a provided function once for each element.`,
    destination: '/for-each',
  },
  {
    label: '.map',
    subtext: `Used to iterate over each element of an array, apply a provided function
        to each element,and return a new array containing the results of the function applied to
        each element.`,
    destination: '/map-loop',
  },
  {
    label: '.reduce',
    subtext: `The reduce() method in Array instances applies a user-supplied "reducer" callback function to each array element sequentially.`,
    destination: '/reduce',
  },
  {
    label: 'Prototype',
    subtext: `JavaScript implements inheritance by using objects. Prototypes are
        Objects from which other objects inherit properties.`,
    destination: '/prototype',
  },
]

const materialLinks = materialItems.map((item) => {
  console.log('materials')
  console.log(item)
  return (
    <Linker
      key={item.label}
      destination={item.destination}
      subtext={item.subtext}
    >
      <h2 className="mb-2 text-2xl font-extrabold text-gray-900 md:text-2xl lg:text-2xl dark:text-black p-2">
        {item.label}
      </h2>
      <p className="p-2">{item.subtext}</p>
    </Linker>
  )
})

const MaterialsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-2 align-start justify-center h-56 px-10">
      {materialLinks}
    </div>
  )
}

export default MaterialsSection
