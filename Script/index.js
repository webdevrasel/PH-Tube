// Function to load categories from the API
function loadCategories() {
    // Fetch the data from the API
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json()) // Convert response to JSON
    .then((data) => displayCategories(data.categories)); // Pass the categories data to display function
}

// Function to display categories on the page
function displayCategories(categories) {
    // Get the container element where categories will be displayed
    const categoryContainer = document.getElementById("category-container");

    // Loop through each category
    for (let cat of categories) {
        console.log(cat); // Log category data for debugging

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

// Call the function to load categories when the script runs
loadCategories();
