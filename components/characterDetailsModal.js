export default function CharacterDetailsModal(props){
    return(
        <div class="modal fade" id={"characterModal" + props.character.id} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby={"characterModalLabel" + props.character.id} aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id={"characterModalLabel" + props.character.id}>{props.character.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                                <img src={props.character.thumbnail.path + "." + props.character.thumbnail.extension}
                                    alt={props.character.name}
                                    width="200" height="250"
                                >
                                </img>
                            </div>
                            <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                                <h4>Features in:</h4>
                                <ul>
                                    <li><b>Comics: </b>{props.character.comics.available}</li>
                                    <li><b>Series: </b>{props.character.series.available}</li>
                                    <li><b>Stories: </b>{props.character.stories.available}</li>
                                    <li><b>Events: </b>{props.character.events.available}</li>
                                </ul>
                            </div>
                        </div>
        <hr></hr>
        <h3>Description</h3>
        <p>{props.character.description ? props.character.description : <i>No description available</i>}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    )
}