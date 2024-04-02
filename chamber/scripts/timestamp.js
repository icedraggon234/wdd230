const timestampElement = document.querySelector("#timestamp");
const currentTimestamp = new Date();

const timestamp = currentTimestamp.toLocaleString("en-US");

timestampElement.value = timestamp;