function showData() {
    try {
        let name = document.getElementById("name").value;
        let date = document.getElementById("date").value;
        let priority = document.getElementById("priority").value;
        let status = function () {
            let ButtonElement = document.getElementById("status");
            if (ButtonElement.innerHTML === "Pending") {
                ButtonElement.innerHTML = "Completed";
                ButtonElement.classList.remove("bg-yellow-600");
                ButtonElement.classList.add("bg-green-600");
            } else {
                ButtonElement.innerHTML = "Pending";
                ButtonElement.classList.remove("bg-green-600");
                ButtonElement.classList.add("bg-yellow-600");
            }
        };
        
        

        let storeData = [];
        storeData.push({ name, date, priority, status });

        let tableBody = document.querySelector("tbody");

        let newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td class="px-6 py-3">${name}</td>
            <td class="px-6 py-3">${date}</td>
            <td class="px-6 py-3">${priority}</td>
            <td class="px-6 py-3">${status()}</td>
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
    document.getElementById("priority").value = "";
}
