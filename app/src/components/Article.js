import React, {Component} from 'react'

class Article extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className='hello'>
                <h2>{article.title}</h2>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {body}
                <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
}


export default Article