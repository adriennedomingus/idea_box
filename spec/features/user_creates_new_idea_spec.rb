require 'rails_helper'

RSpec.feature "user creates a new idea" do
  scenario "user fills in form and clicks on save", js: true do
    visit root_path

    fill_in :title, with: "new idea title"
    fill_in :body, with: "new idea body"
    find("#save").click

    expect(page).to have_content("new idea title")
    expect(page).to have_content("new idea body")
    expect(page).to have_content("swill")
  end
end
