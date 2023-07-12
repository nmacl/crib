import jsons from './firebase.json';

const l = jsons.properties.property;


export default function Details() {
    return (
        <div>
            <h1>Hi there</h1>
        </div>
    );
}

function jsonStuff() {
    const l = jsons.properties.property;

    console.log(jsons.properties.property);
    const search = findKeyWithValue(l, "1611 NE 5th Pl");
    const index = search.substring(0, 1);
    console.log(index);
    
    console.log(address);

    let link = l[0].primary_photo.href;
    animateCSS('input, label, select, button', 'fadeOutRight'); 
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
