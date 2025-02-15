// Function to toggle status
function clickButton(button) {
  if (button.innerHTML === "Pending") {
    button.innerHTML = "Completed";
    button.setAttribute("class", "bg-green-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg");
  } else {
    button.innerHTML = "Pending";
    button.setAttribute("class", "bg-yellow-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg");
  }
}

// Store Array
let tasks = [];
// Function to get values from user and store them in an array
function showData() {
  let name = document.getElementById("name").value.trim();
  let date = document.getElementById("date").value.trim();
  let priority = document.getElementById("priority").value.trim().toLowerCase();
  let status = "Pending";

  // Validate input fields
  if (!name || !date || !priority) {
    alert("Please fill out all fields before adding a task.");
    return;
  }

  // Validate priority
  if (!["low", "medium", "high"].includes(priority)) {
    alert("Invalid priority. Please enter 'low', 'medium', or 'high'.");
    return;
  }

  // Store task in array
  let task = { name, date, priority, status };
  tasks.push(task);
  // Refresh the table
  renderTable();

  // Clear Input in form
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.getElementById("priority").value = "low";
}

// Function to render tasks
function renderTable() {
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML = ""; 

  for (let task of tasks) {
    let newRow = document.createElement("tr");

    let priorityColor;
    switch (task.priority) {
      case "high":
        priorityColor = "text-green-500 font-semibold";
        break;
      case "medium":
        priorityColor = "text-yellow-500 font-semibold";
        break;
      case "low":
        priorityColor = "text-red-500 font-semibold";
        break;
      default:
        priorityColor = "text-gray-500 font-semibold";
    }

    newRow.innerHTML = `
      <td class="px-6 py-3">${task.name}</td>
      <td class="px-6 py-3">${task.date}</td>
      <td class="px-6 py-3"><span class="${priorityColor}">${task.priority}</span></td>
      <td class="px-6 py-3 text-center">
        <button onClick="clickButton(this)" class="bg-yellow-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg">${task.status}</button>
      </td>
    `;

    tableBody.appendChild(newRow);
  }
}


