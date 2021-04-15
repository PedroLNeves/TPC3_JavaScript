let writeOutput = function(text)
{
    document.write(`<h1>${text}</h1>`)
}

let truncateString = function(str, num)
{
    if (str.length > num)
    {
        return str.slice(0, num) + "...";
    }
     else {
        return str;
    }
}
writeOutput(truncateString("Hoje está um lindo dia", 12));
writeOutput(truncateString("Hoje está um lindo dia", 4));
writeOutput(truncateString("Hoje está um lindo dia", 20));

//truncateString("Hoje está um lindo dia", 22) -> "Hoje está um lindo dia"
//truncateString("Hoje ésta um lindo dia", 8) -> "Hoje est...";

let titleCase = function(str)
{   
   return str.replace(/\w\S*/g, function(txt)
   {
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   } );
}

titleCase("Hoje está um lindo dia, e de facto os alunos estão muito calados!")

writeOutput(titleCase("Hoje está um lindo dia, e de facto os alunos estão muito calados!"));


//titleCase("Hoje está um lindo dia") -> "Hoje Está Um Lindo Dia"