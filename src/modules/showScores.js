const scoreList = document.querySelector('.scores-list');

const addScore = (item) => {
  scoreList.innerHTML += `
  <ol>
    <li>
      <span>${item.user}:</span>
      <span>${item.score} PTS</span>
    </li>
  </ol>
  `;
};

const showList = (object) => {
  scoreList.innerHTML = '';
  const scores = object.result;
  scores.sort((a, b) => b.score - a.score);
  scores.forEach(addScore);
};

export default showList;