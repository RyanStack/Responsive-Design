class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_hash

      t.timestamps
    end

    create_table :accounts do |t|
      t.belongs_to :user
      t.integer :account_balance
      t.timestamps
    end
  end
end
