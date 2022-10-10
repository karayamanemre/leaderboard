import showList from './showScores.js';

const getScore = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OpK72J5NqOK1I0meR0nR/scores',
  )
    .then((response) => response.json())
    .then((json) => showList(json));
};

export default getScore;