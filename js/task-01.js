const navEl = document.querySelectorAll('.item');
console.log('Number of categories:', navEl.length);
navEl.forEach((element) => {
    const navElTitle = element.firstElementChild.textContent;
    console.log('Category:', navElTitle);
    console.log('Elements:', element.lastElementChild.children.length);
})