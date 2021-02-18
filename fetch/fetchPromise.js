//? fetch read
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));

//? make sure
fetch(url)
  .then((res) => {
    if (res.ok) {
      console.log("SUCCESS");
    } else {
      console.log("Not Successfull");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));

//? fetch write
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
