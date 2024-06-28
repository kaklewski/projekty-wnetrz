// INFO: this script populates the header section with photos in the background and changes them every couple of seconds

// import the list of interior projects from an external file and make it an array
import { interiors } from './project-dictionary';
const projects = Object.keys(interiors);

// container to put the photos in
const photoContainer = document.querySelector('.header__photo-container');

// load the photos (only the newer half) and put them in the container
for (let i = 0; i < projects.length / 2; i++) {
	const newPhoto = document.createElement('img');
	newPhoto.src = `/images/${projects[i]}/1.webp`;
	newPhoto.setAttribute('loading', 'lazy');

	// make all the photos invisible (except the 1st )
	if (i > 0) {
		newPhoto.style.opacity = 0;
	}

	photoContainer.append(newPhoto);
}

// select the loaded photos
const photos = document.querySelectorAll('.header__photo-container > img');

// i = 1 because the first photo is already visible and the function below should start from the 2nd
let currentPhoto = 1;

// show the next photo and hide the previous one
function showPhoto() {
	// fade in the new photo
	photos[currentPhoto].classList.remove('fade-out');
	photos[currentPhoto].classList.add('fade-in');

	// if i = 0, set j to last photo on the list, else j = i - 1
	let nextPhoto = currentPhoto > 0 ? currentPhoto - 1 : photos.length - 1;

	// fade out the previous photo
	photos[nextPhoto].classList.remove('fade-in');
	photos[nextPhoto].classList.add('fade-out');

	// increase i or set to 0 if maximum is reached
	currentPhoto < photos.length - 1 ? currentPhoto++ : (currentPhoto = 0);
}

// change the photo at intervals
setInterval(showPhoto, 5000);
