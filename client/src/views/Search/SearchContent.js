import React from 'react'
import { useParams } from 'react-router-dom'
import  Map  from '../../components/Map/Map'
import Card from "react-bootstrap/Card";
import Subscribe from '../../components/Subscribe/Subscribe';
import SearchStyling from './SearchContent.css'

function SearchContent() {
    const {searchType} = useParams();
    return (
        <div>
        <Card className='search-card'>
            <Card className='map-card'>
                <Map type={searchType}/> 
            </Card>
            <Subscribe type={searchType}></Subscribe>
        </Card>
        </div>
    )
}

export default SearchContent
