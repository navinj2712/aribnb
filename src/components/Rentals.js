import React from 'react'
import house1 from '../assets/house1.jpeg'
import house2 from '../assets/house2.jpeg'
import house3 from '../assets/house3.jpeg'
import house4 from '../assets/house4.jpeg'
import house5 from '../assets/house5.jpeg'
import Rental from "./Rental";

const Rentals = () => {
    const rentals =[
        {title:'Chennai', image: house1, price: "10,000", aminities :"Parking, Food", date: " 01 - 05 Jan"},
        {title:'Banglore', image: house2, price: "5,000", aminities :"Parking, Food, Trucking", date: "10 - 13 Dec"},
        {title:'Salem', image: house3, price: "12,000", aminities :"Parking, Food, Nightout", date: "23 - 25 Jun"},
        {title:'Karur', image: house4, price: "5,000", aminities :"Parking, Food", date: "28 - 30 Mar"},
        {title:'Banglore', image: house5, price: "8,000", aminities :"Parking, Food, Firecamp", date: "23 - 25 Jun"},
        {title:'Chennai', image: house4, price: "9,000", aminities :"Parking, Food", date: "23 - 25 Jun"},
        {title:'Karur', image: house1, price: "10,000", aminities :"Parking, Food, Dinner", date: "02 - 05 Apr"},
        {title:'Chennai', image: house4, price: "6,000", aminities :"Parking, Food", date: "28 - 30 Mar"},
        {title:'Karur', image: house3, price: "7,000", aminities :"Parking, Food, Photoshoot", date: "02 - 05 Apr"},
        {title:'Banglore', image: house2, price: "6,000", aminities :"Parking, Food", date: "10 - 13 Dec"},
        {title:'Chennai', image: house3, price: "9,000", aminities :"Parking, Food", date: "02 - 05 Apr"},
        {title:'Karur', image: house2, price: "10,000", aminities :"Parking, Food, Dinner", date: "23 - 25 Jun"},
        {title:'Chennai', image: house5, price: "6,000", aminities :"Parking, Food", date: "28 - 30 Mar"},
        {title:'Karur', image: house2, price: "7,000", aminities :"Parking, Food, Photoshoot", date: "23 - 25 Jun"},
        {title:'Banglore', image: house1, price: "6,000", aminities :"Parking, Food", date: "10 - 13 Dec"},
    ]
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
            aminities={rental.aminities}
            date={rental.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Rentals