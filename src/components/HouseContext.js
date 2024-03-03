import React, {useState, useEffect, createContext} from 'react';

//importe les datas
import {housesData} from '../data';

//creation du context
export const HouseContext= createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses]=useState(housesData)

  const [country, setCountry]=useState('Location (any)')
  const [countries, setCountries]=useState([])

  const [property, setProperty]=useState('Property type (any)')
  const [properties, setProperties]=useState([])

  const [price, setPrice]=useState('Price range (any)')

  const [loading, setLoading]=useState(false)


  //renvoies tous les pays
useEffect(()=>{
  const allcountries =houses.map((house)=>{
    return house.country;
  });

  //enlever les doublons de pays
  const uniqueCountries=['Location (any)', ...new Set(allcountries)]

  //on modifie notre setCountries en lui ajoutant les pays unique
  setCountries(uniqueCountries);
}, [])



//renvoies de toutes les proprietees
useEffect(()=>{
  const allproperties= houses.map((house)=>{
    return house.type;
  })
  //enlever les doublons de proprietes
  const uniqueProperties=['property type (any)', ...new Set(allproperties)]

  //on modifie notre setProperty en lui rajoutant les differents types de proprietees
  setProperties(uniqueProperties)
}, []);

const handleClick=()=>{
  // set loading
  setLoading(true);
 
  //creons une function qui verifie si une chaine de caractere contient la chaine "any"
  const isDefault=(str)=>{
    return str.split(' ').includes('(any)');
  }
  // recuperons la premiere valeur de l intervalle prix et convertissons en entier
  const minPrice= parseInt(price.split(' ')[0]);

  // recuperons la seconde valeur de l intervalle prix et convertissons en entier
  const maxPrice= parseInt(price.split(' ')[2]);

  const newHouse = housesData.filter((house)=>{
    const housePrice=  parseInt(house.price);
    //si toutes les valeurs sont selectionnees
   if(
     house.country === country &&
      house.type === property &&
      housePrice >= minPrice &&
      housePrice <= maxPrice
    ){
      return house
      
     }
    //  //si toutes les valeurs sont par defaut
     if(
      isDefault(country) &&
      isDefault(property) &&
      isDefault(price)
      ){
        return house
      }

    // si le pays n est par defaut
       if(
          !isDefault(country) &&
          isDefault(property) &&
          isDefault(price)
        ){
          return house.country === country;
        }
    // si la propiete n est pas par defaut
        if(
          isDefault(country) &&
          !isDefault(property) &&
          isDefault(price)
        ){
          return house.type === property;
        }
    // si le prix n est pas par defaut
        if(
          isDefault(country) &&
          isDefault(property) &&
          !isDefault(price)
        ){
          return housePrice >= minPrice &&
          housePrice <= maxPrice
        }
    
    //si le pays et la propiete ne sont pas par defaut
        if(
          !isDefault(country) &&
          !isDefault(property) &&
          isDefault(price)
        ){
          return house.type === property && house.country === country;
        }
    //si le pays et la prix ne sont pas par defaut
        if(
          !isDefault(country) &&
          isDefault(property) &&
          !isDefault(price)
        ){
          return house.country === country && housePrice >= minPrice && housePrice <= maxPrice;
        }
    //si le proprietes et la prix ne sont pas par defaut
        if(
          isDefault(country) &&
          !isDefault(property) &&
          !isDefault(price)
        ){
          return house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
        }
  })
 
  setTimeout(()=>{
    return(
       newHouse.length <1 ? setHouses([]):
      setHouses(newHouse),
      setLoading(false)
    );
  }, 200)

  
}



  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick
    }}>
      {children}
    </HouseContext.Provider>
)};

export default HouseContextProvider;
