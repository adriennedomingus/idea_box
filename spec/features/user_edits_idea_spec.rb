require 'rails_helper'

RSpec.feature 'user edits an idea', js: true do
  scenario "user edits idea title" do
    Idea.create(title: "an idea title", body: "an idea body")

    visit '/'

    find(".title").click
    find(".title").native.send_keys('A')
    find(".title").native.send_keys(:return)

    expect(page).to have_content "an idea titleA"
  end

  scenario "user edits idea body" do
    Idea.create(title: "an idea title", body: "an idea body")

    visit '/'

    find(".body").click
    find(".body").native.send_keys('A')
    find(".body").native.send_keys(:return)

    expect(page).to have_content "an idea bodyA"
  end
end
