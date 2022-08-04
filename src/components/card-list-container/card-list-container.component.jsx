import { Component } from "react";
import './card.styles.css'

class CardListContainer extends Component {
    render () {
        const {name,id,email} = this.props.monster
        return (
            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardListContainer