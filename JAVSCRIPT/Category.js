
export default class category {
    static getCategory() {
        let getCategoryHmtl = document.getElementById("numCategory");
        fetch("https://opentdb.com/api_category.php")
          .then((response) => response.json())
          .then((data) => {
              data.trivia_categories.forEach((element) => {
                  getCategoryHmtl.innerHTML += `<option value="${element.id}">${element.name}</option>`
              });
          });
      }

}