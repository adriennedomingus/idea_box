class Api::V1::IdeasController < Api::V1::BaseController
  respond_to :json

  def index
    render json: Idea.all, location: nil
  end

  def create
    render json: Idea.create(idea_params), location: nil
  end

  def destroy
    render json: Idea.destroy(params[:id])
  end

  def update
    if idea_params[:quality]
      render json: Idea.update(params[:id], quality: idea_params[:quality].to_i)
    else
      render json: Idea.update(params[:id], idea_params)
    end
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
