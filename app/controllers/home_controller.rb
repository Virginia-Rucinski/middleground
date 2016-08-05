class HomeController < ApplicationController
  def index
  	@googlemaps_api_key = Rails.application.secrets.googlemaps_api_key

  end  

  def places
  end
end
