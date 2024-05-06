const listWithId = document.querySelector('#categories');
const menuItemsByTagName = listWithId.querySelectorAll(".item");

console.log('Number of categories: ' + menuItemsByTagName.length);

menuItemsByTagName.forEach(item => {
        const categoryName = item.querySelector('h2').textContent
        console.log('Category: ' + categoryName)
        const listItems = item.querySelectorAll('ul li');
        const itemCount = listItems.length;
        console.log('Elements: ' + itemCount)
})
