/* eslint-disable react/prop-types */

import { FiSearch } from 'react-icons/fi';
import { SearchStyle } from '../styles/SearchStyle';
export default function Search({search , HandleChange ,handleSearch}) {
  return (
    <SearchStyle>
        <form action="" onSubmit={handleSearch}>
        <input type="text" placeholder='Search for beer'  name={'search'} onChange={HandleChange} value={search !== null ? search : ''}/>
        <button type='submit'>
                <FiSearch color='white' size={20}/> <span>Search</span>
        </button>

        </form>
    </SearchStyle>
  )
}
