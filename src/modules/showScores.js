const scoreList = document.querySelector('.scores-list');

const addScore = (item, index) => {
  scoreList.innerHTML += `
  <ul>
    <li>
      <span>${index + 1} - ${item.user}</span>
      <span>${item.score} PTS</span>
    </li>
  </ul>
  `;
};

const showList = (object) => {
  scoreList.innerHTML = '';
  const scores = object.result;
  scores.sort((a, b) => b.score - a.score);
  scores.forEach(addScore);
};

export default showList;