// Function to load categories from the API
function loadCategories() {
    // Fetch the data from the API
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json()) // Convert response to JSON
    .then((data) => displayCategories(data.categories)); // Pass the categories data to display function
}


function loadVideos () {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => displayVideos(data.videos));
}

// Function to display categories on the page
function displayCategories(categories) {
    // Get the container element where categories will be displayed
    const categoryContainer = document.getElementById("category-container");

    // Loop through each category
    for (let cat of categories) {
        // console.log(cat); // Log category data for debugging

        // Create a new div element for the category button
        const categoryDiv = document.createElement("div");

        // Set the inner HTML of the div with a button
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;

        // Append the newly created category div to the container
        categoryContainer.append(categoryDiv);
    }
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach((video) => {
        console.log(video)
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `

        <div class=" card bg-base-100 shadow-sm ">
                <figure class="relative">
                    <img class="w-full h-[200px] object-cover"
                    src="${video.thumbnail}"
                    alt="Shoes" />
                    <span class="absolute text-sm text-white bottom-2 right-2 bg-[#000000cc] p-2 rounded-sm ">${video.category_id}</span>
                </figure>
                <div class="flex gap-4 p-3">
                    <div class="profile">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                                <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div class="intro">
                        <h2 class="font-bold text-xl">${video.title}</h2>
                        <p class="text-sm text-gray-500 flex gap-1"> ${video.authors[0].profile_name} <img class="w-5 h-5" src="Logo/verify.png" alt=""> </p>
                        <p class="text-sm text-gray-500 pt-3 ">${video.others.views} views</p>
                    </div>
                </div>
        </div>

        `;
        // Append
        videoContainer.append(videoCard);
    })

};

// Call the function to load categories when the script runs
loadCategories();
loadVideos();
