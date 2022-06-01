const apiUrl = "https://randomuser.me/api/?results=20";
let userArgs = [];

const fetchUsers = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      userArgs = data.results;
      displayUsers();
    })
    .catch((err) => console.log(err));
};

const displayUsers = (args = userArgs) => {
  let str = "";
  args.map((user, i) => {
    str += `
      <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <img src="${user.picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
      </div> `;
  });
  document.getElementById("user-list").innerHTML = str;
};

fetchUsers();
