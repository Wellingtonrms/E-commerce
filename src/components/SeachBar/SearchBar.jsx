import React, { useState, useContext } from 'react';
import {FcSearch} from 'react-icons/fc';
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext';

import './SearchBar.css';

function SearchBar() {

   const [searchValue, setSearchValue] = useState('');

   const {setProducts, setLoading} = useContext(AppContext);

   const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');

   };

    return ( 
        <form className="search-bar" onSubmit={handleSearch}>
            {name}
         <input
         type="search" 
         value={searchValue} 
         placeholder='Buscar Produtos' 
         className='search__input'
         onChange={ ({ target }) => setSearchValue(target.value)}
         required
         />

         <button  type="submit" className='search__button'>
          <FcSearch />  
         </button>
     </form>
     );
}

export default SearchBar;