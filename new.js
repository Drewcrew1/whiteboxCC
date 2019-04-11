window.onload = () => {
    let refresh = document.querySelector('.refresh');
    refresh.addEventListener('click', () => {
        let dis = document.getElementsByClassName('itemContainer');
        for(let item of dis){
            item.style.display = "block";
        }
    });
    let priceSort = document.querySelector('.dropSel');
    priceSort.onchange = () => {
        let innerSel = document.querySelector('.innerSel').value;
        let price;
        if(innerSel === '$0.00 - $50.00'){
            price = 0.00;
        }else if(innerSel === '$50.00 - $100.00'){
            price = 50.00;
        }else if(innerSel === '$100.00 - $150.00'){
            price = 100.00;
        }else if(innerSel === '$150.00 - $200.00'){
            price = 150.00;
        } else {
            price = 200;
        }
        let counter = document.getElementsByClassName('itemContainer');
        for(let i = 0; i < counter.length; i++ ) {
            let innerCont = document.getElementsByClassName('itemContainer')[i].childNodes[3].innerText;
            let high = price + 50;
            let dis = document.getElementsByClassName('itemContainer')[i];
            dis.style.display = "none";
            if(innerCont >= price && innerCont <= high){
                let item = document.getElementsByClassName('itemContainer')[i];
                item.style.display = "block";
            }
        }
    }
    let dropSel1 = document.querySelector('.dropSel1');
    dropSel1.onchange = () => {
        let innerSel1 = document.querySelector('.innerSel1').value;
        if(innerSel1 === 'Price: low to high'){
            let outer = document.querySelector('.outerCont');
            let box = document.getElementsByClassName('itemContainer');
            let arr = [];
            for(let i = 0; i < box.length; i++ ) {
                arr.push(box[i]);
            }
            arr.sort(({dataset: {price: a}}, {dataset: {price: b}}) => a - b).forEach((item) => item.parentNode.appendChild(item));
        }
        if(innerSel1 === 'Price: high to low'){
            let outer = document.querySelector('.outerCont');
            let box = document.getElementsByClassName('itemContainer');
            let arr = [];
            for(let i = 0; i < box.length; i++ ) {
                arr.push(box[i]);
            }
            arr.sort(({dataset: {price: a}}, {dataset: {price: b}}) => b - a).forEach((item) => item.parentNode.appendChild(item));
        }
    }
    let sideFilter = document.querySelector('#sideFilter')
    sideFilter.addEventListener('click',() => {
       let upperVal = document.querySelector('#value-upper').innerText;
        let lowerVal = document.querySelector('#value-lower').innerText;
        let counter = document.getElementsByClassName('itemContainer');
        for(let i = 0; i < counter.length; i++ ) {
            let innerCont = document.getElementsByClassName('itemContainer')[i].childNodes[3].innerText;

            let dis = document.getElementsByClassName('itemContainer')[i];
            dis.style.display = "none";
            if( innerCont < upperVal && lowerVal > innerCont){
                dis.style.display = "block";
            }
        }
    });
    let searchBox = document.querySelector('#search-box');
    searchBox.addEventListener('click',() => {
        let items = document.querySelectorAll('.iname');
       let query = document.querySelector('.searchText').value;
        let fullpar = items.parentNode;
       for(let n = 1; n < items.length; n++ ){
           fullpar[n].style.display = "none";
       let str = items[n].innerText;
       if(str.includes(query)){
           fullpar.style.display = "block";
       }
       }
       document.querySelector('.searchText').value = "";
    });
}
