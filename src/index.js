import fetch from 'node-fetch'

async function fetchData() {
  const test = await fetch("https://www.facebook.com/api/graphql/", {
    headers: {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-fb-friendly-name": "CometMarketplaceSearchContentPaginationQuery",
      "x-fb-lsd": "AVrfJtUTz8E"
    },
    "referrer": "https://www.facebook.com/marketplace/112814965397885/search/?query=vinyl%20records",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "av=0&__user=0&__a=1&__dyn=7xeUmwlE7ibwKBWo2vwAxu13wvoKewSwMwNw9G2S0im3y4o0B-q1ew65xO0FE21y87i0n2US2G2Caw9m8wsU9k2C1Fwc61uwPyo5m1mxe6E28xe2GewFwg8co88brwKxm5o2eUlwhE2FBwxw4HwJwSyES1hwbi&__csr=gXbHtkLlN5Wp4jj4bSOAZHQQCV5G4qVQnGEGFUyWjhEW9zuu5aXypovAKdJqx25Gy8c9o9EvhoG4-WDwMxqcy8ox95ypFE4WU9oO-1gw9t00Aaw0a0O0kC08uw48G4U0D208nwBG05vUaE0qdw1fy0kF0gE2Pw14mvw23o0ezE0ivEUtwTwci0Zox8igw-4U4h1y5E&__req=u&__hs=18889.HYP%3Acomet_loggedout_pkg.2.0.0.0.1&dpr=1&__ccg=GOOD&__rev=1004419631&__s=hvl3ih%3Avdgznc%3Ak38rti&__hsi=7009637240416074622-0&__comet_req=1&lsd=AVrfJtUTz8E&jazoest=2973&__spin_r=1004419631&__spin_b=trunk&__spin_t=1632058350&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentPaginationQuery&variables=%7B%22count%22%3A24%2C%22cursor%22%3A%22%7B%5C%22pg%5C%22%3A0%2C%5C%22b2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22%5C%22%2C%5C%22it%5C%22%3A0%2C%5C%22hmsr%5C%22%3Afalse%2C%5C%22tbi%5C%22%3A0%7D%2C%5C%22c2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22Abp7gKli9_lCpE7i9dhUv0PEbOPE3KqMmoQ4O30TlGVfy1FDXXyabqo16ozpjZBtTOq8bmMvHYEYwFparrRXXiijNCRRQw597PFsByNf-cm0RmK7qWDZr_gciquYRi8WK-B7md06SJgiY1ccWo22KUetm-O-QSZEwskpTOpMgAc_aW8jQXejMJqtFfAGD5nzDTLkiR_GSoKCcvSso7GlCgZbIyKXl1ng9KWT900N42NtOG7a_pr9-1p9tsEuJqhzyBxwRvANLJYPVWDT95mzGznvfYIFRP5j5rGVL02TZYxT2qOSk8cKnsay7njR437lLKk9MqxgIqYU65LKpi88SJz3TC9U10ET1EP3nPOuhl803xxD44BzjBIKFkHjM3Ok1twysOqNAavPeBRM09ZSxkSXM4sYM4aJhEva3o_JWT4k1Y5XIM99oQ1XmMILXOrMIxKhnpWCXFKdSnpHVF2msXfesQ5A772D7ZrURjN4uSp5PNHadp2V2cUqVbFlwCQ22prh8712MpNaGRrW3-o85V1JAVNTstwQh4RYu5lIsmhPiDbymX-IqJzV2QlyhoH93nM%5C%22%2C%5C%22it%5C%22%3A24%2C%5C%22rpbr%5C%22%3A%5C%22%5C%22%2C%5C%22rphr%5C%22%3Afalse%7D%2C%5C%22irr%5C%22%3Afalse%2C%5C%22rui%5C%22%3A%5B%5D%7D%22%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22vinyl%20records%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A39.559020996094%2C%22filter_location_longitude%22%3A-79.348754882812%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A65%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22prefetchMarketplaceSearchImages%22%3Afalse%2C%22scale%22%3A1%7D&server_timestamps=true&doc_id=4578964282166780",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })

  const data = await test.json()

  console.log(data.data.marketplace_search.feed_units.edges);
}

fetchData()