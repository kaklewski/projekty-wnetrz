// INFO: this script populates the portfolio section with project cards

// import the lists of interiors and bathrooms from an external file
import { interiors, bathrooms } from './projects';

// containers to put the items in
const interiorsContainer = document.querySelector('.interiors > .item-wrapper');
const bathroomsContainer = document.querySelector('.bathrooms > .item-wrapper');

// for each portfolio item create an item card and add it to the container
function populatePortfolioItems(projects, itemsContainer) {
	for (const project in projects) {
		const portfolioItem = document.createElement('div');
		portfolioItem.classList.add('portfolio-item');

		let portfolioItemContent = `
					<a href="/projekt/?n=${project}"></a>
					<div class="portfolio-item__shadow">
						<span class="portfolio-item__shadow__text">
							<span>Zobacz cały projekt</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-chevrons-right"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none" />
								<path d="M7 7l5 5l-5 5" />
								<path d="M13 7l5 5l-5 5" />
							</svg>
						</span>
					</div>
					<img loading="lazy" src="images/${project}/1.webp" alt="" />
				`;

		portfolioItem.innerHTML = portfolioItemContent;
		itemsContainer.appendChild(portfolioItem);
	}
}

populatePortfolioItems(interiors, interiorsContainer);
populatePortfolioItems(bathrooms, bathroomsContainer);
