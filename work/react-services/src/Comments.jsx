import { useEffect } from 'react';
import { fetchCommentsForPostId } from './services';

function Comments({ postId, comments, saveComments, setError }) {

  // STUDENTS: Because `comments` comes from parent
  // we need a useEffect() here to call saveComments
  // and loading state is implied by comments being falsy
  const isLoading = !comments;

  useEffect(
    () => {
      fetchCommentsForPostId(postId)
      .then( savedComments => {
        saveComments(savedComments);
      })
      .catch( error => {
        setError("Unable to load comments, please try later");
      });
    },
    [postId]
  );

  return (
    <>
    { isLoading && <div className="gg-spinner"/> }
    { !isLoading && <div> 
      { comments.map( comment => {
          return (
            <div>
              <div className="comment_email">Posted by: {comment.email}</div>
              <div className="comment_body">{comment.body}</div>
            </div> 
          );  
        }) }
    </div> }
    </>
  );
};

export default Comments;
