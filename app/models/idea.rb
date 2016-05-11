class Idea < ActiveRecord::Base
  enum quality: %w(swill plausible genius)

  def self.descending_order
    all.order(created_at: :desc)
  end

  def truncated_body
    body.truncate(80, separator: /\s/)
  end
end
