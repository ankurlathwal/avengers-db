import Card from "./card";
import CharacterDetailsModal from "./characterDetailsModal";

export default function PopularCharacters(props){   
    const characters = props.list.map((character) => 
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
            <Card key={character.id} character={character}></Card>
            <CharacterDetailsModal character={character}></CharacterDetailsModal>
        </div>
        )
    return(
            <div className="row results-box">
                {characters}
            </div>
        
    )    
}