import React, {Component} from 'react';

class Post extends Component{

    render(){
        return(
            <div className="post-container">
                <div className="post-header">
                    <span className="post-title">{this.props.post.title}</span>
                </div>
                <div>
                    <img src={this.props.post.img} alt={this.props.post.alt}></img>
                </div>
            </div>
        )
    }
 
}

export default Post;