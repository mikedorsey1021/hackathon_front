import React, {useState} from 'react'
import { ButtonComponent } from '../Button/Button';
import style from 'styled-components';


import { Alert } from '../Alert/Alert';

import {api} from '../API/utils'

export const Search = () => {
    const search_ary = ["service", "military_status", "service_era", "discharge_status",
                        "combat_service", "dd_214", "disability"]

    const [searchItem, setSearch] = useState({
        search: '',
        error: []
    })

    const [response, setResponse ] = useState([])
    const {search, error} = searchItem

    const handleChange = ({target}) => {
        setSearch({
            ...searchItem,
            [target.name]: target.value
        })
    }

    const isValid = (element, ary) => {
        for(let x = 0; x < ary.length; x++){
            if(element === ary[x].replace('_', " ")){
                return true
            }
        }
        setSearch({
            ...searchItem,
            error: "Nothing Found"
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(isValid(search, search_ary)){
            const res = api.get(`/${search}`)
            setResponse(res.data)
        }
    }

    return (
        <Container>
            <SearchContainer onSubmit={evt => handleSubmit(evt)}>
                <Alert
                    error={error}
                />
                <label>Search</label>
                <input
                    type='text'
                    name='search'
                    value={search}
                    onChange={evt => handleChange(evt)}
                    placeholder="Organization Name"
                />
                <ButtonComponent title={'Search'} color={'signup'} />
            </SearchContainer>
            {response}
        </Container>
    )
}

const Container = style.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`

const SearchContainer = style.form`
    display: flex;
    justify-content: center;
    algin-items: center;
    flex-direction: column;
    text-align: center;
    margin-left: 10px;
    padding: 10px;

    label{
        display: flex;
        justify-content: center;
        algin-items: center;
        flex-direction: column;
        margin:5px;
        font-size: 24px;
    }
    input{
        margin:10px;
    }

`
