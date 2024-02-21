var path = File.cwd();

var exists = File.exists(path + "/custom_init.json");
var init_json , content ;
if(exists){
    init_json = File.read(path + "/custom_init.json" , "UTF-8")
    console.log("custom_init.json content:" , init_json)
}else{
    console.log("custom_init.json not found")
}

exists = File.exists(path + "/custom_init.js");
if(exists){
    content = File.read(path + "/custom_init.js" , "UTF-8")
    console.log("custom_init.js content:" , content)
}else{
    console.log("custom_init.js not found")
}