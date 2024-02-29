 document.getElementById('test-div').innerHTML = 'It works!';



document.getElementById('options-list').addEventListener('click', function(e){
    e.preventDefault();

    //Get link's id
    if(e.target.tagName === 'A'){
        var myChoice = (e.target.id)
    };


    console.log(myChoice);
});