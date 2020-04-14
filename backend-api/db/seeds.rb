# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
List.create([
    {title: "TRAVEL LIST"},
    {title: "WEEKEND SNACK"},
    {title: "TO DO ITEMS"},
    {title: "THANK GOD IS FRIDAY"},
    {title: "KIDS NEEDS"}
])

Item.create([
    {name: "Cocoa", description: "All the Nutrient",price: "25.00", brand: "Nestle"},
    {name: "Truthbrush", description: "Release Fresh Mint of Breath", price: "10.00", brand: "Denture"},
    {name: "Vegan Bread", description: "No Artificial Sugar- Low Carbs", price: "13.00",brand: "Mary Dee"},
    {name: "Olay Bar Soap", description: "Vitamin-E Extract", price: "15.00", brand: "Stay Fresh"},
    {name: "Chocolate Chip", description: "Less Fat", price: "12.00", brand: "Extra Value"},
    { name: "Tylenol",description: "All Remedy", price: "5.00", brand: "complete Health"},
    { name: "Ciroc",description: "White Gin, 80% Alcohol", price: "5.00", brand: "C-Nation"}
  ])


List.find_by_id(1).update(item_ids: [1, 2, 4, 6])
List.find_by_id(2).update(item_ids: [2, 5])
List.find_by_id(3).update(item_ids: [1, 2, 4, 6])
List.find_by_id(4).update(item_ids: [1, 5, 7])
List.find_by_id(5).update(item_ids: [2, 3, 4, 5, 6])