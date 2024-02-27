import MaterialsSection from '../MaterialsSection/MaterialsSection'

const HomePage = (props) => {
  return (
    <>
      {!props.isNavOpen && (
        <div className="p-10">
          {/* <h2>Participants</h2> */}
          {/*
          The ParticipantPage was to showcase work done by contributors
          but it was pointed out that to facilitate 
        */}
          {/* TODO: Possibly remove VVV, discuss first? */}
          {/* <ParticipantsPage /> */}
          <h1>Lesson Materials</h1>
          <MaterialsSection />
        </div>
      )}
    </>
  )
}

export default HomePage
