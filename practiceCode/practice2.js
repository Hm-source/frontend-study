// closure

function outter () {
    var title = 'coding everybody';
    function inner() {
       
        console.log(title);
    }
    inner();
}
outter();

function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
ghost.set_title('공각')
console.log(ghost);
console.log(ghost.get_title);
console.log(ghost.get_title());
console.log(matrix.get_title());

// closure에서 발생하는 실수 예시

var arr = []
for (var i=0; i<5; i++) {
    arr[i] = function(id) {
        return function() {
            return id;
        }
    }(i);
}
for (var index in arr) {
    console.log(arr[index]());
}

var arr2 = ['hello', 'no', 'yes']
for (var a in arr2) {
    console.log(a, typeof(a));
    console.log(arr2[a]);
}