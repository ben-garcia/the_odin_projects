module ArticlesHelper

  # This method allows params(title and id) of the articles to be modified.
  def article_params
    params.require(:article).permit(:title, :body, :tag_list, :image)
  end

end
