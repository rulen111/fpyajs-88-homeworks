export function orderByProps(obj, order=[]) {
    let result = [];
    for (const prop of order) {
        result.push({key: prop, value: obj[prop]})
    }

    let sortable = [];
    for (const prop in obj) {
        if (order.indexOf(prop) === -1) {
            sortable.push({key: prop, value: obj[prop]});
        }
    }
    sortable.sort((a, b) => a.key.localeCompare(b.key));

    return result.concat(sortable);
}

export function getSpecialAttacks({ special: specials = [] }) {
    for (let el of specials) {
        if (el.description === undefined) {
            el.description = 'Описание недоступно';
        }
    }

    return specials;
}
