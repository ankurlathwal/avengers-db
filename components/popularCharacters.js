import Card from "./card";

export default function PopularCharacters(props){   
    const characters = props.list.map((character) => 
        <div className="col mb-4">
            <Card key={character.id} character={character}></Card>
        </div>
        )
    return(
        <div className="card-deck results-box">
            <div className="row row-cols-4">
                {characters}
            </div>
        </div> 
    )    
}