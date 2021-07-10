# scf-apollo-skeleton
- http://localhost:8080/rest/ (health check for now)
- http://localhost:8080/graphql/

phase 1 completed
- `$ npm run dev`
- go to https://studio.apollographql.com/sandbox
- enter query 
```
# We'll cover more about the structure of a query later in the tutorial.
query GetLaunches {
  launches {
    id
    mission {
      name
    }
  }
}
```

get these results
```
{
  "data": {
    "launches": [
      {
        "id": "1",
        "mission": {
          "name": "FalconSat"
        }
      },
      {
        "id": "2",
        "mission": {
          "name": "DemoSat"
        }
      },
      {
        "id": "3",
        "mission": {
          "name": "Trailblazer"
        }
      },
      {
        "id": "4",
        "mission": {
          "name": "RatSat"
        }
      },
      {
        "id": "5",
        "mission": {
          "name": "RazakSat"
        }
      },
      {
        "id": "6",
        "mission": {
          "name": "Falcon 9 Test Flight"
        }
      },
      {
        "id": "7",
        "mission": {
          "name": "COTS 1"
        }
      },
      {
        "id": "8",
        "mission": {
          "name": "COTS 2"
        }
      },
      {
        "id": "9",
        "mission": {
          "name": "CRS-1"
        }
      },
      {
        "id": "10",
        "mission": {
          "name": "CRS-2"
        }
      },
      {
        "id": "11",
        "mission": {
          "name": "CASSIOPE"
        }
      },
      {
        "id": "12",
        "mission": {
          "name": "SES-8"
        }
      },
      {
        "id": "13",
        "mission": {
          "name": "Thaicom 6"
        }
      },
      {
        "id": "14",
        "mission": {
          "name": "CRS-3"
        }
      },
      {
        "id": "15",
        "mission": {
          "name": "OG-2 Mission 1"
        }
      },
      {
        "id": "16",
        "mission": {
          "name": "AsiaSat 8"
        }
      },
      {
        "id": "17",
        "mission": {
          "name": "AsiaSat 6"
        }
      },
      {
        "id": "18",
        "mission": {
          "name": "CRS-4"
        }
      },
      {
        "id": "19",
        "mission": {
          "name": "CRS-5"
        }
      },
      {
        "id": "20",
        "mission": {
          "name": "DSCOVR"
        }
      },
      {
        "id": "21",
        "mission": {
          "name": "ABS-3A / Eutelsat 115W B"
        }
      },
      {
        "id": "22",
        "mission": {
          "name": "CRS-6"
        }
      },
      {
        "id": "23",
        "mission": {
          "name": "TürkmenÄlem 52°E / MonacoSAT"
        }
      },
      {
        "id": "24",
        "mission": {
          "name": "CRS-7"
        }
      },
      {
        "id": "25",
        "mission": {
          "name": "OG-2 Mission 2"
        }
      },
      {
        "id": "26",
        "mission": {
          "name": "Jason 3"
        }
      },
      {
        "id": "27",
        "mission": {
          "name": "SES-9"
        }
      },
      {
        "id": "28",
        "mission": {
          "name": "CRS-8"
        }
      },
      {
        "id": "29",
        "mission": {
          "name": "JCSAT-2B"
        }
      },
      {
        "id": "30",
        "mission": {
          "name": "Thaicom 8"
        }
      },
      {
        "id": "31",
        "mission": {
          "name": "ABS-2A / Eutelsat 117W B"
        }
      },
      {
        "id": "32",
        "mission": {
          "name": "CRS-9"
        }
      },
      {
        "id": "33",
        "mission": {
          "name": "JCSAT-16"
        }
      },
      {
        "id": "34",
        "mission": {
          "name": "Amos-6"
        }
      },
      {
        "id": "35",
        "mission": {
          "name": "Iridium NEXT Mission 1"
        }
      },
      {
        "id": "36",
        "mission": {
          "name": "CRS-10"
        }
      },
      {
        "id": "37",
        "mission": {
          "name": "EchoStar 23"
        }
      },
      {
        "id": "38",
        "mission": {
          "name": "SES-10"
        }
      },
      {
        "id": "39",
        "mission": {
          "name": "NROL-76"
        }
      },
      {
        "id": "40",
        "mission": {
          "name": "Inmarsat-5 F4"
        }
      },
      {
        "id": "41",
        "mission": {
          "name": "CRS-11"
        }
      },
      {
        "id": "42",
        "mission": {
          "name": "BulgariaSat-1"
        }
      },
      {
        "id": "43",
        "mission": {
          "name": "Iridium NEXT Mission 2"
        }
      },
      {
        "id": "44",
        "mission": {
          "name": "Intelsat 35e"
        }
      },
      {
        "id": "45",
        "mission": {
          "name": "CRS-12"
        }
      },
      {
        "id": "46",
        "mission": {
          "name": "FormoSat-5"
        }
      },
      {
        "id": "47",
        "mission": {
          "name": "Boeing X-37B OTV-5"
        }
      },
      {
        "id": "48",
        "mission": {
          "name": "Iridium NEXT Mission 3"
        }
      },
      {
        "id": "49",
        "mission": {
          "name": "SES-11 / Echostar 105"
        }
      },
      {
        "id": "50",
        "mission": {
          "name": "KoreaSat 5A"
        }
      },
      {
        "id": "51",
        "mission": {
          "name": "CRS-13"
        }
      },
      {
        "id": "52",
        "mission": {
          "name": "Iridium NEXT Mission 4"
        }
      },
      {
        "id": "53",
        "mission": {
          "name": "ZUMA"
        }
      },
      {
        "id": "54",
        "mission": {
          "name": "SES-16 / GovSat-1"
        }
      },
      {
        "id": "55",
        "mission": {
          "name": "Falcon Heavy Test Flight"
        }
      },
      {
        "id": "56",
        "mission": {
          "name": "Paz / Starlink Demo"
        }
      },
      {
        "id": "57",
        "mission": {
          "name": "Hispasat 30W-6"
        }
      },
      {
        "id": "58",
        "mission": {
          "name": "Iridium NEXT Mission 5"
        }
      },
      {
        "id": "59",
        "mission": {
          "name": "CRS-14"
        }
      },
      {
        "id": "60",
        "mission": {
          "name": "TESS"
        }
      },
      {
        "id": "61",
        "mission": {
          "name": "Bangabandhu-1"
        }
      },
      {
        "id": "62",
        "mission": {
          "name": "Iridium NEXT Mission 6"
        }
      },
      {
        "id": "63",
        "mission": {
          "name": "SES-12"
        }
      },
      {
        "id": "64",
        "mission": {
          "name": "CRS-15"
        }
      },
      {
        "id": "65",
        "mission": {
          "name": "Telstar 19V"
        }
      },
      {
        "id": "66",
        "mission": {
          "name": "Iridium NEXT Mission 7"
        }
      },
      {
        "id": "67",
        "mission": {
          "name": "Merah Putih"
        }
      },
      {
        "id": "68",
        "mission": {
          "name": "Telstar 18V"
        }
      },
      {
        "id": "69",
        "mission": {
          "name": "SAOCOM 1A"
        }
      },
      {
        "id": "70",
        "mission": {
          "name": "Es’hail 2"
        }
      },
      {
        "id": "71",
        "mission": {
          "name": "SSO-A"
        }
      },
      {
        "id": "72",
        "mission": {
          "name": "CRS-16"
        }
      },
      {
        "id": "73",
        "mission": {
          "name": "GPS III SV01"
        }
      },
      {
        "id": "74",
        "mission": {
          "name": "Iridium NEXT Mission 8"
        }
      },
      {
        "id": "75",
        "mission": {
          "name": "Nusantara Satu (PSN-6) / S5 / Beresheet"
        }
      },
      {
        "id": "76",
        "mission": {
          "name": "CCtCap Demo Mission 1"
        }
      },
      {
        "id": "77",
        "mission": {
          "name": "ArabSat 6A"
        }
      },
      {
        "id": "78",
        "mission": {
          "name": "CRS-17"
        }
      },
      {
        "id": "79",
        "mission": {
          "name": "Starlink v0.9"
        }
      },
      {
        "id": "80",
        "mission": {
          "name": "RADARSAT Constellation"
        }
      },
      {
        "id": "81",
        "mission": {
          "name": "STP-2"
        }
      },
      {
        "id": "82",
        "mission": {
          "name": "CRS-18"
        }
      },
      {
        "id": "83",
        "mission": {
          "name": "Amos-17"
        }
      },
      {
        "id": "84",
        "mission": {
          "name": "Starlink 1"
        }
      },
      {
        "id": "85",
        "mission": {
          "name": "CRS-19"
        }
      },
      {
        "id": "86",
        "mission": {
          "name": "JCSat 18 / Kacific 1"
        }
      },
      {
        "id": "87",
        "mission": {
          "name": "Starlink 2"
        }
      },
      {
        "id": "88",
        "mission": {
          "name": "Crew Dragon In Flight Abort Test"
        }
      },
      {
        "id": "89",
        "mission": {
          "name": "Starlink 3"
        }
      },
      {
        "id": "90",
        "mission": {
          "name": "Starlink 4"
        }
      },
      {
        "id": "91",
        "mission": {
          "name": "CRS-20"
        }
      },
      {
        "id": "92",
        "mission": {
          "name": "Starlink 5"
        }
      },
      {
        "id": "93",
        "mission": {
          "name": "Starlink 6"
        }
      },
      {
        "id": "94",
        "mission": {
          "name": "CCtCap Demo Mission 2"
        }
      },
      {
        "id": "95",
        "mission": {
          "name": "Starlink 7"
        }
      },
      {
        "id": "96",
        "mission": {
          "name": "Starlink-8 & SkySat 16-18"
        }
      },
      {
        "id": "97",
        "mission": {
          "name": "GPS III SV03 (Columbus)"
        }
      },
      {
        "id": "98",
        "mission": {
          "name": "ANASIS-II"
        }
      },
      {
        "id": "99",
        "mission": {
          "name": "Starlink-9 (v1.0) & BlackSky Global 5-6"
        }
      },
      {
        "id": "100",
        "mission": {
          "name": "Starlink-10 (v1.0) & SkySat 19-21"
        }
      },
      {
        "id": "101",
        "mission": {
          "name": "SAOCOM 1B, GNOMES-1, Tyvak-0172"
        }
      },
      {
        "id": "102",
        "mission": {
          "name": "Starlink-11 (v1.0)"
        }
      },
      {
        "id": "103",
        "mission": {
          "name": "Starlink-12 (v1.0)"
        }
      },
      {
        "id": "104",
        "mission": {
          "name": "Starlink-13 (v1.0)"
        }
      },
      {
        "id": "105",
        "mission": {
          "name": "Starlink-14 (v1.0)"
        }
      },
      {
        "id": "106",
        "mission": {
          "name": "GPS III SV04 (Sacagawea)"
        }
      },
      {
        "id": "107",
        "mission": {
          "name": "Crew-1"
        }
      },
      {
        "id": "108",
        "mission": {
          "name": "Sentinel-6 Michael Freilich"
        }
      },
      {
        "id": "109",
        "mission": {
          "name": "Starlink-15 (v1.0)"
        }
      }
    ]
  }
}
```