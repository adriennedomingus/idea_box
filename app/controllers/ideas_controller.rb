class IdeasController < ApplicationController
  def index
    @ideas = Idea.descending_order
  end
end
