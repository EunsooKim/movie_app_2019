import React from 'react';
import PropTypes from "prop-types";

function Food({name, image, rating}){
  return(
    <div>
      <h2> I like {name}</h2>
      <h4> {rating}</h4>
      <img src={image} alt={name} width="400"/>
    </div>
    );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

const FoodILike = [
  { 
    id : 1,
    name: "kimchi",
    image: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/6878019331_c6d21380b9_z.jpg?itok=QPCBvQxa",
    rating: 3.4
  },
  { 
    id : 2,
    name: "pizza",
    image: "https://recipes.timesofindia.com/photo/53110049.cms",
    rating: 3
  },
  { 
    id : 3,
    name: "chiken",
    image: "https://i.ytimg.com/vi/VqWQh6bFmtM/maxresdefault.jpg",
    rating: 5
  },
  { 
    id: 4,
    name: "kimbap",
    image: "https://www.maangchi.com/wp-content/uploads/2007/08/gimbap_plate.jpg",
    rating: 4
  }
]
 


function App() {
  return (
    <div>
      <h1> Hello !!!</h1>
      {FoodILike.map((dish)=> <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
