console.log('hej');

const addItemForm =  document.querySelector('#addForm');
const output = document.querySelector('#output');
let itemList = [];

function addItem(item)
{
    itemList.push({text: item, done: false});
    displayItems();
};

// capture user input/item
addItemForm.addEventListener('submit', (e)=>
{
    e.preventDefault();
    //add user input as a item to the list items
    const userInput = document.getElementById('userInput').value;
    addItem(userInput);
    e.target.reset();
});

// logic to create and display the list of items in document
function displayItems()
{
    output.innerHTML = '';

    for(let i = 0; i < itemList.length; i++)
    {
        //ADD CONTAINER
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('container');
        //ADD ITEM
        const itemText = document.createElement('span');
        itemText.textContent = `${i+1}. ${itemList[i].text}`;
        if(itemList[i].done)
        {
            itemText.classList.add('change');
        }
        itemContainer.appendChild(itemText);
        //DONE BTN
        const btnDone = document.createElement('button');
        btnDone.innerText = 'Done';
        btnDone.classList.add('btn');
        if(itemList[i].done)
        {
            btnDone.classList.remove('btn-success');
        }
        else
        {
            btnDone.classList.add('btn-success');
        }
        btnDone.addEventListener('click', () => toggleDone(i));
        itemContainer.appendChild(btnDone);
        //UNDONE BTN
        const btnUndone = document.createElement('button');
        btnUndone.innerText = 'Undone';
        btnUndone.classList.add('btn', 'btn-warning');
        btnUndone.addEventListener('click', () => toggleUndone(i));
        itemContainer.appendChild(btnUndone);
        //DELETE BTN
        const btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.addEventListener('click', () => deleteItem(i));
        itemContainer.appendChild(btnDelete);

        output.appendChild(itemContainer);
    }

};

function toggleDone(i)
{
    itemList[i].done = true;
    displayItems();
}

function toggleUndone(i)
{
    itemList[i].done = false;
    displayItems();
}

function deleteItem(i)
{
    itemList.splice(i, 1);
    displayItems();
}
