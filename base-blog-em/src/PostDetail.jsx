import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost({ postId, title }) {
  console.log("updatePost / data / title =", title);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  const [title, setTitle] = useState(post.title);

  useEffect(() => {
    setTitle(post.title);
  }, [post]);

  // replace with useQuery
  const { data, isLoading, error, isError } = useQuery(
    ["comments", post.id],
    () => fetchComments(post.id)
  );

  const deleteMutation = useMutation((postId) => deletePost(postId));

  const updateMutation = useMutation(({ postId, title }) =>
    updatePost({ postId, title })
  );

  if (isLoading) {
    return <h3>Comments are loading...</h3>;
  }

  if (isError) {
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      {deleteMutation.isError && (
        <p style={{ color: "red" }}>Error deleting the post</p>
      )}
      {deleteMutation.isLoading && (
        <p style={{ color: "purple" }}>Deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: "green" }}>Post has (not) been deleted</p>
      )}
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={() => updateMutation.mutate({ postId: post.id, title })}>
        Update title
      </button>
      {updateMutation.isError && (
        <p style={{ color: "red" }}>Error on updating the post</p>
      )}
      {updateMutation.isLoading && (
        <p style={{ color: "purple" }}>Updating post in process</p>
      )}
      {updateMutation.isSuccess && (
        <p style={{ color: "green" }}>Post has (not) been updated to {title}</p>
      )}
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
