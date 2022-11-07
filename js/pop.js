const addNewArticleBTN = document.getElementById("openPop"),
    close = document.querySelector(".close-pop"),
    newArticle = document.querySelector(".newArticle");

addNewArticleBTN.addEventListener("click", () => {
    newArticle.classList.add("active");
});
close.addEventListener("click", () => {
    newArticle.classList.remove("active");
});
