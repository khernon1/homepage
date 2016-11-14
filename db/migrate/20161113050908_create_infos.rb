class CreateInfos < ActiveRecord::Migration[5.0]
  def change
    create_table :infos do |t|
      t.string :picture
      t.string :name
      t.string :quote

      t.timestamps
    end
  end
end
