describe('the isFromBellvelle test' , function (){
    it('should be true and false' , function (){
        assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);
    });

});