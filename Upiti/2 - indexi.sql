//users_recommended_views----------------------------------

db.getCollection('users_recommended_views').createIndex(
  {
      "username": 1
  },
  {
      name: "idx_username",
      unique: true
  }
)

//users_search_views----------------------------------

db.getCollection('users_search_views').createIndex(
  {
      "username": 1
  },
  {
      name: "idx_username",
      unique: true
  }
)

db.getCollection('users_search_views').createIndex(
  {
      "location": 1
  },
  {
      name: "idx_location",
      unique: false
  }
)

db.getCollection('users_search_views').createIndex(
  {
      "fullName": 1
  },
  {
      collation:
      {
          locale: 'en_US',
          strength: 2,
          
      },
      name: "idx_fullName_caseIns",
      unique: false
  }
)

//users_visit_profile_views----------------------------------
db.getCollection('users_visit_profile_views').createIndex(
  {
      "username": 1
  },
  {
      name: "idx_username",
      unique: true
  }
)

//users_algorithm_views----------------------------------
db.getCollection('users_algorithm_views').createIndex(
  {
      "username": 1
  },
  {
      name: "idx_username",
      unique: true
  }
)

db.getCollection('users_algorithm_views').createIndex(
  {
      "location": 1
  },
  {
      name: "idx_location",
      unique: false
  }
)

//users_credentials_views----------------------------------
db.getCollection('users_credentials_views').createIndex(
  {
      "username": 1
  },
  {
      name: "idx_username",
      unique: true
  }
)

//users_relationships_views----------------------------------
db.getCollection('users_relationships_views').createIndex(
  {
      "username": 1
  },
  {
      name: "idx_username",
      unique: true
  }
)