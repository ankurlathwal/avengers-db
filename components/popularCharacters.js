import Card from "./card";
import CharacterDetailsModal from "./characterDetailsModal";

export default function PopularCharacters(props){   
    const characters = props.list.map((character) => 
        <div className="col mb-4">
            <Card key={character.id} character={character}></Card>
            <CharacterDetailsModal character={character}></CharacterDetailsModal>
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