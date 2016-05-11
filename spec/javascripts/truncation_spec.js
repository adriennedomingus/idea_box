//= ideas

describe('truncation', function(){
  it('truncates string to 100 characters', function(){
    var data = 'This is going to be truncated to 100 characters at some point but not on a space and have an elipses'
    var result = 'This is going to be truncated to 100 characters at some point but not on a space...'
    expect(truncateBody(data)).to.equal(result);
  })
})
