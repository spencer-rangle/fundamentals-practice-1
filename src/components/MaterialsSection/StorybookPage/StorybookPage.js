import React from 'react'

const StorybookPage = () => {
  return (
    <div className="p-10">
      <h1>Storybook Talk by Stephanie Zeng</h1>
      <section>
        It's a workshop to enable front end developers - building UI components
        in isolation. It helps with development collaboration, testing and
        documentation.
      </section>
      <div className="flex flex-col p-6 bg-slate-50">
        <h2>Interactions</h2>
        <p>
          Storybook turns stories into interaction tests that can be run
          automatically to validate components functionality.
        </p>
        <h2>Chromatic</h2>
        <p>
          Storybook can be easily integrated with Chromatic and our build
          pipelines to be able to catch visual differences while shipping our
          components.
        </p>
        <h2>Accessibility</h2>
        <p>
          The A11Y(Accessibility) plug in when integrated with Storybook helps
          us create components that Accessibility compliant. Thus in turn making
          end to end pages function and easy to use.
        </p>
        <h2>Isolation in Storybook</h2>
        <p>
          {' '}
          Storybook provides an isolated environment for developing and
          showcasing components independently.Controls in Storybook allow
          developers to manipulate and test component variations directly within
          the Storybook interface.
        </p>
        <h2>Setting Variants</h2>
        <p>
          Variants represent different states or configurations of a component.
          By using Storybook Controls, developers can pass arguments (props) to
          components, defining different variants for testing and demonstration
          purposes.
        </p>
        <h2>Props as Arguments</h2>
        <p>
          In the context of Storybook, passing arguments essentially means
          providing props to components. These props can be dynamic and
          configurable, enabling developers to see how components behave under
          different scenarios.
        </p>
        <h2>Composability</h2>
        <p>
          The ability to compose and combine components easily is a significant
          advantage. By utilizing Storybook Controls, components can be composed
          and tested with various configurations, ensuring they work seamlessly
          together.
        </p>
        <h2>Ease of Maintenance</h2>
        <p>
          Components built with Storybook Controls are inherently easier to
          maintain. Testing different variants in isolation helps identify and
          address issues early in the development process, reducing the
          likelihood of bugs and improving code maintainability.
        </p>
        <h2>Reusability Across Websites</h2>
        <p>
          Once components are thoroughly tested and proven in Storybook, they
          can be confidently reused across different websites or projects. This
          promotes a modular and scalable approach to development, saving time
          and effort in the long run.
        </p>
        <h2>Facilitating Collaboration</h2>
        <p>
          Storybook Controls make it easier for teams to collaborate and
          understand how different variants of components work. Developers can
          quickly experiment with variations without the need to navigate
          through the entire application.
        </p>
        <h2>Enhanced Team Collaboration </h2>
        <p>
          Storybook enhances team collaboration by enabling each team member to
          focus on their designated components. Both the Design QA and
          Development teams have the ability to set diverse controls and test
          specific components. Once the controls for a component are configured,
          the team can then open the URL and share it for additional evaluation.
        </p>
      </div>

      <hr />
      <div>
        <h3>References</h3>
        <ul>
          <li>
            <a
              className="ref-links"
              href="https://storybook.js.org/"
              rel="noopener"
            >
              Storybook Website
            </a>
          </li>
          <li>
            <a
              className="ref-links"
              href="https://docs.google.com/presentation/d/1sVBY2Rim8Lo9-W9OjVJ96JCcfqmcxd1uCnMZ-aPQF8o/edit#slide=id.g24fff31ecec_0_423"
              rel="noopener"
            >
              Stephanie Zeng's Presentation on Storybook
            </a>
          </li>
          <li>
            <a
              className="ref-links"
              href="https://github.com/rangle/storybook-workflow-workshop/blob/main/components/ui/Profile/profile.test.stories.tsx"
              rel="noopener"
            >
              Storybook Workshop Repo
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StorybookPage
