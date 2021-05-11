import { useHistory } from 'react-router';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupsPages = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react-getting-started-4b393-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPages;
