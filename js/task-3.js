function getElementWidth(content, padding, border) {
    const takeContent = Number.parseFloat(content);
    const takePadding = Number.parseFloat(padding);
    const takeBorder = Number.parseFloat(border);
    return takeContent + takePadding * 2  + takeBorder * 2;;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200