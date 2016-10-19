# Asistentul Cetățeanului ![Travis build](https://travis-ci.org/gov-ithub/asistentul_cetateanului_frontend.svg?branch=master)

Asistent utilitar care livrează alerte și notificări pentru cetățeni, în funcție de preferințe. La bază este un notification engine, cu un API care oferă posibilitatea de livrare de alerte din partea diverselor agenții / instituții ale statului. Aceste notificări se împart în cele cu caracter general (care sunt de interes pentru mai mulți cetățeni, cum ar fi alertele meteo) sau cu caracter personal (care sunt de interes pentru un singur cetățean, cum ar fi cele legate de expirarea documentelor).

## Requirements 
- [Docker](https://docs.docker.com/engine/installation/)

## Instalare

```
$> git clone https://github.com/gov-ithub/asistentul_cetateanului_frontend.git
$> cd asistentul_cetateanului_frontend
$> docker build -t asistentul_cetateanului .
$> docker run -d -p 80:3000 --name asistentul_cetateanului_inst asistentul_cetateanului
$> // Aplicatia va rula pe localhost, portul nu trebuie specificat (80)
```

Pentru a opri containerul:
```
$> docker ps // vezi running containers, copiaza hash pentru Asistentul Cetateanului
$> docker stop _HASH_
```

## Contribuie

Dacă vrei să contribui - ești binevenit(ă) - but we don't have cookies (yet) 

### Proces

- Dacă nu ești încă înscris(ă) în comunitate, te rog fă-o pe [site-ul GovITHub](http://ithub.gov.ro/formular-de-aplicatie/)
- Aruncă o privire la [guidelines](https://github.com/gov-ithub/guidelines/blob/master/CODE_REVIEW.md) pentru code review 
- Caută în issues un task interesant pentru tine (sau, dacă ai o propunere, deschide un issue / trimite un pull request)
- După ce trecem prin code review - celebrate! :star: :star2: :star:

### Pro tips

#### Testing
Rulează `npm test`. `npm test` rulează doar testele nou introduse, însă vă permite rularea tuturor testelor (you`ll know what to do when you see it). 

Ca și framework folosim [Jest](https://facebook.github.io/jest/). [Documentație mai completă >>](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

#### Pull Request cheat-sheet
- Ai un summary complet? Trebuie să fie clar: ce schimbare aduce diff-ul, cum ai testat, și în cazuri unde se fac schimbări majore, dacă e cazul, avem un revert plan?
- Ai scris teste pentru codul nou adăugat/modificat? 
- Ai făcut un self review pe propriul diff urmărind [guidelines](https://github.com/gov-ithub/guidelines/blob/master/CODE_REVIEW.md)?

Dacă răspunsul e "da" pentru toate 3, procesul de code review ar trebui să fie destul de painless, nice work.

#### Pull Requests > Issues
Preferă pull request-uri peste issues unde e posibil, pull request-urile sunt primite cu brațele deschise oricând.  

## Cum poti intra in contact cu echipa?
- Email: claudiu.ceia@ithub.gov.ro
- [Slack](https://govithub.slack.com/messages/asist_cetatean/details/) 


Mai multe detalii în curând! 
