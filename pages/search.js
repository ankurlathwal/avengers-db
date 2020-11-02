import React, {useState} from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Card from '../components/card';
import useSWR from 'swr';
import {getPopularCharacters} from "../lib/popular-characters";
import PopularCharacters from "../components/popularCharacters";
import CharacterDetailsModal from "../components/characterDetailsModal";


const fetcher = async (url) => await fetch(url).then(res =>res.json());

export default function Search (props) {
    const [shouldFetch, setShouldFetch] = useState(true);
    const [characters, setCharacters] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    //setShouldFetch(true);
    //let characters = [];
    const { data, error } = useSWR(shouldFetch ? null : '/api/characters?searchTerm=' + searchTerm, fetcher);
    
    if(error){
        console.log(error);
    }
    if (!data){
        //
    }
    else if(data){
        setCharacters(data.map((character) => 
        <div className="col mb-4">
            <Card key={character.id} character={character}></Card>
            <CharacterDetailsModal character={character}></CharacterDetailsModal>
        </div>
        )) 
        setShouldFetch(true);
    }
        

    const searchUpdated = (value) => {
        setSearchTerm(value);
        setShouldFetch(false);
    }
    
        return (
            <Layout>
                <Head>
                    <title>Search | AvengersDB</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <div className="row text-center search-box">
                        <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12">
                        <img src="images/marvel-logo.png" width="200" height="60" alt="Marvel logo"></img>
                        <div class="form-group search-form">
                            <input type="text" className="form-control" placeholder="Search your favorite characters" onChange={(e)=>{searchUpdated(e.target.value)}} />
                        </div>
                        </div>
                    </div>
                    {searchTerm
                    ? null 
                    : <div>
                        <h3>Browse these popular characters or search in the box above</h3> 
                        <PopularCharacters list={props.popularCharacters}></PopularCharacters>
                    </div>
                    }
                    <div>
                        <h3>{searchTerm ? characters && characters.length ? "Search results" : "No matching results found" : null}</h3>
                    </div>
                    <div className="card-deck results-box">
                    <div className="row row-cols-4">
                        {characters}
                    </div>   
                    </div>   
                </main>
            </Layout>
        )

    
}

export async function getStaticProps() {
    const popularCharacters = getPopularCharacters();
    return {
        props: {
            popularCharacters
        }
    }
}
