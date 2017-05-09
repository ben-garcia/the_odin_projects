class KittensController < ApplicationController

  def index
    @kittens = Kitten.all
    respond_to do |format|
      format.html
      format.json { render json: @kittens }
    end
  end

  def show
    @kitten = Kitten.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @kitten }
    end
  end

  def new
    @kitten = Kitten.new
  end

  def create
    @kitten = Kitten.new(kitten_params)
    if @kitten.save
      flash[:success] = "#{@kitten.name} created successfully!"
      redirect_to @kitten
    else
      flash.now[:error] = "Couln't create new kitten"
      render 'new'
    end
  end

  def edit
    @kitten = Kitten.find(params[:id])
  end

  def update
    @kitten = Kitten.find(params[:id])
    @kitten.update_attributes(kitten_params)
    if @kitten.save
      flash[:success] = "Kitten edited successfully!"
      redirect_to @kitten
    else
      flash.now[:error] = "Failed to update attributes"
      render 'edit'
    end
  end

  def destroy
    @kitten = Kitten.find(params[:id])
    if @kitten.destroy
      flash[:success] = "#{@kitten.name} deleted successfully!"
      redirect_to root_url
    end
  end

  private

  def kitten_params
    params.require(:kitten).permit(:name, :age, :cuteness, :softness)
  end

end
