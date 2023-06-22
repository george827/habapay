import Graph from "../assets/frame154.png";
import "../App.css";
import icon from "../assets/icon.png";
const dashboard = () => {
  const data = [
    {
      id: 1,
      name: "Jane Mukenya M.",
      cash: "ksh 240",
      number: "+25471234578",
      time: "12:45pm",
      img: icon,
    },
    {
      id: 2,
      name: "Obi Peter",
      cash: "ksh 4000",
      number: "+25471234578",
      time: "12:45pm",
      img: icon,
    },
    {
      id: 3,
      name: "Bola Tinubu",
      cash: "ksh 40",
      number: "+25471234578",
      time: "12:45pm",
      img: icon,
    },
    {
      id: 4,
      name: "John Doe",
      cash: "ksh 60",
      number: "+25471234578",
      time: "12:45pm",
      img: icon,
    },
    {
      id: 5,
      name: "Client Mwilu",
      cash: "ksh 100",
      number: "+25471234578",
      time: "12:45pm",
      img: icon,
    },
    {
      id: 6,
      name: "Josephine Naruto",
      cash: "ksh 180",
      number: "+25471234578",
      time: "12:45pm",
      img: icon,
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <div className="gra">
        <div className="numbers-container">
                        <p>500k</p>
                        <p>400k</p>
                        <p>300k</p>
                        <p>200k</p>
                        <p>100k</p>
                        <p>0</p>
                    </div>
          <img src={Graph} className="img-graph" alt="graph" />
        </div>
        <div className="user-section">
          <div className="old-users">
            {data.map((item) => {
              return (
                <div className="user" key={item.id}>
                  <div className="user-img">
                    <img src={item.img} alt="user" />
                  </div>
                  <div className="details-container">
                    <div className="user-info">
                      <h3>{item.name}</h3>
                      <p>{item.cash}</p>
                    </div>
                    <div className="user-number">
                      <p>{item.number}</p>
                      <p>{item.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="new-users"></div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
