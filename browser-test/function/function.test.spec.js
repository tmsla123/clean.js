module('function test', {
    setup : function(){},
    teardown : function(){}
});

test("함수를 특정 콘텍스트에 바인딩 할 수 있다.", function(){
    // given
    var fooObject = new ( function Foo(){} );
    this.targetFunc = function(){
        return this;
    };

    // when
    var fnBound = clean.func.bind(this.targetFunc, fooObject);

    // then
    deepEqual( fnBound(), fooObject );
});