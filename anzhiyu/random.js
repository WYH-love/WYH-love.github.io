var posts=["2025/07/02/Hexo/图床教程2/","/STM32F1/W5500使用/","2025/07/01/Hexo/图床教程/","2025/07/01/Hexo/图床教程1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };