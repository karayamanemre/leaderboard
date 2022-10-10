import showList from './showScores.js';

const getScore = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zAHyEny9dnZCI1wU6B4v/scores',
  )
    .then((response) => response.json())
    .then((json) => showList(json));
};

export default getScore;