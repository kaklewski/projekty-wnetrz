// INFO: this script populates the portfolio section with project cards

// import the lists of interiors and bathrooms from an external file
import { interiors, bathrooms } from './project-dictionary';

// containers to put the items in
const interiorsContainer = document.querySelector('.interiors > .item-wrapper');
const bathroomsContainer = document.querySelector('.bathrooms > .item-wrapper');

const portfolioItemTemplate = document.querySelector(
	'.portfolio-item-template'
);

// for each portfolio item create an item card based on a template and add it to the container
function populatePortfolioItems(projects, itemsContainer) {
	for (const projectName in projects) {
		const portfolioItem = portfolioItemTemplate.content.cloneNode(true);

		portfolioItem.querySelector('a').href = `/projekt/?id=${projectName}`;
		portfolioItem.querySelector('.portfolio-item__badge').textContent = `Projekt ${projectName}`;
		portfolioItem.querySelector('img').src = `images/${projectName}/1.webp`;

		itemsContainer.appendChild(portfolioItem);
	}
}

populatePortfolioItems(interiors, interiorsContainer);
populatePortfolioItems(bathrooms, bathroomsContainer);
