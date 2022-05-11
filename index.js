var counter = 1;

 function openMore(event){
    counter = counter+1;
    var parentNodeId = event.target.parentElement.id;
    openNested(parentNodeId);

    
}

function openNested(parentId){
    var s = parentId + '';
    var n = document.createElement('div');
    n.classList.add("block");
    n.id = 'b'+counter;
    var textnode = document.createElement('textarea');
    textnode.id = "val"+counter;
    var but1 = document.createElement('button');
    but1.classList.add('btn');
    but1.innerHTML = " Add Nested"
    but1.onclick = ((e) => { 
        this.openMore(e)})
    n.appendChild(textnode);
    n.appendChild(but1);   
    document.getElementById(s).appendChild(n);
    return but1;


}