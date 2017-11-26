function poziv()
{
    var str = document.getElementById("input").value;
    var result = provjera(str);
    alert(str + result);
}
function filtriraj(input)
{
    var output = "";
    
    for(i = 0; i < input.length; i++)
    {
        if(input[i] >='a' && input[i] <='z') //interesantna su nam samo slova, ostalo odbacujemo
            output += input[i];
    }
    return output;
}

function provjera(str)
{
    //var temp = str.toLowerCase().replace(/[^A-Za-z]/g,"");  -- uncomment ako ne zelimo koristit funkciju filtriraj vec regex
    var temp = str.toLowerCase();
    temp = filtriraj(temp);

    var sredina  = Math.round(temp.length/2); 

    for(i = 0; i < sredina; i++) 
        if(temp[i] != temp[temp.length - 1 - i])
           return " nije palindrom"
    return " jeste palindrom"
}