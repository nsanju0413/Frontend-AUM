const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
var name_str = '';
var j = 0;
var i = 0;
var names_count = 10;

for (i = 0; i < names_count; i++) {
    var name_length = Math.floor(Math.random() * 5) + 3;

    name_str = letters[Math.floor(Math.random() * letters.length)].toUpperCase();
    j = 0;

    while (j < (name_length - 1)) {
        name_str += letters[Math.floor(Math.random() * letters.length)];
        j++;
    }

    console.log(name_str);
}


// "Name of Student".split("").at(0);
// 'N'
// "Name of Student".split("").join;
// ƒ join() { [native code] }
// "Name of Student".split("").join();
// 'N,a,m,e, ,o,f, ,S,t,u,d,e,n,t'
// "Name of Student".split("").join(";");
// 'N;a;m;e; ;o;f; ;S;t;u;d;e;n;t'