module StaticPagesHelper
  def user_photos(user_id)
    FlickRaw.api_key = Figaro.env.flickr_key
    FlickRaw.shared_secret = Figaro.env.flickr_secret 
    flickr.photos.search(user_id: user_id)
  end

end
