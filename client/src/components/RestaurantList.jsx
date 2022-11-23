import React, {useEffect, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
//import { RestaurantsContext } from '../context/RestaurantsContext';



// const RestaurantList = (props) => {
//     const { restaurants, setRestaurants } = useContext(RestaurantsContext);
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await RestaurantFinder.get("/");
//           setRestaurants(response.data.data.restaurants);
//         } catch (err) {}
//       };
  
//       fetchData();
//     }, []);
const fetchData = async () => {
  try {
    const {data} = await RestaurantFinder.get("/");
    console.log(data);
    return data
  } catch (err) {
    console.error('Yo something went wrong')
  }
};

const RestaurantList = () => {
    const [restaurants, setRestaurants] = React.useState([])
    useEffect(() => {
      fetchData().then((data)=>{
        if(data.data){
          setRestaurants(data.data.restaurant)
        }
      });
    }, []);

  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants.map((restaurant) => { // Added the question mark after the variable for optional chaining 
                    return (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>${restaurant.price_range}</td>
                            <td>reviews</td>
                            <td>
                                <button className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )

                })}


                {/* <tr>
                    <td>mcdonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>

                <tr>
                    <td>mcdonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr> */}
            </tbody>
        </table>
        
    </div>
  )
}

export default RestaurantList
