//= status

describe('status', function(){
  it('returns correct up status', function(){
    expect(newUpStatus("swill")).to.equal(1);
    expect(newUpStatus("plausible")).to.equal(2);
    expect(newUpStatus("genius")).to.equal(2);
  })

  it('returns correct down status', function(){
    expect(newDownStatus("swill")).to.equal(0);
    expect(newDownStatus("plausible")).to.equal(0);
    expect(newDownStatus("genius")).to.equal(1);
  })
})
