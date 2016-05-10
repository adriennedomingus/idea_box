require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  scenario "idea#create" do
    expect(Idea.count).to eq(0)

    post :create, { idea: { title: "idea title", body: "idea body" }}

    idea = JSON.parse(response.body)

    expect(Idea.count).to eq(1)
    expect(idea["title"]).to eq("idea title")
  end

  scenario "idea#delete" do
    idea = Idea.create(title: "idea title", body: "idea body")

    expect(Idea.count).to eq(1)

    delete :destroy, { id: idea.id }

    idea = JSON.parse(response.body)

    expect(Idea.count).to eq(0)
    expect(idea["title"]).to eq("idea title")
  end

  scenario "idea#update_content" do
    idea = Idea.create(title: "idea title", body: "idea body")

    patch :update, { id: idea.id, idea: { title: "updated title", body: "updated body"}}

    updated = JSON.parse(response.body)
    expect(updated["title"]).to eq("updated title")
    expect(updated["body"]).to eq("updated body")
    expect(updated["id"]).to eq(idea.id)
  end

  scenario "idea#update_quality" do
    idea = Idea.create(title: "idea title", body: "idea body")

    patch :update, { id: idea.id, idea: { quality: 1 } }

    updated = JSON.parse(response.body)
    expect(updated["id"]).to eq(idea.id)
    expect(updated["quality"]).to eq("plausible")
  end
end
