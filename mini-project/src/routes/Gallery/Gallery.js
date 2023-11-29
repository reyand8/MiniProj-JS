import React, {useEffect, useState} from 'react';
import './index.scss';
import {Collection} from "./Collection";

const categories = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
]

export default function Gallery() {
    const [categoryId, setCategoryId] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(1)
    const [collections, setCollections] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const category = categoryId ? `category=${categoryId}` : ''
        const pageParam = `page=${page}&limit=3`

        fetch(`https://6561cab0dcd355c08324324a.mockapi.io/gallery?${pageParam}&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json)
            })
            .catch((err) => {
                console.warn(err)
                alert('Error! Can not get data')
            }).finally(() => setLoading(false))
    }, [categoryId, page])
    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {
                        categories.map((obj, i) =>
                            <li
                                className={categoryId === i ? 'active' : ''}
                                key={obj.name}
                                onClick={() => setCategoryId(i)}
                            >{obj.name}</li>
                        )
                    }
                </ul>
                <input value={searchValue}
                       onChange={(e) => {setSearchValue(e.target.value)}}
                       className="search-input"
                       placeholder="Поиск по названию" />
            </div>
            <div className="content">
                {loading ?( <h2>Loading...</h2>) : (collections.filter(obj => {
                    return obj.name.toLowerCase().includes(searchValue.toLowerCase())
                })
                    .map((obj, index) =>(
                        <Collection key={index} name={obj.name} images={obj.photos}/>
                    )))}

            </div>
            <ul className="pagination">
                {
                    [...Array(5)].map((_, i) => (
                    <li onClick={() => setPage(i + 1)} className={page === (i + 1) ? 'active' : ''}>{i+1}</li>))}
            </ul>
        </div>
    );
}

