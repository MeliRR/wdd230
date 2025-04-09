// Fetch JSON data
fetch("vehicles.json")
  .then((response) => response.json())
  .then((data) => {
    // Reference to the table body
    const tableBody = document.querySelector("#dataTable tbody");

    // Loop through the JSON data and populate the table
    data.forEach((entry) => {
      // Create a new row
      const row = document.createElement("tr");

      // Create cells and populate them with data
      Object.values(entry).forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));