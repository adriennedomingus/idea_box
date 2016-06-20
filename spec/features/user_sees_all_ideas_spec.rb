require 'rails_helper'

RSpec.feature "user sees all ideas" do
  scenario "user sees all ideas", js: true do
    i1 = Idea.create(title: "title1", body: "body1")
    i2 = Idea.create(title: "title2", body: "body2")
    i3 = Idea.create(title: "title3", body: "body3")

    visit '/'
    expect(page).to have_content(i1.title)
    expect(page).to have_content(i1.body)
    expect(page).to have_content(i2.title)
    expect(page).to have_content(i2.body)
    expect(page).to have_content(i3.title)
    expect(page).to have_content(i3.body)
    expect(page).to have_content("swill")
  end
end
