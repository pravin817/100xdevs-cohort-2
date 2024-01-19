// alert("j")

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

const fetchData = async () => {
  const data = await fetch("https://fakerapi.it/api/v1/persons");
  const response = await data.json();
  console.log(response.data);
  container.innerHTML = JSON.stringify(response.data);
  return response.data;
};

btn.addEventListener("click", () => {
  const data = fetchData();
    // data.then((res) => {
    //     res.forEach((element) => {
    //     const div = document.createElement("div");
    //     div.classList.add("card");
    //     div.innerHTML = `
    //     <h3> First Name : ${element.firstname} </h3>
    //     <h3> Last Name : ${element.lastname} </h3>
    //     <p> Email : ${element.email}</p>
    //     <p> Birthday : ${element.birthday}</p>
    //     <p> Phone No : ${element.phone}</p>
    //     `;
    //     container.appendChild(div);
    //     });
    // });


});
