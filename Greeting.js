function greet(name){
    return `Hello, ${name} how are you doing today?`

    return "Hello, " + name + " how are you doing today?";

    return "Hello, <name> how are you doing today?".replace("<name>", name);

    const greet=String.prototype.replace.bind('Hello, <name> how are you doing today?','<name>')
}