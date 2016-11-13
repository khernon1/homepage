class RenameUsertoUsers < ActiveRecord::Migration[5.0]
  def change
    rename_table :user, :users
  end
end
