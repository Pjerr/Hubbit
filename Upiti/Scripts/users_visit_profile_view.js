db.getCollection('users_visit_profile_view').find({})

//DML:
db.getCollection('users_visit_profile_view').insertMany(
    [
        { 
            username: "mara.djo", 
            fullName: "Marija Djokic",
            dob: "19.05.1997.",
            aboutMe: "Zdravo ja sam Marija",
            profilePic: "pictures/profile-pictures/androgynous/1.jfif",
            gender: "o",
            listGenders: ["m", "o"],
            listInterests: ["MUSIC", "MOVIES", "TV SHOWS"],
            listTurnOns: ["GYM", "ART"],
            listTurnOffs: ["GAMES", "ANIME"],
            longDistance: false,
            listPrefLoc: ["BEOGRAD"],
            location: "BEOGRAD"
        },

        { 
            username: "kola.ni", 
            fullName: "Nikola Petkovic",
            dob: "06.10.1998.",
            aboutMe: "Zdravo ja sam Nikola",
            profilePic: "pictures/profile-pictures/androgynous/2.jfif",
            gender: "o",
            listGenders: ["f", "o"],
            listInterests: ["GYM", "ART", "FASHION"],
            listTurnOns: ["MUSIC", "MOVIES"],
            listTurnOffs: ["GAMES", "ANIME"],
            longDistance: true,
            listPrefLoc: ["NOVI SAD", "BEOGRAD", "NIS"],
            location: "NOVI SAD"
        },

        { 
            username: "aleks.mar", 
            fullName: "Aleksandra Markovic",
            dob: "25.03.1998.",
            aboutMe: "Zdravo ja sam Aleksandra",
            profilePic: "pictures/profile-pictures/androgynous/3.jfif",
            gender: "o",
            listGenders: ["m", "f", "o"],
            listInterests: ["GAMES", "ANIME", "FASHION"],
            listTurnOns: ["GAMES", "ANIME"],
            listTurnOffs: ["MUSIC", "MOVIES"],
            longDistance: true,
            listPrefLoc: ["BEOGRAD", "NOVI SAD", "NIS"],
            location: "BEOGRAD"            
        },

        { 
            username: "dan.min",
            fullName: "Danilo Minic", 
            dob: "03.07.1999.",
            aboutMe: "Zdravo ja sam Danilo",
            profilePic: "pictures/profile-pictures/androgynous/4.jfif",
            gender: "o",
            listGenders: ["m"],
            listInterests: ["STREAMING", "PETS", "GAMES"],
            listTurnOns: ["PHOTOGRAPHY", "ART"],
            listTurnOffs: ["SOCIAL MEDIA", "ANIME"],
            longDistance: false,
            listPrefLoc: ["NIS"],
            location: "NIS"
        },

        { 
            username: "stef.ana", 
            fullName: "Stefana Dobrosavljevic",
            dob: "22.04.1998.",
            aboutMe: "Zdravo ja sam Stefana",
            profilePic: "pictures/profile-pictures/androgynous/5.jfif",
            gender: "o",
            listGenders: ["f"],
            listInterests: ["PHOTOGRAPHY", "ART", "PETS"],
            listTurnOns: ["STREAMING", "GAMES"],
            listTurnOffs: ["GYM", "SOCIAL MEDIA"],
            longDistance: true,
            listPrefLoc: ["NOVI SAD", "NIS"],
            location: "NOVI SAD"
        },

        { 
            username: "miro.din", 
            fullName: "Miroslav Dinic",
            dob: "02.11.1997.",
            aboutMe: "Zdravo ja sam Miroslav",
            profilePic: "pictures/profile-pictures/androgynous/6.jfif",
            gender: "o",
            listGenders: ["m", "o"],
            listInterests: ["GAMES", "SPORTS", "RELIGION"],
            listTurnOns: ["ART", "SOCIAL MEDIA"],
            listTurnOffs: ["BOOKS", "PHOTOGRAPHY"],
            longDistance: true,
            listPrefLoc: ["BEOGRAD", "KRALJEVO", "KRAGUJEVAC", "LESKOVAC"],
            location: "BEOGRAD"
        },

        { 
            username: "tam.stan", 
            fullName: "Tamara Stankovic",
            dob: "04.12.1995.",
            aboutMe: "Zdravo ja sam Tamara",
            profilePic: "pictures/profile-pictures/female/1.jfif",
            gender: "f",
            listGenders: ["m"],
            listInterests: ["PETS", "GYM", "SPORTS"],
            listTurnOns: ["MUSIC", "MOVIES",],
            listTurnOffs: ["BOOKS", "GAMES",],
            longDistance: true,
            listPrefLoc: ["LESKOVAC", "NIS", "ALEKSINAC", "NOVI SAD"],
            location: "LESKOVAC"
        },

        { 
            username: "nenad.pav", 
            fullName: "Nenad Pavlovic",
            dob: "11.12.1998.",
            aboutMe: "Zdravo ja sam Nenad",
            profilePic: "pictures/profile-pictures/male/1.jfif",
            gender: "m",
            listGenders: ["m"],
            listInterests: ["PHOTOGRAPHY", "RELIGION", "SPORTS"],
            listTurnOns: ["GYM", "SPORTS"],
            listTurnOffs: ["SOCIAL MEDIA", "PETS"],
            longDistance: false,
            listPrefLoc: ["LESKOVAC"],
            location: "LESKOVAC"
        },

        { 
            username: "dar.milj", 
            fullName: "Darja Miljkovic",
            dob: "01.11.1996.",
            aboutMe: "Zdravo ja sam Darja",
            profilePic: "pictures/profile-pictures/female/2.jfif",
            gender: "f",
            listGenders: ["m", "f"],
            listInterests: ["ART", "PETS", "BOOKS"],
            listTurnOns: ["FASHION", "PHOTOGRAPHY"],
            listTurnOffs: ["RELIGION", "GAMES"],
            longDistance: true,
            listPrefLoc: ["NOVI SAD", "NIS", "KRALJEVO", "KRAGUJEVAC"],
            location: "NOVI SAD"
        },

        { 
            username: "mar.per", 
            fullName: "Marko Peric",
            dob: "14.10.1999.",
            aboutMe: "Zdravo ja sam Marko",
            profilePic: "pictures/profile-pictures/male/2.jfif",
            gender: "m",
            listGenders: ["m", "o"],
            listInterests: ["SPORTS", "GYM", "BOOKS"],
            listTurnOns: ["FASHION", "PHOTOGRAPHY"],
            listTurnOffs: ["SOCIAL MEDIA", "GAMES"],
            longDistance: true,
            listPrefLoc: ["BEOGRAD", "NIS", "NOVI SAD", "ALEKSINAC"],
            location: "BEOGRAD"
        },

        { 
            username: "nenad.jovanovic", 
            fullName: "Nenad Jovanovic",
            dob: "27.09.1998.",
            aboutMe: "Zdravo ja sam Nenad",
            profilePic: "pictures/profile-pictures/male/3.jfif",
            gender: "m",
            listGenders: ["f"],
            listInterests: ["RELIGION", "PETS", "GYM"],
            listTurnOns: ["MUSIC", "MOVIES"],
            listTurnOffs: ["ANIME", "MANGA"],
            longDistance: false,
            listPrefLoc: ["BEOGRAD"],
            location: "BEOGRAD"
        },

        { 
            username: "mi.ljana",
            fullName: "Miljana Jovic", 
            dob: "24.08.1998.",
            aboutMe: "Zdravo ja sam Miljana",
            profilePic: "pictures/profile-pictures/female/3.jfif",
            gender: "f",
            listGenders: ["m", "f", "o"],
            listInterests: ["MANGA", "ANIME", "PETS"],
            listTurnOns: ["RELIGION", "GAMES"],
            listTurnOffs: ["MUSIC", "BOOKS"],
            longDistance: false,
            listPrefLoc: ["NIS"],
            location: "NIS"
        },

        { 
            username: "dan.pes", 
            fullName: "Danijela Pesic",
            dob: "24.11.1998.",
            aboutMe: "Zdravo ja sam Danijela",
            profilePic: "pictures/profile-pictures/female/4.jfif",
            gender: "f",
            listGenders: ["m", "f"],
            listInterests: ["GAMES", "STREAMING", "SOCIAL MEDIA"],
            listTurnOns: ["PETS", "MANGA"],
            listTurnOffs: ["RELIGION", "SPORTS"],
            longDistance: false,
            listPrefLoc: ["NOVI SAD"],
            location: "NOVI SAD"
        }, 

        { 
            username: "darko.marinko", 
            fullName: "Darko Marinkovic",
            dob: "08.01.1997.",
            aboutMe: "Zdravo ja sam Darko",
            profilePic: "pictures/profile-pictures/male/4.jfif",
            gender: "m",
            listGenders: ["m", "f"],
            listInterests: ["GYM", "GAMES", "MUSIC"],
            listTurnOns: ["TV SHOWS", "ANIME"],
            listTurnOffs: ["RELIGION", "BOOKS"],
            longDistance: true,
            listPrefLoc: ["NIS", "BEOGRAD", "KRALJEVO", "KRAGUJEVAC"],
            location: "NIS"
        },

        { 
            username: "masa.tasic", 
            fullName: "Masa Tasic",
            dob: "12.11.1999.",
            aboutMe: "Zdravo ja sam Masa",
            profilePic: "pictures/profile-pictures/female/5.jfif",
            gender: "f",
            listGenders: ["m", "f"],
            listInterests: ["BOOKS", "PETS", "SOCIAL MEDIA"],
            listTurnOns: ["ART", "PHOTOGRAPHY"],
            listTurnOffs: ["FASHION", "STREAMING"],
            longDistance: true,
            listPrefLoc: ["NIS", "LESKOVAC", "KRALJEVO", "NOVI SAD"],
            location: "NIS"
        },

        { 
            username: "velj.ko", 
            fullName: "Veljko Vilotic",
            dob: "16.12.1998.",
            aboutMe: "Zdravo ja sam Veljko",
            profilePic: "pictures/profile-pictures/male/5.jfif",
            gender: "m",
            listGenders: ["o", "f"],
            listInterests: ["STREAMING", "GAMES", "PETS"],
            listTurnOns: ["MUSIC", "ART"],
            listTurnOffs: ["SPORTS", "BOOKS"],
            longDistance: true,
            listPrefLoc: ["LESKOVAC", "NIS", "NOVI SAD", "BEOGRAD"],
            location: "LESKOVAC"
        },

        { 
            username: "mir.jana", 
            fullName: "Mirjana Danilovic",
            dob: "13.02.1999.",
            aboutMe: "Zdravo ja sam Mirjana",
            profilePic: "pictures/profile-pictures/female/6.jfif",
            gender: "f",
            listGenders: ["m", "o"],
            listInterests: ["ART", "MANGA", "BOOKS"],
            listTurnOns: ["TV SHOWS", "GAMES"],
            listTurnOffs: ["PHOTOGRAPHY", "FASHION"],
            longDistance: false,
            listPrefLoc: ["LESKOVAC"],
            location: "LESKOVAC"
        },

        { 
            username: "jana.velj", 
            fullName: "Jana Veljkovic",
            dob: "31.08.1999.",
            aboutMe: "Zdravo ja sam Jana",
            profilePic: "pictures/profile-pictures/female/7.jfif",
            gender: "f",
            listGenders: ["o"],
            listInterests: ["FASHION", "STREAMING", "SOCIAL MEDIA"],
            listTurnOns: ["MUSIC", "TV SHOWS"],
            listTurnOffs: ["BOOKS", "PETS"],
            longDistance: true,
            listPrefLoc: ["ALEKSINAC", "NIS", "KRALJEVO", "LESKOVAC"],
            location: "ALEKSINAC"
        },

        { 
            username: "andja.djo", 
            fullName: "Andjelija Djordjevic",
            dob: "20.06.1998.",
            aboutMe: "Zdravo ja sam Andjelija",
            profilePic: "pictures/profile-pictures/female/8.jfif",
            gender: "f",
            listGenders: ["f"],
            listInterests: ["TV SHOWS", "GAMES", "RELIGION"],
            listTurnOns: ["PETS", "GYM"],
            listTurnOffs: ["SOCIAL MEDIA", "PHOTOGRAPHY"],
            longDistance: true,
            listPrefLoc: ["ALEKSINAC", "NIS", "KRALJEVO", "LESKOVAC"],
            location: "ALEKSINAC"
        },

        { 
            username: "mi.ljan", 
            fullName: "Miljan Denic",
            dob: "21.07.1996.",
            aboutMe: "Zdravo ja sam Miljan",
            profilePic: "pictures/profile-pictures/male/6.jfif",
            gender: "m",
            listGenders: ["m"],
            listInterests: ["PHOTOGRAPHY", "FASHION", "SOCIAL MEDIA"],
            listTurnOns: ["PETS", "SPORTS"],
            listTurnOffs: ["GAMES", "STREAMING"],
            longDistance: true,
            listPrefLoc: ["KRALJEVO", "NIS", "KRAGUJEVAC", "LESKOVAC"],
            location: "KRALJEVO"
        },

        { 
            username: "maja.din", 
            fullName: "Maja Dinic",
            dob: "25.03.1997.",
            aboutMe: "Zdravo ja sam Maja",
            profilePic: "pictures/profile-pictures/female/9.jfif",
            gender: "f",
            listGenders: ["m", "f"],
            listInterests: ["STREAMING", "MANGA", "PETS"],
            listTurnOns: ["BOOKS", "GYM"],
            listTurnOffs: ["TV SHOWS", "MUSIC"],
            longDistance: true,
            listPrefLoc: ["NOVI SAD", "NIS", "KRAGUJEVAC", "BEOGRAD", "PROKUPLJE"],
            location: "NOVI SAD"
        },

        { 
            username: "pre.spas", 
            fullName: "Predrag Spasov",
            dob: "11.10.1997.",
            aboutMe: "Zdravo ja sam Predrag",
            profilePic: "pictures/profile-pictures/male/7.jfif",
            gender: "m",
            listGenders: ["o", "m"],
            listInterests: ["MUSIC", "ART", "PHOTOGRAPHY"],
            listTurnOns: ["GYM", "SPORTS"],
            listTurnOffs: ["GAMES", "ANIME"],
            longDistance: false,
            listPrefLoc: ["PROKUPLJE"],
            location: "PROKUPLJE"
        },

        { 
            username: "mar.ta", 
            fullName: "Marta Milojkovic",
            dob: "23.04.1998.",
            aboutMe: "Zdravo ja sam Marta",
            profilePic: "pictures/profile-pictures/female/10.jfif",
            gender: "f",
            listGenders: ["m"],
            listInterests: ["MOVIES", "TV SHOWS", "PETS"],
            listTurnOns: ["SPORTS", "MANGA"],
            listTurnOffs: ["SOCIAL MEDIA", "ART"],
            longDistance: true,
            listPrefLoc: ["KRAGUJEVAC", "BEOGRAD", "SMEDEREVO"],
            location: "KRAGUJEVAC"
        },

        { 
            username: "aleks.dim", 
            fullName: "Aleksandar Dimic",
            dob: "13.02.1999.",
            aboutMe: "Zdravo ja sam Aleksandar",
            profilePic: "pictures/profile-pictures/male/8.jfif",
            gender: "m",
            listGenders: ["f"],
            listInterests: ["ART", "FASHION", "TV SHOWS"],
            listTurnOns: ["MOVIES", "RELIGION"],
            listTurnOffs: ["PETS", "MANGA"],
            longDistance: true,
            listPrefLoc: ["KRALJEVO", "SMEDEREVO", "BEOGRAD", "PROKUPLJE"],
            location: "KRALJEVO"
        },

        { 
            username: "andj.dimi", 
            fullName: "Andjela Dimitrijevic",
            dob: "17.05.1996.",
            aboutMe: "Zdravo ja sam Andjela",
            profilePic: "pictures/profile-pictures/female/11.jfif",
            gender: "f",
            listGenders: ["m", "f"],
            listInterests: ["MANGA", "MOVIES", "MUSIC"],
            listTurnOns: ["ANIME", "PETS"],
            listTurnOffs: ["SOCIAL MEDIA", "STREAMING"],
            longDistance: true,
            listPrefLoc: ["KRALJEVO", "SMEDEREVO"],
            location: "KRALJEVO"
        },

        { 
            username: "ne.manja", 
            fullName: "Nemanja Jovicic",
            dob: "06.11.1998.",
            aboutMe: "Zdravo ja sam Nemanja",
            profilePic: "pictures/profile-pictures/male/9.jfif",
            gender: "m",
            listGenders: ["f", "o"],
            listInterests: ["STREAMING", "FASHION", "ANIME"],
            listTurnOns: ["MOVIES", "MUSIC"],
            listTurnOffs: ["RELIGION", "GAMES"],
            longDistance: true,
            listPrefLoc: ["SMEDEREVO", "KRALJEVO", "BEOGRAD", "PROKUPLJE"],
            location: "SMEDEREVO"
        },

        { 
            username: "ste.fanper",
            fullName: "Stefan Peric",  
            dob: "19.07.1996.",
            aboutMe: "Zdravo ja sam Stefan",
            profilePic: "pictures/profile-pictures/male/10.jfif",
            gender: "m",
            listGenders: ["m", "f"],
            listInterests: ["GAMES", "SPORTS", "RELIGION"],
            listTurnOns: ["BOOKS", "STREAMING"],
            listTurnOffs: ["GYM", "PHOTOGRAPHY"],
            longDistance: true,
            listPrefLoc: ["SMEDEREVO", "BEOGRAD", "PROKUPLJE"],
            location: "SMEDEREVO"
        },

        { 
            username: "dusan.stef", 
            fullName: "Dusan Stefanovic",
            dob: "22.11.1997.",
            aboutMe: "Zdravo ja sam Dusan",
            profilePic: "pictures/profile-pictures/male/11.jfif",
            gender: "m",
            listGenders: ["f"],
            listInterests: ["BOOKS", "MUSIC", "PETS"],
            listTurnOns: ["GAMES", "SPORTS"],
            listTurnOffs: ["RELIGION", "ANIME"],
            longDistance: true,
            listPrefLoc: ["PROKUPLJE", "BEOGRAD", "SMEDEREVO"],
            location: "PROKUPLJE"
        }
    ]
)
        
//INDEXI:
db.getCollection('users_visit_profile_view').createIndex(
  {
      "username": 1
  },
  {
      name: "idx_username",
      unique: false
  }
) 
