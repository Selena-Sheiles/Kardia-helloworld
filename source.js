async function addRandomString() {
    let string = await getRandomString();
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(string));
    document.body.appendChild(p);
}

async function getRandomString() {
    let url = "https://smpjqjkhdudeo4thaxmgw3kz5i0aqxva.lambda-url.us-west-2.on.aws/";
    let response = await fetch(url);
    let string = await response.text();
    return string;
}