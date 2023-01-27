const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      json.forEach((items) => {
        const myTable = document.querySelector("#td-data");
        myTable.insertAdjacentHTML(
          "beforeend",
          `
                            <tr>
                                <td>${items["id"]}</td>    
                                <td>${items["name"]}</td>    
                                <td>${items["username"]}</td>    
                                <td>${items["email"]}</td>    
                                <td>${items["phone"]}</td>    
                                   
                                      
    
                            </tr>
                        `
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });
