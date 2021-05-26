addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  // COVID happened
  const openings = [];
  const message = "COVID happened, members-only until further notice."
  /*
  const openings = [
    null, // sunday
    null, // monday
    null, // tuesday
    [ // thursday
      {
        from: 17.5,
        to: 22,
      }
    ],
    null, // friday
    [ // saturday
      {
        from: 13,
        to: 18,
      }
    ]
  ]
  */
  const formatter = new Intl.DateTimeFormat([], {
    timeZone: 'Europe/Brussels',
    dateStyle: 'medium',
    timeStyle: 'medium'
  })
  formatter.format(new Date())

  const now = new Date(formatter.format(new Date()))
  const nowHour = now.getHours() + (now.getMinutes() / 60)
  let open = false

  const hours = openings[now.getDay()]
  if (hours) {
    for (const hour of hours) {
      if (nowHour > hour.from && nowHour < hour.to) {
        open = true
        break
      }
    }
  }

  const response = {
    api: "0.13",
    space: "Liège HackerSpace",
    logo: "https://lghs.be/favicon-194x194.png",
    url: "https://lghs.be/",
    address: "Quai de la Dérivation 54, 4020 Liège BELGIUM",
    location: {
      lon: 5.59001,
      lat: 50.64189
    },
    state: {
      open,
      message
    },
    contact: {
      email: "ping@lghs.be",
      twitter: "@LgHackerSpace",
      issue_mail: "infra@lghs.be",
      phone: "+32 4 287 32 26"
    },
    issue_report_channels: [
      "issue_mail"
    ],
    projects: [
      "https://wiki.liegehacker.space/",
      "https://github.com/LgHS",
    ],
  }
  return new Response(JSON.stringify(response, null, 1), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
