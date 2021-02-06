# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

companies =  [
    {
      "id": "1",
      "Name": "Barnes Group Inc",
      "Symbol": "B",
      "Industry": "Specialty Industrial Machinery",
      "Country": "USA"
    },
    {
      "id": "2",
      "Name": "Apple Inc",
      "Symbol": "AAPL",
      "Industry": "Consumer Electronics",
      "Country": "USA"
    }
  ]

companies.each do |company|
    Company.create(Name: company[:Name], Symbol: company[:Symbol], Industry: company[:Industry], Country: company[:Country])
end