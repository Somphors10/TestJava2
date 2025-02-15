// button pending
function clickButton(button) {
  console.log(button.innerHTML);

  if (button.innerHTML === "Pending") {
    button.innerHTML = "Completed";
    button.setAttribute(
      "class",
      "bg-green-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg"
    );
  } else if (button.innerHTML === "Completed") {
    button.innerHTML = "Pending";
    button.setAttribute(
      "class",
      "bg-yellow-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg"
    );
  }
}

// show data in table
function showData() {
  try {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let priority = document.getElementById("priority").value;
    let status = "Pending";

    // Validate input fields
    if (!name || !date || !priority) {
      alert("Please fill out all fields before adding a task.");
      return;
    }

    // Validate due date (prevent past dates)
    let today = new Date().toISOString().split("T")[0];
    if (date < today) {
      alert("Due date cannot be in the past. Please select again.");
      return;
    }

    // Priority
    let priorityColor;
    switch (priority) {
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
        priorityColor = "text-green-500 font-semibold";
    }

    let tableBody = document.querySelector("tbody");

    let newRow = document.createElement("tr");

    newRow.innerHTML = `
            <td class="px-6 py-3">${name}</td>
            <td class="px-6 py-3">${date}</td>
            <td class="px-6 py-3">
                <span class="${priorityColor}">${priority}</span>
            </td>
            <td class="px-6 py-3 text-center">
                <button onClick="clickButton(this)" class="bg-yellow-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg">${status}</button>
            </td>
        `;
    tableBody.appendChild(newRow);
  } catch (e) {
    console.error(e);
    alert(
      "Error: Invalid input. Please make sure all fields are filled out correctly."
    );
  }

  // Clear input fields after submission
  document.getElementById("name").value = "";
  document.getElementById("date").value = "";
  document.getElementById("priority").value = "low";
}
