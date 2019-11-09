class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :album_id, null: false
      t.integer :runtime, null: false
      t.integer :play_count, null: false, default: 0

      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :album_id
  end
end
