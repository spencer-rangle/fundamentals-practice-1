import MaterialsSection from '../MaterialsSection/MaterialsSection'

const HomePage = () => {
  return (
    <div>
      {/* <h2>Participants</h2> */}
      {/*
          The ParticipantPage was to showcase work done by contributors
          but it was pointed out that to facilitate 
        */}
      {/* TODO: Possibly remove VVV, discuss first? */}
      {/* <ParticipantsPage /> */}
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-black pt-5 pl-10">
        Lesson Materials
      </h1>
      <MaterialsSection />
    </div>
  )
}

export default HomePage
