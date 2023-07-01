 let languageCode=prompt("Please enter es , de , en, and fr");

if(languageCode === 'es'){
    console.log("Hello World translated in Spanish is: Hola Mundo")//spanish
}
else if(languageCode === 'de'){
    console.log("Hello World translated in German is: Hallo Welt")//German
}
else if(languageCode === 'en'){
   console.log("Hello World translated in English is: Hello world")//English
}
else if	(languageCode ==='fr'){
    console.log("Hello World translated in French is: Bonjour le monde;")//French
}
else{
    console.log("Hello World by default is in English : Hello World")
}