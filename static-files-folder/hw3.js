var n = prompt("Please enter a number ");
document.write("<table><caption>Factorial Numbers</caption><tr><th>Numbers</th><th>Corresponding Factorial Numbers</th></tr>");

let result = 1

for (let i = 0; i <= n; i++) {

    if(i == 0)
        document.write("<tr><th>" + i + "</th><th>" + i + "</th></tr>");
    else if(i == 1)
        document.write("<tr><th>" + i + "</th><th>" + i + "</th></tr>");
    else{
        result *= i
        document.write("<tr><th>" + i + "</th><th>" + result + "</th></tr>");
    }

}

document.write("</table>");