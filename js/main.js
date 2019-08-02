let listArray = [];


$('#add-skill').on('click', function(){
    let userInput = document.getElementById('input-field').value
    listArray.push(userInput);
    let listItem=listArray.shift();
    let whatToAppend =`
    <tr>   
        <td><button id='remove-button'> X</button></td>
        <td id='listItem'>${listItem}</td>
    </tr>
    `;
    $('#the-list tbody').append(whatToAppend);
    console.log(whatToAppend);
});

$('tbody').on('click', 'button',function(){
    $(this).closest('tr').remove();
    
})