import React,{ useEffect, useState,createContext,useContext } from 'react'

const Mycontext = createContext();


const Data = ({children}) => {


    const[Product,setProduct] = useState();
    useEffect(()=>{
        const fetchData  = async()=>{
            const ProductData = await fetch('http://localhost:4000/all_product');
            const result = await ProductData.json();
            setProduct(result);
        }
        fetchData ();
        
        
    },[]);

  return (

    <Mycontext.Provider value={{Product}} >
      {children}
      </Mycontext.Provider>
  
  );


};




const useApi=()=>{
const context=useContext(Mycontext)
return context
}


export {Data,useApi} 