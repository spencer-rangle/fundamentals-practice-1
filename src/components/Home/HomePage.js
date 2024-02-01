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
        <ParticipantsPage />
        <h2 style={{marginTop: '100px'}}>Materials</h2>
        <MaterialsSection />
      </div>
    </div>
  )
}


export default HomePage;
