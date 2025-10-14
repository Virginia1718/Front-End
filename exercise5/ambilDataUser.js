const ambilDataUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data) => {
      data.forEach(({username,email }) => {
        console.log(`Username: ${username},Email: ${email}`);
      });
    })
    .catch((error)=>console.log("Error:",error));
};

export default ambilDataUser;