require 'rails_helper'

RSpec.feature "user downvotes idea" do
  scenario "user downvotes idea", js: true do
    i1 = Idea.create(title: "title1", body: "body1", quality: 2)

    visit '/'

    expect(page).to have_content("genius")

    within("#idea-#{i1.id}") do
      find(".down").click
    end

    expect(page).to have_content("plausible")

    within("#idea-#{i1.id}") do
      find(".down").click
    end

    expect(page).to have_content("swill")

    within("#idea-#{i1.id}") do
      find(".down").click
    end

    expect(page).to have_content("swill")
  end
end
