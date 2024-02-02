import Linker from '../Linker/Linker';
import MaterialsSection from '../MaterialsSection/MaterialsSection';
import ParticipantsPage from '../Participants/ParticipantsPage';

const HomePage = () => {


  return (
    <div>
      <h1>
        Home Page
      </h1>
      <div>
        <h2>Participants</h2>
        {/*
          The ParticipantPage was to showcase work done by contributors
          but it was pointed out that to facilitate 
        */}
        {/* TODO: Possibly remove VVV, discuss first? */}
        {/* <ParticipantsPage /> */}
        <MaterialsSection />
      </div>
    </div>
  )
}


export default HomePage;
