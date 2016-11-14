class CreateTaglines < ActiveRecord::Migration[5.0]
  def change
    create_table :taglines do |t|
      t.string :saying

      t.timestamps
    end
  end
end
