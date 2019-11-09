class ChangeRuntimeToStringInSongs < ActiveRecord::Migration[5.2]
  def change
    change_column :songs, :runtime, :string
  end
end
