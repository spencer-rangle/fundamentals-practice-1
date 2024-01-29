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
        <h2>Materials</h2>
        <MaterialsSection />
        <h2 style={{marginTop: '100px'}}>Parcipants</h2>
        <ParticipantsPage />
      </div>
    </div>
  )
}


export default HomePage;
