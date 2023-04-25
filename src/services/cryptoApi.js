const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'ff57ac75cfmsh9a5dd881333ac19p13f491jsn37413c4c676b',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  