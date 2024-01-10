function sayHello(name, callback) {
    const words = '안녕하세요 내 이름은 ' + name + ' 입니다.';
    
    callback(words); // 콜백 함수 호출
}

sayHello("인파", function (name) {
    console.log(name); // 이 두번째 인자가 콜백함수임, 매개변수로 값이아닌 함수가 와서 사용됨
});