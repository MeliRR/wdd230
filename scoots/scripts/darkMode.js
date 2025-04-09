async function generateTable() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      let table = "<table>";
      table += "<tr><th>Name</th><th>Email</th><th>Phone</th></tr>";
      data.forEach((item) => {
        table += `<tr><td>${item.name}</td><td>${item.email}</td><td>${item.phone}</td></tr>`;
      });
      table += "</table>";
      consttableContainer = document.getElementById("table-container");
      tabletableContainer.innerHTML = table;
    } catch (error) {
      console.error(error);
    }
  }
  
  generateTable();