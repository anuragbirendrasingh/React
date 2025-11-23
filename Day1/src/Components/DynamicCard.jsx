export const Header = () => {
  return (
    <>
      <div className="headerBar">
        <img src="https://images.unsplash.com/photo-1628557010295-dd9198c31b84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGxvZ298ZW58MHx8MHx8fDA%3D" alt="img1" />

        <div className="navItems">
          <ul className="navLists">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const BodySec = ({allRest}) => {
    // const cloudy = ""
  return (
    <>
      <div>
        <div>
          <input type="text" placeholder="search..." />
        </div>

        <div className="resContainer">
          
            {allRest.map((item)=>{
                const {id,name,cloudinaryImageId,areaName,costForTwo,avgRating,cuisines} = item.info ;
            
                return(
                    <div className="res" key={item.info.id}>
                           <h1>{name}</h1>
                           <img src={`https://res.cloudinary.com/demo/image/upload/${cloudinaryImageId}`} alt="img ❌" />
                           <p>{cuisines.join(",")}</p>
                           <h4>{areaName}</h4>
                           <h3>{costForTwo}</h3>
                           <h5>{avgRating}</h5>
                    </div>
                )
            })}
          </div>
        </div>
    
    </>
  );
};

const card = [
  {
    info: {
      id: "769955",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/4dd96acd-c82a-427a-b1ae-22c3a5584bf5_769955.JPG",
      locality: "Near Reliance Fresh",
      areaName: "East Vinod Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "119517",
      name: "Pizzasia ",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/8/8/10db5d7a-8fd6-49fb-9c45-1859731f8df0_7bc5a156-d55b-4b3f-be86-76e29c4762b7.jpg",
      locality: "1St Phase",
      areaName: "Mayur Vihar Phase - 1",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian"],
      avgRating: 4.4,
    },
    
  },

  {
    info: {
      id: "987269",
      name: "Caro Napoli Pizza",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/10/6/31c5f185-47da-4fb2-9b50-1c1cafe3a291_83e929ee-3f0c-41cc-97f3-8f6e15063a4e.jpg",
      locality: "Zamrudpur",
      areaName: "Zamrudpur",
      costForTwo: "₹500 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
    },
  },
];

export const RootComp = () => {
  return (
    <>
      <Header />
      <BodySec allRest = {card} />
    </>
  );
};
