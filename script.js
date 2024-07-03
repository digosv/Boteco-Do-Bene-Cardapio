function openModal(title, description, image) {
    document.getElementById("modal-title").innerHTML = title;
    document.getElementById("modal-description").innerHTML = description;
    document.getElementById("modal-image").src = image;
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}