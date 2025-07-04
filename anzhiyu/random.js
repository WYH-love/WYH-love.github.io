var posts=["W5500使用/","Hexo/图床教程1/","Hexo/图床教程2/","Hexo/图床教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };