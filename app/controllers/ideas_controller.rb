class IdeasController < ApplicationController
  def index
    @ideas = Idea.all.order(created_at: :desc)
  end
end
