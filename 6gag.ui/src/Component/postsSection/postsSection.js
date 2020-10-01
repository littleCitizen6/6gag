import React, {Component} from 'react';
import Post from '../post/post';
import './postsSection.css';

class PostsSection extends Component{

    render(){
        return(
            <div className="container post-section">
                {this.props.posts.map(item =>
                    <div className="col-md-10 post-container">
                        <Post post={item}></Post>
                    </div>
                )}
            </div>
        )
    }
}

export default PostsSection;