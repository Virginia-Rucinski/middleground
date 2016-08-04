class HomeController < ApplicationController
  def index
  	@googlemaps_api_key = Rails.application.secrets.googlemaps_api_key
    @wolframalpha_api_key = Rails.application.secrets.wolframalpha_api_key
  end
end
