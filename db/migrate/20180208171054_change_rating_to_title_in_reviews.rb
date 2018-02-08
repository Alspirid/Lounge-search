class ChangeRatingToTitleInReviews < ActiveRecord::Migration[5.1]
  def change
    change_column :reviews, :rating, :string
    rename_column :reviews, :rating, :title
  end
end
