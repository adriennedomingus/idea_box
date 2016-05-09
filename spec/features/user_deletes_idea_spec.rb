require 'rails_helper'

RSpec.feature "user deletes idea" do
  scenario "user deletes idea", js: true do
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

    within("#idea-#{i1.id}") do
      find(".delete").click
    end

    expect(page).to_not have_content(i1.title)
    expect(page).to_not have_content(i1.body)
    expect(page).to have_content(i2.title)
    expect(page).to have_content(i2.body)
    expect(page).to have_content(i3.title)
    expect(page).to have_content(i3.body)
  end
end
