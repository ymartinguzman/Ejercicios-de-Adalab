'use strict';

const DEFAULT_AVATAR = 'http://placehold.it/300x300';
let userAvatar = 'http://www.fillmurray.com/300/300';
//let userAvatar = '';

const imageAvatar = document.querySelector('.user__avatar');
//imageAvatar.src = userAvatar; //para mostrar la imagen
//imageAvatar.src = userAvatar || DEFAULT_AVATAR;

console.log(imageAvatar);

if (userAvatar !== '') {
  imageAvatar.src = userAvatar;
} else {
  imageAvatar.src = DEFAULT_AVATAR;
}
