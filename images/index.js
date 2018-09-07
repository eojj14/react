import dog from './dog.jpg';

let imageList = {
  dog,
};

function getImage(key) {
  return imageList[key];
}

export default getImage;