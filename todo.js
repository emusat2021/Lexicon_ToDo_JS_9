console.log('hej');

const addItemForm =  document.querySelector('#addForm');
const output = document.querySelector('#output');
let itemList = [];
function addItem(item){
    itemList.push(item);
};

addItemForm.addEventListener('submit', (e)=>
{
    e.preventDefault();
    //add input to the list of items
    const userInput = document.getElementById('addItem').value;
    addItem(userInput);

    // clean content output after every input added
    output.innerHTML = '';
    // display every input/item by itereating the list
    for(let i = 0; i < itemList.length; i++)
    {
        showMessage(`${i + 1} ${itemList[i]}`);
    }
    e.target.reset();
});

// output.addEventListener('doneBtn', (e)=>{

// });

// output.addEventListener('deleteBtn', (e)=>{

// });

function showMessage(message)
{
    output.innerHTML += message + "<br>";
}
