import React from 'react'

const TailwindPage = () => {
  return (
    <div className="p-10">
      <h1>Tailwind Talk by Adam Sullovey</h1>
      <section>
        It's a workshop to enable front end developers - building UI components
        in isolation. It helps with development collaboration, testing and
        documentation.
      </section>
      <div className="flex flex-col p-6 bg-slate-50">
        <h2>Preflight</h2>
        <p>
          <ul>
            <li>
              Definition:Tailwind's baseline stylesheet normalizing styles
              across browsers.
            </li>
            <li>
              Purpose: Ensures consistency and a predictable starting point for
              styles. Customization: Tailored to project needs to prevent
              unexpected styling issues.
            </li>
          </ul>
        </p>
        <h2>Re-Using Styles</h2>
        <p>
          <li>
            Utility-First: Create small, single-purpose utility classes,
            composing them for components.
          </li>
          <li>
            Responsive Design: Easily adapt components with responsive utility
            classes (sm, md, lg).
          </li>
          <li>
            Customization: Tailwind config file allows defining custom utility
            classes, colors, spacing.
          </li>
          <li>
            Plugins: Extend Tailwind's functionality with community-contributed
            plugins for added reusability.
          </li>
        </p>
      </div>

      <hr />
      <div>
        <h3>References</h3>
        <ul>
          <li>
            <a
              className="ref-links"
              href="https://tailwind-workshop.vercel.app/using-apply"
              rel="noopener"
            >
              Frontend Masters Course
            </a>
          </li>
          <li>
            <a
              className="ref-links"
              href="https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction"
            >
              Whatever you do, don’t use @apply just to make things look
              “cleaner”.
            </a>
          </li>
          <li>
            <a
              className="ref-links"
              href="https://www.geeksforgeeks.org/how-to-use-apply-directive-in-tailwind-css/"
              rel="noopener"
            >
              Using @apply
            </a>
          </li>
          <li>
            <a
              className="ref-links"
              href="https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply"
              rel="noopener"
            >
              Apply Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TailwindPage
