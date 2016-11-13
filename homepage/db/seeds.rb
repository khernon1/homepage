   # Artist.create(name: Faker::Name.name, abstract: Faker::ChuckNorris.fact,
   #  bio: Faker::Hacker.say_something_smart, password: "flatiron",
   #  username: Faker::Internet.email, artist_type: "Photographer",
   #  img_link: Faker::Avatar.image("image#{img}", "200x200"),
   #  city: CITIES[i - 1], state: STATES[i - 1])

User.destroy_all
Tagline.destroy_all

n = 0
4.times do 
  User.create(name: Faker::Name.name, 
              quote: Faker::ChuckNorris.fact,
              picture: Faker::Avatar.image("image#{n}", "200x200"),
              title: Faker::Company.buzzword
              )
  n += 1
end

50.times do
  Tagline.create(saying: Faker::ChuckNorris.fact)
end