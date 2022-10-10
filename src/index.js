import './style.css';
import getScore from './modules/getScore';
import postScore from './modules/postScore';

window.onload = getScore();

const form = document.getElementById('add-form');
const refreshBtn = document.getElementById('refresh-btn')
const userName = document.getElementById('name');
const userScore = document.getElementById('score');

refreshBtn.onclick = () => {
  getScore();
};

form.onsubmit = (e) => {
  e.preventDefault();
  const name = userName.value;
  const score = userScore.value;
  postScore(name, score);
  form.reset();
};
