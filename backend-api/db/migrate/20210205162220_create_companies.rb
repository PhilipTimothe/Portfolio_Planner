class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :Name
      t.string :Symbol
      t.string :Industry
      t.string :Country

      t.timestamps
    end
  end
end
