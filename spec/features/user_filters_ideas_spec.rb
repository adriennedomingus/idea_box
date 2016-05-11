require 'rails_helper'

RSpec.feature "user filters ideas" do
  scenario "filters all", js: true do
    swill = Idea.create(title: "swill idea", body: "swill idea body", quality: 0)
    plausible = Idea.create(title: "plausible idea", body: "plausible idea body", quality: 1)
    genius = Idea.create(title: "genius idea", body: "genius idea body", quality: 2)

    visit '/'

    expect(page).to have_content(swill.title)
    expect(page).to have_content(swill.body)
    expect(page).to have_content(plausible.title)
    expect(page).to have_content(plausible.body)
    expect(page).to have_content(genius.title)
    expect(page).to have_content(genius.body)

    find("#swill").click

    expect(page).to have_content(swill.title)
    expect(page).to have_content(swill.body)
    expect(page).to_not have_content(plausible.title)
    expect(page).to_not have_content(plausible.body)
    expect(page).to_not have_content(genius.title)
    expect(page).to_not have_content(genius.body)

    find("#plausible").click

    expect(page).to_not have_content(swill.title)
    expect(page).to_not have_content(swill.body)
    expect(page).to have_content(plausible.title)
    expect(page).to have_content(plausible.body)
    expect(page).to_not have_content(genius.title)
    expect(page).to_not have_content(genius.body)

    find("#genius").click

    expect(page).to_not have_content(swill.title)
    expect(page).to_not have_content(swill.body)
    expect(page).to_not have_content(plausible.title)
    expect(page).to_not have_content(plausible.body)
    expect(page).to have_content(genius.title)
    expect(page).to have_content(genius.body)

    find("#all").click

    expect(page).to have_content(swill.title)
    expect(page).to have_content(swill.body)
    expect(page).to have_content(plausible.title)
    expect(page).to have_content(plausible.body)
    expect(page).to have_content(genius.title)
    expect(page).to have_content(genius.body)
  end
end
