function vote(index) {
  let vote = document.getElementById('votes'+index)
  let count = parseInt(votes.innerHTML);
  count++;
  votes.innerHTML = count;
}

function votedown(index){
  let vote = document.getElementById('votes'+index);
  let count = parseInt(votes.innerHTML);
  count--;
  votes.innerHTML = count;
}

var count = 0;

function newpost(){
  let post = document.getElementById('posts');
  post.innerHTML += `<div class="post">
    <div class='post-number'>1</div>
    <div class='post-upvotes'>
      <div class="arrow up" onclick='vote(`+count+`)' id='upvote`+(count)+`'></div>
      <div id='votes'>6969</div>
      <div class="arrow down" onclick='votedown(`+count+`)' id='downvote`+(count++)+`'></div>
    </div>
    <div class='post-body'>
      <a href='#' class='post-title'>Top 10 spicy memes of the month (August)</a>
      <span class='post-location'>(self.WOOHOO)</span>
      <p>submitted 10 hours agos* by <a class='submit-link' href='#'>mastysolutions</a> to <a class='submit-link' href='#'>/r/dankmemes</a></p>
      <div class='post-options'>
        <span>69 comments</span>
        <span>share</span>
        <span>save</span>
        <span>hide</span>
        <span>report</span>
        <span>crosspost</span>
      </div>
    </div>
  </div>`;
}
