require 'rails_helper'

RSpec.feature "user searches ideas", js: true do
  scenario "user searches ideas" do
    i1 = Idea.create(title: "taitle1", body: "body1")
    i2 = Idea.create(title: "title2", body: "body2")
    i3 = Idea.create(title: "title3", body: "body3")

    visit '/'

    expect(page).to have_content(i1.title)
    expect(page).to have_content(i1.body)
    expect(page).to have_content(i2.title)
    expect(page).to have_content(i2.body)
    expect(page).to have_content(i3.title)
    expect(page).to have_content(i3.body)

    find("#search").click
    find("#search").native.send_keys('t')

    expect(page).to have_content(i1.title)
    expect(page).to have_content(i1.body)
    expect(page).to have_content(i2.title)
    expect(page).to have_content(i2.body)
    expect(page).to have_content(i3.title)
    expect(page).to have_content(i3.body)

    find("#search").native.send_keys('a')

    expect(page).to have_content(i1.title)
    expect(page).to have_content(i1.body)
    expect(page).to_not have_content(i2.title)
    expect(page).to_not have_content(i2.body)
    expect(page).to_not have_content(i3.title)
    expect(page).to_not have_content(i3.body)

    find("#search").native.send_keys("\u0008");
    find("#search").native.send_keys("\u0008");

    expect(page).to have_content(i1.title)
    expect(page).to have_content(i1.body)
    expect(page).to have_content(i2.title)
    expect(page).to have_content(i2.body)
    expect(page).to have_content(i3.title)
    expect(page).to have_content(i3.body)
  end
end
