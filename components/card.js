import styles from './card.module.css';

const Card = (props) => {
    return (
        <div className="card h-100" style={{width: 18 + 'rem'}}>
            <img src={props.character.thumbnail.path + '.' + props.character.thumbnail.extension} className={["card-img-top", styles.avatar].join(' ')} alt={props.character.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5>
                    <p className={["card-text", styles.limit].join(' ')}>{props.character.description ? props.character.description : <i>No description available</i>}</p>
                    <a href="#" className={["btn",styles.avengers].join(' ')}>See Details</a>
                </div>
        </div>
    )
}

export default Card;