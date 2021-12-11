import React from 'react'
import { useParams } from 'react-router-dom'
import  Map  from '../../components/Map/Map'
function SearchContent() {
    const {searchType} = useParams();
    return (
        <div>
            <Map type={searchType}/>
        </div>
    )
}

export default SearchContent
