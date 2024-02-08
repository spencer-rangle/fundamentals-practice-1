// import Link from '../Link/Link';
import Linker from '../Linker/Linker'

const materialItems = [
  { label: 'data types', destination: '/data-types' },
  { label: 'function', destination: '/normal-function' },
  { label: 'arrow function =>', destination: '/arrow-fuction' },
  { label: 'if, if else, else', destination: '/if-statement' },
  { label: 'for', destination: '/for-loop' },
  { label: '.forEach', destination: '/for-each' },
  { label: '.map', destination: '/map-loop' },
  { label: '.reduce', destination: '/reduce' },
  { label: 'Prototype', destination: '/prototype' },
]

const materialLinks = materialItems.map((item) => {
  console.log('materials')
  console.log(item)
  return (
    <Linker key={item.label} destination={item.destination}>
      <div>{item.label}</div>
    </Linker>
  )
})

const MaterialsSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4 align-start justify-center h-56 p-10">
      {materialLinks}
    </div>
  )
}

export default MaterialsSection
