import { useState, useEffect } from 'react';
import Comments from './Comments';
import { fetchPostsList } from './services';

function Posts() {

  const [posts, setPosts] = useState();
  const [error, setError] = useState('');
  const [activePostId, setActivePostId] = useState();
  const [commentsForPostId, setCommentsForPostId] = useState({});

  function saveCommentsForPostId(postId, comments) {
    setCommentsForPostId(
      {
        ...commentsForPostId,
        [postId]:comments
      }
    )
  }

  useEffect(
    () => {
      fetchPostsList()
      .then( loadedPosts => {
        setPosts(loadedPosts);
      })
      .catch( error => {
        setError("Unable to load posts, please try later");
      });
    },
    [setPosts]
  );


  // Students: You will need to add to/modify this file
  // The data structures shown are not the only way to do it
  // but are a valid suggestion
  return (
    <>
    <div className="status">{ error } </div>
    { !posts && <div className="gg-spinner"/> }
    { posts && (
      <ul className="posts">
        { posts.map( post => {
          return (
            <li key={`post-${post.id}`}>
              <div className='post_title' onClick={
                () => {
                  if(post.id === activePostId) {
                    setActivePostId(null);
                  } else {
                    setActivePostId(post.id);
                  }
                  
                }
              }>{post.title}</div>
              <div className='post_body'>{post.body}</div>
              { (activePostId === post.id) && <Comments
                  postId={ post.id }
                  comments={ commentsForPostId[post.id] }
                  saveComments={ comments => saveCommentsForPostId(post.id, comments) }
                  setError={setError}
                />
              }
            </li>
          );
        }) }
      </ul>
    ) }
    </>
  );
}

export default Posts;
