let enquiries = JSON.parse(localStorage.getItem("enquiries")) || [];

function displayEnquiries() {
    let list = document.getElementById("enquiryList");
    list.innerHTML = "";

    enquiries.forEach((e, index) => {
        list.innerHTML += `
            <li>
                <div class="details">
                    <strong>${e.name}</strong><br>
                    📧 ${e.email} | 📞 ${e.phone}<br>
                    🎓 ${e.program} | <b>Status:</b> ${e.status}
                </div>
                <div class="actions">
                    <button onclick="editEnquiry(${index})">Edit</button>
                    <button onclick="deleteEnquiry(${index})">Delete</button>
                </div>
            </li>
        `;
    });

    localStorage.setItem("enquiries", JSON.stringify(enquiries));
}

function addEnquiry() {
    let enquiry = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        program: document.getElementById("program").value,
        status: document.getElementById("status").value
    };

    if (!enquiry.name || !enquiry.email || !enquiry.phone || !enquiry.program) {
        alert("Please fill all fields");
        return;
    }

    enquiries.push(enquiry);
    displayEnquiries();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("program").value = "";
    document.getElementById("status").value = "New";
}

function editEnquiry(index) {
    let e = enquiries[index];

    let name = prompt("Edit Name:", e.name);
    let email = prompt("Edit Email:", e.email);
    let phone = prompt("Edit Phone:", e.phone);
    let program = prompt("Edit Program:", e.program);
    let status = prompt("Edit Status (New / Contacted / Enrolled):", e.status);

    if (name && email && phone && program && status) {
        enquiries[index] = { name, email, phone, program, status };
        displayEnquiries();
    }
}

function deleteEnquiry(index) {
    enquiries.splice(index, 1);
    displayEnquiries();
}

displayEnquiries();
