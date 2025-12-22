function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}
fetchData();



async function handleResponseStatus() {
    try {
        const serverResponse = await fetch("https://jsonplaceholder.typicode.com/posts/999999");
        /*
        if (serverResponse.status === 404) {
            console.log("redirect / not found");
        }
        else if (
            serverResponse.status === 401) {
            console.log("Unauthorized user!");
        }
            */

        if (!serverResponse.ok) {
            throw new Error(`HTTP error! status:${serverResponse.status}`)
        }
        const data = await serverResponse.json();
        return data;
    } catch (error) {
        console.log("error--------", error);
    }
}
handleResponseStatus();

localStorage.setItem("username","Kunga")
console.log(localStorage.getItem("username"))


localStorage.setItem
localStorage.getItem
localStorage.clear
localStorage.removeItem("username")


sessionStorage.removeItem
sessionStorage.clear
sessionStorage.getItem

