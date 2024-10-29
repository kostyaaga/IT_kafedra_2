function createForm(json) {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = "";

    const form = document.createElement("form");
    form.classList.add("form-group");

    json.fields.forEach(field => {
        const formGroup = document.createElement("div");
        formGroup.classList.add("form-group");

        const input = document.createElement("input");
        input.type = field.input.type;
        input.required = field.input.required || false;
        input.placeholder = field.input.placeholder || "";
        input.classList.add("form-control");

        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });

    json.buttons.forEach(button => {
        const btn = document.createElement("button");
        btn.type = "submit";
        btn.classList.add("btn", "btn-primary");
        btn.innerText = button.text;
        form.appendChild(btn);
    });

    formContainer.appendChild(form);
}

function resetForm() {
    document.getElementById("form-container").innerHTML = "";
}

createForm(JSON);