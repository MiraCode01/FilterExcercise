import React, { useState } from "react";
import './Search.css';
import "../App.css"
import DATA from './MOCK_DATA.json'


const Search = ()=>{

    const[searchFile, setSearchFile] = useState("")

    return(
        <div>
            <h1>Search Filter</h1>
            <input type="text" placeholder="Search..."
            onChange={(event)=>{
                setSearchFile(event.target.value)
            }}
            />
        {DATA.filter((val)=>{
            if(setSearchFile ==""){
                return val
            }
            else if(val.email.toLowerCase().includes(searchFile.toLowerCase())){
                return val
            }
        })
            
        .map((val)=>{
            return(
                <p>{val.email}</p>
            )
        })}
        </div>
    )
}

export default Search