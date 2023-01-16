# Delete Post with useMutation

```js
export function PostDetail({ post }) {
  const { data, isLoading, error, isError } = useQuery(
    ["comments", post.id],
    () => fetchComments(post.id)
  );

  /**
   * lecture에서는 위의 useQuery에 이미 destuctured를 사용하여
   * 복잡해지는 것을 피하고자 constant variable로 정의했는데 아래와 같이도
   * 정의가 가능하다
   *
   * const { mutate: deleteMutate } = useMutation((postId) => deletePost(postId))
   *
   * 하지만 useMutation을 직접 destructure 해본 결과, isLoading, isError 등
   * 더 많은 variables과 objects를 rename 해야했고 lecture에서 deleteMutation을
   * 사용하는것이 더 활용성이 높았다.
   **/
  const deleteMutation = useMutation((postId) => deletePost(postId));

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      {/* add mutate function here, you can also pass post ID */}
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      {/* Examples of state of mutations */}
      {deleteMutation.isError && (
        <p style={{ color: "red" }}>Error deleting the post</p>
      )}
      {deleteMutation.isLoading && (
        <p style={{ color: "purple" }}>Deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: "green" }}>Post has (not) been deleted</p>
      )}
      <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );

```
