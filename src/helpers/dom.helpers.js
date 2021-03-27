export const getEl = (selector) => {
    const foundNode = document.querySelector(selector);
    if (!foundNode) {
        console.error(`fn getEl: not found node by '${selector} selector'`);
        return null;
    }
    return foundNode;
};
