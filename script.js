@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

* {
  --bg-color: #260960;
  --color: rgb(0, 0, 0);
  --btncolor: rgb(255,255,255);
  --bg2-color: #cb2a11;
  --togglebg: #333;
  --roundcolor: #eef0f4;
  --toggleslider: #111;
  --togglesliderColor: #111;
  /* --filter1: drop-shadow(-8px -8px 12px #ffffff)
    drop-shadow(8px 8px 12px #c3c5c8);
  --filter2: drop-shadow(-4px -4px 6px #ffffff) drop-shadow(4px 4px 6px #c3c5c8);
  --filter3: drop-shadow(-2px -2px 3px #ffffff) drop-shadow(2px 2px 3px #c3c5c8); */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  color: var(--color);
  font-family: "Muli", sans-serif;
}

p {
  margin: 5px 0;
}

h1 {
  margin: 10px 0 20px;
  text-align: center;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 0;
}

.container {
  padding: 20px;
  width: 600px;
  max-width: 100%;
  background: var(--bg2-color);
  border: 12px solid var(--bg2-color);
  /* filter: var(--filter1); */
  margin: auto;
}

.result-container {
  background-color: var(--bg-color);
  border: 12px solid var(--bg-color);
  /* filter: var(--filter2); */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  height: 60px;
  width: 100%;
  margin-bottom: 35px;
}

textarea {
  background: none;
  border: none;
  color: var(--btncolor);
  font-size: 20px;
  margin-top: auto;
  outline: none;
  resize: none;
}

.result-container .btn {
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
}

.buttons {
  display: flex;
}

.btn {
  width: 50%;
  border: none;
  color: var(--btncolor);
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
  margin: 14px 5px 7px 5px;
  background-color: var(--bg-color);
  /* filter: var(--filter2); */
}

.btn:hover {
  /* filter: var(--filter3); */
  transition: 0.3s ease-in-out;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

@media screen and (max-width: 400px) {
  .result-container {
    font-size: 14px;
  }
}
