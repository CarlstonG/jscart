var addItemId = 0;
function addToCart(item){
    addItemId += 1;
    var selectedItem = document.createElement('div')
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId)
    
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    
    var title = document.createElement('div');
    title.innerHTML = item.children[1].innerText;
    
    var label = document.createElement('div');
    label.innerHTML = item.children[2].children[0].innerText;

    var select = document.createElement('span');select.innerHTML = item.children[2].children[1].value;

    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick', 'del('+addItemId+')');

    var cartItems = document.getElementById('title');
    

    label.append(select);
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}


//delete 

function del(item){
    document.getElementById(item).remove();
}