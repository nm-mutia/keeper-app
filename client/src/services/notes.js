export function getNotes() {
    const url = "http://localhost:3080/api/notes/" || "https://keeper-nm.herokuapp.com";

    return fetch(url).then(data => data.json());
}

export function setNote(item) {
    const url = "http://localhost:3080/api/notes/" || "https://keeper-nm.herokuapp.com";

    return fetch(url, {
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
    const url = "http://localhost:3080/api/notes/"+id || "https://keeper-nm.herokuapp.com/"+id;

    return fetch(url, {
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