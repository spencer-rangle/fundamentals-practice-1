import Linker from "../Linker/Linker";

const ParticipantsPage = () => {

  const participantList = [
    'Asokan',
    'Geethu',
    'Karen',
    'Mamadou',
  ];

  const participantLinks = participantList.map(item => {
    return (
      <Linker
        key={item}
        destination={`/${item.toLowerCase()}`}
      >
        <h3>{item}</h3>
      </Linker>
    );
  });

  return (
    <div>
      {participantLinks}
    </div>
  )
}

export default ParticipantsPage;
