import React from 'react'
import { useParams } from 'react-router-dom'
import  Map  from '../../components/Map/Map'
import Subscribe from '../../components/Subscribe/Subscribe';
function SearchContent() {
    const {searchType} = useParams();
    return (
        <div>
            <Map type={searchType}/>
            <Subscribe></Subscribe>
        </div>
    )
}

export default SearchContent
