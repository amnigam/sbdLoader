const addAct = document.querySelector('.add-activity'); 
const delAct = document.querySelector('.del-activity'); 
console.log(addAct); 
console.log(delAct); 

addAct.addEventListener('click', () => {
    const actList = document.querySelectorAll('.activity input'); 
    // console.log(actList); 
    const len = actList.length;     // Determine the length of current list. 
    const inputEl = document.createElement('input');    // Create the new input element

    // Set Attributes just like done for other input elements in the form. 
    inputEl.setAttribute('id','act'+(len+1)); 
    inputEl.setAttribute('name','act'+(len+1)); 
    inputEl.setAttribute('type','text'); 
    inputEl.setAttribute('required', 'required'); 
    console.log(inputEl); 

    // Insert the new element just after the last activity input element. 
    actList[len-1].insertAdjacentElement('afterend', inputEl); 
    console.log(actList);   // Note, this will not show the reflected lenght. Nodelists are static. 
})

delAct.addEventListener('click', () => {
    const actList = document.querySelectorAll('.activity input'); 
    const len = actList.length; 
    if (len === 1) {
        alert("At least one activity has to be provided");  // You can't delete all activities. At least one has to be present. 
    } else {
        actList[len-1].remove();        // Use remove method on the last element to remove it from DOM. 
        console.log(actList); 
    }
})
