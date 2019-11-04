class ApplicationController < ActionController::API
  before_action :snake_case_params!

  def snake_case_params!
    params.deep_transform_keys!(&:underscore) if multipart? || query_params?
  end

  def multipart?
    !!(/^multipart\/form-data*/ =~ request.headers['content-type'])
  end

  def query_params?
    request.headers['QUERY_STRING'].present?
  end
end
