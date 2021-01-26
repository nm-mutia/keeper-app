export function getNotes() {
    return fetch("http://localhost:3080/api/notes").then(data => data.json());
}

export function setNote(item) {
    return fetch("http://localhost:3080/api/notes", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
    // .then(data => data.json())
    .then(data => data.text())
    .then(text => console.log(text));
}

export function delNote(id) {
    return fetch("http://localhost:3080/api/notes/"+id, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    // .then(data => data.json())
    .then(data => data.text())
    .then(text => console.log(text));
}