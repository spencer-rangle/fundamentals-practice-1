const PrototypePage = () => {
  return (
    <div>
      <h1>Prototype</h1>
      <section>
        {' '}
        JavaScript implements inheritance by using objects. Prototypes are
        Objects from which other objects inherit properties
      </section>
      <div className="code-container">
        <pre>
          <code>
            {`
            // Step 1: Create a Prototype Object called Animal
            const animal = {
                eat: function(food) {
                console.log('Eating...'+ food);
                }
            };

            // Step 2: Create an Object with the Prototype
            const dog = Object.create(animal);
            dog.bark = function() {
                console.log('Woof!');
            };

            // Step 3: Create a Chain with Another Object
            const puppy = Object.create(dog);
            puppy.fetch = function() {
            console.log('Fetching the ball!');
            };
            
            // Usage
            console.log("Dog's abilities:");
            dog.eat("Bone");  // 'Eating...'
            dog.bark(); // 'Woof!'
            dog.name = 'Scruffy';


            console.log("Puppy's abilities (inherits from Dog and Animal):");
            puppy.eat("canned dog food");    // 'Eating...'
            puppy.bark();   // 'Woof!'
            puppy.fetch();  // 'Fetching the ball!'
            puppy.name ="Bobby"


            console.log("Animals Names....");
            console.log("Puppy's name is " + puppy.name)
            console.log("Dog's name is " + dog.name)`}
          </code>
        </pre>
      </div>
      <br />
      <div>
        <h3>References</h3>
        <br />
        <ul>
          <li>
            <a
              href="https://www.notion.so/rangle/JavaScript-Prototypes-48f4c2e961e44a3488e56b53ecee9b2d"
              rel="noopener"
            >
              Notion Page
            </a>
          </li>
          <br />
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
              rel="noopener"
            >
              MDN
            </a>
          </li>
          <br />
          <li>
            <a
              href="https://frontendmasters.com/courses/getting-started-javascript-v2/prototypes/"
              rel="noopener"
            >
              Frontend Masters
            </a>
          </li>
          <br />
        </ul>
      </div>
    </div>
  )
}

export default PrototypePage
