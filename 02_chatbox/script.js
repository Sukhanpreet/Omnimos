let users=document.querySelector('.users');
let chat=document.querySelector('.chat');

let user=users.querySelectorAll('.user');

let userName;
let userImage;
let userDate;
let userStatus;

let defaultFeild=document.querySelector('.default');



for(let i=0;i<user.length;i++){
    user[i].addEventListener('click',function(){
        // console.log(this);

        // userimage
        userImage=this.firstElementChild.src;
        
        // username
        userName=this.firstElementChild.nextElementSibling.firstElementChild.innerHTML;

        // user status
        userStatus=this.firstElementChild.nextElementSibling.lastElementChild.innerHTML;

        // userdate
        userDate=this.lastElementChild.innerHTML;

       
        let chatInfo=`<div class="user-info">
        <div class="user-chat flex">
          <div class="flex">
            <img src="${userImage}" alt=""  class="user-image">
            <div class="name">
              ${userName}
            <br>
            <span class="status">${userStatus}</span>
          </div>  
          </div>
          <div class="flex">
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-video"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div class="chat-area">
          chat area
        </div>
        <div class="type">
          <div class="type-fld">
            <i class="fa-regular fa-face-smile"></i>
            <input type="text" name="" id="" class="msg">
            <button><i class="fa-regular fa-paper-plane"></i></button>
          </div>
        </div>
      </div> `

      defaultFeild.remove();

      chat.innerHTML= chatInfo;
    });
  
}