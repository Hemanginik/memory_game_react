function Header({ handleResetBtnClick }) {
  let timer = "30 sec";
  return (
    <div className="header-container">
      <div className="header-timer">
        <span>{`Time Remaining: ${timer}`}</span>
      </div>
      <div className="header-title">
        <h3>Memory Game</h3>
      </div>
      {/* <div className="header-restart-btn"> */}
      <button onClick={handleResetBtnClick}>Restart Game</button>
      {/* </div> */}
    </div>
  );
}

export default Header;
