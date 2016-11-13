class TaglinesController < ApplicationController

  def index
    render json: Tagline.all
  end
end
