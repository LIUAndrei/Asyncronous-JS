'use strict';

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀








https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=106900184450008e15777275x57950

API key 106900184450008e15777275x57950 
*/

// let localCoords;

// navigator.geolocation.getCurrentPosition(
//   location => {
//     localCoords = [location.coords.latitude, location.coords.longitude];
//   },
//   () => {
//     alert('Please allow geolocation');
//   }
// );

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(position =>
//   console.log(position.coords.latitude, position.coords.longitude)
// );

// const countriesDiv = document.querySelector('.countries');

// const whereAmI = function (latitude, longitude) {
//   fetch(
//     `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=106900184450008e15777275x57950`
//   )
//     .then(result => {
//       if (!result.ok) {
//         throw new Error(`No responce from server. Status ${result.status}`);
//       }
//       return result.json();
//     })
//     .catch(err => {
//       alert(err);
//     })
//     .then(result => {
//       return fetch(`https://restcountries.com/v2/name/${result.country}`);
//     })
//     .then(result => {
//       return result.json();
//     })
//     .then(result => {
//       console.log(result[0]);
//       renderCountry(result[0]);
//     });
// };

// function renderCountry(obj) {
//   const html = `
//   <article class="country">
//   <img class="country__img" src="${obj.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${obj.name}</h3>
//     <h4 class="country__region">${obj.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       obj.population / 1_000_000
//     ).toFixed(2)}</p>
//     <p class="country__row"><span>🗣️</span>${obj.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${obj.currencies[0].code}</p>
//   </div>
// </article>`;

//   countriesDiv.insertAdjacentHTML('beforeend', html);
// }

// getPosition().then(position =>
//   whereAmI(position.coords.latitude, position.coords.longitude)
// );

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imageContainer = document.querySelector('.images');

// const createImage = function (imagePath) {
//   return new Promise(function (resolve, reject) {
//     let newImage = document.createElement('img');
//     newImage.src = imagePath;

//     newImage.addEventListener('load', function () {
//       imageContainer.append(newImage);
//       resolve(newImage);
//     });

//     newImage.addEventListener('error', function () {
//       reject(new Error('Could not load image'));
//     });
//   });
// };

// let currentImage;

// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log('Image 1 loaded');
//     currentImage = img;
//     return wait(4);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Image 2 loaded');
//     currentImage = img;
//     return wait(4);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//     currentImage.style.display = 'none';
//   });
// .catch(error => console.log(error));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector('.images');

const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    let newImage = document.createElement('img');
    newImage.src = imagePath;

    newImage.addEventListener('load', function () {
      imageContainer.append(newImage);
      resolve(newImage);
    });

    newImage.addEventListener('error', function () {
      reject(new Error('Could not load image'));
    });
  });
};

// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImage('img/img-2.jpg');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (error) {
//     console.error(error);
//   }
// };

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => {
      return await createImage(img);
    });
    console.log(imgs);

    const imgsFulfilled = await Promise.all(imgs);
    console.log(imgsFulfilled);
    imgsFulfilled.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.log(error.message);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
