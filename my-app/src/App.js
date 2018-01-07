import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            blogs:[],
        };
    }
    componentDidMount(){
        fetch( "http://assignment-server.herokuapp.com/posts/1?_embed=comments" )
        .then ( results => {
            return results.json();
        }).then(data => {
            let blogs = data.results.map((bg) => {
                return (
                    <Blog title={bg.blogs.title} author={bg.blogs.author} comments={bg.blogs.comments}></Blog>
                )}
        )
        })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Blog App</h1>
        </header>
        {this.componentDidMount}
      </div>
    );
  }
}

class Blog extends Component {
    render(){
        const {blog} = this.props;
        return (
            <div className="col-lg-4 col-md-6">
			     <div className="card h-100">
				      <div className="single-post post-style-1">
							<h3 className="title"><b>{blog.title}</b></h3>
                            <h4 className="title"><b>{blog.author}</b></h4>
							<ul className="post-footer">
								<li><p>{blog.comment[1]}</p></li>
								<li><p>{blog.comment[2]}</p></li>
								<li><p>{blog.comment[3]}</p></li>
							</ul>
						</div>
					</div>
				</div>
        );
    }
}

export default App;
