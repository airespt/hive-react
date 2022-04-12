function Post({ post }) {
  const json = JSON.parse(post.json_metadata);
  const image = json.image ? json.image[0] : '';
  const title = post.title;
  const author = post.author;
  const created = new Date(post.created).toDateString();

  return (
    <div class="list-group-item">
      <h4 class="list-group-item-heading">{title}</h4>
      <p>by {author}</p>
      <center>
        <img src={image} class="img-responsive center-block" alt="" />
      </center>
      <p class="list-group-item-text text-right text-nowrap">{created}</p>
    </div>
  )
}

export { Post }