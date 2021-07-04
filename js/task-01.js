const categoriesList = document.querySelector("#categories");
const listElement = [...categoriesList.children];

const countCategories = (categoriesList) =>
  console.log(`В списке ${categoriesList.children.length} категории`);
countCategories(categoriesList);

const categoryDetails = (categoriesList) => {
  categoriesList.forEach((category) => {
    let categoryTitle = category.firstElementChild;
    console.log(
      `Категория: '${categoryTitle.textContent}'; Количество элементов: ${categoryTitle.nextElementSibling.childElementCount}`
    );
  });
};
categoryDetails(listElement);



