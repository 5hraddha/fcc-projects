import React from 'react';
import Quote from './Quote';
import GetQuoteBtn from './GetQuoteBtn';
import SocialMediaBtn from './SocialMediaBtn';
import quotable from '../api/quotable';

class QuoteBox extends React.Component {
    state = { quote: '', author: '', color: ''};

    getQuote = () => {
        quotable.get('/').then( response => {
            this.setState({quote: response.data.content, author: response.data.author})
        }); 
        this.changeColor();
    }

    changeColor = () => {
        const colors = [
            '#9fdbad',
            '#ec8b83',
            '#add1d1',
            '#a3d2ed',
            '#dc6ea8',
            '#c3a200',
            '#b56a91'
        ];

        this.setState({color: colors[Math.floor(Math.random() * colors.length)]})
    }

    componentDidMount(){
        this.getQuote(); 
    }

    render(){
        return (
            <div className="container-responsive" style={{backgroundColor:this.state.color}} >
                <div id="quote-box" className="card mx-auto">
                    <div className="card-header" style={{color:this.state.color}}>
                        Random Quotes
                    </div>
                    <div className="card-body">
                        <Quote quote={this.state.quote} author={this.state.author} color={this.state.color} />
                        <div className="row g-0">
                            <div className="col-sm-4">
                                <SocialMediaBtn quote={this.state.quote} author={this.state.author} color={this.state.color} />
                            </div>
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-4">
                                <GetQuoteBtn onGetQuote={this.getQuote} btnLabel='New Quote' color={this.state.color} />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center">Created with &#x2764; by Shraddha</p>
            </div>
        );
    }
}

export default QuoteBox;