// const div1 = document.querySelector(".card");




// function render(data) {
//   data.forEach((element) => {
//     const card = document.createElement('div')
//     const img = document.createElement("img");
//     const fname = document.createElement("p");
//     const mname = document.createElement("p");
//     const lname = document.createElement("p");
//     const gender = document.createElement("p");
//     const email = document.createElement("p");

//     img.classList = "img1";
//     fname.classList = "p1";
//     mname.classList = "p1";
//     lname.classList = "p1";
//     gender.classList = "p1";
//     email.classList = "p1";

//     img.src = data.image;
//     fname.innerText = `Firstname :${data.firstName}`;
//     mname.innerText = `Middlename :${data.maidenName}`;
//     lname.innerText = `Lastname :${data.lastName}`;
//     gender.innerText = `gender :${data.gender}`;
//     email.innerText = `email :${data.email}`;

//     card.appendChild(img)
//     card.appendChild(fname)
//     card.appendChild(mname)
//     card.appendChild(lname)
//     card.appendChild(gender)
//     card.appendChild(email)
//     div1.appendChild(card)

//   });
// }

// async function fetchData() {
//   try {
//     const url = "https://dummyjson.com/users";
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("somthing network issue is occurs");
//     }
//     const data = await response.json();
//     console.log(data);
//     data.forEach(ele =>{
// //        render(ele.users)         
//      console.log(ele.users);     
//      render(ele.users)                                                                
//     })
//   } catch {
//     console.error("Error is occured", Error);
//   }
// }
// fetchData();

const div1 = document.querySelector(".card");

fetchData();

function render(data) {
  data.forEach((element) => {
    const card = document.createElement('div');
    const img = document.createElement("img");
    const fname = document.createElement("p");
    const mname = document.createElement("p");
    const lname = document.createElement("p");
    const gender = document.createElement("p");
    const email = document.createElement("p");
    card.classList.add("box")
    img.classList.add("img1");
    fname.classList.add("p1");
    mname.classList.add("p1");
    lname.classList.add("p1");
    gender.classList.add("p1");
    email.classList.add("p1");

    img.src = element.image;
    fname.innerText = `Firstname: ${element.firstName}`;
    mname.innerText = `Middlename: ${element.maidenName}`;
    lname.innerText = `Lastname: ${element.lastName}`;
    gender.innerText = `Gender: ${element.gender}`;
    email.innerText = `Email: ${element.email}`;

    card.appendChild(img);
    card.appendChild(fname);
    card.appendChild(mname);
    card.appendChild(lname);
    card.appendChild(gender);
    card.appendChild(email);

    div1.appendChild(card);
  });
}

async function fetchData() {
  try {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something network issue occurs");
    }
    const data = await response.json();
    console.log(data);
    render(data.users);
  } catch (error) {
    console.error("Error occurred", error);
  }
}
