class Api::V1::IdeasController < Api::V1::BaseController
  respond_to :json

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  def update
    render json: Idea.update(params[:id], quality: idea_params[:quality].to_i)
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
