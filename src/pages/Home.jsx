import onePieceLogo from "../assets/images/One_Piece_Black_Logo.png";

function Home() {
  return (
    <>
      <div>
        <img className="LogoHome" src={onePieceLogo} alt="Logo One Piece" />
      </div>
      <div>
        <h1>Le roi des pirates, ce sera moi!</h1>
      </div>
    </>
  );
}

export default Home;
