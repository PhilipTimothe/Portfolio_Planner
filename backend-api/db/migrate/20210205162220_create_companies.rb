class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :symbol
      t.string :industry
      t.string :region
      t.string :user_id

      t.timestamps
    end
  end
end
