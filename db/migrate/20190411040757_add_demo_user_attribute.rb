class AddDemoUserAttribute < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :demo_user, :boolean
  end
end
