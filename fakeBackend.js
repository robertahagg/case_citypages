function searchBackend(searchTerm) {
  if (searchTerm.toUpperCase() === 'Stockholm'.toUpperCase()) {
    return {
      cityName: 'Stockholm',
      blueBox: {
        order: 1,
        title: 'Nordens största stad',
        body:
          'Stockholm är Sveriges huvudstad samt landets kulturella, politiska, mediala och ekonomiska centrum. Det är Sveriges såväl som Nordens folkrikaste tätort.'
      },
      whiteBoxSmall: {
        order: 2,
        title: 'Världsarv',
        body:
          'Tre av Unescos världsarv ligger i Stockholmsområdet: Drottningsholms slott och Birka (båda i Ekerö kommun), samt Skogskyrkogården (Stockholms kommun).'
      },
      whiteBoxBig: {
        order: 3,
        title: 'Gamla stan - Staden mellan broarna',
        body:
          'Under flera hundra år utgjorde Gamla stan den egentliga staden. Stadsdelen bildades 1926 och hade år 2006 ca 3 000 invånare. På Gamla stans norra spets återfinns Stockholms slott.',
        img: 'assets/stockholm.jpg'
      }
    };
  } else if (searchTerm.toUpperCase() === 'London'.toUpperCase()) {
    return {
      cityName: 'London',
      blueBox: {
        order: 3,
        title: 'Finansiellt centrum',
        body:
          'London är ett av världens största finansiella centra inom internationella affärer och internationell handel. Tillsammans med New York ses London som det viktigaste finanscentrat i världen.'
      },
      whiteBoxSmall: {
        order: 2,
        title: 'City of London',
        body:
          'City of London är Londons historiska centrum och är en egen stad inom Storlondon, med speciella rättigheter som Storlondons 32 kommuner (boroughs) inte åtnjuter.'
      },
      whiteBoxBig: {
        order: 1,
        title: 'Hamnstaden vid Themsen',
        body:
          'London är huvudstaden i Storbritannien. Staden grundades under namnet Londinium som huvudstad i den romerska provinsen Britannia, för vilken den också utgjorde hamnstad vid floden Themsen. ',
        img: 'assets/london.jpg'
      }
    };
  }
}
