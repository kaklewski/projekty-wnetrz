// INFO: this script populates the project page with information (name, page title, photos) based on the project name received as a URL parameter

// import the lists of interiors and bathrooms from an external file
import { interiors, bathrooms } from './projects-dictionary';

// get the "n" parameter value from the URL string. "n" stands for name
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const projectName = urlParams.get('id');

// h2, photo container and back-to-main-page btn
const pageHeading = document.querySelector('.project-name');
const photoWrapper = document.querySelector('.photo-wrapper');
const backButton = document.querySelector('.back-button');

// if a project ID is not provided in the URL, redirect to the home page
if (!projectName) {
	location.href = '/';
}

// read the number of photos the project has. first, check on the "interiors" list. if it returns undefined, check onn the "bathrooms" list
const numberOfPhotos =
	typeof interiors[projectName] == 'number'
		? interiors[projectName]
		: bathrooms[projectName];

// make the back button lead to the interiors section or to the bathrooms section depending on the project type
const backLink = projectName.includes('S') ? '/#wnetrza' : '/#lazienki';
backButton.setAttribute('href', backLink);

// include project name in the page title
document.title = `${projectName} | Pracownia Projektowania Wnętrz`;

// include project name in the page heading
pageHeading.textContent = projectName;

// add the photos to the container
for (let i = 1; i <= numberOfPhotos; i++) {
	const photo = document.createElement('img');
	photo.src = `../images/${projectName}/${i}.webp`;
	photo.setAttribute('loading', 'lazy');
	photoWrapper.appendChild(photo);
}
