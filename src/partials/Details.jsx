import jsons from './firebase.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faRuler, faCalendar, faDollarSign, faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';

const iconMappings = {
  baths: faBath,
  baths_full: faBath,
  beds: faBed,
  lot_sqft: faRuler,
  sold_date: faCalendar,
  sold_price: faDollarSign,
  sqft: faRuler,
  stories: faBuilding,
  type: faHome,
  year_built: faCalendar,
};

const renderProperty = (property, value) => {

    const icon = iconMappings[property];

    if (!icon) {
      return null; // handle unknown properties
    }

    return (
      <li key={property} className="text-waves my-8 w-1/2">
        <FontAwesomeIcon icon={icon} /> {value}
      </li>
    );
  };

const l = jsons.properties.property;


export default function Details() {
    animateCSS('input, label, select, button', 'fadeOutRight'); 
    return (
        <div>
            <h2 className="text-3xl my-8">Property Details</h2>
            <ul className='border-2 border-grainy justify-center flex-wrap flex'>
            {Object.entries(l[1].description).map(([property, value]) =>
                renderProperty(property, value)
            )}
            <img src={l[1].primary_photo.href} className="p-16 w-full h-96 rounded-2xl shadow-lg"></img>
            </ul>
        </div>
    
    );
}

const animateCSS = (element, animation, prefix = 'animate__') =>
// We create a Promise and return it
  new Promise((resolve, reject) => {
  const animationName = `${prefix}${animation}`;
  const elements = document.querySelectorAll(element);

  elements.forEach(node => {
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      node.style.display = 'none';
      resolve('Animation ended');
      //At resolve, do backend stuff to check if property exists from API. Then pass to Table property.
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

});

function jsonStuff() {
    console.log(jsons.properties.property);
    const search = findKeyWithValue(l, "1611 NE 5th Pl");
    const index = search.substring(0, 1);
    console.log(index);
    
    console.log(address);

    let link = l[0].primary_photo.href;
        // Create picture using tailwind that presents the property
    const picture = document.getElementById("picture"); 
    picture.src = link;
    picture.classList.add("w-full", "h-96", "rounded-2xl", "shadow-lg");
    
    console.log(link);
    console.log(picture);

    // H1 that says "Property Details" in the middle of the page using tailwind 
    const details = document.getElementById("details");
    details.classList.add("mt-8", "text-3xl", "text-waves", "text-center", "rounded-lg");
    details.innerHTML = "Property Details";

    // Create react component that displays the property description
    const description = document.getElementById("description");
    description.classList.add("mt-8", "text-3xl", "text-grainy", "text-center", "rounded-lg", "shadow-lg", "border-2", "border-red-500", "border-opacity-50", "flex", "flex-wrap");
    let arr = l[0].description;
    for (var key of Object.keys(arr)) {
      console.log(key + " -> " + arr[key]);

      const icon = iconMapping[key] || faQuestion; // Replace `faQuestion` with the appropriate default icon from Font Awesome
      const iconElement = `<i class="fa-solid fa-flag mr-2"></i>`;

      description.innerHTML += `<div class="my-4 w-1/2">
      <i class="fa-sharp fa-regular fa-money-bill"></i>
      <span class="font-bold">${key}:</span> ${arr[key]}
      </div>`;
    }
  }
