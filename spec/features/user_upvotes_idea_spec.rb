require 'rails_helper'

RSpec.feature "user upvotes idea" do
  scenario "user upvotes idea", js: true do
    i1 = Idea.create(title: "title1", body: "body1")

    visit '/'

    expect(page).to have_content("swill")

    within("#idea-#{i1.id}") do
      find(".up").click
    end

    expect(page).to have_content("plausible")

    within("#idea-#{i1.id}") do
      find(".up").click
    end

    expect(page).to have_content("genius")

    within("#idea-#{i1.id}") do
      find(".up").click
    end

    expect(page).to have_content("genius")
  end
end
