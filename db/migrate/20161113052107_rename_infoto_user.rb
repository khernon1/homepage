class RenameInfotoUser < ActiveRecord::Migration[5.0]
  def change
    rename_table :infos, :user
  end
end
