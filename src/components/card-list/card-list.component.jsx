import { Component } from "react";
import './card-list.styles.css'
import CardListContainer from '../card-list-container/card-list-container.component'

class CardList extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div className="card-list">
            {monsters.map(monster => <CardListContainer monster={monster} />)}
            </div>
        )
    }
}

export default CardList;