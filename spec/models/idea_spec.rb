require 'rails_helper'

RSpec.describe Idea, type: :model do
  it "has a default of swill" do
    idea = Idea.create(title: "title", body: "idea")
    expect(idea.swill?).to be true
  end
end
