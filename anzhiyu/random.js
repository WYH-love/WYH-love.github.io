var posts=["/STM32F1/W5500使用/","/STM32F1/hello-world/","2025/06/23/第一个文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };